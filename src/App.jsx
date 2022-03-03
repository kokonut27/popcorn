import React from 'react';
import { NavLink } from "react-router-dom";
import './App.css';


function sayHello() {
  alert('You clicked me!');
}

function popcorn() {
  return (
    <main>
      <h1>popcorn</h1>
      <br></br>
      {/*Reference: https://www.techomoro.com/how-to-create-a-multi-page-website-with-react-in-5-minutes/*/}
      {/*<button onClick={sayHello}>Play now!</button>*/}
    </main>
  );
}

export default popcorn;