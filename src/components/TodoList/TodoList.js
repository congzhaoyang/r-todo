import React, { Component } from 'react'
import _ from 'lodash'
import TodoListHeader from './subpage/TodoListHeader'
import TodoListItem from './subpage/TodoListItem'

class TodoList extends Component {
  render() {
    return (
      <div>
        <TodoListHeader />
        {this.renderItem()}
      </div>
    )
  }

  renderItem() {
    const props = _.omit(this.props, 'todos')
    return _.map(this.props.todos, (todo, index) => {
      return <TodoListItem key={index} {...todo} {...props}/>
    })
  }
}

export default TodoList