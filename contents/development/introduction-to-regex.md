---
date: '2024-02-11'
title: '정규표현식 입문기'
categories: ['개발']
summary: '코딩테스트 연습을 하다가 정규표현식으로 간단하게 풀이할 수 있는 문제를 발견했다.'
thumbnail: './introduction-to-regex.jpg'
---

> 코딩테스트 연습을 하다가 정규표현식으로 간단하게 풀이할 수 있는 문제를 발견했다.

### 경험

프로젝트 작업을 했을 때, 회원가입 시 필수 조건을 제어하기 위해 정규표현식을 적용해보았다. 정규표현식은 외계어처럼 보여서 해석하기가 어려웠고, 전체를 학습하는 데에는 많은 시간이 소요될 것 같아 필요한 조건만 검색하여 사용했다. 해석이 필요한 경우에는 chat GPT를 활용하여 잠시 도움을 받았지만, 머릿속에서 빠르게 사라져 버리는 경험을 했다.

---

### 코딩테스트 문제1.

[모음 제거](https://school.programmers.co.kr/learn/courses/30/lessons/120849)

영어에선 a, e, i, o, u 다섯 가지 알파벳을 모음으로 분류합니다. 문자열 `my_string`이 매개변수로 주어질 때 모음을 제거한 문자열을 return하도록 solution 함수를 완성해주세요.

| 입력값             | 기댓값      |
| ------------------ | ----------- |
| "nice to meet you" | "nc t mt y" |
| "bus"              | "bs"        |

```js
function solution(my_string) {
  return my_string.replace(/[aeiou]/g, '');
}
```

> 위 문제를 정규표현식으로 풀이하는 과정을 보고 나도 정규표현식을 기초라도 원하는 대로 사용할 수 있으면 좋을 것 같다는 생각이 들었다.

---

### 정규표현식 시작해보기

[프로그래머스 정규표현식 무료 강의](https://school.programmers.co.kr/learn/courses/11/11-%EC%A0%95%EA%B7%9C%ED%91%9C%ED%98%84%EC%8B%9D)를 통해서 기초를 익혀보기로 했다.  
사람 이름, 전화번호, 이메일이 있는 주소록에서 전화번호만 찾는 정규표현식을 기반으로 하나씩 학습하는 과정으로 이루어져있다.

- **숫자 대표문자**  
  `\d`는 숫자를 대표하는 정규표현식입니다. 이때 d는 digit을 뜻합니다.

- **글자(문자, 숫자, 언더스코어) 대표문자**  
  `\w`는 글자를 대표하는 정규표현식입니다.

  - `a, b, c, 가, 나, 다, 1, 2`와 같은 문자와 숫자를 포함합니다.
  - 특수문자는 포함하지 않지만, `_`(언더스코어)는 포함합니다.

- **하나 이상**  
  `\d`는 숫자를 한글자만 찾습니다. 그런데, 전화번호를 구성하는 043이나 2568같이 연결된 숫자를 찾고 싶을 때는 어떻게 해야 할까요?  
  그럴 땐 `+`를 이용하면 됩니다. `+`는 "하나 혹은 그 이상 연결된"이라는 뜻입니다. 따라서 `\d+`는 "하나 혹은 그 이상 연결된 숫자"를 의미합니다.

- **0개 이상**  
  `*`은 "0개 이상"이라는 뜻입니다. 따라서 `\d*`는 "숫자가 0개 이상이다"를 의미합니다. 이를 이용하면 자연수는 `[1-9]\d*`로 표현할 수 있습니다.

- **있거나 없거나**  
  모든 전화번호를 찾으려면

  - "-가 있거나 없다"는 조건이 아니라
  - "- 또는 공백이 있거나 없다"는 조건을 써야 합니다.
    `-` 또는 (공백)이 있거나 없다는 조건은 `[- ]?`로 표현할 수 있습니다.
    > 때문에 `\d+[- ]?\d+[- ]?\d+`를 해석하면 `하나 이상 연결된 숫자와 -또는 공백이 있거나 없거나 하나 이상 연결된 숫자와 -또는 공백이 있거나 없거나 하나 이상 연결된 숫자`로 읽을 수 있다.

- **n번**  
  `{숫자}`는 "`숫자`번 반복한다"는 뜻입니다. 예를 들어 `\d{2}`는 "숫자가 연속 두 번 나온다"는 뜻입니다.  
  `{숫자1, 숫자2}`는 "숫자1부터 숫자2까지 반복한다"는 뜻입니다. 예를 들어, `\w{2,3}`는 "문자가 2 ~ 3번 나온다"는 뜻입니다.

- **글자 고르기**  
  알파벳 중에 소문자 모음(a,e,i,o,u)만 고르고 싶을 땐 어떻게 할까요?  
  그럴 때는 `[aeiou]`라고 적어주세요. 정규표현식에서 대괄호[ ] 안에 글자를 넣으면 해당 글자를 모두 선택할 수 있습니다.

  **소문자 알파벳**만 고르고 싶을 땐 어떻게 할까요? `[abcdefghijklmnopqrlstuvwxyz]`처럼 대괄호 안에 소문자를 모두 나열할 수도 있지만 뭔가 찜찜하지요.  
  우리는 간단히 `[a-z]`를 쓰도록 합시다. `[a-z]`는 "a부터 z까지 글자를 모두 선택하라"는 의미입니다.

  **연속된 영어 소문자**를 찾으려면 어떻게 할까요?

  1. 소문자를 뜻하는 `[a-z]`와
  2. 반복을 뜻하는 `+`를 붙여 => `[a-z]+`를 씁니다.

  **한글 단어**를 찾으려면 어떻게 할까요?  
  한글의 첫 번째 글자는 `가`이고 마지막 글자는 `힣`입니다. 따라서 한글은 `[가-힣]`으로 찾을 수 있습니다.

  | 의미                                              | 입력값 |
  | ------------------------------------------------- | ------ |
  | 숫자                                              | `\d`   |
  | 숫자 제외한 문자                                  | `\D`   |
  | 글자                                              | `\w`   |
  | 글자 대표 문자를 제외한 글자들(특수문자, 공백 등) | `\W`   |
  | 공백 문자(스페이스, 탭, 뉴라인)                   | `\s`   |
  | 공백 문자를 제외한 문자                           | `\S`   |

---

### 전화번호만 찾는 정규표현식

`0\d{1,2}[ -]?\d{3,4}[ -]?\d{3,4}`  
**0 그리고 숫자가 1 ~ 2번 나오고 공백 또는 -가 있거나 없고, 숫자가 3 ~ 4번 나오고 공백 또는 -가 있거나 없고, 숫자가 3 ~ 4번 나온다.** 로 해석할 수 있다.

---

### 코딩테스트 문제2.

[숨어있는 숫자의 덧셈 (1)](https://school.programmers.co.kr/learn/courses/30/lessons/120851)

문자열 `my_string`이 매개변수로 주어집니다. `my_string`안의 모든 자연수들의 합을 return하도록 solution 함수를 완성해주세요.

| 입력값          | 기댓값 |
| --------------- | ------ |
| "aAb1B2cC34oOp" | 10     |
| "1a2b3c4d123"   | 16     |

```js
function solution(my_string) {
  var answer = my_string.replace(/[a-z]/gi, '');
  return [...answer].reduce((acc, v) => (acc += Number(v)), 0);
}
```

> 나의 풀이를 보면 a-z까지 알파벳을 공백문자로 변환하여 알파벳을 없애고 남아있는 숫자를 배열로 만들어 모두 합산했다. i는 대소문자를 구분하지 않는다는 의미이다.

---

### 마치며

우연히 마주친 문제에서 필요한 부분을 잠시 학습하고 바로 적용해보니 좋았다. 나중에 다시 내가 기록한 이 글을 훑어봐도 도움이 될 것 같고, 앞으로 더 알아야 하겠지만 코드에 정규표현식을 유용하게 써볼 수 있을 것 같다.