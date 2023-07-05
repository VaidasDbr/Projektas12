import { useRef, useState } from "react";
import rand from "../../Functions/rand";
import randColor from "../../Functions/randColor";
function Sq() {
    let [sq, setSq] = useState([]);
    let [dir, setDir] = useState(1);
    let sortPress = useRef(0);
    console.log("Persikraunu");
    let addOne = _ => {
        setSq(s => [...s, {d: rand(1000, 9999), c: randColor(), row: s.length, show: true}]);
    }
    let sort = _ => {
        setSq(s => [...s].sort((a, b) => dir * (a.d - b.d)));
        setDir(d => d * -1);
        console.log("Send to MI6:", ++sortPress.current);
    }
    let sortDefault = _ => {
        setSq(s => [...s].sort((a, b) => a.row - b.row));
    }
    let filterMore5000 = _ => {
        setSq(s => s.map(sq => sq.d > 5000 ? {...sq, show: true} : {...sq, show: false}));
    }
    let resetFilter = _ => {
        setSq(s => s.map(sq => ({...sq, show: true})));
    }
    return (
        <div>
            <h1>Square</h1>
            <div className="sq-bin">
                {
                    sq.map((s, i) => s.show
                    ?
                    <div key={i} className="sq small"
                    style={{
                        backgroundColor: s.c + "70",
                        borderColor: s.c
                    }}
                    >{s.d}</div>
                    :
                    null
                    )
                }
            </div>
            <button className="red" onClick={addOne}>Add Square</button>
            <button className="red" onClick={_ => setSq([])}>Clear</button>
            <button className="yellow" onClick={sort}>Sort</button>
            <button className="yellow" onClick={sortDefault}>Default sort</button>
            <button className="green" onClick={filterMore5000}>Filter 5000</button>
            <button className="green" onClick={resetFilter}>Reset filter</button>
        </div>
    );
}
export default Sq;