## Project Preview

![화면 기록 2022-07-05 오후 10 01 41](https://user-images.githubusercontent.com/38137135/177336494-fbb43363-9c7a-4d41-b33f-fd777c9a105d.gif)
상기 gif는 git server에 업로드 되었기 때문에 약간의 버퍼링이 존재합니다!

## 목차

1. 작업방식
2. 프로젝트 실행방법
3. 사용 기술

## 1. 작업방식 ✨

기존에 어떤방식으로 협업해왔는지 소개하기위해 개인 프로젝트임에도 작업방식을 정형화하여 작업하였습니다 아래는 어떤식으로 작업하는지 소개합니다 : )

### git 적용

- git pull request template
- git issue template
- git commit template

git 협업에 필요한 template이 적용되어있습니다

### 1.1. Issue 생성

- 기능단위로 나누어진 작업을 issue에 생성합니다
-     issue엔 notion에 정의된 백로그의 링크를 달고 작업설명을 작성합니다 (현재 프로젝트에선 협업이 아니기 때문에 notion 정리는 하지 않았습니다)

### 1.2. 브랜치 생성

- issue 생성시 등록된 issue번호가 곧 브랜치 번호 입니다 issue와 브랜치를 1:1관계로 생성합니다
- 브랜치명은 feature/#이슈번호로 생성합니다 ex) issue번호 1의 브랜치 feature/#1

### 1.3. git commit

- 작은 작업이 끝날 때마다 git commit을 남깁니다
- git commit template을 적용하여 어떤작업을 수행했는지 자세히 작성합니다

### 1.4. git pull request

- issue에 등록된 작업이 완료되면 pull request를 열어 merge를 요청합니다
- reviewer들을 등록해 코드리뷰를 받고 피드백을 적용합니다
- reviewer 과반수이상의 approve를 받으면 merge 합니다

## 2. 프로젝트 실행 방법🚗

- `yarn install`: 패키지 설치를 진행합니다
- `yarn start` : 개발 서버를 실행합니다
- `yarn build` : 현재 상태 내용을 빌드합니다
  ❗️`react-scripts 관련 에러가 발생할 경우 yarn upgrade 혹은 react-scripts를 재설치해주세요!`

## 3. 사용 기술🛠

<img src="https://img.shields.io/badge/typeScript-3178C6?style=for-the-badge&logo=typeScript&logoColor=white"/>

- 정적 타입을 지원하므로 컴파일 단계에서 타입검사를 통해 에러를 사전에 예방할 수 있습니다
- easing animation과 같은 연산이 필요한 프로젝트이기 때문에 타입을 명시하여 코드를 작성하는것이 안전성면에서 적합하다는 판단을 하였습니다
- 타인이 보아야하는 프로젝트이므로 개발자의 의도가 명시적으로 드러난다는점에서 현재 프로젝트에 적합한 기술이라고 생각했습니다

<img src="https://img.shields.io/badge/styledcomponents-DB7093?style=for-the-badge&logo=styledcomponents&logoColor=white"/>

- className을 사용하지 않기 때문에 중복으로 인한 관련 오류를 예방하고, 유지보수의 어려움을 피할 수 있습니다.
- 태그별 중복되는 스타일이 존재할 경우 컴포넌트화 하기때문에 재사용성을 높일 수 있습니다
- 태그를 대체해 스타일 컴포넌트를 사용하기 때문에 className 명시 없이도 해당 태그가 어떤 역할을 담당하는지 쉽게 알 수 있습니다
- 코드와 스타일을 한 파일내에서 관리하기때문에 수정시 용이합니다
