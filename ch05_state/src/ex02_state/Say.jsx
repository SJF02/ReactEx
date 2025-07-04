import { useState } from "react";

const Say = () => {
    //    state변수, state함수  =  초기값설정
    const [message, setMessage] = useState("");

    const onClickEnter = () => setMessage("안녕하세요~");
    const onClickLeave = () => setMessage("안녕히 가세요 ^^");

    return(
        <div>
            <h1>{message}</h1>
            <button onClick={onClickEnter}>입장</button>
            <button onClick={onClickLeave}>퇴장</button>
        </div>
    )
}

export default Say;