// frontend/src/components/TaskForm.js

import React, { useState } from 'react';
import { createTask } from '../api'; // Import the API function to create tasks

const TaskForm = ({ onAddTask }) => {
  const [taskText, setTaskText] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (taskText.trim()) {
      const newTask = await createTask(taskText); // Call the API to create a new task
      onAddTask(newTask); // Notify parent component to add the new task to the list
      setTaskText(''); // Clear the input field
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Enter task..."
        value={taskText}
        onChange={(e) => setTaskText(e.target.value)}
        required
      />
      <button type="submit">Add Task</button>
    </form>
  );
};

export default TaskForm;
