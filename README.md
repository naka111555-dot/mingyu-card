# BYD 김민규 주임 모바일 명함 페이지

## 포함 파일
- `index.html` : 메인 페이지
- `style.css` : 디자인
- `script.js` : 연락처 저장, 주소 복사, 유지비 계산기 기능
- `manifest.webmanifest` : 핸드폰에서 앱처럼 추가하기 위한 설정
- `sw.js` : 간단한 캐시용 service worker
- `assets/` : 아이콘, 차량 이미지, 명함 이미지

## GitHub Pages에 올리는 법

1. GitHub에서 새 Repository를 만듭니다.
   - 예: `mingyu-card`
   - Public으로 만들어도 됩니다.

2. 이 압축파일을 풀고 안의 파일들을 전부 업로드합니다.
   - `index.html`, `style.css`, `script.js`, `manifest.webmanifest`, `sw.js`, `assets` 폴더가 repository 첫 화면에 바로 보여야 합니다.
   - `byd_mingyu_card` 폴더 자체를 올리는 것이 아니라, 폴더 안 파일들을 올리는 방식이 가장 안전합니다.

3. Repository에서 `Settings` → `Pages`로 이동합니다.

4. Source를 `Deploy from a branch`로 선택합니다.

5. Branch를 `main`, Folder를 `/ (root)`로 선택하고 저장합니다.

6. 잠시 기다리면 사이트 주소가 생성됩니다.
   - 예: `https://깃허브아이디.github.io/mingyu-card/`

## 핸드폰 바탕화면에 앱처럼 추가하는 법

### 아이폰 Safari
1. 사이트 접속
2. 공유 버튼
3. `홈 화면에 추가`

### 안드로이드 Chrome
1. 사이트 접속
2. 오른쪽 위 점 세 개
3. `홈 화면에 추가` 또는 `앱 설치`

## 현재 반영된 정보
- 이름: 김민규 주임
- 전화번호: 010-2783-3820
- 이메일: mingyu.kim01@dtnetworks.co.kr
- 블로그: https://blog.naver.com/min-_2628
- 카카오톡 오픈채팅: https://open.kakao.com/o/saAl28wi

## 수정할 때
- 이름/전화번호/이메일은 `index.html`, `script.js`에 들어 있습니다.
- 디자인 색상과 여백은 `style.css`에서 수정합니다.
- 명함 이미지는 `assets/business-card.png`를 같은 이름으로 교체하면 됩니다.
- 차량 이미지는 `assets/dolphin.svg`를 같은 이름으로 교체하면 됩니다.
