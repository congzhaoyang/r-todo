import React, { Component } from 'react'
// import Button from 'antd/lib/button'
import Input from 'antd/lib/input'

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
    const error = this.props.validateTask(task)

    if(error) {
      this.setState({
        error: error
      })
      return
    }

    this.refs.createInput.value = ''
    console.log(task)
    this.props.createTask(task)
    this.setState({
      error: null
    })
  }

  renderError() {
    if(this.state.error) {
      alert(this.state.error)
      return <div>{this.state.error}</div>
    }
    return null
  }
}

export default TodoCreate