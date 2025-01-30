import React, { useState, useEffect} from 'react';
import api from '../api';

function EditTaskForm({editTask, setEditTask, editedTaskData, setTasks, tasks, setError}){
  const [text, setText] = useState("");
  const [completed, setCompleted] = useState(false);

  useEffect(()=>{
    if(editedTaskData){
        setText(editedTaskData.text);
        setCompleted(editedTaskData.completed)
    }
  }, [editedTaskData])
   const handleSubmit = async (event) => {
    event.preventDefault();
        try{
        const updatedTask = await api.updateTask(editTask, text, completed)
        setTasks(tasks.map((task) => task._id === editTask ? updatedTask: task))
         setEditTask(null);
        } catch (error){
            setError(error.message)
        }
   }
    return (
       <form onSubmit={handleSubmit}>
         <input type="text" value={text} placeholder='Edit Task' onChange={e=> setText(e.target.value)}/>
          <input type="checkbox" checked={completed}  onChange={()=> setCompleted(!completed)}/>
          <button type="submit">Update Task</button>
      </form>
    )
}
export default EditTaskForm;