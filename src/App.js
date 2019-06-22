import React from 'react';
import './App.css';
import './actions'
import {addTodo, setVisibilityFilter, toggleTodo} from "./actions";

function App() {

    console.dir(addTodo('a'))
    console.dir(toggleTodo('1'))
    console.dir(setVisibilityFilter('b'))
  return (
    <div className="App">
      right
    </div>
  );
}

export default App;
