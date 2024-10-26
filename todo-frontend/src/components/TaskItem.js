import React, { useState } from 'react';

const TaskItem = ({ task, onComplete, onDelete, onEdit }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editedTitle, setEditedTitle] = useState(task.title);

  // Handle task edit
  const handleEdit = () => {
    if (isEditing) {
      onEdit(task, editedTitle); // Save the edited task
    }
    setIsEditing(!isEditing); // Toggle edit mode
  };

  return (
    <div className="task-item">
      {isEditing ? (
        <input
          type="text"
          value={editedTitle}
          onChange={(e) => setEditedTitle(e.target.value)}
        />
      ) : (
        <span style={{ textDecoration: task.completed ? 'line-through' : 'none' }}>
          {task.title}
        </span>
      )}
      <button onClick={() => onComplete(task._id, !task.completed)}>
        {task.completed ? 'Undo' : 'Complete'}
      </button>
      <button onClick={handleEdit}>
        {isEditing ? 'Save' : 'Edit'}
      </button>
      <button onClick={() => onDelete(task._id)}>Delete</button>
    </div>
  );
};

export default TaskItem;
