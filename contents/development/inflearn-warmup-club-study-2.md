---
date: '2024-05-16'
title: '컴포넌트가 unmount될 때 애니메이션을 구현하고 싶었다.'
categories: ['개발']
summary: '인프런 워밍업 클럽 스터디 1기 FE - 과제'
thumbnail: './component-unmount-animation.jpg'
---

> 과제를 수행하며 고민하고, 깨닫게 된 점들을 기록합니다.  
> 같은 목표를 가진 분들과 함께 발전해 나가길 기대합니다. ☺️

---

## [디즈니 플러스 앱](https://github.com/helloleesul/inflearn-warmup-club-study/tree/main/disney-plus-app)

![](https://i.imgur.com/QDXuuJS.gif)  
구글 로그인, Swiper 라이브러리, 영화 상세 정보 모달
![](https://i.imgur.com/gtZZ1Bj.gif)  
유튜브 플레이 iframe, debounce 검색, 상세 페이지(useParams), 로그아웃

---

### 고민한 것

- `MovieModal` mount될 때에는 애니메이션이 되고, unmount될 때에는 애니메이션 없이 툭 사라져버린다.
- 내가 원하는 것은 모달이 꺼질때에도 애니메이션으로 사라지게 한 후, unmount되게 하는 것
- 기존 코드를 보자.

  ```jsx
  // Row 컴포넌트
  modalOpen && <MovieModal {...movieSelection} setModalOpen={setModalOpen} />;
  ```

  이전 코드에서는 `modalOpen` 상태가 참일 때만 `MovieModal`이 렌더링되었지만, 변경된 코드에서는 `MovieModal` 컴포넌트 내부에서 직접적으로 `modalOpen` 상태를 조작할 수 있도록 했다.

---

### 이렇게 변경해보았다.

```jsx
// Row 컴포넌트
<MovieModal
  {...movieSelection}
  modalOpen={modalOpen}
  setModalOpen={setModalOpen}
/>;

// MovieModal 컴포넌트
const MovieModal = ({ ...modalOpen, setModalOpen }) => {
  const ref = useRef();
  const [showModal, setShowModal] = useState(false);
  const [animation, setAnimation] = useState('');

  useOnClickOutside(ref, () => {
    // 2. 닫기 이벤트
    setModalOpen(false);
  });

  useEffect(() => {
    if (!modalOpen) {
      // 3. 사라지는 애니메이션으로 설정
      setAnimation('animate-fade-down animate-reverse');
    } else {
      setShowModal(true);
      setTimeout(() => {
        // 1. 나타나는 애니메이션으로 설정
        setAnimation('animate-fade-up');
      }, 10);
    }
  }, [modalOpen]);

  return (
    showModal && (
      <div className="animate-fade">
        <article
          className={`${animation}`}
          ref={ref}
          onAnimationEnd={() => {
            // 4. 사라지는 애니메이션 끝이나면 showModal false
            if (!modalOpen) setShowModal(false);
          }}
        ></article>
      </div>
    )
  );
};
```

- `MovieModal` 컴포넌트 내부에서는 `modalOpen` 상태에 따라 모달의 나타남과 사라짐을 제어하는 useEffect와 useState를 사용했다.
- `modalOpen` 상태가 변경될 때마다 useEffect가 실행되어 애니메이션 클래스를 설정하고, 애니메이션 효과를 주는 CSS 클래스를 적용시킨다.
- `onAnimationEnd` 이벤트 핸들러를 사용하여 애니메이션 종료 후에 `showModal` 상태를 변경하여 모달이 화면에서 완전히 사라지도록 처리했다.

---

### 그 밖에 추가한 것

- Tailwind CSS + 스크롤바 숨기는 플러그인, 애니메이션 플러그인
  ```js
  /** @type {import('tailwindcss').Config} */
  module.exports = {
    content: ['./src/**/*.{js,jsx,ts,tsx}'],
    theme: {
      extend: {},
    },
    plugins: [
      require('tailwind-scrollbar-hide'),
      require('tailwindcss-animated'),
    ],
  };
  ```
- 회원만 접근 가능한 Route 생성

  ```jsx
  const UserGuard = () => {
    const navigate = useNavigate();
    useEffect(() => {
      const profilePictureUrl = localStorage.getItem("profilePictureUrl");
      // 로그인 시 저장한 구글 유저 프로필이미지가 없다면 LandingPage로 이동
      if (!profilePictureUrl) {
        navigate("/");
      }
    }, [navigate]);
    return <Outlet />;
  };
  export default UserGuard;

  function App() {
    return (
      <div className="App">
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<LandingPage />} />
            👇
            <Route element={<UserGuard />}>
              <Route path="main" element={<MainPage />} />
              <Route path=":movieId" element={<DetailPage />} />
              <Route path="search" element={<SearchPage />} />
            </Route>
          </Route>
        </Routes>
      </div>
    );
  }
  export default App;
  ```

- 로그인 상태일 때 랜딩 페이지에 접근할 수 없게 만들기

  ```jsx
  const LandingPage = () => {
    const navigate = useNavigate();
    useEffect(() => {
      const profilePictureUrl = localStorage.getItem("profilePictureUrl");
      // 로그인 시 저장한 구글 유저 프로필이미지가 있다면 MainPage로 이동
      if (profilePictureUrl) {
        navigate("/main");
      }
    }, [navigate]);

    return (...)
  };
  ```
