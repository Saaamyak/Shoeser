import React, { useState } from 'react';
import './App.css';
import NavBar from './NavBar.js';
import BodyContent from './BodyContent';
import shoered from "./images/shoe-red.png";
import shoegreen from "./images/shoe-green.png";
import shoeblue from "./images/shoe-blue.png";
import shoepink from "./images/shoe-pink.png";
const prod = [
    {
        id: 1,
        name: "Red Danger",
        url: shoered,
        color: '#E82D1C',
        price: 7000,
    },
    {
        id: 2,
        name: "Herby Green",
        url: shoegreen,
        color: '#377A22',
        price: 5000,
    },
    {
        id: 3,
        name: "Sea Blue",
        url: shoeblue,
        color: '#0F07B0',
        price: 4000,
    },
    {
        id: 4,
        name: "Fairy Pink",
        url: shoepink,
        color: '#DA0180',
        price: 3000,
    }
]
function App() {
  const [curr,setCurr]=useState(0);
  function changeState(newCurr){
    setCurr(newCurr);
  }
  return (
    <div className='body' style={{background : prod[curr].color}}>
      <div className="container">
        <NavBar product={prod[curr]}/>
        <BodyContent product={prod[curr]} updateState={changeState}/>
      </div>
    </div>
  );
}

export default App;
