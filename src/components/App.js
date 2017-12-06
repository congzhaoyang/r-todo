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
        <TodoCreate createTask={this.createTask.bind(this)}/>
        <TodoList todos={this.state.todos}/>
      </div>
    );
  }

  createTask(task) {
    console.log('create')
    this.state.todos.push({
      task: task,
      isCompleted: false
    })
    this.setState({
      todos: todos
    })
  }
}

export default App;
