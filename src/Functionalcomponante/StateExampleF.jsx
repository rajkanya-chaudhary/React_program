import React, { useState } from "react";
export default function StateExampleF()
{
    let [num,setNum] = useState(1)
    function decrement()
    {
        if(num > 1)
        setNum(num - 1)
    }
    function increment()
    {
        setNum(num + 1)
    }
    return(
        <>
        <h1>Function Component State Example</h1>
        <h2>nun = {num}</h2>
        <button onClick={decrement}>Dcrement</button>
        <button onClick={increment}>Increment</button>
        </>
    )
}