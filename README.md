# 식스샵 프론트개발자 채용 과제

- [과제 안내 링크](https://www.notion.so/sixshop/af7f8a9586b648e6ba92a8c24ff0ef66)
- 과제 제출 기한은 과제 메일 발송일로부터 7일 후 자정 12시까지 입니다. 기한을 꼭 지켜주세요.

# 의문점으로 가정을 세우고 진행

## React Query api 호출 수

- 다시시도 없이 에러문구를 노출하도록 했습니다.

## 에러 문구

- error.ts
  - API 문서에 404 응답과 error 메시지가 함께 올 경우 정의했습니다.
  - error 메시지는 사용자에게 보여지는 문구가 아닌 것 같아서 프론트에서 재정의가 필요하다고 생각했습니다.
  - 재정의 문구는 임의로 했습니다.

## header 위치 변경

- header의 경우 공통으로 보여줘야 했습니다. 따라서 \_app.tsx에서 보여지도록 했습니다.
  - 그러나 Header 가 미노출 되는 페이지가 추가된다면 2가지 방법으로 구현을 변경할 수 있을 것 같습니다.
  - 1. Hook으로 구현
  - 2.Layout 컴포넌트를 만들어 구현
- Header.tsx → 로고 + 로그인 여부에 따른 문구 를 노출하는 **UI 컴포넌트**
- HeaderLogin.tsx → 로그인 **데이터 관리하는 컴포넌트**

# 궁금점 4가지

### 1.page 폴더와 component 폴더에서 구현하는 컴포넌트의 기준은 무엇인가요?

제 생각에는 page 폴더에서는 UI를 그리는 컴포넌트만 있어야 한다고 생각합니다. 그러나 직접 사용해보니, 로그인 페이지와 같이 하나의 form 태그로 관리하는 페이지의 경우 page/login.tsx에서 로직을 구현하여 component 폴더에 작성하지 않아도 되었습니다.

따라서 page 폴더와 component 폴더의 파일을 구분하는 기준이 궁금합니다.

### 2. /users/{userId} API는 반드시 사용해야 할까요?

API 문서에서 그렇게 명시되어 있으므로 사용해야 합니다. 그러나 /login API의 응답으로 사용자 ID와 이름이 반환되는데, 이는 /users/{userId} API의 응답과 유사하여 의문이 듭니다.

/users/{userId} API를 사용하지 않고, /login API의 응답으로 쿠키와 Recoil에 값을 전달하면 어떤 문제점이 생길까요?

### 3. React Query를 사용할 때 어떻게 관리하는 것이 효율적일까요?

저는 services 폴더에 queries와 mutations 폴더를 만들고, 각각의 폴더 안에 notion의 API 문서를 따라 파일들을 생성하여 관리했습니다.

1. queries 폴더: API에서 가져오는 방식의 데이터를 다룹니다.
2. mutations 폴더: API에서 생성, 수정, 삭제 등을 다루는 데이터를 다룹니다.

하지만 이러한 방식으로 관리하다보면 서버에서 API가 변경되면 파일들도 변경될 필요가 있다는 문제가 있습니다.

따라서 더 효율적인 방법을 고안해보고자 합니다.

### 4. 로그인 후 로그인한 사용자를 조회하는 API가 필요하다면, 변수명이 아닌 `/users/me`와 같은 API를 사용한다면 어떤 문제점이 있을까요?

`/login` API를 구현할 때, 새로고침해도 로그인이 유지되도록 `sessionStorage`를 사용해 구현했습니다. 그러나 다음과 같이 `accessToken`을 작성하면 변수명 없이 사용자를 조회할 수 있어서, `sessionStorage`에서 보안상의 이슈가 없을 것 같았습니다.

`sixShopAPI.defaults.headers.common['Authorization'] = authData.accessToken;`

저는 새로고침해도 로그인이 유지되도록 `sessionStorage`을 사용했지만, 다른 방법이 있는지 알고 싶습니다.
