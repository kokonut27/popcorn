import React from 'react';
import './App.css';

function sayHello() {
  alert('You clicked me!');
}

function popcorn() {
  return (
    <main>
      <h1>popcorn</h1>
      <br></br>
      <button onClick="{sayHello}">Play now!</button>
    </main>
  );
}

export default popcorn;