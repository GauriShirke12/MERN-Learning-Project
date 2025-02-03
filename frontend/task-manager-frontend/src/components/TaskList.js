// frontend/src/components/TaskList.js

import React from 'react';
import Task from './Task'; // Import the Task component to display individual tasks

const TaskList = ({ tasks, onDeleteTask, onEditTask }) => {
  return (
    <div>
      <h2>Task List</h2>
      {tasks.length === 0 ? (
        <p>No tasks available. Please add a task.</p>
      ) : (
        <ul>
          {tasks.map((task) => (
            <Task
              key={task._id}
              task={task}
              onDelete={() => onDeleteTask(task._id)}
              onEdit={() => onEditTask(task)}
            />
          ))}
        </ul>
      )}
    </div>
  );
};

export default TaskList;
