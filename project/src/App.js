import React from 'react';
import Button from './components/ui/Button'
import Card from './components/ui/Card'
import './App.css';
import Book from "./components/Book";

  const data = [
  {
    id: '1',
    name: 'Harry Potter',
    price: 50,
  },
  {
    id: '2',
    name: 'Twilight',
    price: 40,
  },
  {
    id: '3',
    name: 'Lamilya',
    price: 30,
  },
  ];

  
function App() {
  return (
    <div className='App'>
      <Card style={{background: 'red'}}>
      <h1 style={{color: 'red'}}>Hello World</h1>
    <h2 className="title">React</h2>
    <Book book = {data}/>
    <Button className="test">Delete</Button>
    <Button>Register</Button>
      </Card>
  </div>
  );
}

export default App;