import Sub2 from "./Sub2";
import { useContext } from "react";
import { themeContext1 } from "./themeContext";

const Sub1 = () => {
  // 처음 꺼낼 때는 { border : "10px solid gold"} 가 꺼내어진다.
  const theme1 = useContext(themeContext1);

  return (
    // 값을 변경했다.
    // 이 계층 이후로 themeContext1에서 꺼낼 때 아래 값이 적용된다.
    <themeContext1.Provider value={{ border: "5px dotted skyblue"}}>
      <div style={theme1}>
        <h1>Sub1</h1>
        <Sub2 />
      </div>
    </themeContext1.Provider>
  );
};

export default Sub1;
