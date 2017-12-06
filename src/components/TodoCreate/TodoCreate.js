import React, { Component } from 'react'

class TodoCreate extends Component {
  constructor(props) {
    super(props)
    this.state = {
      error: null
    }
  }

  render() {
    return (
      <div>
        <form>
          <input placeholder="请输入待办事项"/>
          <button>创建</button>
        </form>
      </div>
    )
  }

  handleCreate() {

  }

  renderError() {

  }
}

export default TodoCreate