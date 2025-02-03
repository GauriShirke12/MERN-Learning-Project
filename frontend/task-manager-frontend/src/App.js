// frontend/src/App.js

import React, { useState, useEffect } from 'react';
import TaskList from './components/TaskList';
import TaskForm from './components/TaskForm';
import EditTaskForm from './components/EditTaskForm';
import { getTasks, deleteTask } from './api'; // API calls

const App = () => {
  const [tasks, setTasks] = useState([]);
  const [editingTask, setEditingTask] = useState(null);

  useEffect(() => {
    const fetchTasks = async () => {
      const allTasks = await getTasks();
      setTasks(allTasks);
    };
    fetchTasks();
  }, []);

  const handleAddTask = (newTask) => {
    setTasks((prevTasks) => [...prevTasks, newTask]);
  };

  const handleDeleteTask = async (id) => {
    await deleteTask(id);
    setTasks(tasks.filter((task) => task._id !== id));
  };

  const handleEditTask = (task) => {
    setEditingTask(task);
  };

  const handleUpdateTask = (updatedTask) => {
    setTasks(
      tasks.map((task) =>
        task._id === updatedTask._id ? updatedTask : task
      )
    );
    setEditingTask(null);
  };

  return (
    <div>
      <h1>Task Manager</h1>
      {editingTask ? (
        <EditTaskForm
          task={editingTask}
          onCancel={() => setEditingTask(null)}
          onUpdateTask={handleUpdateTask}
        />
      ) : (
        <>
          <TaskForm onAddTask={handleAddTask} />
          <TaskList
            tasks={tasks}
            onDeleteTask={handleDeleteTask}
            onEditTask={handleEditTask}
          />
        </>
      )}
    </div>
  );
};

export default App;
