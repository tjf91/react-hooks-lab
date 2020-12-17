import logo from './logo.svg';
import './App.css';
import AddTodo from './components/AddTodo';
import List from './components/List';
import { useState } from 'react';

function App() {
  const[todos,setTodos]= useState([])

  const handleAdd=(input)=>{
    setTodos([...todos,input])
  }

  return (
    <div className="App">
      <AddTodo addTodo={handleAdd} />
      <List todos={todos} />
    </div>
  );
}

export default App;
