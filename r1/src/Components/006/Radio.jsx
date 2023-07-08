import { useEffect, useState } from "react";
function Radio() {
    let [radio, setRadio] = useState("C");
    let [radioText, setRadioText] = useState("Radios");
    useEffect(_ => {
        console.log("Radio Loaded");
        return _ => console.log("Radio Unloaded");
    }, []);
    useEffect(_ => {
        console.log("Radio Change");
        changeRadioText(radio);
    }, [radio]);
    let changeRadioText = (key) => {
        if (key === "B") {
            setRadioText("Hello Radio");
            return;
        }
        setRadioText("Radios");
    }
    let check = (key) => {
        if (radio === key) {
            setRadio("");
            return;
        }
        setRadio(key);
    }

    return (
        <fieldset>
            <legend>{radioText}</legend>
        <div>
            <label className={radio === "A" ? "radio checked" : "radio"} onClick={_ => check("A")}>A</label>
            <label className={radio === "B" ? "radio checked" : "radio"} onClick={_ => check("B")}>B</label>
            <label className={radio === "C" ? "radio checked" : "radio"} onClick={_ => check("C")}>C</label>
            <label className={radio === "D" ? "radio checked" : "radio"} onClick={_ => check("D")}>D</label>
        </div>
        </fieldset>
    );
}
export default Radio;