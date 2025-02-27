# 디렉토리 구조 리팩토링 계획

```
src/
├── assets/              # 이미지, 폰트, SVG 등 정적 자산
│   ├── fonts/
│   ├── images/
│   └── svgs/
├── components/          # 전역적으로 재사용되는 컴포넌트
│   ├── common/          # 버튼, 모달 등 기본 UI 컴포넌트
│   │   ├── Button/
│   │   ├── Modal/
│   │   └── ...
│   ├── layout/          # 레이아웃 관련 컴포넌트
│   │   ├── Footer/
│   │   ├── Navigation/
│   │   └── ...
│   └── features/        # 특정 기능 관련 컴포넌트
│       └── ...
├── hooks/               # 커스텀 훅
│   ├── useScroll.ts
│   └── ...
├── pages/               # 페이지 컴포넌트
│   ├── Onboard/         # 온보딩 페이지
│   │   ├── components/  # 온보딩 페이지 전용 컴포넌트
│   │   ├── index.tsx    # 온보딩 페이지 메인
│   │   └── styles/      # 온보딩 페이지 스타일
│   ├── Apply/           # 지원 페이지
│   │   ├── components/  # 지원 페이지 전용 컴포넌트
│   │   ├── admin/       # 관리자 페이지
│   │   ├── index.tsx    # 지원 페이지 메인
│   │   └── styles/      # 지원 페이지 스타일
│   └── ...
├── services/            # API 서비스
│   ├── api.ts
│   └── ...
├── styles/              # 전역 스타일
│   ├── global.css
│   ├── theme.ts
│   └── ...
├── types/               # 타입 정의
│   ├── index.ts
│   └── ...
├── utils/               # 유틸리티 함수
│   ├── constants.ts
│   └── ...
├── store/               # 전역 상태 관리 (Recoil, Redux 등)
│   ├── atoms/
│   └── ...
├── App.tsx              # 앱 컴포넌트
└── index.tsx            # 진입점
```

## 주요 변경사항

1. **명확한 폴더 구조**: 각 폴더의 역할을 명확히 하고 관련 파일들을 그룹화
2. **컴포넌트 분리**: 모든 컴포넌트는 각각 독립된 폴더에 위치하여 관련 파일들과 함께 관리
3. **일관된 네이밍 규칙**: 모든 컴포넌트 폴더는 Pascal Case, 기타 폴더는 camelCase 사용
4. **디렉토리 역할 구분**: 
   - `components`: 재사용 가능한 컴포넌트
   - `pages`: 라우팅되는 페이지 컴포넌트
   - `hooks`: 커스텀 훅
   - `services`: API 관련 로직
   - `styles`: 전역 스타일
   - `types`: 타입 정의
   - `utils`: 유틸리티 함수
5. **스타일 관리 개선**: 
   - 컴포넌트별 스타일은 해당 컴포넌트 폴더 내에 위치
   - 전역 스타일은 styles 폴더에서 관리
```
