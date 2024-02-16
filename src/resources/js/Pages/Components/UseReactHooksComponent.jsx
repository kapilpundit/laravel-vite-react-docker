/*
This Component uses useState React hook to display a counter
*/

import React, { useState, useEffect } from 'react'

function UseReactHooksComponent() {
    const [counter, setCounter] = useState(0);

    const incrementCounter = () => {
        setCounter((prevCount) => prevCount + 1);
    }

    const decrementCounter = () => {
        setCounter((prevCount) => prevCount - 1);
    }

    const reset = () => {
        setCounter(() => 0);
    };

    // useEffect for side effects
    useEffect(() => {
        // This code will run when the component mounts
        console.log("Component mounted <--- componentDidMount() method");

        // This code will run when the counter state changes
        console.log(`Count changed: ${counter} <--- componentDidUpdate() method`);

        // If you need to perform cleanup when the component unmounts, return a function
        return () => {
            console.log("Component will unmount <--- componentWillUnmount() method");
        };
    }, [counter]); // Dependency array, useEffect will re-run if counter changes

    return (
        <>
            <div>UseReactHooksComponent</div>
            <h3>Counter</h3>
            <div>{ counter }</div>
            <div>
                <button onClick={ decrementCounter }>-</button>
                <button onClick={ incrementCounter }>+</button>
                <button onClick={reset}>Reset value</button>
            </div>
        </>
    )
}

export default UseReactHooksComponent