import './App.css';
import { useEffect, useState } from 'react';
import axios from 'axios'
import SingleGif from './SingleGif';
import { Link } from 'react-router-dom';

export default function List(props){

    const[gifs,setGifs]=useState([])

  useEffect(()=>{
      const giphyKey='FFC6KjDhiM88JkkhsrFX1hoiSAAMVPO0'
      axios.get(`https://api.giphy.com/v1/gifs/trending?api_key=${giphyKey}&limit=${10}`)
      .then(res=>{
        console.log(res.data.data)
        setGifs(res.data.data)}).catch(e=>console.log(e))
  },[])
    console.log(gifs)
  const mapped=gifs.map((gif,index)=>{         

    return(
      <Link to={`/gif/${gif.id}`} >
          <h1>{gif.title}</h1>     
       
      </Link>
    )
  })

  return (
    <div className="App">   
    {mapped}         
    </div>
  );

}

