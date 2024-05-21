---
date: '2024-05-16'
title: 'String, Array의 includes 메서드는 비슷하지만 다르다.'
categories: ['개발']
summary: '인프런 워밍업 클럽 스터디 1기 FE - 과제'
thumbnail: './inflearn-warmup-club-study.png'
---

> 과제를 수행하며 고민하고, 깨닫게 된 점들을 기록합니다.  
> 같은 목표를 가진 분들과 함께 발전해 나가길 기대합니다. ☺️

---

## [포켓몬 도감 앱](https://github.com/helloleesul/inflearn-warmup-club-study/tree/main/pokedex-app)

![](https://i.imgur.com/61BJsAY.gif)

---

### 알게된 것 (String, Array의 includes 메서드)

- **String**

  - 메인페이지에서 검색어를 입력할 때, 검색어가 포함된 객체들로 이루어진 배열을 따로 `searchResults` 라는 상태로 저장해주었다. 이 `searchResults` 상태를 연관검색어로 노출시키기 위함이었다.
  - `pokemonList` 배열에서 검색어(`searchInput`)가 포함된 name을 가진 객체만 모아서(배열을 필터링해) 반환해주는 filter, includes 메서드를 사용했다. 여기서 사용한 includes 메서드의 `pokemon.name` 는 `String` 타입이다.
  - 따라서 'h' 라는 검색어를 입력했을때, 객체의 name 문자열 중에 'h'가 부분으로 포함된 객체들도 가져올 수 있다.

  ```jsx
  // Main Page
  // 포켓몬 이름(string)에 검색input이 포함된 것만 필터해서 반환
  const matched = pokemonList.filter(
    pokemon => pokemon.name.includes(searchInput), // true인 객체들만 반환
  );
  // 검색input값이 있을 때에만 검색 결과 배열에 저장
  if (searchInput) {
    setSearchResults(matched);
  }

  // String.prototype.includes
  const sentence = 'The quick brown fox jumps over the lazy dog.';
  console.log(sentence.includes('quick')); // true
  console.log(sentence.includes('h')); // true
  console.log(sentence.includes('Quick')); // false, 대소문자 구분
  ```

- **Array**

  - 연관 검색어 배열에서 특정 검색어를 클릭 했을 때, 검색 input에는 선택된 특정 검색어를 value로 가지고, 연관 검색어 요소를 사라지게하는 기능을 구현하고자했다.
  - 선택된 특정 검색어가 `searchInput`가 되었을 때, 연관 검색어 배열에도 동일한 검색어를 가진다. (검색어 입력 시 필터링되게 했음으로)
  - 검색 input의 현재 value(`searchInput`)와 연관 검색어 목록이 정확히 동일하다면 연관 검색어를 보여주는 요소를 사라지게 하면 되었다. 연관 검색어 배열(`searchResults`)의 객체를 name 키만 가진 문자열 배열로 만들어 준 후(map 메서드), `Array`의 includes 메서드를 사용했다.
  - 따라서 'pikachu' 라는 검색어를 클릭했을때, 배열의 요소 중에 정확히 'pikachu'가 있다면 true를 반환한다.

  ```jsx
  // SearchBar
  // 검색input 값이 검색 이름(array)에 포함된 경우 true일 때 (정확히 같아야 함)
  if (searchResults.map(result => result.name).includes(searchInput)) {
    setSearchShow(false); // 연관 검색 숨기기
  }

  // Array.prototype.includes
  const fruits = ['apple', 'banana', 'mango'];
  console.log(fruits.includes('banana')); // true
  console.log(fruits.includes('ba')); // false
  ```

---

### 정리하자면,

- 타입 차이  
  `Array.prototype.includes`는 배열의 요소를 찾기 위해 사용된다.  
  `String.prototype.includes`는 문자열 내의 부분 문자열을 찾기 위해 사용된다.
- 비교 방식  
  배열에서는 엄격한 동등성(===) 비교를 사용한다.  
  문자열에서는 대소문자를 구분하는 포함 여부를 확인한다.

---

### 마치며

부분 문자열을 찾기(String) 위한 검색어 필터링과, 배열에서 딱 맞는 요소를 찾기(Array) 위한 기능 이렇게 2개로 각 includes가 데이터 타입에 따라 어떻게 작용되는지 비교해봤다.  
데이터타입에 따라 다르게 적용하는 메서드들이 더 있을 거 같은데, 이번 과제를 하다가 해당 메서드를 딱 비교하기 좋을 것 같았다. 기능을 어떻게 구현할지에 대한 고민과 어떤 코드를 활용하면 좋을지, 내가 왜 이런 코드를 작성하게 되었는지 생각해 볼 수 있었고 재밌는 시간이었다.
