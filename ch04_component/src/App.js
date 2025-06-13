import logo from "./logo.svg";
import "./App.css";
// import Child from './ex01_function/Child';
// import Child from './ex02_class/Child';
import MyComponent from "./ex03_props/MyComponent";

function App() {
  return (
    // <Child/>

    <>
      <MyComponent />
      <MyComponent name='리액트'/>
      <MyComponent name='React'/>
    </>
  );
}

export default App;
