---
date: '2024-02-03'
title: 'React.js & Next.js 강의 기록'
categories: ['개발']
summary: '[프로젝트로 배우는 React.js & Next.js 마스터리 클래스] 강의를 들으며 기록한 내용입니다.'
thumbnail: './react-next-master.png'
---

> [프로젝트로 배우는 React.js & Next.js 마스터리 클래스](https://www.udemy.com/course/react-next-master/) 강의를 들으며 기록한 내용입니다.

---

### Node.js 모듈시스템

- **CJS(common js) module**
  ```js
  // 내보내기
  module.exports = { 함수명1, 함수명2 };
  // 불러오기
  const { 함수명1, 함수명2 } = require('./경로파일');
  ```
- **ES module**
  - 설정: package.json에 `"type":"module"` 추가
  ```js
  // 내보내기
  export {함수명1, 함수명2}; 또는 export 함수명1(){}; export 함수명2(){};
  // 기본값 내보내기 (하나만 가능)
  export default 함수명3(){};`
  // 불러오기 (반드시 확장자까지 표기해야 함)
  import 함수명3, {함수명1, 함수명2} from "./경로파일.js";
  ```

---

### 리렌더링과 state

- 부모 컴포넌트가 리렌더링 되면 (state값이 업데이트되면) 자식 컴포넌트들도 리렌더링 된다.
- state를 계층구조상에서 여러 컴포넌트들이 공유할 수있도록 위로 끌어올려서 아래 컴포넌트들이 공유하게 하는 것이 **State Lifting**이라고 한다.
- state를 공유하는 컴포넌트들의 공통되는 부모컴포넌트에서 만들어져야한다.

---

### 라이프사이클(useEffect)

```jsx
const isMountRef = useRef(false);

// 종속배열이 없다면 업데이트될 때마다 실행
useEffect(() => {
  // 마운트를 제외한 업데이트 시 실행되게 제어
  if (!isMountRef.current) {
    isMountRef.current = true;
    return;
  }
  console.log('App 업데이트');
});

// 종속배열이 빈 배열이라면 첫 마운트되었을 때에만 실행
useEffect(() => {
  console.log('App 마운트');
}, []);

// 언마운트
useEffect(() => {
  console.log('Even 마운트');
  return () => {
    console.log('Even 언마운트');
  };
}, []);
```

---

### useReducer로 상태관리 로직 분리하기

- useReducer는 useState와 같이 새로운 State를 생성하고 업데이트를 시키는 함수를 제공하지만, 컴포넌트 외부에 State관리 로직을 분리할 수 있다는 차이점이 존재한다.

---

### 리렌더링 최적화 하기

```js
const getAnalyzedTodoData = () => {
  console.log('TODO 분석 함수 호출');
  const totalCount = todos.length;
  const doneCount = todos.filter(todo => todo.isDone).length;
  const notDoneCount = totalCount - doneCount;
  return { totalCount, doneCount, notDoneCount };
};

const { totalCount, doneCount, notDoneCount } = useMemo(getAnalyzedTodoData, [
  todos,
]);
```

- **useMemo: 특정 조건을 만족하지 않으면 다시 실행하지 않도록 도와주는 훅, 재 연산 방지**  
  불필요한 연산을 줄여보자.
- getAnalyzedTodoData 함수에서 todos의 배열 길이가 길어질수록 더 많은 연산을 하게 된다. 함수 내부의 filter메서드는 모든 요소를 순회하기 때문이다.
- **todos 데이터가 변경되지않는다면 다시 호출할 필요가 없다.**

---

### useMemo와 useEffect 차이

1. **useMemo:**

   - `useMemo`는 성능 최적화를 위해 사용된다.
   - 이 훅은 계산 비용이 많이 드는 연산의 결과를 캐시하고, 의존성 배열이 변경되지 않는 한 같은 결과를 재사용한다.
   - 주로 계산 비용이 높은 함수나 연산 결과를 캐시하여 렌더링 성능을 향상시킬 때 사용된다.

   ```js
   const memoizedValue = useMemo(() => computeExpensiveValue(a, b), [a, b]);
   ```

2. **useEffect:**
   - `useEffect`는 부수 효과(side effects)를 처리하기 위해 사용된다.
   - 주로 데이터 가져오기, 구독 설정, 타이머 설정 등과 같은 비동기 작업이나 렌더링과는 직접적으로 관련이 없는 작업을 수행할 때 사용된다.
   - `useEffect`의 콜백 함수는 렌더링 이후에 실행되며, 렌더링 이전 또는 렌더링 도중에 특정 동작을 수행하도록 설정할 수 있다.
     ```js
     useEffect(() => {
       // 부수 효과 작업 수행
       fetchData();
     }, [dependency]);
     ```

간단히 말해, `useMemo`는 값을 메모이제이션하여 성능을 최적화하고, `useEffect`는 부수 효과를 처리하기 위해 사용된다.

---

### React.memo

불필요하게 리렌더되는 컴포넌트 최적화하기

- 부모컴포넌트가 리렌더되면 자식컴포넌트도 리렌더된다.
- 상태가 변경됨에 따라 컴포넌트가 리렌더링된다.

따라서 상태 변화에 영향이 없는 컴포넌트를 memo라는 메서드에 인수로 넣어준다.  
👉 최적화된 컴포넌트로 반환됨

---

### React.js의 CSR, Next.js의 SSR

- **CSR**

  1.  빈 HTML 파일 (리액트 서버 → 브라우저)
  2.  텅 빈 화면 렌더링 (브라우저 → 화면)
  3.  번들링된 JS파일 (리액트 서버 → 브라우저)
  4.  컨텐츠 렌더링 (브라우저 → 화면)

  - 장점: 페이지간의 이동이 매우 빠름
  - 단점: 초기 페이지 로딩이 느림

- **CSR + SSR**
  1.  완성된 HTML 파일 (넥스트 서버 → 브라우저)
  2.  완성된 화면 렌더링 (브라우저 → 화면)
  3.  번들링된 JS파일 (넥스트 서버 → 브라우저)
  4.  인터렉션, 페이지 이동 등 (브라우저 → 화면)
  - 초기 페이지 접속: SSR방식으로 빠른 렌더링
  - 페이지 이동: CSR방식으로 빠른 이동

CSR은 검색엔진최적화(SEO)는 불리하다.

- 다양한 페이지들의 정보를 수집 👉 수집된 정보를 보관(DB) 👉 연관된 정보를 결과로 노출
- 단순히 빈 HTML파일만 수집하기 때문에 제대로 정보를 수집할 수 없게된다.

---

### Next.js 렌더링 - SSR

- **페이지 이동 Link, useRouter**

```jsx
<Link href={"/search"}>search page</Link>
<Link
    href={{
        pathname: "/country/[code]",
        query: { code: code },
    }}
>
    country code page
</Link>

const router = useRouter();
<button
    onClick={() => {
        router.push("/search");
    }}
>
```

- **getServerSideProps**

```jsx
export const getServerSideProps = async () => {
  // SSR을 위해 서버측에서 페이지 컴포넌트에게 전달할 데이터를 설정하는 함수
  const countries = await fetchCountries();
  return {
    props: { countries },
  };
};
```

---

### Next.js 렌더링 - SSG

- **getStaticPaths와 getStaticProps**

```jsx
export const getStaticPaths = async () => {
  return {
    paths: [{ params: { code: 'KOR' } }, { params: { code: 'ABW' } }],
    fallback: false,
    // 존재하지 않는 경로에 대해서 404페이지로 보여주는 것 (false)
  };
};

export const getStaticProps = async context => {
  const { code } = context.params;
  const country = await fetchCountry(code);
  return {
    props: { country },
  };
};
```

- **fallback : 존재하지 않는 경로 처리**

```jsx
fallback: false,
// 404페이지로 보여주는 것 (false)
fallback: "blocking",
// 실시간으로 생성한 후 반환해주는 것 (SSR처럼 생성 후 -> SSG로 보여줌)
fallback: true,
// 실시간으로 props가 없는 파일을 생성한 후 반환해주고
// 이후에 props를 받아와서 반환해주는 것 (일단 빠르게 먼저 보여줌)
```

---

### Next.js 렌더링 - ISR

**ISR** (증분 정적 재생성): 일정 시간을 주기로 정적페이지를 다시 생성하는 기술

- 이미 만들어져 있는 페이지를 반환 → 매우 빠른 속도로 렌더링 (SSG의 장점)
- 주기적으로 업데이트 됨 → 최신 데이터를 반영함 (SSR의 장점)

---

### Next.js 이미지 최적화

웹 페이지에서 가장 많은 용량을 차지하는 요소는 **이미지**

- 디바이스의 크기에 맞게 이미지 사이즈 조절 (모바일에서는 모바일용 해상도)
- 이미지 캐싱을 통한 로딩 속도 증진
  Next.js에서는 이 모든 기능을 next/image 컴포넌트로 자동 제공한다.

Next.js에서는 Image 컴포넌트의 src의 값을 외부 이미지 서버 주소를 넣지 못하게 자체적으로 방지한다.  
이미지 주소로 인한 보안 취약점을 막기위함이다.  
public 폴더에 있는 이미지만 사용할 수 있도록 설정되어있다.
이를 수정하기 위해서는 next.config.js파일에서 특정 도메인에서 불러오는 이미지는 허용하겠다는 설정을 추가한다.

```js
/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['flagcdn.com'],
  },
};

module.exports = nextConfig;
```

Image 컴포넌트는 width, height가 필수 속성이며, fill을 설정할 경우 width, height는 생략 가능하다.
대신 가장 가까운 부모의 position과 width, height를 기준으로 꽉 채워지므로 직속 부모의 position을 설정해줘야 한다.

```jsx
<div className={style.flagImg}>
  {' '}
  // position: relative;
  <Image src={flagImg} alt={commonName} fill />
</div>
```

---

### Next.js SEO

- **메타태그**  
  각 컴포넌트마다 SEO를 설정하려면 Next.js의 Head를 next/head로 부터 불러온다.  
  모든 페이지에 적용하는 Head는 next/document에서 불러온다.

---

### vercel 배포

```js
vercel deploy
Vercel CLI 33.2.0

? Set up and deploy “~/Documents/GitHub/react-next-master/section12”? [Y/n] y
// 해당 폴더를 배포하는 게 맞는지

? Which scope do you want to deploy to? helloleesul
// 배포할 계정

? Link to existing project? [y/N] n
// 기존의 프로젝트로 배포할건지

? What’s your project’s name? naras-react-next
// 프로젝트 이름 설정

? In which directory is your code located? ./
// 코드 경로 설정

Local settings detected in vercel.json:
Auto-detected Project Settings (Next.js):
- Build Command: next build
- Development Command: next dev --port $PORT
- Install Command: `yarn install`, `pnpm install`, `npm install`, or `bun install`
- Output Directory: Next.js default
? Want to modify these settings? [y/N] n
// 빌드 셋팅을 변경할건지?
```
