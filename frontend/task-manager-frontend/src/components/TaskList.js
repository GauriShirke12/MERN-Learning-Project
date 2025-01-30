import React, { useState, useEffect } from 'react';
import api from '../api';
import {AiFillEdit, AiFillDelete} from "react-icons/ai";


function TaskList({setEditTask, setEditedTaskData}){
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchTasks = async () => {
        try {
          const data = await api.getTasks();
          setTasks(data);
        } catch (error) {
          setError(error.message);
        } finally {
          setLoading(false);
        }
      };

    fetchTasks();
  }, [tasks]);


const handleDelete = async(id) => {
  try{
    await api.deleteTask(id)
    // Remove the deleted task locally
     setTasks(tasks.filter((task) => task._id !== id))
  } catch (error) {
      setError(error.message)
  }
}

const handleEdit = (task) => {
  setEditTask(task._id)
  setEditedTaskData(task)

}

  if(loading){
    return <p>Loading Tasks....</p>
  }

  if (error) {
    return <p>Error: {error}</p>
  }
  return(
    <ul>
      {tasks.map((task) => (
        <li key={task._id}>
          <input type="checkbox" checked={task.completed} onChange={ async ()=>{
          try{
            await api.updateTask(task._id, task.text, !task.completed)
            } catch(error){
              setError(error.message)
            }
          }} />
          <span style={{textDecoration: task.completed ? 'line-through' : 'none'}}>{task.text}</span>
          <button onClick={()=> handleEdit(task)} ><AiFillEdit /></button>
          <button onClick={() => handleDelete(task._id)} ><AiFillDelete /></button>
        </li>
      ))}
    </ul>
  )
}
export default TaskList;