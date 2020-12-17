import React, { useState } from 'react'

export default function AddTodo(props){
    const [input, setInput] = useState('')

    return(
        <div>
            <input  onChange={e=>setInput(e.target.value)} placeholder='add to do' value={input}/>
            <button onClick={()=>{
                props.addTodo(input)
                setInput('')
                }}>Add Stuff</button>

        </div>
       
 
    )
    
}