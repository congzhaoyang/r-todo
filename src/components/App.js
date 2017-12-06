import React, { Component } from 'react';
import logo from '../logo.svg';
import '../App.css';

import TodoCreate from './TodoCreate/TodoCreate'
import TodoList from './TodoList/TodoList'

const todos = [
  {
    task: 'Learning React',
    isCompleted: true
  },
  {
    task: 'Learning Jsx',
    isCompleted: false
  },
  {
    task: 'React in action',
    isCompleted: false
  }
]

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      todos: todos
    }
  }

  render() {
    return (
      <div className="App">
        <p>todos</p>
        <TodoCreate />
        <TodoList todos={this.state.todos}/>
      </div>
    );
  }
}

export default App;
