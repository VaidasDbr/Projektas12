import { useState } from "react";
function Fancy() {
    let [color, setColor] = useState("#ffffff");
    let [range, setRange] = useState("0");
    let handleChangeColor = (e) => {
        setColor(e.target.value);
    }
    let handleChangeRange = (e) => {
        setRange(e.target.value);
    }
    return (
        <fieldset>
            <legend style={{color}}>Fancy inputs</legend>
        <div>
            <input type="color" value={color} onChange={handleChangeColor}/>
        </div>
        <div>
            <label>{range.padStart(2, "0")}</label>
            <input type="range" min="0" max="99" value={range} onChange={handleChangeRange}/>
        </div>
        </fieldset>
    );
}
export default Fancy;