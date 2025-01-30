import React, { useState } from 'react';
import api from '../api';

function TaskForm({setTasks, tasks, setError}){
  const [taskText, setTaskText] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    if(!taskText.trim()) return
    try{
       const newTask = await api.createTask(taskText)
        setTasks([...tasks, newTask])
        setTaskText('')
    }catch (error){
      setError(error.message)
    }
  };


  return (
      <form onSubmit={handleSubmit}>
         <input type="text" value={taskText} placeholder='Enter Task' onChange={e=> setTaskText(e.target.value)}/>
          <button type="submit">Add Task</button>
      </form>
  )

}
export default TaskForm;