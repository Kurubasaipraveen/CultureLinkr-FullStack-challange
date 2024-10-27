import React, { useState, useEffect } from 'react';
import axios from 'axios';
import TaskItem from './TaskItem';
import '../styles/TaskList.css'

const TaskList = () => {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');

  // Fetch tasks from backend
  useEffect(() => {
    axios.get('http://localhost:5000/tasks')
      .then((response) => setTasks(response.data))
      .catch((error) => console.error('Error fetching tasks:', error));
  }, []);

  // Add  new task
  const addTask = () => {
    if (!newTask) return;
    axios.post('http://localhost:5000/tasks', { title: newTask })
      .then((response) => {
        setTasks([...tasks, response.data]);
        setNewTask('');
      });
  };

  // Completed/Incomplete task
  const toggleComplete = (id, completed) => {
    axios.patch(`http://localhost:5000/tasks/${id}`, { completed })
      .then((response) => {
        const updatedTasks = tasks.map(task =>
          task._id === id ? response.data : task
        );
        setTasks(updatedTasks);
      });
  };

  // Delete  task
  const deleteTask = (id) => {
    axios.delete(`http://localhost:5000/tasks/${id}`)
      .then(() => {
        const filteredTasks = tasks.filter(task => task._id !== id);
        setTasks(filteredTasks);
      });
  };

  // Edit  task
  const editTask = (task, updatedTitle) => {
    if (!updatedTitle) return;
    axios.put(`http://localhost:5000/tasks/${task._id}`, { title: updatedTitle })
      .then((response) => {
        const updatedTasks = tasks.map(t =>
          t._id === task._id ? response.data : t
        );
        setTasks(updatedTasks);
      });
  };

  return (
    <div className="task-list">
      <h1>To-Do List</h1>
      <input
        type="text"
        value={newTask}
        onChange={(e) => setNewTask(e.target.value)}
        placeholder="Add a new task"
      />
      <button onClick={addTask}>Add Task</button>
      <div>
        {tasks.map((task) => (
          <TaskItem
            key={task._id}
            task={task}
            onComplete={toggleComplete}
            onDelete={deleteTask}
            onEdit={editTask}
          />
        ))}
      </div>
    </div>
  );
};

export default TaskList;
