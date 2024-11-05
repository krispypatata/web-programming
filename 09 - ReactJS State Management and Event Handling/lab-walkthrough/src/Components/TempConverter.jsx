import React, {useState } from "react";
import TempInputField from "./TempInputField";

// utility functions to convert celsius to fahrenheit and vv
const toCelsius = (f) => {
    return (f - 32) * 5 / 9
}
const toFahrenheit = (c) => {
    return (c * 9 / 5) + 32
}

export default function TempConverter() {
    const [celsius, setCelsius] = useState(0);
    const [fahrenheit, setFahrenheit] = useState(32);

// when user types in the input field for the fahrenheit, we'll get set the value of fahrenheit to the user input, then convert the value to Celsius, which will reflect in the other field
    function getValueF(number) {
        setFahrenheit(number);
        setCelsius(toCelsius(number));
    }

    function getValueC(number) {
        setCelsius(number);
        setFahrenheit(toFahrenheit(number));
    }

    return (
        <>
            <TempInputField unit={'C'} func={getValueC} value={celsius} />
            <TempInputField unit={'F'} func={getValueF} value={fahrenheit} /> <br />
            <div id="message"> { celsius >= 100 ? "Boiling":"Not boiling..."}</div>
        </>

    );
}