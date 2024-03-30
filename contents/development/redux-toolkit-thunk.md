---
date: '2024-03-30'
title: 'Redux Toolkit Thunk'
categories: ['개발']
summary: 'Redux에서 비동기 작업을 처리하는 createAsyncThunk 함수를 써보자.'
thumbnail: './redux-toolkit-thunk.png'
---

> Redux toolkit thunk는 비동기적인 작업을 Redux로 처리할 때 어떻게 하면 좋을지 고민하며 만들어진 도구이다.

### 들어가며

이전 프로젝트를 리팩토링하면서 전역 상태 관리 도구로 Redux Toolkit(이하 RTK) 사용했다. 초기 코드에도 RTK를 썼지만, 단순히 초기 상태를 정의하고, 액션 생성자를 자동으로 생성한 것으로만 상태를 업데이트해왔다.

등록한 상태들은 유저 데이터, 냉장고 재료 데이터로, 둘 다 서버에서 호출해서 가져오는 데이터를 전역 상태로 사용해야했다.

마침 [3월 원티드 프리온보딩](https://www.wanted.co.kr/events/pre_challenge_fe_19)의 주제 중 상태 관리와 RTK 기능을 알아보는 것이 있어서 강의를 듣고 바로 적용해보기로 했다.

---

## 우선 Redux는 이렇다.

Flux 아키텍처의 구현체이자 데이터간의 의존성 이슈, 즉 연쇄적인 업데이트 데이터의 흐름을 예측할 수 없게 만들었던 문제를 해결하기 위해서 만들어진 도구

- **전역** 상태를 포함하는 단일 스토어
- 앱에 어떤 일이 일어날 때 스토어에 일반 객체 액션을 디스패치하는 것
- 액션을 살펴보고 불변성을 유지한 채 업데이트된 상태를 반환하는 순수 리듀서 함수

**Redux의 문제점**

1. 스토어 환경 설정이 복잡하다.
2. Redux를 유용하게 쓰려면 많은 패키지를 추가해야 한다.
3. 보일러플레이트(어떤 일을 하기 위한 상용구 코드)를 너무 많이 요구한다.

> 이러한 이슈를 해결하기 위해 **RTK**이 등장했다. Redux를 더 쉽게 사용하기 위한 키트인 셈이다.

---

## createAsyncThunk

> RTK에는 내부적으로 thunk를 내장하고 있어서, 다른 미들웨어를 사용하지 않고도 비동기 처리를 할 수 있다.

- thunk(특정 작업을 나중에 할 수 있도록 Redux Store와 상호작용을 하는 함수)
- 비동기 처리 시 사용
- 액션 타입 문자열과 프로미스를 반환하는 함수를 받아 프로미스 생명주기를 따르는 액션 타입 `pending`, `fulfilled`, `rejected`을 디스패치해주는 thunk를 생성
- 3가지 파라미터
  1. type: 액션 타입으로 문자열이 들어감. 이 값을 기반으로 `pending` 등 타입이 생성되어 reducer가 생성됨
  2. payloadCreator: 콜백함수, 프로미스를 반환하는 비동기 함수
  3. options 객체

즉, **createAsyncThunk** 함수를 통해 비동기 작업을 처리하는 action을 만들어준다.

---

## extraReducers

- reducer에서 끝내지 못한 일들을 할 수 있게 하는 함수
- slice reducers에 맵핑된 액션 함수가 아니라 외부의 액션을 참조하기 위해
  사용됨
- 일반적으로 thunk를 핸들링 할 때 사용해서 addCase로 api call한 것을 분기처리를 해줄 수 있음

> 동기적인 액션은 reducers를 사용하고, 비동기적인 extraReducers를 사용하는데  
> reducers는 action creator를 자동으로 만들어준다.

---

## 코드 비교

- **기존 코드**

```jsx
// login form
const response = await POST('/login', { email, password });
if (!response.status === STATUS_CODE.OK) {
  throw new Error(MESSAGE.LOGIN.FAILURE);
}
dispatch(login(response.user));
dispatch(updateIngredients(response.fridge));

// authSlice
export const authSlice = createSlice({
  name: 'auth',
  initialState: {
    isAuthenticated: false,
    user: null,
  },
  reducers: {
    login: (state, action) => {
      state.isAuthenticated = true;
      state.user = action.payload;
    },
  },
});
```

- **thunk를 적용한 코드**

```jsx
// login form
dispatch(asyncLogin({ email, password }));

// authSlice
export const asyncLogin = createAsyncThunk(
  'auth/asyncLogin',
  async (data, { dispatch }) => {
    try {
      const response = await POST('/login', data);
      const { user } = response;
      dispatch(fetchFridge());
      return user;
    } catch (error) {
      throw error.response.data.error;
    }
  },
);

export const authSlice = createSlice({
  name: 'auth',
  initialState: {
    isAuthenticated: false,
    user: null,
  },
  extraReducers: builder => {
    // 로그인
    builder.addCase(asyncLogin.pending, (state, action) => {
      state.isAuthenticated = false;
      state.user = null;
    });
    builder.addCase(asyncLogin.fulfilled, (state, action) => {
      state.isAuthenticated = true;
      state.user = action.payload;
    });
    builder.addCase(asyncLogin.rejected, (state, action) => {
      state.isAuthenticated = false;
      state.user = null;
      console.log('🚀 ~ asyncLogin ~ rejected:', action.error.message);
    });
});
```

---

## 정리하며

- **UI ➡️ 비동기 ➡️ 저장소 ➡️ UI**  
  기존에는 RTK의 비동기 처리 기능을 사용하지 않고 ui 컴포넌트 내에서 서버에 데이터를 요청하는 비동기 함수를 일일히 작성하고 데이터를 가져와서 store를 업데이트 시키는 구조였다면,
- **UI ➡️ 저장소(비동기) ➡️ UI**  
  createAsyncThunk를 통해서 서버에서 데이터 가져와서 store에 저장하고, ui는 store를 구독해놓고, 데이터가 바뀌면 ui도 자동으로 변경되는 구조로 컴포넌트 외부에서 비동기 처리를 할 수 있기 때문에 관심사 분리가 가능해졌다.

---

### 참고 자료

- [생활코딩 - redux toolkit - thunk 를 이용해서 비동기 작업을 처리하는 방법(+ 썸네일 이미지 출처)](https://youtu.be/K-3sBc2pUJ4?si=iy03P9XZJ4wXbh-U)
- [리덕스 툴킷은 정말 천덕꾸러기일까?](https://blog.hwahae.co.kr/all/tech/6946)
