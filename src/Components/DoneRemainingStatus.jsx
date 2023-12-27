import React, { useState } from "react";

function DoneRemainingStatus() {
  const [tasks, setTasks] = useState([
    { id: 1, name: "", done: false },
    { id: 2, name: "", done: false },
    { id: 3, name: "", done: false }
  ]);

  function updateStatus(taskId) {
    const updatedTasks = tasks.map(task =>
      task.id === taskId ? { ...task, done: !task.done } : task
    );
    setTasks(updatedTasks);
  }

  const doneCount = tasks.filter(task => task.done).length;
  const remainingCount = tasks.filter(task => !task.done).length;
  const status = `Done: ${doneCount} | Remaining: ${remainingCount}`;

  return (
    <div>
      <h2>DoneRemainingStatus</h2>
      <ul>
        {tasks.map(task => (
          <li key={task.id}>
            <input type="checkbox" onChange={() => updateStatus(task.id)} checked={task.done} />
            <label>{task.name}</label>
          </li>
        ))}
      </ul>
      <p>{status}</p>
    </div>
  );
}

export default DoneRemainingStatus;
