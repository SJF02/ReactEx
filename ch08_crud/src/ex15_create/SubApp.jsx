import { useState } from "react";

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

        // "1"을 1로 변경해서 전달, 문자열을 숫자로 변환
        onChangeMode(Number(e.target.id));    // e.target === <a>
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

function Create(props){
  return(
    <article>
      <h2>Create</h2>
      <form>
        <p><input type="text" name="title" placeholder="title" /></p>
        <p><textarea name="body" placeholder="body"></textarea></p>
        <p><input type="submit" value="Create" /></p>
      </form>
    </article>
  );
}

function SubApp() {

  const [mode, setMode] = useState("WELCOME");
  const [id, setId] = useState(null);

  const topics = [
    {id:1, title:'title', body:'html is ...'},
    {id:2, title:'css', body:'css is ...'},
    {id:3, title:'javascript', body:'javascript is ...'},
  ];

  let content = null;
  let title = null;
  let body = null;

  if(mode === "WELCOME"){
    content = <Article title="Welcome" body="Hello, Web" />;
  }else if(mode === "READ"){   
    topics.forEach(topic=>{
      console.log(id, topic.id);
      console.log(typeof id, typeof topic.id);

      // if(id == topic.id){ // "1"==1 을 같은 것으로 처리(자동형변환)
      if(id === topic.id){    // 타입까지 일치해야 같은 것을 판
        title = topic.title;
        body = topic.body;
      }
    });

    content = <Article title={title} body={body} />;
  }else if(mode === "CREATE"){
    content = <Create></Create>;
  }

  return (
    <div>
      <Header title="WEB" onChangeMode={()=>{
        setMode("WELCOME"); 
        console.log(mode);
      }}/>
      <Nav topics={topics} onChangeMode={(id)=>{
        setMode("READ");
        console.log(mode);
        setId(id);
      }} />
      {content}
      <a href="/create" onClick={(e)=>{
        e.preventDefault();
        setMode("CREATE");
      }}>Create</a>
    </div>
  );
}

export default SubApp;
