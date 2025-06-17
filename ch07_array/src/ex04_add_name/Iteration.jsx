/**
    배열에 새로운 데이터를 추가한다.
 */
import { useState } from "react";

const Iteration = () => {
    const [names, setNames] = useState([
        {id:1, text:'눈사람'},
        {id:2, text:'얼음'},
        {id:3, text:'눈'},
        {id:4, text:'바람'},
    ]);
    const [inputText, setInputText] = useState('');
    const [nextId, setNextId] = useState(5);    // 기본 마지막 id가 4이므로 

    const onChange = (e)=>setInputText(e.target.value);

    const nameList = names.map((name)=><li key={name.id}>{name.text}</li>);
    const onClick = ()=>{
        // 새로운 객체를 만든다.
        const nextNames = [
            ...names,           // 기존의 배열의 모든 요소를 나열한다.
            {
                id:nextId,
                text:inputText
            }
        ];
        setNames(nextNames);    // 새로운 객체로 기존 객체를 대체한다.
        setNextId(nextId+1);    // id 1 증가
        setInputText('');
    }

    return (
        <>
            <input value={inputText} onChange={onChange} />
            <button onClick={onClick}>추가</button>
            <ul>{nameList}</ul>
        </>
    )
}

export default Iteration;