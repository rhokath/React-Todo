import React from 'react';
import TodoList from "./components/TodoComponents/TodoList";
import TodoForm from "./components/TodoComponents/TodoForm";
const todoItems = [
  {
    task: 'add constructor',
    id:   Date.now() + 1,
    completed: false
  },
  {
    task: 'add super',
    id: Date.now() + 2,
    completed: false
  },
  {
    task: 'add state object',
    id: Date.now() + 3,
    completed: false
  },
  {
    task: 'add methods',
    id: Date.now() + 4,
    completed: false
  }
]

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor(){
    super();
    this.state = {
      todoItems

    };


  }
  addItem = (itemName) => {
    const newTodo ={
      task: itemName,
      id: Date.now(),
      completed: false
    };
    this.setState({
      todoItems: [...this.state.todoItems, newTodo]
    })
  };
  clearCompleted = () => {
    this.setState({
      todoItems: this.state.todoItems.filter(item => !item.completed)
    })
  };
  toggleItem = (id) => {
    console.log(id)
    this.setState({
      todoItems: this.state.todoItems.map(item=>{
        if(item.id === id){
          return{
            ...item,
            completed: !item.completed
          };
        } else {
          return item;
        }
      })
    });
  };
  render() {
    return (
      <div>
        <h2>Welcome to your Todo App!</h2>
        <TodoList  
        toggleItem={this.toggleItem}
        todoItems={this.state.todoItems}/>
        <TodoForm addItem={this.addItem} clearCompleted={this.clearCompleted}/>
      </div>
    );
  }
}

export default App;
