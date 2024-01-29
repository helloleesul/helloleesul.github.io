---
date: '2023-05-18'
title: 'CSS Flex를 사용해보자.'
categories: ['CSS']
summary: 'CSS float이 정말 싫어서 두번째로 싫은 inline-block을 사용했었다.'
thumbnail: './css-flex.png'
---

# Flexbox

2018년 아르바이트하던 카페 근처 서점에서 [이 책](https://product.kyobobook.co.kr/detail/S000001874914)을 발견했다.  
이제 막 `HTML, CSS`를 책 한권으로 끝내고 어떤 걸 더 알아야할지 잘 모르던 때였다. 기회만 되면 서점에 가서 웹 개발코너 책 구경을 했다. 마침 아주 얇은 이 책에서 `grid`와 `flexbox layout`을 알게 되었다.

책을 다 읽고나서 어렵다고 느꼈다. _이런게 있구나_ 의 상태로 머무르기로 했다.  
헤더의 네비게이션 메뉴나 상점 아이템같은 레이아웃을 퍼블리싱할 때마다 더 많은 설정을 하는 것이 귀찮아도 `inline-box`를 사용했다. 왜냐면 `flex`는 너무 어렵고 복잡해보이는 속성이었다.

> 퍼블리셔로 첫 취업 후 깨달았다. 생각보다 훨씬 많은 요소들을 `inline-box`로 디자인해야했고,  
> 나는 더 쉽고 좋은 무기들을 알아야 할 필요를 느꼈다.

---

## 부모에게 display: flex를 적용하자.

```js
/* flex container 라고 설정한 부모 요소에게 적용한다 */
<부모 요소>
	<자식 요소></자식 요소>
  <자식 요소></자식 요소>
  <자식 요소></자식 요소>
  ...
</부모 요소>
```

`block`요소를 가로로 배치하고 싶다면 `flex`를 사용해야한다.  
**부모 요소**에게 `display: flex`속성 값으로 `flex container`그룹을 설정하여 아래 자식들을 나란히 배치시킬 수 있다.

> 부모 요소에게는 `height` 값이 있어야 후술할 **Cross Axis**의 정렬이 가능하다.

---

## 두 종류의 Axis (Main, Cross)

`flex-direction`의 값에는 **중심 방향(Main)** 과 **교차 방향(Cross)** 이 존재하는데, 각 값의 방향들은 아래와 같다.

|       | row  | column |
| :---: | :--: | :----: |
| Main  | 가로 |  세로  |
| Cross | 세로 |  가로  |

![](https://user.oc-static.com/upload/2018/06/14/15289918022085_1.png)

그래서 `flex-direction`을 기준으로 중심 방향인 `Main Axis`과 교차 방향인 `Cross Axis`에 따라 설정하는 속성이 지정되어있다. 변경하고 싶은 정렬을 설정할 때 아래의 속성을 인지하면 너무나 편리하게 사용할 수 있다.
_**이것만 알고 이해해도 사용하는데 큰 도움이 된다.**_

| justify-content | align-items |
| :-------------: | :---------: |
|    Main Axis    | Cross Axis  |

---

## flex-wrap과 align-content

`flex`가 사용된 부모는 자식의 너비값을 무시하고 한 줄로 나란히 꾸깃꾸깃 세워버린다. 자식의 너비값을 유지하면서 부모의 너비를 넘어서면 다음 줄로 세우려면 `flex-wrap`을 사용한다. 이 때 생기는 `wrap`사이 간격을 조정하는데 필요한 속성이 `align-content` 이다.

<iframe height="300" style="width: 100%;" scrolling="no" title="align-content" src="https://codepen.io/leesul/embed/OJBBMxY?default-tab=result" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href="https://codepen.io/leesul/pen/OJBBMxY">
  align-content</a> by sul (<a href="https://codepen.io/leesul">@leesul</a>)
  on <a href="https://codepen.io">CodePen</a>.
</iframe>

---

## 특별한 자식에게 align-self

자식들 중 특정 자식의 배치를 해당 자식에게만 변경하고 싶을때 설정한다.

> 부모가 아닌 변경할 해당 자식요소에게 `align-self` 속성을 쥐어준다.

![](https://velog.velcdn.com/images/helloleesul/post/e59ce205-4ddf-4d1b-8260-58136a543898/image.png)

---

### 참고자료

[A Complete Guide to Flexbox](https://css-tricks.com/snippets/css/a-guide-to-flexbox/)  
[CSS 플렉스박스(flex) flex-grow와 flex-shrink 속성의 완벽 이해](https://blogpack.tistory.com/863)  
[이번에야말로 CSS Flex를 익혀보자](https://studiomeal.com/archives/197)  
[🕹 FLEXBOX FROGGY 게임](https://flexboxfroggy.com/#ko)
