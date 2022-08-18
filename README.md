# lib

### db.ts

`prisma client`

### useMutation.tsx : page - create-account

`fetch 부분을 Component로 변경`

### withHandler.ts : page - api

`api에서 중복된 handler를 함수로 추가하여 중복 제거`

### withSession.ts

`session cookies 설정`

# page

- ## api : 백엔드 서버

  - ### create.tsx : 회원가입 시 db에 name과 email을 보내 db를 생성한다. localhost:3000/api/users/create를 fetch 할 경우 작동됨
  - ### login.tsx : 로그인 시 db의 email의 데이터를 가져온다. localhost:3000/api/users/login을 fetch 할 경우 작동됨
  - ### user.tsx : 로그인 후 db에서 name과 email 데이터를 가져온다. localhost:3000/api/users/user를 fetch 할 경우 작동됨

- ## log-in : login 페이지

- ## create-account : 회원가입 페이지

- ## index.tsx : 메인 홈 페이지

# prisma

### prisma 스키마 설정
