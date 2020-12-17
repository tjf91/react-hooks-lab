import React, { useState } from 'react'
import Todo from './Todo'

export default function List(props){
    

    const mapped= props.todos.map((todo,index)=>{
        return(
             <Todo todo={todo} keu={index} />
        )
       
    }) 
    return(
        <div>
            {mapped}
        </div>
    )
}