/**
 * [ 리액트의 컨텍스트 영역 ]
 * ; 리액트의 모든 계층의 컴포넌트가 직접 접근할 수 있는 영역
 * 현재 theme1과 theme2를 저장함
 * 
 * themeContext1과 themeContext2를 이용해서 어디서나
 * theme1과 theme2를 꺼내어 사용할 수 있다.
 * 
 * Context 기능을 지나치게 사용하면 컴포넌트 설계의 독립성/모듈화를 방해한다.
 * 
 * 하지만 지나치게 깊은 계층 구조일 경우 바로 접근하는 기능을 
 * 꼭 필요한 일이라고 볼 수 있다.
 */

import { createContext } from "react";

const theme1 = { border: "10px solid gold"};
const themeContext1 = createContext(theme1);

const theme2 = { border: "10px solid blue"};
const themeContext2 = createContext(theme2);

export { themeContext1, themeContext2};