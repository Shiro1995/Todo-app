import React, { Component } from 'react';
import './App.css';
import Todolist from './Todolist';
import TodoItems from './TodoItems';
class App extends Component {

  // inputElement =React.createRef()

  constructor() {
    super()
    this.state = {
      items: [],
      currentItem: {
        text:'',
        key:'',
      },
      todos: [],
    }
  }

 

  handleInput = e => {
    const itemText = e.target.value
    const currentItem = { text: itemText, key: Date.now() }
    this.setState({
      currentItem,
    })
  }

  addItem = e => {
    e.preventDefault()
    
    const newItem = this.state.currentItem
    if (newItem.text !== '') {
      const items = [...this.state.items, newItem]
      this.setState({
        items: items,
        currentItem: { text: '', key: '' },
      })
    }
    console.log(this.state.items)
  }

  render() {
    return (
      <div className="App">

        <button onClick={this.handleClick}>Click to get</button>
        <Todolist
          addItem={this.addItem}
          inputElement={this.inputElement}
          handleInput={this.handleInput}
          currentItem={this.state.currentItem}
        />
        <TodoItems entries={this.state.todos} />
        
      </div>
    )
  }

  handleClick = e => {
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response => response.json()) // parse from json text to object 
    .then(listTodos => {
      console.log(listTodos)
      this.setState({
        todos: listTodos,
      })}
    )
    console.log("Thuan")
  }
}

export default App;
