import React, { useState } from "react";
import "./Counter.css";

export const Counter = () => {
    const [count, setCount] = useState(1); 
    const maxValue = 10;
    const increment = () => {
        
        setCount((prevCount) => {
            if (prevCount < maxValue) {
                return (prevCount += 1);
            }
            else {
                return (prevCount = maxValue);
            }
        });
    }

    const decrement = () => {
        setCount((prevCount) => {
            if (prevCount > 1) {
                return (prevCount -= 1);
            } else {
                return (prevCount = 1);
            }
        });
    }

    return (
        <div className="parentDiv">
            <div className="maindiv">
                <div className="counter">
                    <div>
                        <button onClick={decrement}> - </button>
                    </div>

                    <div> {count} </div>
                    <div>
                        <button onClick={increment}> + </button>
                    </div>

                </div>
            </div>
        </div>

    );
}

