import React, { Component } from 'react'

class TodoListItem extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isEditing: false,
      error: null
    }
  }

  render() {
    return (
      <div>
        {this.renderTaskSection()}
        {this.renderActionSection()}
      </div>
    )
  }

  renderActionSection() {
    if(this.state.isEditing) {
      return (
        <div>
          <button onClick={this.onSave.bind(this)}>保存</button>
          <button>取消</button>
        </div>
      )
    }

    return (
      <div>
        <button onClick={this.onEdit.bind(this)}>编辑</button>
        <button onClick={this.onDelete.bind(this)}>删除</button>
      </div> 
    )
  }

  renderTaskSection() {
    if(this.state.isEditing) {
      return (
        <div>
          <form>
            <input placeholder="请输入" defaultValue={this.props.task} ref="editInput"/>
            {/* {this.renderError()} */}
          </form>
        </div>
      )
    }

    const taskStyle = {
      color: this.props.isCompleted ? 'green' : 'red',
      cursor: 'pointer'
    }

    if(!this.props.isCompleted) {
      return <div onClick={this.onToggle.bind(this)} style={taskStyle}>{this.props.task}</div>
    }

    return <div onClick={this.onToggle.bind(this)} style={taskStyle}>{this.props.task}</div>
  }

  onDelete() {
    const currentTask = this.props.task
    console.log(currentTask)
    this.props.deleteTask(currentTask)
  }

  onToggle() {
    //TODO: 为什么currentTask要通过props传进来, currentTask是怎么确定的
    const currentTask = this.props.task
    console.log(currentTask)
    this.props.toggleTask(this.props.task)
  }

  onEdit() {
    console.log('editing')
    this.setState({
      isEditing: true
    })
    this.props.editTask()
  }

  onSave(event) {
    event.preventDefault()

    const oldTask = this.props.task
    const newTask = this.refs.editInput.value
    console.log('save')
    console.log(this.refs.editInput.value)
    this.props.saveTask(oldTask, newTask)

    this.setState({
      isEditing: false
    })
  }
}

export default TodoListItem