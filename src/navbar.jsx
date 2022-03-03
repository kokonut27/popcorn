import React from 'react';
import { NavLink } from "react-router-dom";
import './App.css';

function navbar() {
  return (
    <main>
      <div>
        <NavLink to="/">
          hello
        </NavLink>
      </div>
    </main>
  );
}

export default navbar;