---
date: '2023-12-18'
title: '신입 개발자를 위한 개발 로드맵'
categories: ['개발']
summary: '코리아스타트업포럼 멘토링 위크 강연 후기'
thumbnail: './development-roadmap-for-beginner-developers.jpg'
---

> #### 코리아스타트업포럼 멘토링 위크
>
> 임민영 멘토 (현 어린이 전용 SNS 놀잇 CTO)

## 나는 어떤 사람인가?

나라는 사람을 아는 것이 중요하다.  
**나를 톺아보는 시간**이 있어야 어떤걸 싫어하고 좋아하는지 알 수 있다. 괴롭지 않을 수 있다.  
직업, 취미, 관심사, 요즘 하는 것, 잘 하는 것 등 최소한 3가지를 정리하거나  
현재-과거-미래 순으로 생각해보자.

```js
나 !== 개발자
나 = {..., 직업: 개발자}
```

---

## 개발자는 **\_\_\_\_\_** 하는 사람이다

**개발자** = <u>주어진 시간 내</u>에 <u>문제를 해결</u>하는 사람

개발만 하지말고 <u>개발도</u> 해야한다. (작업시간 산정하기)  
끝없이 스스로 되물어야 한다.

---

## 로드맵의 기본경로 단순화해보기

중요한 것은 **방향성과 가이드라인**

1. 만들기: 언어, 환경

2. 고치기 (+공유하기): Git, 디자인 패턴 (MVC패턴…), 아키텍쳐

3. 확인하기: 테스트 방법론, 테스트 (유닛 테스트, 통합 테스트)

4. 배포하기

5. 자동화: 배포 자동화, 테스트 자동화

---

## 의사소통

- 회사 내부에도 고객이 있다.
  - 급발진 금지
  - 그들이 물어보는 건 다 해줘야 하는 게 아니다. 그래서 우리는 설명서 역할도 해줘야 한다.
- 당연한 건 없다.
  - 당연하다고 생각하는 모든 것은 TMI일지라도 설명하고 넘어가야한다.  
    ex) 🙍‍♀️: 1주일 걸린다면서요? 👩‍💻: 코드 짜는데에만 1주일이고 구구절절..
  - 내가 아는 것을 남도 알고있다고 생각하지 말자. 사소한 것까지 다 말하는 것이 좋다.
  - 시간 = 돈, 시간의 중요성을 인지하자.
- 데이터로 말하기
  - 내 의견을 뒷받침할 데이터를 가지고 있는 것이 안전하다. 그리고 효과적이다.
  - 데이터 모으기가 먼저 필요할 수 있다.  
    [📕 데이터로 전문가처럼 말하기](https://product.kyobobook.co.kr/detail/S000061695655)

---

## 자책하지 말고 회고하기

- 회고는 스스로를 칭찬하고 + 고칠 점을 찾기 👉 덜 괴롭게 나아지는 방법
- 회고 방법론: KPT / PMI / DAKI / 4Ls
- 회고 단위: 프로젝트가 끝날 때, 한달마다, 분기마다
- 회고 내용
  1. 칭찬 (최소한 3개 작성)
  2. 고칠 점 (피드백 받았던 내용을 바탕으로 작성 👉 자책으로 빠지지 않기 위해)
  3. 개선할 점 (당장해 볼 것 - 코드, 차차 해볼 것 - 태도/습관)

---

## 사이드 프로젝트

1. 목적이 있는 프로젝트를 할 것, 목적이 없는 프로젝트는 [코딩 놀이]에 불과하다.

2. 팀은 어떻게 구하지?: 주제를 먼저 잡고 구하자!

3. 주제는 좋아하는 걸로, 기능은 할 줄 아는 것보다 조금 더.

   - 매번 똑같은 CRUD만 반복하지말자.
     - 할 줄 아는 것에서 1, 2개 정도 추가한다.
     - 회고했던 내용은 최대한 반영한다.
   - 시간을 정해두고 하자.
     - 목표일을 정하지 않으면 평생하는 수 있다.
     - 목표일 잡기가 어렵다면 실패할 프로젝트를 먼저 해본다.
     - 목표일 내에 완성하지 못했더라도 종료해야 한다.

4. 개인 회고는 필수, 팀 회고는 협의
   - 개인적으로라도 회고록을 꼭 쓰고, 지난 회고와 비교해보자.
   - 본인의 감정도 기록하자. 일기처럼

---

## 실패할 프로젝트: 퍼포먼스 셀프 체크하기

- 준비
  - 기획: 해보고 싶었던 것
  - 시간: 1주 ~ 1달
  - 예상: 세세히 잡아볼 것  
    ex) 업로더 4시간 걸릴 것 같음, 폼 1시간 걸릴 것 같음 등등
- 실행/기록
  - 정한 시간만큼 작업
  - 기록: 하루 간 끝낸 일 기록 (Task기준으로 작업시간을 기록해도 좋음)
- 확인/회고
  - 확인: 내 퍼포먼스 확인
  - 회고: 잘한 것, 못한 것보다 생각같지 않았던 부분을 기록해보길 추천