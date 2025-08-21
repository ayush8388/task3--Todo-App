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

const isMobile = window.innerWidth < 600;

const EmptyMessage: React.FC = () => (
  <p
    style={{
      textAlign: 'center',
      fontSize: isMobile ? '0.98rem' : '1rem',
      color: '#777',
      padding: isMobile ? '10px 0' : '0',
    }}
  >
    No tasks available. Please add a task.
  </p>
);

const List: React.FC<ListProps> = ({ todos, toggleTodo }) => {
  return (
    <>
      <style>
        {`
          .hide-scrollbar::-webkit-scrollbar {
            display: none; 
          }
        `}
      </style>
      <div
        className="hide-scrollbar"
        style={{
          marginTop: isMobile ? '10px' : '15px',
          width: '100%',
          maxWidth: '500px',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'stretch',
          justifyContent: 'flex-start',
          boxSizing: 'border-box',
          padding: isMobile ? '0 4px' : '0',
          maxHeight: isMobile ? '50vh' : '350px',
          overflowY: 'auto',
          background: 'inherit',
        }}
      >
        {todos.length === 0 ? (
          <EmptyMessage />
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
    </>
  );
};

export default List;