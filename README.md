# BYD 김민규 주임 모바일 명함 - 캐시 문제 해결 v11

`?v=10`을 붙였을 때만 새 화면이 보이는 문제는 이전 service worker/sw.js 캐시가 남아서 생긴 문제입니다.

## 업로드 후 필수 작업

1. 기존 저장소 파일을 지우고 이 ZIP 안의 파일을 올립니다.
2. 저장소 첫 화면에 아래처럼 보여야 합니다.

- index.html
- style.v11.css
- script.v11.js
- sw.js
- .nojekyll
- README.md
- assets/

3. 사이트 주소 뒤에 `?v=11`을 붙여서 한 번 접속합니다.
4. 새로고침을 2~3번 합니다.
5. 이후 `?v=11` 없이 기본 주소로 다시 접속합니다.

## 포함 차량 이미지

- assets/dolphin.png
- assets/atto3.png
- assets/seal.png
- assets/sealion7.png
- assets/sealion6.webp
