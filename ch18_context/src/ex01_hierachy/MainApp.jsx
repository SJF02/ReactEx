import "./style.css";

const MainApp = ()=>{
    return (
        <div className="root">
            <h1>Hello World</h1>
            <Sub1 />
        </div>
    )
}
const Sub1 = ()=>{
    return (
        <div>
            <h1>Sub1</h1>
            <Sub2 />
        </div>
    )
}
const Sub2 = ()=>{
    return (
        <div>
            <h1>Sub2</h1>
            <Sub3 />
        </div>
    )
}
const Sub3 = ()=>{
    return (
        <div>
            <h1>Sub3</h1>
        </div>
    )
}

export default MainApp;