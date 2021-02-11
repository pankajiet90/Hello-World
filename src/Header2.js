import React,{useEffect,useState} from 'react'

export default function Header2() {
    const [count,setCount]=useState(200);
    return (
        <div>
            <h1>Counter : {count}</h1>
            <button onClick={()=>setCount(count+1)}>increa</button>
            <button onClick={()=>setCount(count-1)}>dncrea</button>
        </div>
    )
}
