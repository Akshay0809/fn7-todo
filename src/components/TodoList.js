import React, { useState } from "react";
import { JsonForms } from "@jsonforms/react";
import { materialRenderers, materialCells } from "@jsonforms/material-renderers";
import { taskSchema } from "../taskSchema.js";
import { taskUISchema } from "../taskUISchema.js";
import '../todostyles.css'

const TodoList = () => {
    const [tasks, setTasks] = useState([]);
    const [newTask, setNewTask] = useState({});
    const [editingTask, setEditingTask] = useState(null);
    const [editedTask, setEditedTask] = useState(null);
  
    const handleAddTask = () => {
      setTasks([...tasks, newTask]);
      setNewTask({});
    };
  
    const handleEditTask = (index) => {
      setEditingTask(index);
      setEditedTask({ ...tasks[index] });
    };
  
    const handleUpdateTask = () => {
      const updatedTasks = [...tasks];
      updatedTasks[editingTask] = editedTask;
      setTasks(updatedTasks);
      setEditingTask(null);
      setEditedTask(null);
    };
  
    const handleDeleteTask = (index) => {
      const updatedTasks = [...tasks];
      updatedTasks.splice(index, 1);
      setTasks(updatedTasks);
    };
  
    return (
      <div>
        <h1>To-Do List</h1>
        <div className="tasks">
          <JsonForms
            data={newTask}
            uischema={taskUISchema}
            schema={taskSchema}
            renderers={materialRenderers}
            cells={materialCells}
            onChange={({ data }) => setNewTask(data)}
          />
          <button onClick={handleAddTask}>Add Task</button>
        </div>
        <div className="task-cards">
          {tasks.map((task, index) => (
            <div key={index} className="task-card">
              {editingTask === index ? (
                <div>
                  <JsonForms
                    data={editedTask}
                    uischema={taskUISchema}
                    schema={taskSchema}
                    renderers={materialRenderers}
                    cells={materialCells}
                    onChange={({ data }) => setEditedTask(data)}
                  />
                  <button onClick={handleUpdateTask}>Update</button>
                </div>
              ) : (
                <>
                
                <div className="task-details">
                  <div >Title:<br></br><div className="task-title">{task.title}</div><br></br></div>
                  <div>Description: <br></br><div className="task-description" >{task.description}</div> <br></br></div>
                  <div>Due Data:<br></br><div className="task-duedate"> {task.dueDate} </div><br></br></div>
                  <div >Priority:<br></br> <div className="task-priority">{task.priority}</div> <br></br></div>
                  </div>

                  <button onClick={() => handleEditTask(index)}>Edit</button>
                  <button onClick={() => handleDeleteTask(index)}>Delete</button>
                
                </>
              )}
            </div>
          ))}
        </div>
      </div>
    );
  };
  
  export default TodoList;