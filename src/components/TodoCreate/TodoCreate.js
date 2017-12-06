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
        <form onSubmit={this.handleCreate.bind(this)}>
          <input 
            placeholder="请输入待办事项"
            ref="createInput"
            />
          <button>创建</button>
        </form>
      </div>
    )
  }

  handleCreate(event) {
    event.preventDefault()
    const task = this.refs.createInput.value
    console.log(task)
    // const input = this.refs
    this.props.createTask(task)
  }

  renderError() {

  }
}

export default TodoCreate