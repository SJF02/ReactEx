import "./style.css";
import Sub1 from "./Sub1";
import { useContext } from "react";
import { themeContext1, themeContext2} from "../ex04_use_context/themeContext";

const MainApp = ()=>{
    const theme1 = useContext(themeContext1);
    const theme2 = useContext(themeContext2);

    return (
        <div className="root" style={theme1}>
            <h1 style={theme2}>Hello World</h1>
            <Sub1 />
        </div>
    )
}

export default MainApp;