# 맛집 공유 뉴스 피드 사이트

## 목차

- [맛집 공유 뉴스 피드 사이트](#맛집-공유-뉴스-피드-사이트)

  - [기술 스택](#기술-스택)
  - [프로젝트 소개](#프로젝트-소개)
  - [기능](#기능)
  - [팀원 및 역할](#팀원-및-역할)
  - [폴더 구조](#폴더-구조)
  - [프로젝트 설치 및 실행 방법](#프로젝트-설치-및-실행-방법)
  - [RESTful API 문서](#RESTful-API-문서)
    <br/>

<br/>
<div align=center><h1>📚기술 스택</h1>
<img src="https://img.shields.io/badge/html5-E34F26?style=for-the-badge&logo=html5&logoColor=white">
<img src="https://img.shields.io/badge/css-1572B6?style=for-the-badge&logo=css3&logoColor=white"> 
<img src="https://img.shields.io/badge/javascript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black"><br/>

<img src="https://img.shields.io/badge/react-61DAFB?style=for-the-badge&logo=react&logoColor=black">
<img src="https://img.shields.io/badge/styledcomponents-DB7093?style=for-the-badge&logo=styledcomponents&logoColor=white">
<img src="https://img.shields.io/badge/redux-764ABC?style=for-the-badge&logo=redux&logoColor=white"> <br/>
<img src="https://img.shields.io/badge/supabase-3FCF8E?style=for-the-badge&logo=supabase&logoColor=white">
<img src="https://img.shields.io/badge/vercel-000000?style=for-the-badge&logo=vercel&logoColor=white">

</div>

<br/>

## 프로젝트 소개

이 프로젝트는 사용자들이 맛집을 공유하고, 다른 사용자의 리뷰를 확인하며, 자신만의 맛집 리뷰를 작성할 수 있는 플랫폼을 제공합니다. React로 프론트엔드를 구성하고, Supabase로 백엔드와 데이터베이스를 관리합니다.

<br/>

## 기능

- **사용자 인증**: 회원가입, 로그인, 로그아웃 기능
- **맛집 게시물**: 맛집에 대한 게시물 작성, 수정, 삭제 기능
- **리뷰 작성**: 각 게시물에 대한 리뷰 작성 및 조회 기능
- **팔로우 기능**: 게시물 작성자에 대한 팔로우 기능
- **마이 페이지**: 사용자가 작성한 글 및 팔로우한 사람의 글 보기 기능
- **실시간 데이터 업데이트**: Supabase의 실시간 데이터베이스 기능을 활용한 실시간 업데이트

<br/>

## 팀원 및 역할

- **복예린**: 사용자 인증 기능 (회원가입, 로그인, 로그아웃)
- **최예진**: 맛집 게시물 CRUD 기능 (작성, 수정, 삭제)
- **이가현**: 게시물에 대한 댓글 CRUD 기능 (작성, 수정, 삭제)
- **임종하**: 팔로우, 조회수, 메인 페이지 및 Supabase API 설정 및 DB 관리
- **조현경**: 마이 페이지 기능 (사용자 작성한 글 조회 및 프로필 수정 기능)

<br/>

## 폴더 구조

```bash
FoodCode-Project
├─ src
│  ├─ .prettierrc
│  ├─ api
│  ├─ App.jsx
│  ├─ assets
│  ├─ components
│  │  ├─ auth
│  │  ├─ Comment
│  │  ├─ common
│  │  ├─ ui
│  ├─ contexts
│  ├─ hooks
│  ├─ index.css
│  ├─ layouts
│  │  ├─ common
│  │  └─ MainLayout
│  ├─ main.jsx
│  ├─ pages
│  │  ├─ Comment
│  │  ├─ LoginPage
│  │  ├─ MainPage
│  │  ├─ MyPage
│  │  ├─ PostDetailPage
│  │  └─ WritePage
│  ├─ redux
│  │  ├─ config
│  │  └─ slices
│  ├─ router
│  └─ utils
└── README.md
```

<br/>

## 프로젝트 설치 및 실행 방법

#### 설치

```bash
git clone https://github.com/username/FoodCode-Project.git
cd FoodCode-Project
yarn install
```

#### 실행

```bash
yarn start
```

<br/>

## RESTful API 문서

### 사용자 인증

#### 회원가입

- **URL**: /api/auth/signup
  <br/>
- **Method**: POST
  <br/>
- **Request Body**:

  ```json
  {
    "email": "user@example.com",
    "password": "password123",
    "nickname": "nickname"
  }
  ```

- **Response**:

  ```json
  {
    "message": "User registered successfully",
    "user": {
      "id": "user-id",
      "email": "user@example.com",
      "nickname": "nickname"
    }
  }
  ```

  <br/>

#### 로그인

- **URL**: /api/auth/login
  <br/>
- **Method**: POST
  <br/>
- **Request Body**:

  ```json
  {
    "email": "user@example.com",
    "password": "password123"
  }
  ```

- **Response**:

  ```json
  {
    "token": "jwt-token",
    "user": {
      "id": "user-id",
      "email": "user@example.com",
      "nickname": "nickname"
    }
  }
  ```

  <br/>

#### 로그아웃

- **URL**: 로그아웃은 클라이언트 측에서 Supabase의 auth.signOut 메서드를 호출하여 수행됩니다. 특별한 URL이 필요하지 않습니다.
  <br/>
- **Method**: POST
  <br/>
- **Response**:

  ```json
  {
    "message": "User logged out successfully"
  }
  ```

  <br/>

#### 현재 사용자 정보 조회

- **URL**: /api/auth/user
  <br/>
- **Method**: GET
  <br/>
- **Response**:

  ```json
  {
    "user": {
      "id": "user-id",
      "email": "user@example.com",
      "nickname": "nickname"
    }
  }
  ```

  <br/>

### 게시물

#### 모든 게시물 조회

- **URL**: /api/posts
  <br/>
- **Method**: GET
  <br/>
- **Response**:

  ```json
  [
    {
      "id": 1,
      "user_id": "user-id",
      "nickname": "nickname",
      "title": "게시물 제목",
      "content": "게시물 내용",
      "image": "image-url",
      "views": 100,
      "rating": 5,
      "created_at": "2024-06-07T00:00:00.000Z"
    }
  ]
  ```

  <br/>

#### 특정 게시물 조회

- **URL**: /api/posts/:postId
  <br/>
- **Method**: GET
  <br/>
- **Response**:

  ```json
  {
    "id": 1,
    "user_id": "user-id",
    "nickname": "nickname",
    "title": "게시물 제목",
    "content": "게시물 내용",
    "image": "image-url",
    "views": 100,
    "rating": 5,
    "created_at": "2024-06-07T00:00:00.000Z"
  }
  ```

  <br/>

#### 게시물 작성

- **URL**: /api/posts
  <br/>
- **Method**: POST
  <br/>
- **Request Body**:

  ```json
  {
    "userId": "user-id",
    "title": "게시물 제목",
    "content": "게시물 내용",
    "image": "image-url",
    "rating": 5
  }
  ```

- **Response**:

  ```json
  {
    "message": "Post created successfully",
    "post": {
      "id": 1,
      "user_id": "user-id",
      "nickname": "nickname",
      "title": "게시물 제목",
      "content": "게시물 내용",
      "image": "image-url",
      "views": 0,
      "rating": 5,
      "created_at": "2024-06-07T00:00:00.000Z"
    }
  }
  ```

  <br/>

#### 게시물 수정

- **URL**: /api/posts/:postId
  <br/>
- **Method**: PUT
  <br/>
- **Request Body**:

  ```json
  {
    "title": "수정된 제목",
    "content": "수정된 내용",
    "image": "new-image-url",
    "rating": 4
  }
  ```

- **Response**:

  ```json
  {
    "message": "Post updated successfully"
  }
  ```

  <br/>

#### 게시물 삭제

- **URL**: /api/posts/:postId
  <br/>
- **Method**: DELETE
  <br/>
- **Response**:

  ```json
  {
    "message": "Post deleted successfully"
  }
  ```

  <br/>

### 댓글

#### 특정 게시물의 댓글 조회

- **URL**: /api/posts/:postId/comments
  <br/>
- **Method**: GET
  <br/>
- **Response**:

  ```json
  [
    {
      "id": 1,
      "user_id": "user-id",
      "post_id": "post-id",
      "comment": "댓글 내용",
      "created_at": "2024-06-07T00:00:00.000Z"
    }
  ]
  ```

  <br/>

#### 댓글 작성

- **URL**: /api/posts/:postId/comments
  <br/>
- **Method**: POST
  <br/>
- **Request Body**:

  ```json
  {
    "userId": "user-id",
    "commentText": "댓글 내용"
  }
  ```

- **Response**:

  ```json
  {
    "message": "Comment added successfully",
    "comment": {
      "id": 1,
      "user_id": "user-id",
      "post_id": "post-id",
      "comment": "댓글 내용",
      "created_at": "2024-06-07T00:00:00.000Z"
    }
  }
  ```

  <br/>

#### 댓글 수정

- **URL**: /api/comments/:commentId
  <br/>
- **Method**: PUT
  <br/>
- **Request Body**:

  ```json
  {
    "commentText": "수정된 댓글 내용"
  }
  ```

- **Response**:

  ```json
  {
    "message": "Comment updated successfully"
  }
  ```

  <br/>

#### 댓글 삭제

- **URL**: /api/comments/:commentId
  <br/>
- **Method**: DELETE
  <br/>
- **Response**:

  ```json
  {
    "message": "Comment deleted successfully"
  }
  ```

  <br/>

### 팔로우

#### 팔로우 상태 토글

- **URL**: /api/follow/toggle
  <br/>
- **Method**: POST
  <br/>
- **Request Body**:

  ```json
  {
    "followingId": "following-user-id",
    "followerId": "follower-user-id"
  }
  ```

- **Response**:

  ```json
  {
    "action": "follow", // 또는 "unfollow"
    "message": "Follow status toggled successfully"
  }
  ```

  <br/>

#### 팔로우 여부 확인

- **URL**: /api/follow/check
  <br/>
- **Method**: POST
  <br/>
- **Request Body**:

  ```json
  {
    "followingId": "following-user-id",
    "followerId": "follower-user-id"
  }
  ```

- **Response**:

  ```json
  {
    "isFollowing": true // 또는 false
  }
  ```

  <br/>

#### 팔로워 목록 조회

- **URL**: /api/follow/followers/:userId
  <br/>
- **Method**: GET
  <br/>
- **Response**:

  ```json
  [
    "following-user-id1",
    "following-user-id2",
    ...
  ]
  ```

  <br/>

### 사용자

#### 사용자 프로필 조회

- **URL**: /api/user/:userId
  <br/>
- **Method**: GET
  <br/>
- **Response**:

  ```json
  {
    "id": "user-id",
    "nickname": "nickname",
    "profilePictureUrl": "profile-picture-url"
  }
  ```

  <br/>

#### 사용자 프로필 업데이트

- **URL**: /api/user/:userId
  <br/>
- **Method**: PUT
  <br/>
- **Request Body**:

  ```json
  {
    "profilePictureFile": "file"
  }
  ```

- **Response**:

  ```json
  {
    "message": "Profile updated successfully"
  }
  ```
