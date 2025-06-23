// npm install redux 설치
// npm install @reduxjs/toolkit 설치

import { Provider, useDispath, useSelector } from "react-redux";
import { createSlice, configureStore } from "@reduxjs/toolkit";

// store에 포함할 slice 생성
const counterSlice = createSlice({
    name: "counterSlice",
    initialState: { value: 0, mValue: 0},
    reducers: {
        up: (state, action)=>{
            state.value = state.value + action.step;
        },
        down: (state, action)=>{
            state.mValue = state.mValue - action.step;
        }
    }
});

// slice들을 저장할 store를 생성한다.
const store = configureStore({
    reducer: {counter: counterSlice.reducer},
});

const Counter = ()=>{

}

const MainApp = ()=>{
    return (
        <Provider store={store}>
            <div>
                <Counter />
            </div>
        </Provider>
    )
}

export default MainApp;