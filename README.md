# 맛집 공유 뉴스 피드 사이트

## 목차

- [맛집 공유 뉴스 피드 사이트](#맛집-공유-뉴스-피드-사이트)

  - [기술 스택](#기술-스택)
  - [프로젝트 소개](#프로젝트-소개)
  - [기능](#기능)
  - [팀원 및 역할](#팀원-및-역할)
  - [폴더 구조](#폴더-구조)
  - [프로젝트 설치 및 실행 방법](#프로젝트-설치-및-실행-방법)
  - [트러블슈팅](#트러블슈팅)
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
- **마이 페이지**: 사용자가 작성한 글 조회및 프로필 수정 기능
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
yarn dev
```

<br  />

# 트러블슈팅

## 1. 기본 프로필 이미지 문제

### ❗️문제점

회원 가입 시 유저 테이블에 이미지 설정을 안할 시 기본 이미지를 테이블에 넣어주는 방식을 사용했고 그 결과 불필요한 메모리를 사용하게 하고 데이터의 일관성을 해치게 되었습니다.

### 🔨 해결 방법

1. 기본 이미지를 유저 테이블에 직접 저장하는 대신, 스토리지에 저장된 기본 이미지 링크를 가져와서 프로필 이미지로 설정합니다.
2. 회원 가입 시에는 유저 테이블에 이미지를 저장하지 않고, 스토리지의 기본 이미지 링크를 참조합니다.
3. 유저가 프로필 이미지를 변경할 수 있는 기능을 제공합니다.

<br />

## 2. 팔로우 버튼 클릭 시 로그아웃 문제

### ❗️문제점

테스트 시에는 발생하지 않았던 오류가 상세 페이지로 데이터 베이스를 연결하면서 발생했습니다. 팔로우 버튼 클릭 시 로그아웃되는 문제가 발생했습니다.

### 🔨 해결 방법

버튼이 form 태그 안에 있어서 폼 제출 시 사이트가 새로고침되면서 로그아웃되는 문제였습니다.

1. 문제를 일으키는 form 안의 버튼을 확인합니다.
2. 이벤트 리스너(=event.preventDefault())를 추가하여 기본 폼 제출을 방지합니다.

<br />

## 3. 프로필 이미지 실시간 연동 문제

### ❗️문제점

마이페이지에서 프로필 이미지를 변경한 후, 헤더의 프로필 이미지가 실시간으로 업데이트되지 않는 문제가 발생했습니다.

### 🔨 해결 방법

처음에는 Header의 프로필 이미지를 useEffect의 의존성 배열에 user와 이미지 상태를 useState를 통해 관리했습니다. 그러나 이후에 상태 관리를 Redux로 변경하여 전역적으로 처리하게 되었습니다.
이로 인해 변경된 상태를 useEffect의 의존성 배열에 추가하여, 마이페이지에서 프로필이 변경될 때 Header의 프로필 이미지도 자동으로 업데이트되도록 해결했습니다.

1. Redux를 이용하여 전역적으로 상태 관리를 진행하도록 변경합니다.
2. 프로필 이미지 변경 시 Redux 상태를 업데이트합니다.

## 4. 회원가입 후 바로 로그인하면 이전 로그인 기록으로 가는 문제

### ❗️문제점

회원가입 후 바로 로그인하면 이전 로그인 기록으로 이동하는 문제가 발생했습니다.회원가입 후 Supabase에서 새로 생성된 사용자 정보를 테이블에서 찾을 수 없어 발생하는 문제로 추정했습니다.

### 🔨 해결 방법

1.  회원가입 후 Supabase에서 자동으로 로그인되며, 로그아웃 시 로컬 스토리지에 있는 토큰을 제거하도록 조치했습니다.
2.  이전에 Redux에서 비동기적으로 사용자 정보를 저장했던 부분을 삭제하여, 회원가입 시 사용자 정보를 저장하는 부분을 수정했습니다.
3.  회원가입 시 Supabase에서 제공하는 signUp 메서드가 자동으로 로그인되어 데이터를 처리하면서, 데이터베이스와 페이지 간의 상태 차이로 인해 문제가 발생했습니다. 이를 해결하기 위해 signUp 메서드를 호출한 후에 바로 로그아웃하고 로그인 페이지로 이동하도록 수정했습니다.

3번 해결 방법으로 해결되었습니다.

<br/>

# RESTful API 문서

### 사용자 인증

| 기능                  | URL                                                                | Method | Request Body                                                                               | Response                                                                                                                                |
| --------------------- | ------------------------------------------------------------------ | ------ | ------------------------------------------------------------------------------------------ | --------------------------------------------------------------------------------------------------------------------------------------- |
| 회원가입              | `/api/auth/signup`                                                 | POST   | `json { "email": "user@example.com", "password": "password123", "nickname": "nickname" } ` | `json { "message": "User registered successfully", "user": { "id": "user-id", "email": "user@example.com", "nickname": "nickname" } } ` |
| 로그인                | `/api/auth/login`                                                  | POST   | `json { "email": "user@example.com", "password": "password123" } `                         | `json { "token": "jwt-token", "user": { "id": "user-id", "email": "user@example.com", "nickname": "nickname" } } `                      |
| 로그아웃              | 클라이언트 측에서 Supabase의 `auth.signOut` 메서드를 호출하여 수행 | POST   | -                                                                                          | `json { "message": "User logged out successfully" } `                                                                                   |
| 현재 사용자 정보 조회 | `/api/auth/user`                                                   | GET    | -                                                                                          | `json { "user": { "id": "user-id", "email": "user@example.com", "nickname": "nickname" } } `                                            |

### 게시물

| 기능             | URL                  | Method | Request Body                                                                                                         | Response                                                                                                                                                                                                                                                         |
| ---------------- | -------------------- | ------ | -------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 모든 게시물 조회 | `/api/posts`         | GET    | -                                                                                                                    | `json [ { "id": 1, "user_id": "user-id", "nickname": "nickname", "title": "게시물 제목", "content": "게시물 내용", "image": "image-url", "views": 100, "rating": 5, "created_at": "2024-06-07T00:00:00.000Z" } ] `                                               |
| 특정 게시물 조회 | `/api/posts/:postId` | GET    | -                                                                                                                    | `json { "id": 1, "user_id": "user-id", "nickname": "nickname", "title": "게시물 제목", "content": "게시물 내용", "image": "image-url", "views": 100, "rating": 5, "created_at": "2024-06-07T00:00:00.000Z" } `                                                   |
| 게시물 작성      | `/api/posts`         | POST   | `json { "userId": "user-id", "title": "게시물 제목", "content": "게시물 내용", "image": "image-url", "rating": 5 } ` | `json { "message": "Post created successfully", "post": { "id": 1, "user_id": "user-id", "nickname": "nickname", "title": "게시물 제목", "content": "게시물 내용", "image": "image-url", "views": 0, "rating": 5, "created_at": "2024-06-07T00:00:00.000Z" } } ` |
| 게시물 수정      | `/api/posts/:postId` | PUT    | `json { "title": "수정된 제목", "content": "수정된 내용", "image": "new-image-url", "rating": 4 } `                  | `json { "message": "Post updated successfully" } `                                                                                                                                                                                                               |
| 게시물 삭제      | `/api/posts/:postId` | DELETE | -                                                                                                                    | `json { "message": "Post deleted successfully" } `                                                                                                                                                                                                               |

### 댓글

| 기능                    | URL                           | Method | Request Body                                                | Response                                                                                                                                                                                  |
| ----------------------- | ----------------------------- | ------ | ----------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 특정 게시물의 댓글 조회 | `/api/posts/:postId/comments` | GET    | -                                                           | `json [ { "id": 1, "user_id": "user-id", "post_id": "post-id", "comment": "댓글 내용", "created_at": "2024-06-07T00:00:00.000Z" } ] `                                                     |
| 댓글 작성               | `/api/posts/:postId/comments` | POST   | `json { "userId": "user-id", "commentText": "댓글 내용" } ` | `json { "message": "Comment added successfully", "comment": { "id": 1, "user_id": "user-id", "post_id": "post-id", "comment": "댓글 내용", "created_at": "2024-06-07T00:00:00.000Z" } } ` |
| 댓글 수정               | `/api/comments/:commentId`    | PUT    | `json { "commentText": "수정된 댓글 내용" } `               | `json { "message": "Comment updated successfully" } `                                                                                                                                     |
| 댓글 삭제               | `/api/comments/:commentId`    | DELETE | -                                                           | `json { "message": "Comment deleted successfully" } `                                                                                                                                     |

### 팔로우

| 기능             | URL                             | Method | Request Body                                                                     | Response                                                                                                                                                               |
| ---------------- | ------------------------------- | ------ | -------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 팔로우 상태 토글 | `/api/follow/toggle`            | POST   | `json { "followingId": "following-user-id", "followerId": "follower-user-id" } ` | `json { "action": "follow", "message": "Follow status toggled successfully" } ` 또는 `json { "action": "unfollow", "message": "Follow status toggled successfully" } ` |
| 팔로우 여부 확인 | `/api/follow/check`             | POST   | `json { "followingId": "following-user-id", "followerId": "follower-user-id" } ` | `json { "isFollowing": true } ` 또는 `json { "isFollowing": false } `                                                                                                  |
| 팔로워 목록 조회 | `/api/follow/followers/:userId` | GET    | -                                                                                | `json [ "following-user-id1", "following-user-id2", ... ] `                                                                                                            |

### 사용자

| 기능                   | URL                 | Method | Request Body                             | Response                                                                                        |
| ---------------------- | ------------------- | ------ | ---------------------------------------- | ----------------------------------------------------------------------------------------------- |
| 사용자 프로필 조회     | `/api/user/:userId` | GET    | -                                        | `json { "id": "user-id", "nickname": "nickname", "profilePictureUrl": "profile-picture-url" } ` |
| 사용자 프로필 업데이트 | `/api/user/:userId` | PUT    | `json { "profilePictureFile": "file" } ` | `json { "message": "Profile updated successfully" } `                                           |
