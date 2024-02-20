---
date: '2023-05-31'
title: 'JavaScript 객체 생성 방식의 종류'
categories: ['개발']
summary: 'JavaScript에서 객체를 만드는 방법을 알아두자.'
thumbnail: './how-to-create-js-objects.png'
---

## 1. 객체 리터럴

```js
var item1 = {
  title: '가방',
  price: 500000,
  showPrice: () => {
    console.log(`${item1.title} 의 가격은 ${item1.price} 입니다.`);
  },
};

item1.showPrice();
// 가방의 가격은 50000입니다.
```

---

## 2. Object 생성자 함수

```js
var item1 = new Object();

item1.title = '가방';
item1.price = 50000;
item1.showPrice = function () {
  console.log(`${item1.title} 의 가격은 ${item1.price} 입니다.`);
};

item1.showPrice();
// 가방의 가격은 50000입니다.
```

---

## 3. 생성자 함수

```js
function Item(title, price) {
  this.title = title;
  this.price = price;
  this.showPrice = function () {
    console.log(`${this.title}의 가격은 ${this.price}입니다.`);
  };
}

var item1 = new Item('가방', 50000);
item1.showPrice();
// 가방의 가격은 50000입니다.
```

---

## 4. [Object.create](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Object/create)

Object.create() 메서드는 지정된 프로토타입 객체 및 속성(property)을 갖는 새 객체를 만듭니다.

```js
// Shape - 상위클래스
function Shape() {
  this.x = 0;
  this.y = 0;
}

// 상위클래스 메서드
Shape.prototype.move = function (x, y) {
  this.x += x;
  this.y += y;
  console.info('Shape moved.');
};

// Rectangle - 하위클래스
function Rectangle() {
  Shape.call(this); // super 생성자 호출.
}

// 하위클래스는 상위클래스를 확장
Rectangle.prototype = Object.create(Shape.prototype);
Rectangle.prototype.constructor = Rectangle;

var rect = new Rectangle();

console.log('Is rect an instance of Rectangle?', rect instanceof Rectangle);
// true
console.log('Is rect an instance of Shape?', rect instanceof Shape);
// true
rect.move(1, 1);
// Outputs, 'Shape moved.'
```
