import axios from 'axios'
import React, { useEffect, useState } from 'react'

export default function SingleGif(props){
    const[gif,setGif]=useState({}) 



    useEffect(()=>{
        const giphyKey='FFC6KjDhiM88JkkhsrFX1hoiSAAMVPO0'
        console.log(props.match)
        axios.get(`https://api.giphy.com/v1/gifs/${props.match.params.title}?api_key=${giphyKey}`)
        .then(res=>{
        console.log(res.data)    
        setGif({...gif,...res.data.data})})
    }, [])

        console.log(gif)
        //
   

    return( 
        gif.images
        ?<div>
            <h1>{gif.title}</h1>
            <img src={gif.images.original.url} alt=''/>            
        </div>
        :<div>Loading</div>

  )
}
    
    
