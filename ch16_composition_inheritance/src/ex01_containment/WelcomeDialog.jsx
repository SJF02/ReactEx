import FancyBorder from "./FancyBorder";

const WelcomeDialog = (props)=>{
    return(
        <FancyBorder npx={20} color="blue">
            <h1 className="Dialog-title">어서오세요.</h1>
            <p className="Dialog-message">우리 사이트에 방문하신 것을 환영합니다.</p>
        </FancyBorder>
    )
}

export default WelcomeDialog;