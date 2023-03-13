type Props = {
    todo: Todo;
    toggleTodo?: (selectedTodo: Todo) => void;
}

export const TodoItem = ({ todo, toggleTodo } : Props) => {
  return (
    <li>
        <input
          type="checkbox"
          checked={todo.completed}
          onClick={() => {
            toggleTodo?.(todo);
          }}
        />
        {' '}
        {todo.text}
    </li>
  );
};

// const TodoItem = ({ todo }: TodoItemProps) => {
//   return (
//     <li>
//       <input type="checkbox" checked={todo.completed} />
//       <span> {todo.text} </span>
//     </li>
//   );
// };


export default TodoItem;
