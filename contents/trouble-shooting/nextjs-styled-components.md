---
date: '2024-03-20'
title: 'Next.js에서 styled-components 이슈'
categories: ['트러블슈팅']
summary: 'Next.js 프로젝트 작업 중 발생한 스타일 깨짐 현상'
thumbnail: './nextjs-styled-components.png'
---

## Prop 'className' did not match 경고

> Warning: Prop className did not match. Server: "sc-xxx xxx" Client: "sc-yyy yyy"

Next.js 프레임워크로 작업한 프로젝트에서 새로고침 시 style-components로 생성한 컴포넌트의 스타일이 사라지는 현상을 발견했다. 때문에 화면의 레이아웃이 전부 틀어지는 문제가 있었다.  
경고 문구를 읽어보니 Server와 Client에서 적용된 `className`이 서로 다른 것이 원인이었다.

---

## styled-components의 동작과정

```js
const Button = styled.button`
	padding: 20px;
	width: ${({ $buttonWidth }) => $buttonWidth}px;
	...
`;

const App = () => {
  return <Button $buttonWidth={50}>버튼</Button>;
};
```

위 코드처럼 `styled.button`이 호출되면 `Button`은 React 컴포넌트로 생성되고 자바스크립트의 템플릿 리터럴 문법을 사용하여 CSS를 작성한다.

```js
counter++;
const componentId = hash(counter);
```

styled-components는 `styled` 함수로 만든 컴포넌트마다 [🔗`generateId` 함수](https://github.com/styled-components/styled-components/blob/1c17a0f919c7bfe36f4d55bd13f4262d6288f2e5/packages/styled-components/src/models/StyledComponent.js#L35)를 이용해 고유한 ID를 생성하는데, 전역 카운터를 하나 두고 컴포넌트 하나를 처리할 때마다 증가시켜 가면서 생성된다.

```js
const className = hash(componentId + evaluatedCSS);
```

이렇게 생성된 `componentId`와 작성된 CSS로 해시를 생성해 유니크한 `className`이 생긴다.

```js
const [generatedClassName, setGeneratedClassName] = useState(className);
```

`className`은 state로 저장되고, `$buttonWidth`와 같은 props값이 주입되거나 CSS가 바뀐다면 `className`도 변경되어 컴포넌트가 리렌더링된다.

마지막으로 state를 스타일시트로 변환하는 과정을 거쳐 생성된 스타일시트를 `<style>` 요소로 만들어 DOM에 주입한다.

**즉, styled-components는 <mark>자바스크립트 코드가 실행되는 환경(Client)</mark> 에 동적으로 스타일을 생성하고 적용된다.**

---

## Next.js와 styled-components

> [Using Server Components in Next.js](https://nextjs.org/docs/app/building-your-application/rendering/server-components#using-server-components-in-nextjs)  
> 기본적으로 Next.js는 서버 컴포넌트를 사용합니다. 이를 통해 추가 구성 없이 서버 렌더링을 자동으로 구현할 수 있으며, 필요한 경우 클라이언트 컴포넌트를 사용하도록 선택할 수 있습니다.

Next.js는 서버 컴포넌트 및 서버 사이드 렌더링(SSR)을 기본 환경으로 지원하는 프레임워크이다. SEO검색 엔진 최적화 등을 위해 처음 페이지를 로드할 때는 서버에서 렌더해 오지만, 페이지에서 링크를 클릭해 다른 페이지로 넘어갈 때는 CSR로 페이지를 렌더한다.

때문에 Next.js에서 페이지의 초기 로딩, 또는 새로 고침 시 Server에서 렌더링된 `className`과 이후에 Client에서 렌더링된 `className`의 경우, 컴포넌트가 생성되는 순서에 따라 같은 컴포넌트이더라도 다른 식별자가 붙을 수 있게 되면서 클래스명이 서로 달라지게 된다.

- 초기 로딩 시 **SSR** 렌더링된 컴포넌트의 **className A**
  ![](https://i.imgur.com/0toAsr3.png)
- 페이지가 이동되면서 **CSR** 렌더링된 컴포넌트의 **className B**
  ![](https://i.imgur.com/NX3T8QK.png)

- **CSR** 렌더링된 컴포넌트에서 새로고침 시  
  이전에 **SSR** 렌더링되며 생성됐던 **className A**의 식별자를 갖게 되면서 스타일이 깨짐
  ![](https://i.imgur.com/cFqNb18.png)
  ![](https://i.imgur.com/UqOlIou.png)

---

## 해결 방법

> 경고: 런타임 자바스크립트가 필요한 CSS-in-JS 라이브러리는 현재 서버 컴포넌트에서 지원되지 않습니다. 서버 컴포넌트 및 스트리밍과 같은 최신 React 기능과 함께 CSS-in-JS를 사용하려면 라이브러리 작성자가 동시 렌더링을 포함한 최신 버전의 React를 지원해야 합니다.

Next.js 공식문서에 따르면 서버 컴포넌트와 맞지 않는 styled-components같은 라이브러리를 지양하길 권하며, 해결 방법 또한 친절하게 설명해주고 있다.

> **CSS-in-JS 설정하는 방법**
>
> 1.  스타일 레지스트리를 설정하는 것
> 2.  useServerInsertedHTML 훅을 사용하여 규칙을 삽입하는 것
> 3.  클라이언트 컴포넌트를 사용하여 앱을 초기 서버 측 렌더링 중에 스타일 레지스트리로 래핑하는 것

---

**Styled Components**

1. 먼저 next.config.js에서 스타일 컴포넌트를 활성화한다.
   ```js
   module.exports = {
     compiler: {
       styledComponents: true,
     },
   };
   ```
2. styled-components API를 사용하여 렌더링 중 생성된 모든 CSS 스타일 규칙을 수집하는 전역 레지스트리 컴포넌트를 생성한다. 이러한 규칙을 반환하는 함수를 구현하고, useServerInsertedHTML 훅을 사용하여 레지스트리에서 수집된 스타일을 `<head>`태그에 삽입한다.

   ```tsx
   'use client';

   import React, { useState } from 'react';
   import { useServerInsertedHTML } from 'next/navigation';
   import { ServerStyleSheet, StyleSheetManager } from 'styled-components';

   export default function StyledComponentsRegistry({
     children,
   }: {
     children: React.ReactNode;
   }) {
     // styledComponentsStyleSheet라는 상태 변수를 초기화
     // ServerStyleSheet 인스턴스를 보관
     const [styledComponentsStyleSheet] = useState(
       () => new ServerStyleSheet(),
     );

     // 서버 측에서 HTML이 DOM에 삽입될 때마다 호출되는 로직을 처리
     useServerInsertedHTML(() => {
       // getStyleElement()를 호출하여 스타일 요소를 가져옴
       const styles = styledComponentsStyleSheet.getStyleElement();
       // instance.clearTag()를 호출하여 이전에 생성된 스타일 태그를 제거
       styledComponentsStyleSheet.instance.clearTag();
       return <>{styles}</>;
     });

     // CSR일 때 그대로 반환
     if (typeof window !== 'undefined') {
       console.log('CSR');
       return <>{children}</>;
     }

     // SSR일 때
     // 새로운 스타일 요소가 서버 측에서 삽입될 때마다 이전 스타일이 지워지고 새로운 스타일이 적용
     console.log('SSR');
     return (
       <StyleSheetManager sheet={styledComponentsStyleSheet.instance}>
         {children}
       </StyleSheetManager>
     );
   }
   ```

3. 루트 레이아웃의 자식 요소들을 스타일 레지스트리 컴포넌트로 래핑한다.

   ```tsx
   import StyledComponentsRegistry from './lib/registry';

   export default function RootLayout({
     children,
   }: {
     children: React.ReactNode;
   }) {
     return (
       <html>
         <body>
           <StyledComponentsRegistry>{children}</StyledComponentsRegistry>
         </body>
       </html>
     );
   }
   ```

---

## 마치며

- 이번 문제를 발견하고 해결하기 위해 서치하면서, 수박 겉핥기로만 알 것 같았던(그러니까 클라이언트랑 서버랑 서로 다른 `className`을 갖게된 건 알았는데 도대체 왜?) 부분을 이해할 수 있었다.
- Next.js 프레임워크가 인기를 얻으면서 서버 사이드 환경에서의 성능 및 기타 문제로 인해 런타임 CSS-in-JS를 더 이상 권장하지않는 이유를 체감하게 되었다.
- Next.js 13 버전을 사용하고 해당 이슈를 겪은 덕분에 공식 문서를 열심히 읽게 되었다.  
  (문제를 해결하기 위해 많은 검색과 적용을 해보았지만 대부분 Next.js 12 이전 버전의 방법이었다.)
- 참고 자료 설명이 정말 잘되어있어서 styled-components에서 `className`이 어떻게 생성되는지 동작원리에 대해 빠르게 이해할 수 있었다. 감사합니다😊
- 라이브러리를 깊게 파고드는 것이 과연 당장 필요한 일이 아닐 수도 있지만(결국 새로운 라이브러리는 계속 나오니까..) 좋은 공부가 되었다.
- 기록하면서 확인해보려고 해당 이슈를 만들어 낸 코드와 해결 코드를 stackblitz에 올려두었다.  
  [🔗이슈 프로젝트](https://stackblitz.com/edit/stackblitz-starters-yxcqye?file=README.md) [🔗해결 프로젝트](https://stackblitz.com/edit/stackblitz-starters-pzfeg3?file=README.md)

---

### 참고 자료

[Next.js 공식 문서: CSS-in-JS](https://nextjs.org/docs/app/building-your-application/styling/css-in-js#styled-components)  
[styled-components가 동작하는 과정](https://shiwoo.dev/posts/next-13-and-css-in-js#styled-components%EA%B0%80-%EB%8F%99%EC%9E%91%ED%95%98%EB%8A%94-%EA%B3%BC%EC%A0%95)  
👉 Next.js에서 styled-components를 적용했을 때 스타일이 깜빡이는 이유도 자세히 알 수 있다.  
[Next.js + styled-components에서 Prop `className` did not match가 발생하는 이유와 해결 방법](https://blog.shift.moe/2021/01/02/prop-classname-did-not-match/)
