---
date: '2023-10-26'
title: 'onKeyDown Event'
categories: ['트러블슈팅']
summary: '3차 프로젝트 여행 블로그 사이트 작업 중 발생한 입력 중복 오류'
thumbnail: './onKeyDown-event-ko.png'
---

# 한글 입력 시 중복 문제

3차 프로젝트 트래블스페이스 여행 블로그 사이트 작업 중 발생한 오류  
블로그 생성 시 검색결과에 반영될 태그를 입력하는 부분이다.

![](https://i.imgur.com/QJM5ztr.gif)

---

## 1. 문제 정의

새로운 블로그를 생성하고 수정하는 페이지를 맡았다. input 에 해시태그를 입력하고 Enter키를 눌렀을 때 태그들이 아래에 하나씩 생성되는 기능을 구현하다가 발견한 오류이다.

영어를 입력하면 문제없지만 한글을 입력했을 때에만 마지막 글자가 중복으로 입력되는 오류를 발견했다.

```jsx
// 태그
<Input
	...
	value={tagInput}
	onKeyDown={handleTags}
/>

// 이벤트 실행 함수
function handleTags(e: React.KeyboardEvent<HTMLInputElement>) {
  if (!tagInput) return;
  const newTag = tagInput.trim().split(" ").join("_");

  if (e.key === "Enter") {
    if (planetInfo.hashtags && planetInfo.hashtags.length < 5) {
      setPlanetInfo({
        ...planetInfo,
        hashtags: [...planetInfo.hashtags, newTag],
      });
    } else {
      alert("최대 5개만 작성 가능합니다.");
    }
    setTagInput("");
  }
}
```

---

## 2. 사실 수집

사용한 `onKeyDown` 이벤트를 MDN 공식문서를 통해 찾아보았고, 아래와 같은 안내 문구를 발견했다.

_**한중일 사용자의 브라우저 간 호환성을 개선하기 위해 IME 컴포지션 중에 키다운 및 키업 이벤트가 발생하도록 변경되었습니다. 컴포지션의 일부인 모든 키다운 이벤트를 무시하려면 다음과 같이 하세요.**_

> Since Firefox 65, the `keydown` and `keyup` events are now fired during IME composition, to improve cross-browser compatibility for CJKT users ([Firefox bug 354358](https://bugzil.la/354358)). To ignore all `keydown` events that are part of composition, do something like this (229 is a special value set for a `keyCode` relating to an event that has been processed by an IME):

```jsx
eventTarget.addEventListener('keydown', event => {
  if (event.isComposing || event.keyCode === 229) {
    return;
  }
  // do something
});
```

`keyDown`, `keyUp` 이벤트에 한글 뿐만 아니라, 일본어, 중국어 등에서 발생하는 문제이며 이를 무시하는 방법을 제시하고 있다.

---

## 3. 원인 추론

문제의 원인이라고 추론되는 [**IME composition**](https://ko.wikipedia.org/wiki/%EC%9E%85%EB%A0%A5%EA%B8%B0)에 대해서 알아보기로 했다.

> ### IME composition
>
> 입력기 또는 입력 방식 편집기(input method editor, IME)는 한글, 한자처럼 컴퓨터 자판에 있는 글자보다 수가 더 많은 문자를 계산하거나 조합하여 입력해 주는 시스템 소프트웨어이다.

IME는 영어가 아닌 한글, 일본어, 중국어와 같은 언어를 다양한 브라우저에서 지원하도록 언어를 변환시켜주기 위한 OS 단계의 어플리케이션을 말한다.

그러나 IME 과정에서 keydown 이벤트가 발생하면, OS와 브라우저에서 해당 이벤트를 모두 처리하기 때문에 keydown 이벤트가 중복으로 발생하게 되는 것이다.

즉, IME를 통해 한글, 일본어, 중국어 등을 변환하는 과정(composition)에서 keydown 이벤트는 OS 뿐만 아니라 브라우저에서도 처리되기 때문에 중복 발생된다.

---

## 4. 조사방법 결정

### 방법 1) isComposing ✅

![](https://i.imgur.com/JClvyka.gif)

`isComposing` 의 boolean값이 어떨 때 변화하는지 콘솔에 찍어봤다. 키보드로 한글 키를 누르면 조합 중일 때에는 false, 조합이 완료된 때에는 true를 반환해준다. ('ㅎ' `keyDown` 이벤트, 'ㅏ' `keyDown` 이벤트, 'ㄴ' `keyDown` 이벤트 등이 순차적으로 발생)

즉, 한글을 입력할 때, IME가 활성화되고 사용자가 글자를 조합하는 동안 `keyDown` 이벤트가 반복해서 발생할 수 있다.

다시 문서에서 제안하는 해결방안 코드를 살펴보자면 `isComposing`이 true인 순간은 아직 IME에 의한composition 단계이므로, 이 단계에서 이벤트가 발생하지 않도록 하는 방법을 사용할 수 있다.

### 방법 2) onKeyPress 이벤트 사용

`keyDown, keyUp` 이벤트는 특정 키의 누름과 뗌을 감지하고, `keyPress` 는 텍스트 입력을 감지한다.

> "a" 문자를 입력했을 때, keyDown, keyUp 이벤트에서는 **키 코드**로 65 (대문자 'A'와 동일)가 반환되고, keyPress 이벤트에서는 **문자 코드**로 97 (소문자 'a')가 반환됩니다.

브라우저가 조합 문자 입력을 `keyDown` 이벤트 단계에서 처리하고, `keyPress` 이벤트는 실제 완성된 문자를 나타내기 때문에 중복 실행되는 오류가 발생하지 않는다.

![](https://i.imgur.com/9bCRjkC.png)

하지만 `onKeyPress` 이벤트는 공식문서에서 더 이상 지원하지 않는 이벤트이므로 첫번째 방법을 시도해보기로 했다.

---

## 5. 조사 방법 구현

`isComposing` 속성이 없다는 타입 오류가 나타났다.
![](https://i.imgur.com/GvxeMbP.png)

서치해본 결과 타입스크립트에서 지원하는 타입속성이 있어서 해결하였다.
![](https://i.imgur.com/nt3bOC8.png)
![](https://i.imgur.com/bkv0jbM.png)

찾아보면서 알게 되었는데, 타입스크립트를 사용하지 않는 리액트에서는 따로 composition 이벤트 핸들러를 사용해야 한다고 한다.
![](https://i.imgur.com/a9usAb2.png)

---

## 6. 결과 관찰

중복 실행되는 오류없이 아주 잘 작동되는 걸 확인할 수 있다.
![](https://i.imgur.com/CARcz5F.gif)

```jsx
function handleTags(e: React.KeyboardEvent<HTMLInputElement>) {
    if (e.nativeEvent.isComposing) return;
    if (!tagInput) return;

    const newTag = tagInput.trim().split(" ").join("_");

    if (e.key === "Enter") {
      if (planetInfo.hashtags && planetInfo.hashtags.length < 5) {
        setPlanetInfo({
          ...planetInfo,
          hashtags: [...planetInfo.hashtags, newTag],
        });
      } else {
        alert("최대 5개만 작성 가능합니다.");
      }
      setTagInput("");
    }
  }
```

---

### 참고자료

[Element: keydown event - Web APIs | MDN](https://developer.mozilla.org/en-US/docs/Web/API/Element/keydown_event)  
[Common components (e.g. div) – React](https://react.dev/reference/react-dom/components/common#compositionevent-handler)  
[React, 한글 입력시 keydown 이벤트 중복 발생 현상](https://velog.io/@dosomething/React-%ED%95%9C%EA%B8%80-%EC%9E%85%EB%A0%A5%EC%8B%9C-keydown-%EC%9D%B4%EB%B2%A4%ED%8A%B8-%EC%A4%91%EB%B3%B5-%EB%B0%9C%EC%83%9D-%ED%98%84%EC%83%81)  
[MMZ 일지 19. 한글 입력할 때 2번 입력이 되는 경우 in React, Typescript](https://velog.io/@euji42/solved-%ED%95%9C%EA%B8%80-%EC%9E%85%EB%A0%A5%EC%8B%9C-2%EB%B2%88-%EC%9E%85%EB%A0%A5%EC%9D%B4-%EB%90%98%EB%8A%94-%EA%B2%BD%EC%9A%B0#%EC%9B%90%EC%9D%B8--imeinput-method-editor-%EB%AC%B8%EC%A0%9C)
