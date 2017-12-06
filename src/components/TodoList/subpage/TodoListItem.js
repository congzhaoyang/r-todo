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
        {this.renderActionSection()}
        {this.renderTaskSection()}
      </div>
    )
  }

  renderActionSection() {
    if(this.state.isEditing) {
      return (
        <div>
          <button>保存</button>
          <button>取消</button>
        </div>
      )
    }

    return (
      <div>
        <button>编辑</button>
        <button onClick={this.onDelete.bind(this)}>删除</button>
      </div> 
    )
  }

  renderTaskSection() {
    if(this.state.isEditing) {
      return (
        <div>
          <form>
            <input placeholder="请输入" defaultValue={this.props.task}/>
            {this.renderError()}
          </form>
        </div>
      )
    }

    const taskStyle = {
      color: this.props.isCompleted ? 'green' : 'red',
      cursor: 'pointer'
    }

    if(!this.props.isCompleted) {
      return <p>{this.props.task}</p>
    }

    return <div>{this.props.task}</div>
  }

  onDelete() {
    const currentTask = this.props.task
    console.log(currentTask)
    this.props.deleteTask(currentTask)
  }
}

export default TodoListItem