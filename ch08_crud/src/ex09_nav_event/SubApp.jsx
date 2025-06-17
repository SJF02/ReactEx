function Header(props) {
  const { title, onChangeMode } = props;
  return (
    <header>
      <h1>
        <a href="/" onClick={(e)=>{
          e.preventDefault();   //<a>태그 기능 정지
          onChangeMode();       // 부모가 전달한 함수를 호출
        }}>{title}</a>
      </h1>
    </header>
  );
}

function Nav(props) {
  const { topics, onChangeMode } = props;
  const lis = topics.map((topic)=>(
    <li key={topic.id}>
      <a id={topic.id} href={"/read/"+topic.id} onClick={(e)=>{
        e.preventDefault();
        onChangeMode(e.target.id);    // e.target === <a>
      }}>{topic.title}</a>
    </li>)
  );

  return (
    <nav>
      <ol>
        {lis}
      </ol>
    </nav>
  );
}

function Article(props) {
  // <article> 부분 가져옴
  return (
    <article>
      <h1>{props.title}</h1>
      {props.body}
    </article>
  );
}

function SubApp() {

  const topics = [
    {id:1, title:'title', body:'html is ...'},
    {id:2, title:'css', body:'css is ...'},
    {id:3, title:'javascript', body:'javascript is ...'},
  ];

  return (
    <div>
      <Header title="WEB" onChangeMode={()=>alert('Header')}/>
      <Nav topics={topics} onChangeMode={(id)=>alert(id)} />
      <Article title="Welcome" body="Hello, Web" />
    </div>
  );
}

export default SubApp;
