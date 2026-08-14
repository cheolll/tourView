# ✈️ tourView

> 국내 여행 정보를 검색하고 탐색할 수 있는 여행 정보 웹 서비스

<br />

[![React](https://img.shields.io/badge/React-19-61DAFB?logo=react\&logoColor=white)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?logo=typescript\&logoColor=white)](https://www.typescriptlang.org/)
[![Vite](https://img.shields.io/badge/Vite-7-646CFF?logo=vite\&logoColor=white)](https://vite.dev/)
[![TanStack Query](https://img.shields.io/badge/TanStack%20Query-FF4154?logo=reactquery\&logoColor=white)](https://tanstack.com/query)
[![Axios](https://img.shields.io/badge/Axios-671DDF?logo=axios\&logoColor=white)](https://axios-http.com/)
[![CSS3](https://img.shields.io/badge/CSS3-1572B6?logo=css3\&logoColor=white)](https://developer.mozilla.org/docs/Web/CSS)

---

## 🌐 Project

**tourView**는 한국관광공사 TourAPI를 활용하여 전국의 여행지와 관광 정보를 검색하고 탐색할 수 있도록 제작한 여행 정보 웹 서비스입니다.

지역별 관광지를 탐색하거나 원하는 여행지를 검색할 수 있으며, 여행지 상세 페이지에서 기본 정보와 콘텐츠 유형에 따른 상세 정보, 위치 정보를 확인할 수 있습니다.

또한 네이버 지도 API를 활용하여 여행지의 위치를 지도에서 확인할 수 있도록 구현했습니다.

---

## 🎯 Project Purpose

여행 정보를 여러 곳에서 검색해야 하는 불편함을 줄이고,

**지역 선택 → 여행지 탐색 → 검색 → 상세 정보 → 위치 확인**

과정을 하나의 서비스에서 자연스럽게 경험할 수 있도록 하는 것을 목표로 제작했습니다.

외부 API 데이터를 React 환경에서 효율적으로 관리하고,

검색 과정에서 발생하는 불필요한 API 요청을 줄이며 반응형 UI를 구현하는 데 중점을 두었습니다.

---

## ✨ Features

### 🔎 여행지 검색

* 여행지 키워드 검색
* 검색어 기반 관광 정보 조회
* 검색 요청 Debounce 적용
* 검색 결과 목록 출력
* 검색 결과가 없는 경우 처리

### 📍 지역별 여행지 탐색

다음 지역을 기준으로 여행지를 탐색할 수 있습니다.

* 전체
* 서울
* 경기
* 인천
* 강원
* 제주
* 충청
* 경상
* 전라

지역을 선택하면 해당 지역의 관광 정보를 조회합니다.

### 📖 여행지 상세 정보

여행지의 `contentId`와 `contentTypeId`를 기준으로 상세 정보를 조회합니다.

* 여행지 기본 정보
* 주소
* 상세 주소
* 전화번호
* 홈페이지
* 이용 정보
* 콘텐츠 유형별 상세 정보

콘텐츠 유형에 따라 필요한 상세 API를 구분하여 호출하도록 구성했습니다.

### 🗺️ 지도

네이버 지도 API를 활용하여 여행지의 위치를 표시합니다.

* 여행지 위치 표시
* 지도 확대 / 축소
* 주소 기반 위치 정보 표시
* 지도 외곽선 적용
* 반응형 지도 크기
* 모바일 환경 대응

### 📱 Responsive Web

PC와 모바일 환경에서 사용할 수 있도록 반응형 UI를 적용했습니다.

모바일 환경에서는 여행지 상세 페이지의 주소와 지도 영역을 세로 방향으로 배치하여 작은 화면에서도 정보를 확인하기 쉽도록 구성했습니다.

---

## 🛠️ Tech Stack

### Frontend

| Technology | Description   |
| ---------- | ------------- |
| React      | UI 개발         |
| TypeScript | 정적 타입 관리      |
| Vite       | 개발 환경 및 빌드    |
| CSS        | UI 및 반응형 스타일링 |

### Data Fetching

| Technology     | Description        |
| -------------- | ------------------ |
| TanStack Query | 서버 상태 및 API 데이터 관리 |
| Axios          | HTTP API 통신        |

### External API

| API            | Description    |
| -------------- | -------------- |
| 한국관광공사 TourAPI | 여행지 및 관광 정보 조회 |
| Naver Maps API | 여행지 위치 및 지도 표시 |

---

## 🏗️ Application Flow

```text
사용자
  │
  ├── 지역 선택
  │      │
  │      └── 지역별 관광지 조회
  │
  ├── 여행지 검색
  │      │
  │      └── 검색 API 요청
  │
  └── 여행지 선택
         │
         ▼
    상세 페이지
         │
         ├── 기본 정보
         ├── 상세 정보
         ├── 주소
         └── 네이버 지도
```

---

## 🔄 API Data Flow

```text
React Component
      │
      ▼
TanStack Query
      │
      ▼
Axios
      │
      ▼
TourAPI
      │
      ▼
API Response
      │
      ▼
TypeScript Type
      │
      ▼
UI Rendering
```

상세 페이지에서는 `contentId`를 기준으로 기본 정보를 조회하고,

`contentTypeId`에 따라 필요한 상세 정보를 추가로 조회하도록 구성했습니다.

---

## 📂 Project Structure

```text
tourView/
├── public/
│
├── src/
│   ├── api/
│   │   └── tourApi.ts
│   │
│   ├── components/
│   │   ├── Hero/
│   │   ├── SearchBar/
│   │   ├── Travel/
│   │   ├── ToursList/
│   │   └── RecommendPlace/
│   │
│   ├── pages/
│   │   ├── Home/
│   │   └── TravelDetail/
│   │
│   ├── queries/
│   │   └── tourQueries.ts
│   │
│   ├── types/
│   │   └── tour.ts
│   │
│   ├── App.tsx
│   ├── main.tsx
│   └── index.css
│
├── .env.example
├── .gitignore
├── package.json
├── tsconfig.json
└── vite.config.ts
```

> 실제 프로젝트 구조에 따라 폴더 및 파일명은 변경될 수 있습니다.

---

## 🔐 Environment Variables

API Key와 같은 민감한 설정값은 `.env` 파일에서 관리합니다.

```env
VITE_TOUR_SERVICE_KEY=
VITE_TOUR_MOBILE_OS=ETC
VITE_TOUR_MOBILE_APP=tourView
VITE_TOUR_TYPE=json

VITE_NAVER_MAP_CLIENT_ID=
```

실제 `.env` 파일은 GitHub Repository에 업로드하지 않습니다.

`.env.example`을 참고하여 로컬 환경의 `.env` 파일을 생성한 후 API Key를 설정합니다.

### GitHub Pages

GitHub Pages 배포 시에는 GitHub Actions의 **Repository Secrets**를 이용하여 빌드 과정에서 환경변수를 주입합니다.

```text
GitHub Secrets
      │
      ▼
GitHub Actions
      │
      ├── Install Dependencies
      │
      ├── Environment Variables 주입
      │
      └── npm run build
                │
                ▼
              dist
                │
                ▼
        GitHub Pages Deploy
```

> `VITE_`로 시작하는 환경변수는 Vite 빌드 과정에서 클라이언트 코드에 포함되므로 완전한 비밀값으로 사용할 수 없습니다. API 제공 서비스에서 허용 도메인 등의 접근 제한을 설정하는 것을 권장합니다.

---

## 🚀 Development

### Requirements

* Node.js
* npm

### Installation

```bash
git clone https://github.com/your-username/tourView.git

cd tourView

npm install
```

### Environment Setup

```bash
cp .env.example .env
```

`.env` 파일에 필요한 API Key를 입력합니다.

### Start Development Server

```bash
npm run dev
```

### Build

```bash
npm run build
```

### Preview

```bash
npm run preview
```

---

## 💡 Troubleshooting

### 🗺️ Naver Maps API 호출 문제

네이버 지도 API를 연동하는 과정에서 API 호출 및 인증 설정 문제를 해결했습니다.

네이버 콘솔에서 애플리케이션 및 지도 API 사용 설정을 확인하고 프로젝트에서는 Client ID를 환경변수로 관리하도록 구성했습니다.

---

### 🗺️ 지도 확대 시 이전 화면 잔상 문제

지도 확대 및 축소 과정에서 이전 지도 화면이 남아있는 것처럼 보이는 문제가 발생했습니다.

지도 컨테이너의 크기와 렌더링 영역을 조정하고 반응형 환경에서 지도 크기가 안정적으로 유지되도록 수정했습니다.

---

### 📱 모바일 상세 페이지 레이아웃 문제

화면 너비가 작아졌을 때 여행지 상세 페이지의 주소와 지도가 한 줄에 배치되는 문제가 발생했습니다.

모바일 환경에서는 위치 정보 영역을 세로 방향으로 변경했습니다.

```css
@media (max-width: 600px) {
    .travel-detail__location {
        display: flex;
        flex-direction: column;
        gap: 16px;
    }
}
```

이를 통해 모바일에서는 다음과 같이 표시됩니다.

```text
주소
상세주소

지도
```

---

### 🔎 검색 API 요청 최적화

사용자가 검색어를 입력할 때마다 API 요청이 발생하는 문제를 방지하기 위해 검색 입력에 Debounce를 적용했습니다.

```text
사용자 입력
    ↓
검색어 변경
    ↓
Debounce
    ↓
API 요청
```

이를 통해 불필요한 API 호출을 줄이고 검색 성능을 개선했습니다.

---

## 📌 Roadmap

* [x] React + TypeScript + Vite 프로젝트 구성
* [x] TourAPI 연동
* [x] 지역별 여행지 조회
* [x] 여행지 검색
* [x] 검색 Debounce 적용
* [x] TanStack Query 적용
* [x] 여행지 목록 UI
* [x] 여행지 상세 페이지
* [x] 상세정보 API 연동
* [x] Naver Maps API 연동
* [x] 반응형 UI
* [x] 모바일 상세 페이지 대응
* [ ] 추천 여행지 기능 고도화
* [ ] UI/UX 개선
* [ ] GitHub Pages 배포
* [ ] 프로젝트 소개 페이지 추가

---

## 📸 Screenshots

### 🏠 Main

메인 화면에서 여행지 검색 및 지역별 여행지 탐색

### 📍 Travel List

지역별 여행지 및 검색 결과

### 📖 Travel Detail

여행지 기본 정보와 상세 정보

### 🗺️ Map

네이버 지도를 활용한 여행지 위치 표시

### 📱 Mobile

모바일 환경에 대응하는 반응형 UI

---

## 👨‍💻 Developer

**장철**

Frontend & Backend Developer

문제를 해결하고 더 나은 사용자 경험을 고민하며,

Frontend와 Backend를 함께 이해하고 연결하는 개발을 지향합니다.

---

## 📄 License

This project is for personal portfolio and educational purposes.
