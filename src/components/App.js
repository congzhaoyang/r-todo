import React, { Component } from 'react';
import logo from '../logo.svg';
import '../App.css'
import Button from 'antd/lib/button'
import _ from 'lodash'
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
        <Button type="primary">Button</Button>
        <p>todos</p>
        <TodoCreate 
          createTask={this.createTask.bind(this)}
        />
        <TodoList 
          deleteTask={this.deleteTask.bind(this)} 
          toggleTask={this.toggleTask.bind(this)}
          editTask={this.editTask.bind(this)}
          saveTask={this.saveTask.bind(this)}
          todos={this.state.todos}
        />
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

  deleteTask(currentTask) {
    console.log('delete')
    _.remove(todos, todo => todo.task === currentTask)
    //TODO:为什么setState回this.state,这样有意义吗
    this.setState({
      todos: todos
    })
  }

  toggleTask(currentTask) {
    console.log('toggle')
    var foundTask = _.find(this.state.todos, todo => todo.task === currentTask)
    foundTask.isCompleted = !foundTask.isCompleted
    this.setState ({
      todos: this.state.todos
    })
  }

  editTask() {
    console.log('edit')
  }

  saveTask(oldTask, newTask) {
    console.log('save aaa')
    var foundTask = _.find(this.state.todos, todo => todo.task === oldTask) 
    foundTask.task = newTask
    this.setState({
      todos: this.state.todos
    })
  }
}

export default App;
