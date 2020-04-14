---
layout: post
tags: [jekyll, blog]
---

포스트에 **태그 기능**을 추가해보기로 했다!

현재 이 블로그를 설명하자면 깃헙 레파지토리를 생성해서 [jekyll] 테마를 적용한것인데, 나는 [jekyll theme] 중에서 [plainwhite]으로 설정하였고 내가 원하는 대로 커스터마이징하고있다. 태그기능을 추가하는 방법을 기록하기 전에 이 블로그의 디렉토리 구조를 대략 보자면 이러하다.

### **디렉토리 구조**
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

### **index.md**
```markdown
---
layout: home
---
```

달랑 이렇게만 적혀있는데 `_layouts` 폴더에 `home.html`을 레이아웃으로 설정하고 있다는 뜻이다. 이런 식으로 각 파일마다 설정한 레이아웃을 선언하고 있으며 태그, 카테고리, 댓글 등 많은 기능을 선언하여 설정할 수 있다.

### **_posts/year-month-day-title.md**
```markdown
---
layout: post
tags: [jekyll, blog]
---
```

이 포스트는 `_posts` 폴더 안에 `year-month-day-title.md`로 추가하여 만들고 있고, `post.html`을 레이아웃으로 설정해두었으며 태그는 `tags`라는 변수 안에 배열로 선언하였다. 하지만 이렇게 태그를 선언하여도 바로 보이진 않는다. 설정한 레이아웃 파일을 수정하여 태그를 보이게 따로 처리해야한다. 위에 적힌대로 `post.html` 파일로 이동하여 살펴보자.

### **_layouts/post.html**
<pre class="highlight" style="padding: 0 20px;">
<code>
---
layout: default
---
&lt;div class="post-container">
	...
	&lt;ul class="post-tags">
		&lcub;&percnt; if page.tags &percnt;&rcub;
			&lcub;&percnt; for tag in page.tags &percnt;&rcub;
				&lt;li>&lcub;{ tag }}</li>
			&lcub;&percnt; endfor &percnt;&rcub;
		&lcub;&percnt; endif &percnt;&rcub;
	&lt;/ul>
	...
</div>
</code>
</pre>

포스트 레이아웃 페이지인 `post.html`는 `default.html`으로 설정하였다는 뜻이고 위와 같은 코드를 삽입하여 `year-month-day-title.md`에 적은 태그 선언을 보여주는 것이다. 글로 적어두니 상당히 헷갈리는 부분이지만 사용하는 에디터툴로 하나씩 살펴보면 어렵지않다.

이제 포스트 목록이 보이는 메인화면에서도 이것과 같은 방법으로 태그들을 추가하고, 클릭한 태그가 삽입된 포스트만 보이도록 설정하면 되는데, 정말 감사하게도 내가 딱 원하는 기능을 구현하는 법을 간단하고 이해하기 쉽도록 정리해둔 포스팅[^footnote1]이 있어서 천천히 따라해보면 좋을 듯 싶다![^footnote2]

[^footnote1]: [재그지그님의 개발 블로그]의 [태그기능 추가 포스트]
[^footnote2]: 외부에서 태그 클릭 시 해당 태그로 필터링 된 포스트 목록으로 이동하는 것까지는 구현했으나 다른 태그 클릭 시 쿼리 파라미터를 동적으로 바꿔주는 함수는 이해가 어려워 구현하지 못하였다.. 😢

[jekyll theme]: http://jekyllthemes.org/
[plainwhite]: https://github.com/thelehhman/plainwhite-jekyll
[jekyll]: https://jekyllrb-ko.github.io/
[재그지그님의 개발 블로그]: https://wormwlrm.github.io/
[태그기능 추가 포스트]: https://wormwlrm.github.io/2019/09/22/How-to-add-tags-on-Jekyll.html