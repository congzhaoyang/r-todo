import React, { Component } from 'react';
import logo from '../logo.svg';
import '../App.css';

import TodoCreate from './TodoCreate/TodoCreate'
import TodoList from './TodoList/TodoList'


class App extends Component {
  render() {
    return (
      <div className="App">
        <TodoCreate />
        <TodoList />
      </div>
    );
  }
}

export default App;
