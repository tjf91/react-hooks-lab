import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import axios from 'axios'
import routes from './routes'
import SingleGif from './SingleGif';
import { Link } from 'react-router-dom';

function App() {

  return(
    <div className='.App'>{routes}</div>
  )
  
}

export default App;
