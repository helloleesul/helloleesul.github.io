---
date: '2024-03-28'
title: '가상머신(VM)으로 배포하는 방법'
categories: ['개발']
summary: 'VM으로 PM2와 Nginx을 활용해 Express.js 백엔드와 React.js 프론트엔드 배포하기'
thumbnail: './vm-deploy.png'
---

> VM으로 PM2와 Nginx을 활용해 Express.js 백엔드와 React.js 프론트엔드 배포하기

### 들어가며

지난 프로젝트를 백엔드(cloudtype), 프론트엔드(vercel) 각각 따로 배포하다가 CORS 에러로 인해 Azure VM을 생성해서 한 환경에 새로 배포하였다.

배포하면서 터미널이 익숙해지기도 했고, 특히 vim같은 편집기가 무섭지 않아졌다. 사용했던 명령어들을 정리하고 싶어 기록해본다.

---

# SSH public key

배포 서버 접속하기

```bash
ssh -i ~/{SSH public key file} {username}@{ip}
```

### ⚠️ 권한 오류 시

change mode 400으로 해당 파일을 소유자에게만 읽을 수 있게 권한을 축소시킨다.

```bash
chmod 400 ~/{SSH public key file}
```

---

# 배포 서버 환경 설정

리눅스 시스템 최신화하기

```bash
sudo apt update -y && sudo apt upgrade -y
```

node 설치하기

```bash
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.37.2/install.sh | bash source ~/.bashrc
nvm install 16.14.0
nvm use 16.14.0

# 설치 확인
npm -v
node -v
```

---

# express 앱 실행

프로젝트 폴더 가져오기

```bash
git clone {repository url}
cd {project directory}
npm install
```

환경 변수 파일 생성하기

```bash
nano .env
# 또는
vim .env
```

| nano                                     | vim                                                                                           |
| ---------------------------------------- | --------------------------------------------------------------------------------------------- |
| - `Ctrl + O`: 저장<br>- `Ctrl + X`: 종료 | - `i`: 편집 모드<br>- `esc`: 명령모드<br>- `:w`: 저장<br>- `:q`: 종료<br>- `:wq`: 저장과 종료 |

실행 확인하기

```bash
npm run start
```

**PM2 (Process Manager 2)** 설치하기

```bash
# PM2 - Node.js 애플리케이션의 프로세스 관리 및 실행 도구
npm install --global pm2

# 백엔드 폴더에서 실행
pm2 --name express start npm -- run start

# 현재 실행 중인 프로세스 확인
pm2 list

# 특정 프로세스 종료
pm2 delete {number}
```

**Nginx** 설치하기

```bash
# Nginx - 웹 서버 소프트웨어
sudo apt install nginx
```

---

# 경로 설정하기

```bash
# 설정 파일 수정
sudo nano /etc/nginx/sites-available/default
```

프론트엔드 경로 설정하기

```bash
location / {
  # First attempt to serve request as file, then
  # as directory, then fall back to displaying a 404.

  # 프론트 빌드 파일 경로
  root /home/{username}/{FE directory}/build;
  index index.html index.htm;

  # 새로 고침 시 페이지 유지
  try_files $uri $uri/ /index.html;
}
```

백엔드 API 경로 설정하기

```bash
location /api {
  # proxy_pass 속성으로 백엔드 서버와 연결해주세요.
  proxy_pass http://127.0.0.1:{port 번호};
}
```

파일 경로 설정하기

```bash
location /uploads {
  alias /{실제 경로};

  # 자동 디렉토리 리스트 생성 기능, 보안 문제로 사용하지 않는 것이 안전
  autoindex on;
}
```

### ⚠️ 파일 수정 확인 점검

```bash
# 문법 오류 없음을 테스트
sudo nginx -t

# nginx 재실행 (재실행해야, 수정된 설정파일이 반영됨)
sudo systemctl reload nginx

# 만약 위 명령어가 안 되는 경우
sudo service nginx restart
sudo service nginx reload

# nginx 서비스 상태 확인
sudo service nginx status
```
