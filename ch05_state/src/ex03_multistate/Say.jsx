import { useState } from "react";

const Say = () => {
    //    state변수, state함수  =  초기값설정
    const [message, setMessage] = useState("");
    const [color, setColor] = useState("black");

    const onClickEnter = () => setMessage("안녕하세요~");
    const onClickLeave = () => setMessage("안녕히 가세요 ^^");

    return(
        <div>
            <h1 style={{color}}>{message}</h1>
            <button onClick={onClickEnter}>입장</button>
            <button onClick={onClickLeave}>퇴장</button>

            <button style={{color:"red"}} onClick={()=>setColor("red")}>빨간색</button>
            <button style={{color:"green"}} onClick={()=>setColor("green")}>초록색</button>
            <button style={{color:"blue"}} onClick={()=>setColor("blue")}>파란색</button>
        </div>
    )
}

export default Say;