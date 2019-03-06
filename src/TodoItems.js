import React, { Component } from 'react'

class TodoItems extends Component {
  createTasks = item => {
    return (
      <li>
        {item.title} - {item.body}
      </li>
    )
  }
  render() {
    const todoEntries = this.props.entries
    const listItems = todoEntries.map(this.createTasks)

    return <ul className="theList">{listItems}</ul>
  }
}

export default TodoItems
