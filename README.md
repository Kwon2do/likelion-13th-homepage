
![Logo](https://github.com/user-attachments/assets/9b30eb12-29ed-4df4-a2e2-a7d61b9d6446)

# 멋쟁이사자처럼 인천대학교 홈페이지
## 🚀 프로젝트 소개
**멋쟁이사자처럼 인천대학교**의 공식 홈페이지입니다.   
이 웹 애플리케이션은 멋사 인천대학교의 다양한 정보를 제공하며, 커뮤니티 활동, 지원서 접수, 상벌점제 등 여러 기능을 확장할 계획입니다.
현재 홈페이지는 **1차 배포**가 완료된 상태이며, 추후 기능 추가와 업데이트가 예정되어 있습니다.
본 프로젝트는 **React**와 **styled-components**, **Bootstrap**를 활용하여 개발되었으며, **멋쟁이사자처럼 인천대학교**의 정보를 효율적으로 관리하고 사용자에게 필요한 기능을 제공합니다.

### 배포된 주소
[https://www.likelion-inu.com](https://www.likelion-inu.com)

### 개발 기간
2025.01.22. ~ ing

### 버전
> v1
> 정보 제공 페이지, 질문 및 답변 섹션, 커리큘럼 안내, 모집 일정 안내

### 주요 기능
- **홈페이지 정보 제공**: 멋사 인천대학교의 소개 및 연락처 정보 제공
- **SNS 연동**: 인스타그램, 디스코드, 이메일 등의 연락처 아이콘을 제공하여 빠른 소통 가능
- **반응형 웹**: 모바일 기기에서도 문제없이 사용 가능하도록 디자인됨

### 향후 기능 확장 예정
- **지원서 접수 시스템**: 새로운 멤버들의 지원서를 받을 수 있는 시스템 도입 예정
- **커뮤니티**: 부원들간에 스터디를 진행하면서 서로 지식을 공유할 수 있는 커뮤니티 게시판 추가 예정
- **상벌점제 관리**: 상벌점 시스템을 관리하고, 점수 기반의 리워드 및 벌점 처리를 위한 기능 추가 예정
- **이벤트 관리**: 다양한 멋사 관련 행사 및 이벤트를 관리하고 알리는 기능 추가

## 🛠 기술 스택
- **Frontend**: React, Bootstrap, Emotion Styled, Framer Motion
- **Backend**: Node.js, Express, mySQL
- **Version Control**: Git, GitHub
- **Build Tool**: Create React App
- **Deployment**: Vercel (배포 서비스)

## 📄 파일 구조
```bash
web
├── .DS_Store
├── .gitignore
├── README.md
├── node_modules
├── package-lock.json
├── package.json
├── public
│   ├── Logo.png
│   ├── aboutUs-img
│   │   └── ...
│   ├── activity-img
│   │   └── ...
│   ├── curriculum-img
│   │   └── ...
│   ├── favicon.ico
│   ├── index.html
│   ├── manifest.json
│   ├── onboard.jpg
│   └── robots.txt
└── src
    ├── App.css
    ├── App.js
    ├── App.test.js
    ├── component
    │   ├── AboutUs
    │   │   └── Box-Container.jsx
    │   ├── Curriculum-Text-Box.jsx
    │   ├── Footer.jsx
    │   ├── Modals.jsx
    │   ├── Navigation
    │   │   ├── index.jsx
    │   │   └── styles.js
    │   └── Question-Box.jsx
    ├── constants
    │   └── dummy.js
    ├── hooks
    │   └── useScroll.js
    ├── index.css
    ├── index.js
    ├── logo.svg
    ├── pages
    │   ├── Onboard
    │   │   ├── Components
    │   │   │   ├── Activity.jsx
    │   │   │   ├── Curriculum.jsx
    │   │   │   ├── Divider.jsx
    │   │   │   ├── Question.jsx
    │   │   │   ├── Schedule.jsx
    │   │   │   └── Section.jsx
    │   │   ├── index.jsx
    │   │   └── styles
    │   │       ├── CustomUI.css
    │   │       └── Onboard.styles.jsx
    │   └── ...
    ├── reportWebVitals.js
    └── setupTests.js
```
## 🧑‍🤝‍🧑 기여 방법
프로젝트에 기여하고 싶으신 분은 아래와 같은 방법으로 참여 가능합니다:

이슈 생성: Issues 페이지에 문제를 제기하거나 개선 사항을 작성해 주세요.
풀 리퀘스트(PR): 기능 추가나 버그 수정 등의 기여를 원하시면, fork 후 풀 리퀘스트(PR)를 보내 주세요.
기여 시 주의사항
코드 스타일에 맞춰 작성해 주세요.
PR 전에 반드시 해당 기능에 대한 이슈를 생성해 주세요.
커밋 메시지는 간결하고 명확하게 작성해 주세요.

## 🎉 1차 배포 완료!
이 프로젝트는 2025년 1월 23일 기준으로 1차 배포가 완료되었습니다. 앞으로 더 많은 기능과 업데이트가 예정되어 있습니다. 많은 관심 부탁드립니다!
