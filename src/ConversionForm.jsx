import React, { useEffect, useState } from 'react';

import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

import { formulas } from './formulas.js';


const ConversionForm = ({category}) => {
    const [inputVal, setInputVal] = useState(0);
    const [outputVal, setOutputVal] = useState(0);
    const [{input, output}, setSelectState] = useState({"input": Object.keys(formulas[category])[0], "output": Object.keys(formulas[category])[1]})

    useEffect(() => {
        if (category !== "temperature")
            setOutputVal(inputVal * formulas[category][input][output]);
        else 
            setOutputVal(formulas[category][input][output](inputVal));
        // may need return for "componentWillUnmount"
    }, [inputVal, outputVal, input, output]);

    const swapValues = () => {
        var temp = outputVal;
        setOutputVal(inputVal);
        setInputVal(temp);
    };


    const options = (io) =>  (
        <Form.Control as="select" value={io === "input" ? input : output} onChange={(e) => setSelectState(currentState => ({...currentState, [io]: e.target.value}))}>
            {Object.keys(formulas[category]).map((option, index) => {
                return <option key={index} value={option} >{option}</option>;
            })}
        </Form.Control>
    );

    return (
    <div className="internal-container"> 
        <div>
            <Form.Control type="number" min='0' value={inputVal} onChange={(e) => setInputVal(e.target.value)} />
            {options("input")}
        </div>
        <Button onClick={() => swapValues()}>&larr;&rarr;</Button>
        <div>
            <Form.Control type="number" min='0' value={outputVal} onChange={(e) => setOutputVal(e.target.value)} />
            {options("output")}
        </div>
    </div>
    )};

export default ConversionForm;