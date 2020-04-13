---
layout: post
tags: [github, jekyll]
---

포스트에 **태그 기능**을 추가해보기로 했다!

현재 이 블로그를 설명하자면 깃헙 레파지토리를 생성해서 [jekyll] 테마를 적용한것인데, 나는 [jekyll theme] 중에서 [plainwhite]으로 설정하였고 내가 원하는 대로 커스터마이징하고있다.
태그기능을 추가하는 방법을 기록하기 전에 이 블로그의 디렉토리 구조를 대략 보자면 이러하다.
```
{{ site.url }}
	index.md
	_assets
		img
		js
		font
		css
	_site
	_sass
	_posts
	_layouts
		post.html
		page.html
		home.html
		default.html
	_includes
		head.html
	_config.yml
```

제일 눈여겨봐야할 폴더인 `_layouts`은 말 그대로 레이아웃들을 담당하고있다. 최상단 파일인 `index.md`을 살펴보자.

```markdown
---
layout: home
---
```

달랑 이렇게만 적혀있는데 `_layouts` 폴더에 `home.html`을 레이아웃으로 설정하고 있다는 뜻이다. 이런 식으로 각 파일마다 설정한 레이아웃을 선언하고 있으며 태그, 카테고리, 댓글 등 많은 기능을 선언하여 설정할 수 있다.

```markdown
---
layout: post
tags: [github, jekyll]
---
```

이 포스트들은 `_posts` 폴더안에 `year-month-day-title.md`로 생성하였고, `post.html`을 레이아웃으로 설정해두었으며 태그는 `tags`라는 변수 안에 배열로 선언하였다. 하지만 이렇게 태그를 선언하여도 바로 보이진 않는다. 설정한 레이아웃 파일을 수정하여 태그를 보이게 따로 처리해야한다. 위에 적힌대로 `post.html` 파일로 이동하여 살펴보자.

<pre class="highlight" style="padding: 0 20px;">
<code>
---
layout: default
---
&lcub;&percnt; if page.tags &percnt;&rcub;
	&lcub;&percnt; for tag in page.tags &percnt;&rcub;
</code>
</pre>

지금 보이는 포스트 페이지의 레이아웃은 `default.html`으로 설정하였다는 뜻이다. 레이아웃은 나중에 보기로 하고 

[jekyll theme]: http://jekyllthemes.org/
[plainwhite]: https://github.com/thelehhman/plainwhite-jekyll
[jekyll]: https://jekyllrb-ko.github.io/