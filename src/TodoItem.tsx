const TodoItem = ({ todo }: TodoItemProps) => {
  return (
    <li>
      <input type="checkbox" checked={todo.completed} />
      <span> {todo.text} </span>
    </li>
  );
};


export default TodoItem;
