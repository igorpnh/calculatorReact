import React, { useState } from "react";
import "./calculator.css";
import Container from "@mui/material/Container";
import { Box } from "@mui/system";

export default function Calculator() {
    const [num, setNum] = useState(0);
    const [holdnum, setHoldNum] = useState(0);
    const [operator, setOperator] = useState();

    function inputNum(e) {
        var input = e.target.value;
        if (num === 0) {
            setNum(input);
        } else {
            setNum(num + input);
        }
    }

    function clear() {
        setNum(0);
    }

    function porcentage() {
        setNum(num / 100);
    }

    function changeSign() {
        if (num > 0) {
            setNum(-num);
        } else {
            setNum(Math.abs(num));
        }
    }

    function numHolder(e) {
        var operatorInput = e.target.value;
        setOperator(operatorInput);
        setHoldNum(num);
        setNum(0);
    }

    function numCalculate() {
        if (operator === "/") {
            setNum(parseFloat(holdnum) / parseFloat(holdnum));
        } else if (operator === "X") {
            setNum(parseFloat(holdnum) * parseFloat(num));
        } else if (operator === "-") {
            setNum(parseFloat(holdnum) - parseFloat(num));
        } else if (operator === "+") {
            setNum(parseFloat(holdnum) + parseFloat(num));
        }
    }
    return (
        <div className="background">
            <Box m={5} />
            <Container maxWidth="xs">
                <div className="container">
                    <Box m={12} />
                    <div className="line">
                        <h1 className="result-num">{num}</h1>
                    </div>
                    <button onClick={clear}>AC</button>
                    <button onClick={changeSign}>+/-</button>
                    <button onClick={porcentage}>%</button>
                    <button className="color-one" onClick={numHolder} value="/">/</button>
                    <button className="color-two" onClick={inputNum} value={7}>7</button>
                    <button className="color-two" onClick={inputNum} value={8}>8</button>
                    <button className="color-two" onClick={inputNum} value={9}>9</button>
                    <button className="color-one" onClick={numHolder} value="X">X</button>
                    <button className="color-two" onClick={inputNum} value={4}>4</button>
                    <button className="color-two" onClick={inputNum} value={5}>5</button>
                    <button className="color-two" onClick={inputNum} value={6}>6</button>
                    <button className="color-one" onClick={numHolder} value="-">-</button>
                    <button className="color-two" onClick={inputNum} value={1}>1</button>
                    <button className="color-two" onClick={inputNum} value={2}>2</button>
                    <button className="color-two" onClick={inputNum} value={3}>3</button>
                    <button className="color-one" onClick={numHolder} value="+">+</button>
                    <button className="color-two" onClick={inputNum} value={0}>0</button>
                    <button className="color-two" onClick={inputNum} value={"."}>,</button>
                     {/*hidden aux button*/}
                    <button style={{ visibility: "hidden" }}></button>
                    <button className="color-one" onClick={numCalculate}>=</button>
                </div>
            </Container>
        </div>
    );
}