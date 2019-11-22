# React_news-viewer
리액트를 다루는 기술을 공부하면서 만들어 본 뉴스뷰어 프로젝트입니다.
## 사용한 기능들
- 뉴스 API (https://newsapi.org/)
- SPA (리액트 라우터) / NavLink
- styled component
- axios

## 유의해야 할 점
- useEffect(렌더링 될 때 실행되는 함수)에 등록하는 함수는 async로 작성하면 안 된다는 점이다. 그 대신 함수 내부에 async 함수를 따로 만들어 주   어야 한다.

- useEffect(() => { // 페이지가 렌더링 될 때 이 함수 실행
        // async를 사용하는 함수 따로 선언
        const fetchData = async () => {
