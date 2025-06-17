import { useState } from "react";

/* 1개의 이벤트 메서드로
여러 개의 요소 이벤트를 처리하는 방식
 */
const EventPractice = () => {
    const [form, setForm] = useState({
        username: "",
        message: ""
    });

    // 비 구조할당 문법으로 각각 변수에 객체내의 변수를 꺼내어 초기화 전달함.
    const { username, message } = form;

    const onChange = (e)=>{
        const nextForm = {
            ...form,            // spread연산자(객체값을 모두 나열하라)

            /* 위의 form의 변수를 덮어쓴다. */
            [e.target.name] : e.target.value
        }

        // react의 Hook에 의해 ReRendering이 발생한다.
        setForm(nextForm);
    }
    
    const onClick = ()=>{
        alert(username + ":" + message);
        setForm({
            username: "",
            message: ""
        })
    }
    const onKeyDown = (e)=>{
        if(e.key==="Enter") onClick();
    }

    return (
        <div>
            <h1>이벤트 연습</h1>
            <input type="text" name="username" placeholder="사용자명"
                    value={username} onChange={onChange}/> 
            <input type="text" name="message" placeholder="아무거나 입력해 보세요"
                    value={message} onChange={onChange} onKeyDown={onKeyDown} />
            <button onClick={onClick}>확인</button>
        </div>
    )
}

export default EventPractice;