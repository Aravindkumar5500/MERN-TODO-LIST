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
      {/* <p>Are you sure you want to delete?</p>
      <button type='button' onClick={remove} disabled={input}>
        {input ? 'Deleting' : 'Delete'}
      </button>
      <button type='button' onClick={() => nav('/task')}>Cancel</button> */}

<div >
    <div class="flex justify-end p-2">
        <button type='button' onClick={() => nav('/task')} class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center">
            <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
        </button>
    </div>

    <div class="p-6 pt-0 text-center">
        <svg class="w-20 h-20 text-red-600 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
        </svg>
        <h3 class="text-xl font-normal text-gray-500 mt-5 mb-6">Are you sure you want to delete this user?</h3>
        <button onClick={remove} disabled={input}><span
            class="text-white bg-red-600 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-base inline-flex items-center px-3 py-2.5 text-center mr-2">
            Yes, I'm sure
        </span>
        </button>
        <button type='button' onClick={() => nav('/task')}> 
        <span 
            class="text-gray-900 bg-white hover:bg-gray-100 focus:ring-4 focus:ring-cyan-200 border border-gray-200 font-medium inline-flex items-center rounded-lg text-base px-3 py-2.5 text-center">
            No, cancel
        </span>
        </button>
    </div>
</div>
    </div>
  );
};

export default Delete;
