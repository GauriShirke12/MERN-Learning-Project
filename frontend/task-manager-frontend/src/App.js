import React, {useState} from 'react';
import './App.css';
import TaskList from './components/TaskList';
import TaskForm from './components/TaskForm';
import EditTaskForm from './components/EditTaskForm';


function App() {
  const [tasks, setTasks] = useState([])
  const [error, setError] = useState(null);
  const [editTask, setEditTask] = useState(null)
  const [editedTaskData, setEditedTaskData] = useState(null)

  return (
    <div className="container">
      <h1>Task Manager</h1>
        {error && <p style={{ color: "red" }}>Error: {error}</p>}
       {editTask ? <EditTaskForm  editTask={editTask} setEditTask={setEditTask} editedTaskData={editedTaskData} tasks={tasks} setTasks={setTasks} setError={setError} /> : <TaskForm setTasks={setTasks} tasks={tasks} setError={setError}/> }
       <TaskList setTasks={setTasks} tasks={tasks} setEditTask={setEditTask} setEditedTaskData={setEditedTaskData}  />
    </div>
  );
}

export default App;