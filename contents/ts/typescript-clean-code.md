---
date: '2023-06-14'
title: '클린 코드로 이해하는 타입스크립트'
categories: ['TypeScript']
summary: '타입스크립트를 써야하는 이유와 이해'
thumbnail: './typescript-clean-code.webp'
---

> 클린 코드에 대한 세부적인 내용 및 방법보다는 타입이 왜 필요한지 타입스크립트를 써야하는 이유와 이해를 위해 기록했습니다.

# Clean Code

_"말 그대로 깨끗하게 작성된 코드"_

깨끗하게 작성된 코드는 직접적이고 단순하여 읽기가 쉽고, 누가봐도 의도가 명확히 드러나는 코드이다. 이러한 코드는 가독성이 좋고 의존성을 최대한 줄여 유지보수가 쉬운 특징이 있다.  
👉 즉, **원하는 로직을 빠르게 찾을 수 있는 코드, 모든 팀원이 이해하기 쉽도록 작성된 코드**

---

## 클린 코드를 써야 하는 이유

실무에서 클린코드의 의의는 유지보수 시간의 단축을 의미한다.  
프로그래머는 작성 기한을 맞추기 위해서 나쁜 코드를 양산할 수밖에 없고 이 나쁜 코드로 결국엔 다시 또 개발 속도가 느려지고 기한을 놓치는 무한 지뢰에 빠지는 현상을 막기 위함이다.

---

## 타입이 필요한 이유

```js
let text = 'hello';
console.log(text.charAt(0)); // "h" 출력
```

위 코드의 경우 자바스크립트는 동적 타이핑을 지원하기 때문에 text 변수가 선언되는 과정에서 타입이 문자형으로 지정된다.

이후 코드를 작성하는 과정에서 text 변수에 문자형이 아닌 다른 값을 할당했다고 가정해보면

```js
text = 12345;
console.log(text.charAt(0));
// TypeError: text.charAt is not a function
```

이처럼 자바스크립트는 타입이 없기 때문에 **실행 후에 타입 에러를 확인**할 수 있다.

---

## 타입스크립트로 작성한다면?

```js
text = 12345;
// Type 'number' is not assignable to type 'string'.
console.log(text.charAt(0));
```

'숫자'타입은 '문자형' 타입에 할당할 수 없다는 **에러를 미리 확인**할 수 있다.

👉 즉, 자바스크립트의 런타임 단계에서 발생하는 타입 에러는 타입스크립트를 이용한다면 **컴파일 단계에서 미리 확인하고 고칠 수 있는 것**

런타임 단계에서 발생하는 에러로 인해 프로그램이 멈춘다면, 운영되는 서비스에 큰 차질이 생길 수 있으며 따라서 타입스크립트를 이용한다면 타입 에러와 같은 개발자의 실수를 미리 방지할 수 있다.

---

## 클린 코드와 타입스크립트

```js
let text: String = 'hello TypeScript';
```

위에서 확인한 바와 같이 타입을 정의함으로써 개발자의 실수를 줄일 수 있고, 명시된 타입을 보고 해당 변수의 자료형이 무엇인지 쉽게 이해할 수 있다.
결과적으로 **어떤 용도로 코드가 작성**되어있고 **무엇을 의미**하는지 파악하기 훨씬 용이하기 때문에 **유지보수에 유리**하고 자연스럽게 **개발 속도도 빨라지게** 된다.

---

### 참고자료

[clean-code-typescript 🚿 타입스크립트를 위한 클린코드 - 한글 번역판 🇰🇷
](https://738.github.io/clean-code-typescript/)  
[실무에서 바로 쓰는 Frontend Clean Code 정리](https://velog.io/@heelieben/%EC%8B%A4%EB%AC%B4%EC%97%90%EC%84%9C-%EB%B0%94%EB%A1%9C-%EC%93%B0%EB%8A%94-Frontend-Clean-Code-%EC%A0%95%EB%A6%AC)  
[토스ㅣSLASH 21 - 실무에서 바로 쓰는 Frontend Clean Code](https://youtu.be/edWbHp_k_9Y)  
[12 TypeScript tricks for Clean Code](https://medium.com/@mvsg/12-typescript-tricks-for-clean-code-b23651dd0430)
