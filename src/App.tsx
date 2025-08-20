import React, { useState } from 'react';
import List from './components/List';

const App: React.FC = () => {
  const [tasks, setTasks] = useState<{ id: number; text: string; completed: boolean }[]>([]);
  const [taskInput, setTaskInput] = useState('');

  const addTask = () => {
    if (taskInput) {
      const newTask = {
        id: Date.now(),
        text: taskInput,
        completed: false,
      };
      setTasks([...tasks, newTask]);
      setTaskInput('');
    }
  };

  const toggleTask = (id: number) => {
    setTasks(tasks.map(task => 
      task.id === id ? { ...task, completed: !task.completed } : task
    ));
  };

  return (
    <div style={{
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      gap: '40px',
      background: 'linear-gradient(135deg, #d3d3d4ff, #6b8bb8ff)',
      fontFamily: 'Segoe UI, Tahoma, Geneva, Verdana, sans-serif'
    }}>
      <div style={{
        width: '45vw',
        backgroundColor: 'white',
        boxShadow: '0 6px 20px rgba(0, 0, 0, 0.15)',
        padding: '20px 25px 60px',
        borderRadius: '12px',
        marginTop: '-20px',
      }}>
        <h1 style={{
          fontSize: '2.2rem',
          fontWeight: 700,
          marginBottom: '15px',
          textAlign: 'center',
          color: '#333'
        }}>
            TODO
        </h1>
        <List todos={tasks} toggleTodo={toggleTask} />
      </div>

      <div style={{
        width: '25vw',
        backgroundColor: 'white',
        boxShadow: '0 6px 15px rgba(133, 133, 133, 0.3)',
        padding: '25px',
        borderRadius: '12px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'stretch',
        gap: '15px',
        marginTop: '-25px'
      }}>
        <input
          type="text"
          value={taskInput}
          onChange={(e) => setTaskInput(e.target.value)}
          placeholder="Add a new task"
          style={{
            padding: '20px 14px',
            fontSize: '1rem',
            minWidth: '20vw',
            borderRadius: '8px',
            border: 'none',
          }}
        />
        <button
          onClick={addTask}
          style={{
            padding: '10px',
            fontSize: '1rem',
            fontWeight: 600,
            backgroundColor: '#007bff',
            color: 'white',
            border: 'none',
            borderRadius: '8px',
          }}
        >
         Add Task
        </button>
      </div>
    </div>
  );
};

export default App;
