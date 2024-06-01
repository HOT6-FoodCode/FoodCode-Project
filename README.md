# 맛집 공유 뉴스 피드 사이트

이 프로젝트는 React와 Supabase를 사용하여 맛집을 공유하고 리뷰를 작성할 수 있는 뉴스 피드 사이트입니다.


## 목차

-   [프로젝트 소개](#프로젝트-소개)
-   [기능](#기능)
-   [폴더 구조](#폴더-구조)
-   [기술 스택](#기술-스택)
-   [팀원 및 역할](#팀원-및-역할)


## 프로젝트 소개

이 프로젝트는 사용자들이 맛집을 공유하고, 다른 사용자의 리뷰를 확인하며, 자신만의 맛집 리뷰를 작성할 수 있는 플랫폼을 제공합니다. React로 프론트엔드를 구성하고, Supabase로 백엔드와 데이터베이스를 관리합니다.


## 기능

-   **사용자 인증**: 회원가입, 로그인, 로그아웃 기능
-   **맛집 게시물**: 맛집에 대한 게시물 작성, 수정, 삭제 기능
-   **리뷰 작성**: 각 게시물에 대한 리뷰 작성 및 조회 기능
-   **팔로우 기능**: 게시물 작성자에 대한 팔로우 기능
-   **마이 페이지**: 사용자가 작성한 글 및 팔로우한 사람의 글 보기 기능
-   **실시간 데이터 업데이트**: Supabase의 실시간 데이터베이스 기능을 활용한 실시간 업데이트


## 폴더 구조 (수정 필요)

```bash
├── public
│   ├── index.html
│   └── ...
├── src
│   ├── components
│   ├── pages
│   ├── api
│   ├── App.js
├── .env.local
├── package.json
└── README.md
```


## 기술 스택

-   **프론트엔드**: React, JavaScript, CSS
-   **백엔드**: Supabase
-   **데이터베이스**: PostgreSQL (Supabase 제공)
-   **호스팅**: Vercel


## 팀원 및 역할 (수정 필요)

-   **복예린**: 사용자 인증 기능 (회원가입, 로그인, 로그아웃)
-   **최예진**: 맛집 게시물 CRUD 기능 (작성, 수정, 삭제)
-   **이가현**: 게시물에 대한 댓글 CRUD 기능 (작성, 수정, 삭제) 
-   **임종하**: 팔로우, 조회수 기능, Supabase 설정 및 데이터베이스 관리
-   **조현경**: 마이 페이지 기능 (사용자가 작성한 글 및 팔로우한 사람의 글 조회)
  
