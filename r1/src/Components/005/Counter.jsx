import { useState } from "react";
function Counter() {
    let [count, setCount] = useState(53);
    let setTo555 = _ => {
        setCount(555);
    }
    let add1 = _ => {
        setCount(c => c + 1);
        setCount(c => c + 1);
        setCount(c => c + 1);
    }
    return (
        <div>
            <h1>Count: {count}</h1>
            <button className="blue" onClick={setTo555}>set to 555</button>
            <button className="red" onClick={add1}>+1</button>
        </div>
    );
}
export default Counter;