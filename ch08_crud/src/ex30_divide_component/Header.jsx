function Header(props) {
  const { title, onChangeMode } = props;
  return (
    <header>
      <h1>
        <a
          href="/"
          onClick={(e) => {
            e.preventDefault(); //<a>태그 기능 정지
            onChangeMode(); // 부모가 전달한 함수를 호출
          }}
        >
          {title}
        </a>
      </h1>
    </header>
  );
}

export default Header;