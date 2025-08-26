import React, { useState } from 'react';
import './Todo.css';

function Todo () {
  const [task, setTask] = useState ('');
  const [todos, setTodos] = useState ([]);

  const handleAdd = () =>{
    if (task.trim() === '') return;

    setTodos([...todos, task]);
    setTask('');
  };


  const handleDelete = (index) => {
    const newTodos = todos.filter((_, i) => i !== index);
    setTodos(newTodos);
  };

  return (
    <div className='Todo'>
      <h2>Simple Todo App</h2>

      <input
      type="text"
      value={task}
      onChange={(e) => setTask(e.target.value)}
      placeholder="Type Something..."
      />

      <button onClick={handleAdd}>ADD</button>

      <ul>
        {todos.map((item, index) => (

          <li key={index}>
            {item}{''}
            <button onClick={() => handleDelete(index)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Todo;


// function Todo  () {
//   const [task, setTask] = useState ('');
//   const [todos, setTodos] = useState ([]);

//   const handleAdd = () => {
//     if (task.trim() === '') return;

//     setTodos([...todos, task]);
//     setTask('');
//   };

//   const handleDelete = (index) => {
//     const newTodos = todos.filter((_, i) => i !== index);
//     setTodos(newTodos);
//   };

//   return (
//     <div className="Todo">
//       <h2>Simple ToDo App</h2>
      
//       <input
//         type="text"
//         value={task}
//         onChange={(e) => setTask(e.target.value)}
//         placeholder="Type something..."
//       />
//       <button onClick={handleAdd}>Add</button>

//       <ul>
//         {todos.map((item, index) => (
//           <li key={index}>
//             {item}{' '}
//             <button onClick={() => handleDelete(index)}>Delete</button>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// }

