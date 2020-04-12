---
layout: post
tags: [github, jekyll]
---

포스트에 **태그 기능**을 추가해보기로 했다!

현재 이 블로그를 설명하자면 깃헙 레파지토리를 생성해서 [jekyll] 테마를 적용한것인데, 나는 [jekyll theme] 중에서 [plainwhite]으로 설정하였고 계속해서 커스터마이징하고있다.  
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

제일 눈여겨봐야할 폴더인 _layout은 말 그대로 페이지 레이아웃을 담당하고있다. 최상단 파일인 index.md에는

```markdown
---
layout: home
---
```

이렇게 적혀있는데 _layout 폴더에 home.html 파일을 가리킨다.

[jekyll theme]: http://jekyllthemes.org/
[plainwhite]: https://github.com/thelehhman/plainwhite-jekyll
[jekyll]: https://jekyllrb-ko.github.io/