import React, { Component } from 'react'
import TodoListHeader from './subpage/TodoListHeader'
import TodoListItem from './subpage/TodoListItem'

class TodoList extends Component {
  render() {
    return (
      <div>
        <TodoListHeader />
        <TodoListItem />
      </div>
    )
  }
}

export default TodoList