import React, { useState } from 'react';
import List from './components/List';

const App: React.FC = () => {
  const [tasks, setTasks] = useState<{ id: number; text: string; completed: boolean }[]>([]);
  const [taskInput, setTaskInput] = useState('');
  const [showAddModal, setShowAddModal] = useState(false);

  const addTask = () => {
    if (taskInput) {
      const newTask = {
        id: Date.now(),
        text: taskInput,
        completed: false,
      };
      setTasks([...tasks, newTask]);
      setTaskInput('');
      setShowAddModal(false);
    }
  };

  const toggleTask = (id: number) => {
    setTasks(tasks.map(task => 
      task.id === id ? { ...task, completed: !task.completed } : task
    ));
  };


  const isMobile = window.innerWidth < 600;

  return (
    <div style={{
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      gap: isMobile ? '20px' : '40px',
      background: 'linear-gradient(135deg, #d3d3d4ff, #6b8bb8ff)',
      fontFamily: 'Segoe UI, Tahoma, Geneva, Verdana, sans-serif',
      padding: isMobile ? '10px' : '0',
      boxSizing: 'border-box'
    }}>
      <div style={{
        width: '100%',
        maxWidth: '500px',
        backgroundColor: 'white',
        boxShadow: '0 6px 20px rgba(0, 0, 0, 0.15)',
        padding: isMobile ? '15px 8px 30px' : '20px 25px 60px',
        borderRadius: '12px',
        marginTop: isMobile ? '0' : '-20px',
        boxSizing: 'border-box'
      }}>
        <h1 style={{
          fontSize: isMobile ? '1.5rem' : '2.2rem',
          fontWeight: 700,
          marginBottom: '15px',
          textAlign: 'center',
          color: '#333',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center', 
        }}>
            TODO
            <span
              style={{
                fontSize: isMobile ? '1rem' : '1.1rem',
                background: '#f1f5f9',
                color: '#007bff',
                borderRadius: '12px',
                padding: isMobile ? '2px 6px' : '4px 10px',
                fontWeight: 400,
                marginLeft: '10px',
                minWidth: '20px',
                textAlign: 'center',
                display: 'inline-block'
              }}
            >
              {tasks.filter(task => !task.completed).length}
            </span>
        </h1>
        <List todos={tasks} toggleTodo={toggleTask} />
        <button
          onClick={() => setShowAddModal(true)}
          style={{
            marginTop: '24px',
            width: '100%',
            padding: isMobile ? '10px' : '14px',
            fontSize: isMobile ? '1rem' : '1.1rem',
            fontWeight: 600,
            backgroundColor: '#007bff',
            color: 'white',
            border: 'none',
            borderRadius: '8px',
            cursor: 'pointer',
            borderBottomLeftRadius: '12px',
            borderBottomRightRadius: '12px'
          }}
        >
          Add Task
        </button>
      </div>

      {showAddModal && (
        <div style={{
          position: 'fixed',
          top: 0, left: 0, right: 0, bottom: 0,
          background: 'rgba(0, 0, 0, 0.54)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          zIndex: 1000
        }}>
          <div style={{
            width: '90%',
            maxWidth: '350px',
            backgroundColor: '#fff',
            boxShadow: '0 6px 15px rgba(133, 133, 133, 0.3)',
            padding: isMobile ? '20px 12px 18px' : '28px 24px 22px',
            borderRadius: '14px',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'stretch',
            gap: '25px',
            position: 'relative'
          }}>
            <button
              onClick={() => setShowAddModal(false)}
              style={{
                position: 'absolute',
                top: 8,
                right: 12,
                backgroundColor: 'transparent',
                border: 'none',
                fontSize: '1.5rem',
                color: '#9b9090ff',
                cursor: 'pointer',
                fontWeight: 700,
                lineHeight: 1, 
              }}
            >
              ×
            </button>
            <input
              type="text"
              value={taskInput}
              onChange={(e) => setTaskInput(e.target.value)}
              placeholder="Add a new task"
              style={{
                padding: isMobile ? '12px 8px' : '20px 14px',
                fontSize: '1rem',
                width: '100%',
                borderRadius: '8px',
                border: 'none',
                boxSizing: 'border-box'
              }}
            />
            <button
              onClick={addTask}
              style={{
                padding: isMobile ? '8px' : '10px',
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
      )}

    </div>
  );
};

export default App;