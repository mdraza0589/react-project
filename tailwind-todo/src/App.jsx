import React, { useState } from 'react';
import './App.css';

const App = () => {
  const [data, setData] = useState({ task: '', date: '' });
  const [tasks, setTasks] = useState([]);

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const handleClick = () => {
    if (data.task && data.date) {
      setTasks([...tasks, { ...data, checked: false }]); // Add new task with checked state
      setData({ task: '', date: '' }); // Clear input fields
    }
  };

  const handleRemove = (index) => {
    setTasks(tasks.filter((_, i) => i !== index));
  };

  const handleCheck = (index) => {
    const updatedTasks = [...tasks];
    updatedTasks[index].checked = !updatedTasks[index].checked;
    setTasks(updatedTasks);
  };

  return (
    <div>
      <div className="flex justify-center p-4 gap-4">
        <input
          value={data.task}
          onChange={handleChange}
          className="border p-2 rounded-2xl pl-4"
          name="task"
          type="text"
          placeholder="Enter Task"
        />
        <input
          value={data.date}
          onChange={handleChange}
          className="border p-2 rounded-2xl pl-4"
          name="date"
          type="date"
        />
        <button onClick={handleClick} className="bg-green-600 p-2 rounded-2xl cursor-pointer text-white font-bold">
          Add +
        </button>
      </div>

      <div className="mt-6 px-4 flex flex-col items-center">
        {tasks.length > 0 ? (
          tasks.map((item, index) => (
            <ul key={index} className="flex items-center mt-2 w-3/4">
              <li
                onClick={() => handleCheck(index)}
                className={`border-2 w-5 h-5 cursor-pointer flex justify-center items-center rounded-full ${
                  item.checked ? 'bg-green-500' : ''
                }`}
              >
                {item.checked && '✔'}
              </li>
              <li className={`w-1/2 text-center m-2 font-bold ${item.checked ? 'line-through text-gray-400' : ''}`}>
                {item.task}
              </li>
              <li className={`w-1/2 text-center m-2 font-bold ${item.checked ? 'line-through text-gray-400' : ''}`}>
                {item.date}
              </li>
              <li onClick={() => handleRemove(index)} className="m-2 font-bold border rounded-full p-2 cursor-pointer">
                X
              </li>
            </ul>
          ))
        ) : (
          <p className="text-center mt-4">No tasks added</p>
        )}
      </div>
    </div>
  );
};

export default App;

