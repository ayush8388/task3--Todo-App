import React from 'react';

interface taskProps {
  id: number;
  text: string;
  completed: boolean;
  onToggle: (id: number) => void;
}

const isMobile = window.innerWidth < 600;

const Item: React.FC<taskProps> = ({ id, text, completed, onToggle }) => {
  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: '5px',
        border: '1px solid #e0e0e0',
        padding: isMobile ? '10px 8px' : '12px 16px',
        borderRadius: '8px',
        minWidth: 0,
        width: '100%',
        backgroundColor: completed ? '#f9f9f9' : '#fff',
        boxShadow: '0 2px 6px rgba(0,0,0,0.05)',
        boxSizing: 'border-box',
      }}
      onClick={() => onToggle(id)}
    >
      <div style={{ display: 'flex', alignItems: 'center', gap: isMobile ? '8px' : '12px' }}>
        <input
          type="checkbox"
          checked={completed}
          onChange={() => onToggle(id)}
          style={{
            cursor: 'pointer',
            width: isMobile ? '16px' : '18px',
            height: isMobile ? '16px' : '18px',
          }}
        />
        <span
          style={{
            textDecoration: completed ? 'line-through' : 'none',
            color: completed ? '#888' : '#333',
            fontSize: isMobile ? '0.95rem' : '1rem',
            fontWeight: 500,
            letterSpacing: '0.3px',
            wordBreak: 'break-word',
          }}
        >
          {text}
        </span>
      </div>
    </div>
  );
};

export default Item;