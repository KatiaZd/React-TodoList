import TodoItem from './TodoItem';

const todos = [
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
  
  return (
    <div>
      <h1>Ma Todo List</h1>
      <ul>
        {todos.map((todo) => (
          <TodoItem todo={todo} />
        ))}
      </ul>
    </div>
  )
}

export default App
