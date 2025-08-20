import React from 'react';
import Items from './task';

export interface Todo {
  id: number;
  text: string;
  completed: boolean;
}

interface ListProps {
  todos: Todo[];
  toggleTodo: (id: number) => void;
}

const List: React.FC<ListProps> = ({ todos, toggleTodo }) => {
  return (
    <div
      style={{
        marginTop: '15px',
        maxWidth: '450vw',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'stretch',
        justifyContent: 'flex-start',
      }}
    >
      {todos.length === 0 ? (
        <p
          style={{
            textAlign: 'center',
            fontSize: '1rem',
            color: '#777',
          }}
        >
          No tasks available. Please add a task.
        </p>
      ) : (
        todos.map((todo) => (
          <Items
            key={todo.id}
            id={todo.id}
            text={todo.text}
            completed={todo.completed}
            onToggle={toggleTodo}
          />
        ))
      )}
    </div>
  );
};

export default List;
