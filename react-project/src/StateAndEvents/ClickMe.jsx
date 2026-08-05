import{ useState } from "react";

function ClickMe() {
    const [n, setN] = useState(0);

    const increment = () => {
        const newN = n + 1;
        setN(newN);
    };
    const decrement = () => {
        const newN = n - 1;
        setN(newN);
    };
    const reset = () => {
        setN(0);
    };  
    return (
        <div>
            <h4>You clicked {n} times</h4>

                <button onClick={increment}>Click Me</button>
            <button onClick={decrement}>Decrement</button>
            <button onClick={reset}>Reset</button>
        </div>
    );
}
    export default ClickMe;