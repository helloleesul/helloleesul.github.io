---
date: '2023-05-15'
title: 'CSS cascading과 마진병합 현상'
categories: ['UIUX']
summary: '마지막으로 HTML과 CSS 공부를 한지 3년이 넘은 것 같다.'
thumbnail: './css-cascading.png'
---

> 부트캠프에서 공부를 시작하며 작성한 TIL입니다. 벨로그에서 개인 블로그로 게시물을 옮겼습니다.

# 오늘 공부한 내용 📖

## HTML/CSS 기초문법

---

### 캐스케이딩(Cascading)

CSS의 우선순위를 결정하는 세 가지 요소

1. 순서 - 나중에 적용한 속성값의 우선순위가 높음

```css
    p {
        color: red;
        color: blue; ✅
    }
```

2. 디테일 - 더 구체적으로 작성된 선택자의 우선순위가 높음

```css
header p ✅ {
  color: red;
}
p {
  color: blue;
}
```

3. 선택자  
   **style attribute > id selector > class selector > tag selector** 순으로 우선순위가 높음

```html
<h3 style="color: pink; ✅" id="color" class="color">color</h3>
```

```css
#color {
  color: blue;
}
.color {
  color: red;
}
h3 {
  color: green;
}
```

---

### 마진 병합 현상

- 형제지간의 마진 병합
  : margin-bottom과 bottom-top 중 숫자가 큰 값으로 적용

```html
<div class="box1">Hello World</div>
<div class="box2">Hello World</div>
```

```css
.box1 {
  margin-bottom: 150px;
}
✅ .box2 {
  bottom-top: 100px;
}
```

- 부모 자식간의 마진 병합
  : 자식 뿐만 아니라 부모에도 영향을 미침

```html
<main role="main">
  ✅
  <!-- main 태그의 margin-top의 100px 공간이 생김 -->
  <article></article>
</main>
```

```css
article {
  width: 200px;
  height: 200px;
  margin-top: 100px;
}
```

---

## 느낀점

마지막으로 HTML과 CSS 공부를 한지 3년이 넘은 것 같다. 거의 다 알고있다고 생각하며 정말 오랜만에 HTML,CSS 기초문법을 훑었고 오늘 공부한 내용 중에서 다시 한번 체크하게 된 부분을 기록했다. 요소검사 열어놓고 되는 방향으로 지웠다 썼다하는 식의 작업을 종종해왔는데, 잊고있거나 신경쓰지 않은 부분들이 역시 있었다. 다시 복습하게 되어 다행이다. 무의식적으로 코드를 쓰고 그냥 넘어갔던 것들을 쌓아두지말아야지. 🤔

오늘은 부트캠프 첫 날이었는데, 생각보다 강의양이 많다고 느껴졌다. 정말 집중하며 들어야할 강의 외에도 출석체크하는 부분같은 신경써야하는 것들이 있어서 조금 빠듯한 기분이 들었다. 내일부터는 조금 일찍 시작해서 원래 듣고있던 강의도 들을 수 있게 페이스조절을 해나가야겠다. 공부하는 느낌에 취하지말고 어떤게 중요한지 마음에 새기고 진지하게 임하자.
