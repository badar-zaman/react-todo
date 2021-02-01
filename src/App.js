import './App.css';
import React, { Component } from 'react'
import todosData from "./todosData";
import TodoItem from "./TodoItem";


class App extends Component {
  constructor(){
    super()
    this.state = {
      todos: todosData
    }
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(id1){
    this.setState(prevState => {
      const updatedTodos = prevState.todos.map(temp => {
        if (temp.id === id1){
           temp.completed = !temp.completed;
        }
        return temp
      })
      return {
        todos: updatedTodos
      }
      
    })

  }


  render() {
    const todoItems = this.state.todos.map(
        item => <TodoItem 
          key={item.id} 
          item={item}
          handleChange={this.handleChange} />    
    )

    return (
      <div className="todo-list">
        {todoItems}
      </div>
    )
  }
}


export default App;
