import React from 'react';

interface TodoItemProps {
  todo: {
    id: number;
    text: string;
    completed: boolean;
  };
}

const TodoItem = ({ todo }: TodoItemProps) => {
  return (
    <li>
      <input type="checkbox" checked={todo.completed} />
      <span> {todo.text} </span>
    </li>
  );
};

export default TodoItem;
