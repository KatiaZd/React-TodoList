// import React, { useState } from 'react';
import TodoItem from './components/TodoItem';


const initialTodos = [
  {
    id: 1,
    text: "Faire planning d'apprentissage",
    completed: true,
  },
  {
    id: 2,
    text: "Apprendre les bases de React",
    completed: false,
  },
  {
    id: 3,
    text: "Faire le projet React",
    completed: false,
  },
  {
    id: 4,
    text: "Faire le projet Angular",
    completed: true,
  },
  {
    id: 5,
    text: "Voir le problème Github",
    completed: false,
  }
];



function App() {
  // const [todos, setTodos] = useState(initialTodos);

  // const ToggleTodo = (selectedTodo: string) => {
  //   const newTodos = todos.map((todo) => {
  //     if (todo.text === selectedTodo) {
  //       return {
  //         ...todo,
  //         completed: !todo.completed,
  //       };
  //     }
  //     return todo;
  //   });
  //   setTodos(newTodos);
  // };

  
  return (

    <div>
      <h1>Ma Todo List</h1>
      <ul>
        {initialTodos.map((todo) => (
          <TodoItem todo={todo} />
        ))}
      </ul>
    </div> 
  )
}

export default App;
