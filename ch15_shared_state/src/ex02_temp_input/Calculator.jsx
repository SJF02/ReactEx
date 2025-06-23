import TemperatureInput from "./TemperatureInput";

const Calculator = (props)=>{
    return (
        <div>
            <TemperatureInput scale="c" />
            <TemperatureInput scale="f" />
        </div>
    )
}

export default Calculator;