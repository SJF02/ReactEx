import logo from "./logo.svg";
import "./App.css";

// import Child from './ex01_function/Child';
// import Child from './ex02_class/Child';
// import MyComponent from "./ex03_props/MyComponent";
// import Library from "./ex04_props/Library";
// import MyComponent from "./ex05_arrow/MyComponent";
import MyComponent from "./ex06_destructing/MyComponent";

function App() {
  return (
    // <Child/>

    /*
    <>
      <MyComponent />
      <MyComponent name='리액트'/>
      <MyComponent name='React'/>
    </>
    */

    /*
    <>
      <Library title='유학' />
      <Library title='조선 선비들의' />
    </>
    */

    /*
    <>
      <MyComponent name="python" />
      <MyComponent name="javascript" />
      <MyComponent name="java" />
    </>
    */

    <>
      <MyComponent name='리액트'>React Programming</MyComponent>
      <MyComponent name='React, Vue'>컴포넌트 제작</MyComponent>
    </>
  );
}

export default App;
