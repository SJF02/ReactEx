import { NavLink, Routes, Route } from "react-router-dom";

const contents = [
    {id:1, title:"HTML", description: "HTML is ..."},
    {id:2, title:"CSS", description: "CSS is ..."},
    {id:3, title:"React.js", description: "React.js is ..."},
];

const Topics = ()=>{
    const lis = contents.map((content)=>{
        return (
            <li><NavLink to={"/topics/" + content.id}>{content.title}</NavLink></li>
        );
    });

    return (
        <div>
            <h2>Topics</h2>
            <ul>{lis}</ul>
            <Routes>
                <Route path="/:topic_id" element={<Topic contents={contents} />} />
            </Routes>
        </div>
    )
}

export default Topics;