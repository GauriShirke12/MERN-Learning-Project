// frontend/src/components/EditTaskForm.js

import React, { useState, useEffect } from 'react';
import { updateTask } from '../api'; // Import the API function to update tasks

const EditTaskForm = ({ task, onCancel, onUpdateTask }) => {
  const [taskText, setTaskText] = useState('');
  const [completed, setCompleted] = useState(false);

  useEffect(() => {
    if (task) {
      setTaskText(task.text);
      setCompleted(task.completed);
    }
  }, [task]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (taskText.trim()) {
      const updatedTask = await updateTask(task._id, taskText, completed); // Call the API to update the task
      onUpdateTask(updatedTask); // Notify parent component to update the task in the list
      onCancel(); // Close the edit form
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={taskText}
        onChange={(e) => setTaskText(e.target.value)}
        required
      />
      <label>
        <input
          type="checkbox"
          checked={completed}
          onChange={() => setCompleted(!completed)}
        />
        Completed
      </label>
      <button type="submit">Update Task</button>
      <button type="button" onClick={onCancel}>
        Cancel
      </button>
    </form>
  );
};

export default EditTaskForm;
