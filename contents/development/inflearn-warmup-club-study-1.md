---
date: '2024-05-10'
title: '바닐라 JS로 7가지 앱 만들기'
categories: ['개발']
summary: '인프런 워밍업 클럽 스터디 1기 FE - 과제'
thumbnail: './inflearn-warmup-club-study.png'
---

> 최근 <인프런 워밍업 클럽 스터디 1기>에 참여하여
> [따라하며 배우는 자바스크립트 A-Z 강의](https://www.inflearn.com/course/%EB%94%B0%EB%9D%BC%ED%95%98%EB%A9%B0-%EB%B0%B0%EC%9A%B0%EB%8A%94-%EC%9E%90%EB%B0%94%EC%8A%A4%ED%81%AC%EB%A6%BD%ED%8A%B8)를 수강했습니다. 해당 과제는 <U>클론 코딩이 아닌, 직접 고민하며</U> 코드를 작성하는 방식으로 진행되었습니다.

블로그 포스팅으로 스터디 참여 과정과 배운 점을 기록하고자 합니다. 자바스크립트를 공부하며 성장하는 과정을 공유하며, 같은 목표를 가진 분들과 함께 발전해 나가길 기대합니다. ☺️

---

### 1번 과제 - [음식 메뉴 앱](https://github.com/helloleesul/inflearn-warmup-club-study/tree/main/food-menu-app)

학습 범위: Section 1 ~ 3

![](https://i.imgur.com/UVqo3Cm.gif)

- 데이터를 json파일로 만들어놓고 처음 로드할 때, 불러와서 작업했다.
- 강의에서 배운 이벤트위임을 활용해서 버튼 그룹에 이벤트리스너를 설정해주고 이벤트타겟의 태그가 버튼일 때에만 메뉴를 필터링할 수 있는 함수를 실행하게 했다.

---

### 2번 과제 - [가위 바위 보 앱](https://github.com/helloleesul/inflearn-warmup-club-study/tree/main/rock-scissors-paper-app)

학습 범위: Section 4(1~8)

![](https://i.imgur.com/NaaP539.gif)

- 남은 횟수가 끝나면 결과를 알려주는 부분을 잊고 완성했다가 다시 이어서 작업했다.
- 다시 도전하기를 누를때 화면을 초기화하는 함수를 만들었다.

---

### 3번 과제 - [퀴즈 앱](https://github.com/helloleesul/inflearn-warmup-club-study/tree/main/js-quiz-app)

학습 범위: Section 4(9~17)

![](https://i.imgur.com/GLktgCr.gif)

- 과제 1번 처럼 데이터를 json파일로 만들어놓고 처음 로드할 때, fetch로 불러와서 작업했는데 데이터 객체 안에 문제와 옵션들, 그리고 answer(정답) 키값을 넣었었다. 하지만 브라우저 네트워크에 답까지 노출이 되는 게 문제라고 생각됐다.
- 그래서 answer(정답) 키값을 없애고, 문제와 옵션들만 데이터로 구성하고 script 안에서 정답 유무를 가릴 수 있게 바꿨다. 풀이는 문제를 배열로 해체하고 ×를 \*으로, ÷를 /으로 바꾼 후(-,+는 그대로) eval()함수를 쓰지않고 new Function() 새로운 함수를 생성해서 풀이하게 했다.

---

### 4번 과제 - [책 리스트 나열 앱](https://github.com/helloleesul/inflearn-warmup-club-study/tree/main/book-list-app)

학습 범위: Section 5 ~ 6

![](https://i.imgur.com/VKWsOSD.gif)

- input 전체에 값의 유무에 따라 submit 버튼 활성화를 설정해줘서 정확한 제출 요청이 되도록 작업했다.
- setTimeout으로 추가, 삭제 알림이 3초 뒤에 사라지게 했다.
- 리스트 그룹에 이벤트리스너를 설정해줘서 이벤트타겟의 태그가 버튼이라면 삭제버튼을 가진 부모요소를 삭제하도록 이벤트 위임으로 작업했다.

### 5번 과제 - [Github Finder 앱](https://github.com/helloleesul/inflearn-warmup-club-study/tree/main/github-finder-app)

학습 범위: Section 5 ~ 6

![](https://i.imgur.com/yg7S58P.gif)

```js
import { Octokit } from 'https://esm.sh/@octokit/core';
```

- 위 스크립트를 import를 작동시키기위해서 html에 작성한 script태그에 type을 module로 설정하였다.
- 유저의 프로필 정보는 고정적이라 값만 제외하고 퍼블리싱했고, 레포지토리 리스트는 script에서 innerHTML으로 한번에 삽입했다. li 태그를 계속 create하는 것보다 효율적이라고 생각했다.

```js
!username && alert('유저 이름을 입력해주세요.'); // 변경 전
if (!username) return alert('유저 이름을 입력해주세요.'); // 변경 후
```

- 둘 다 username가 비어있거나 존재하지않을 때에만 조건이 참이 된다.
- 변경 전 usename이 빈 칸일 경우 알림창이 뜨도록 조건식을 작성했는데, 알림창을 한번 나타나게하면 조건식이 끝나도 함수를 이어서 실행시켰다.
- 내가 원하는 건 조건이 참이면 함수를 중지하는 로직을 원하기때문에 return문이 들어갈 수 있도록 조건식을 조건문으로 변경하였다.
- 식과 문을 잘 구별해서 쓰자.

---

### 6번 과제 - [비밀번호 생성 앱](https://github.com/helloleesul/inflearn-warmup-club-study/tree/main/password-generator-app)

학습 범위: Section 7 ~ 8

![](https://i.imgur.com/kI0d37D.gif)

- 비밀번호를 생성하는 generator 객체를 활용해보았다.
- generator 안에 아래 작성된 최소, 최대 길이에 맞게 참이 될때만 실행하도록 while 조건문을 설정했다.
- navigator.clipboard로 복사하기 기능을 구현했다.
- generator를 이번 강의에서 처음 배우고 사용해봤는데 목적에 맞게 가독성이 좋아보여서 흥미로웠다. 하지만 generator로 구현하는 것과 일반 함수로 구현하는 것의 차이를 아직은 잘 모르겠다.

---

### 7번 과제 - [타이핑 테스트 앱](https://github.com/helloleesul/inflearn-warmup-club-study/tree/main/typing-test-app)

학습 범위: Section 9

![](https://i.imgur.com/AvZuDbC.gif)

- 자바스크립트 과제 중에 제일 어려웠다. CPM, WPM 계산이 잘 맞는지 모르겠고.. 이 로직이 맞나? 자신이 없다.
- 타이머 기능 먼저 작업하고 그다음에 타이핑, 상태 순서대로 했는데 아직도 먼저 고민해보고 코드를 적는 연습이 부족한 듯 하다. 마음이 급해서 ㅎㅎ 대략 정해놓고 바로 작업하는 편인데 로직을 한번 먼저 메모장 켜놓고 큰 그림과 작은 목표들을 메모하는 습관을 길러야겠다.
- 뭐든 함수에 몽땅 넣어버린 것 같다. 액션, 계산, 데이터를 분리해보는 걸 이 코드로 시도해봐야겠다!
