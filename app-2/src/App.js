import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import List from './List';
import axios from 'axios'

function App() {
  const[gifs,setGifs]=useState([])

  useEffect(()=>{
      const giphyKey='FFC6KjDhiM88JkkhsrFX1hoiSAAMVPO0'
      axios.get(`https://api.giphy.com/v1/gifs/trending?api_key=${giphyKey}&limit=${5}`)
      .then(res=>{
        console.log(res.data.data)
        setGifs(res.data.data)}).catch(e=>console.log(e))
  },[])

  const mapped= gifs.map(gif=>{
    return <List gif={gif} /> 
  })


  return (
    <div className="App">
      {mapped}
    </div>
  );
}

export default App;
