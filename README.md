<!-- PROJECT SHIELDS -->
<!--
*** I'm using markdown "reference style" links for readability.
*** Reference links are enclosed in brackets [ ] instead of parentheses ( ).
*** See the bottom of this document for the declaration of the reference variables
*** for contributors-url, forks-url, etc. This is an optional, concise syntax you may use.
*** https://www.markdownguide.org/basic-syntax/#reference-style-links
-->
[![Contributors][contributors-shield]][contributors-url]
[![Forks][forks-shield]][forks-url]
[![Stargazers][stars-shield]][stars-url]
[![Issues][issues-shield]][issues-url]
[![MIT License][license-shield]][license-url]

<!-- PROJECT LOGO -->
<br />
<div align="center">
<!--   <a href="https://github.com/helloleesul/helloleesul.github.io">
    <img src="https://github.com/helloleesul/helloleesul.github.io/blob/main/public/android-chrome-512x512.png" alt="Logo" width="80" height="80">
  </a> -->

  <h3 align="center">개발 블로그</h3>

  <p align="center">
    개발 학습과 생각을 기록한 SSG를 활용하여 빠르고 SEO 최적화된 블로그입니다.
    <br />
    <br />
    <a href="https://helloleesul.github.io/">데모 사이트</a>
    ·
    <a href="https://github.com/helloleesul/helloleesul.github.io/issues">버그 신고하기</a>
    ·
    <a href="https://github.com/helloleesul/helloleesul.github.io/issues">기능 요청하기</a>
  </p>
</div>

<!-- ABOUT THE PROJECT -->
## 프로젝트 소개

[![Product Name Screen Shot][product-screenshot]](https://helloleesul.github.io/)

**◼️ 목적**

개발 공부를 하면서 생각하고 기억하고 싶은 것들을 기록하고, 미래의 저에게 도움이 될 글쓰기 습관을 만드는 것입니다. 또한, 개발자로서 직접 블로그를 만드는 것에 의미가 있다고 판단했습니다.

**◼️ 목표**

- **개발 문화에 참여해보기**   
  개발 블로그를 통해 제 생각을 공유하고, 그 과정을 추적하면서 저의 성장을 기록합니다.   
  GitHub의 Discussions 기능을 활용한 *[giscus](https://giscus.app/)* 댓글 시스템으로 커뮤니티 환경을 구축합니다.

- **SEO 최적화**   
  Google Search Console과 네이버 서치어드바이저 도구를 이용해 블로그를 많은 사람들에게 노출시킵니다.   
  Open Graph를 적용하여 SNS로 공유 시 어떤 게시글인지 알 수 있도록 메타정보를 보여줍니다.


### 기술 스택

[![Gatsby.js]][Gatsby-url] [![React.js]][React-url] [![TypeScript]][TypeScript-url] [![GraphQL]][GraphQL-url] [![Emotion]][Emotion-url]   

### 기능 목록
| 화면 | 설명 |
| --- | --- |
| 게시물 목록 | 조회, 무한 스크롤, 카테고리별 게시물 필터링 |
| 게시물 상세 | 조회, 목차 네비게이션, 댓글, 이전 및 다음 글 네비게이션 |
| 다크 모드 | 시스템 환경에 따라 자동으로 다크 모드 설정, Context API, localStorage으로 전역 테마 설정 관리|

<!-- GETTING STARTED -->
## 설치 방법
다음은 프로젝트를 로컬로 설정하는 방법에 대한 지침을 제공하는 예시입니다. 로컬 복사본을 실행하려면 다음의 간단한 예시 단계를 따라주세요.    

1. 리포지토리를 Clone합니다.
   ```sh
   git clone https://github.com/helloleesul/helloleesul.github.io.git
   ```
2. YARN 패키지를 설치하고 실행합니다.
   ```sh
   yarn
   yarn start
   ```





<!-- USAGE EXAMPLES -->
## 사용법

1. gatsby-config.js 파일에서 siteMetaData를 설정합니다.
2. `contents`폴더에 카테고리 폴더를 만들고 Markdown 파일을 생성해 아티클을 만듭니다.
   ```md
    ---
    date: '2024-XX-XX'
    title: '제목'
    categories: ['카테고리']
    summary: '요약글'
    thumbnail: './thumbnail.jpg'
    ---
    내용
   ```
3. 작성한 코드를 커밋하고 리포지토리에 Push합니다.
4. 빌드하여 아티클을 사이트에 업로드합니다.
   ```sh
   yarn clean
   yarn deploy
   ```
<!-- ROADMAP -->

## 로드맵

- [x] 구글 서치 콘솔 어드바이저 등록하기
- [x] 네이버 서치 어드바이저 등록하기
- [x] 포스트 조회할 때 하단에 이전 다음 글 네비게이션 추가하기
- [ ] 프로필 정보 gatsby-config 데이터로 받아와서 적용하기
- [ ] 테마 모드별로 다양한 색상 지원하기
- [ ] 검색 기능 추가하기

<!-- CONTRIBUTING -->
## 기여 방법

기여는 오픈 소스 커뮤니티를 배우고, 영감을 얻고, 창조할 수 있는 놀라운 공간으로 만들어 줍니다.    
더 나은 방향으로 개선할 수 있는 제안이 있다면 리포지토리를 Fork하고 Pull Request를 만들어 주세요. `enhancement(개선)` 태그를 사용하여 이슈를 열 수도 있습니다.    
모든 기여에 진심으로 감사드립니다.

1. 프로젝트를 Fork합니다.
2. 새로운 기능 브랜치를 만듭니다. (`git checkout -b feature/AmazingFeature`)
3. 변경한 코드를 커밋합니다. (`git commit -m 'Add some AmazingFeature'`)
4. 브랜치를 Push합니다. (`git push origin feature/AmazingFeature`)
5. 새로운 Pull Request를 생성합니다.




<!-- CONTACT -->
## 연락처

이슬 [@helloleesul](https://github.com/helloleesul) - suerish.e@gmail.com

프로젝트 링크: [https://github.com/helloleesul/helloleesul.github.io](https://github.com/helloleesul/helloleesul.github.io)





<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->
[contributors-shield]: https://img.shields.io/github/contributors/helloleesul/helloleesul.github.io.svg?style=for-the-badge
[contributors-url]: https://github.com/helloleesul/helloleesul.github.io/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/helloleesul/helloleesul.github.io.svg?style=for-the-badge
[forks-url]: https://github.com/helloleesul/helloleesul.github.io/network/members
[stars-shield]: https://img.shields.io/github/stars/helloleesul/helloleesul.github.io.svg?style=for-the-badge
[stars-url]: https://github.com/helloleesul/helloleesul.github.io/stargazers
[issues-shield]: https://img.shields.io/github/issues/helloleesul/helloleesul.github.io.svg?style=for-the-badge
[issues-url]: https://github.com/helloleesul/helloleesul.github.io/issues
[license-shield]: https://img.shields.io/github/license/helloleesul/helloleesul.github.io.svg?style=for-the-badge
[license-url]: https://github.com/helloleesul/helloleesul.github.io/blob/main/LICENSE.txt

[product-screenshot]: https://github.com/helloleesul/helloleesul.github.io/assets/55569192/f69948b6-9bdb-4bb6-b49e-1232792f48f5

[React.js]: https://img.shields.io/badge/React.js-61DAFB?style=for-the-badge&logo=react&logoColor=20232A
[React-url]: https://reactjs.org/
[Gatsby.js]: https://img.shields.io/badge/gatsby.js-663399?style=for-the-badge&logo=gatsby&logoColor=white
[Gatsby-url]: https://www.gatsbyjs.com
[Emotion]: https://img.shields.io/badge/emotion-C43BAD?style=for-the-badge&logo=emotion&logoColor=white
[Emotion-url]: https://emotion.sh/docs/introduction
[TypeScript]: https://img.shields.io/badge/typescript-3178C6?style=for-the-badge&logo=typescript&logoColor=white
[TypeScript-url]: https://www.typescriptlang.org
[GraphQL]: https://img.shields.io/badge/graphql-E10098?style=for-the-badge&logo=graphql&logoColor=white
[GraphQL-url]: https://graphql.org
