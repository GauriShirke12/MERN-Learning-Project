// frontend/src/components/Task.js
import React from 'react';

const Task = ({ task, onDelete, onEdit }) => {
  return (
    <li>
      <span>{task.text}</span>
      <button onClick={onEdit}>Edit</button>
      <button onClick={onDelete}>Delete</button>
    </li>
  );
};

export default Task;
