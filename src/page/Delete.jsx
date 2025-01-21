// import React,{ useState } from 'react'
// import axios from 'axios'
// import { useNavigate, useParams } from 'react-router-dom'

// const Delete = () => {
//     const nav = useNavigate()
//     const { id } = useParams()
//     const [input, setInput] = useState(false)

//     const remove = async () => {
//         if (!id) {
//             alert('Invalid id')
//             return
//         }
//         setInput(true)
//         try{
//         const deleteValue = await axios.delete("http://localhost:3001/delete/${id}")
//         console.log(deleteValue)
//         if (deleteValue.status === 200) {
//             alert('deleted successfully')
//             nav('/task')
//         } else {
//            alert('something went wrong')
//             console.error(deleteValue)
//         }
//     } catch (error) {
//         console.error(error)
//     }
//     return (
//     <div>
//       <p> Are You sure you want to delete</p>
//       <button type='button' onClick={remove} disabled={input}>{input ? 'Deleting' : 'Delete'}</button>
//       <button type='button' onClick={() => nav('/task')}>Cancel</button>
//     </div>
//   )
// }

// export default Delete;

import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';

const Delete = () => {
  const nav = useNavigate();
  const { id } = useParams();
  const [input, setInput] = useState(false);

  const remove = async () => {
    if (!id) {
      alert('Invalid id');
      return;
    }
    setInput(true);
    try {
      const deleteValue = await axios.delete(`http://localhost:3001/delete/${id}`);
      console.log(deleteValue);
      if (deleteValue.status === 200) {
        alert('Deleted successfully');
        nav('/task');
      } else {
        alert('Something went wrong');
        console.error(deleteValue);
      }
    } catch (error) {
      console.error(error);
    }
    setInput(false); // Make sure to reset the input state
  };

  return (
    <div>
      <p>Are you sure you want to delete?</p>
      <button type='button' onClick={remove} disabled={input}>
        {input ? 'Deleting' : 'Delete'}
      </button>
      <button type='button' onClick={() => nav('/task')}>Cancel</button>
    </div>
  );
};

export default Delete;
