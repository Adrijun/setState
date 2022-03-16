import { useState } from "react"
import './Welcome.css';

export function Welcome() {
    const [counter, setCounter] = useState(0)
    function countingClicks() {
        setCounter(counter + 1)
    }
    return (
        <div>
            <button onClick={countingClicks}>Dont click this button</button>
            <h3>You have clicked the forbidden button {counter} times </h3>
        </div>
    )
}