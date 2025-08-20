import React from 'react';

interface taskProps {
  id: number;
  text: string;
  completed: boolean;
  onToggle: (id: number) => void;
}

const Item: React.FC<taskProps> = ({ id, text, completed, onToggle }) => {
  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: '5px',
        border: '1px solid #e0e0e0',
        padding: '12px 16px',
        borderRadius: '8px',
        minWidth: '40vw',
        backgroundColor: completed ? '#f9f9f9' : '#fff',
        boxShadow: '0 2px 6px rgba(0,0,0,0.05)',
      }}
      onClick={() => onToggle(id)}
    >
      <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
        <input
          type="checkbox"
          checked={completed}
          onChange={() => onToggle(id)}
          style={{
            cursor: 'pointer',
            width: '18px',
            height: '18px',
          }}
        />
        <span
          style={{
            textDecoration: completed ? 'line-through' : 'none',
            color: completed ? '#888' : '#333',
            fontSize: '1rem',
            fontWeight: 500,
            letterSpacing: '0.3px',
          }}
        >
          {text}
        </span>
      </div>
    </div>
  );
};

export default Item;
