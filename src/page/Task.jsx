import React, { useEffect, useState } from 'react'
import axios from 'axios'
import{useNavigate} from 'react-router-dom'
const Task = () => {

  const[newTodo,setNewTodo] = useState([])
  const [Data,setData]= useState([])

  const nav=useNavigate()
  const addTodo = async ()=>{
    const data = await axios.get('http://localhost:3001/todo')

    console.warn(data.data.data)
    setData(data.data.data)
  }
  console.log(Data)


  useEffect(()=>{
    addTodo()

  },[])

 

  return (
    <div>
      <h1>TO-DO LIST </h1>
      <textarea style={{width:"500px",margin:"auto",height:"100px"}} 
      type='text' value={newTodo} onChange={(e)=>setNewTodo(e.target.value)} placeholder='Add New Task'
      />
      <br/>
      <button onClick={async()=>{
        let data = await axios.post("http://localhost:3001/add",{
         task: newTodo
        })
        console.log(data)
        if(data.data.status===200){
          alert("susscess")

        }else {
          alert(data.data.message)
        }
      }}>ADD</button>
      <br/>
      <br/>
     <table class="table table-bordered border-primary" border="1" style={{margin:"auto"}}>
      <thead >
        <tr>
          <th>id</th>
          <th style={{margin:"auto"}}>TODO</th>
          <th>Update</th>
          <th>Delete</th>
        </tr>
      </thead>
      <tbody>
        {Data.map((e,index)=>{
          return<>
          <tr>
            <td>{e._id}</td>
            <td>{e.task}</td>
            <td><button type='button' onClick={()=>nav('/update/'+e._id)}>update</button></td>
            <td><button type='button' onClick={()=>nav('/delete/'+e._id)}>delete</button></td>
          </tr>
          </>
        })}
        </tbody>
     </table>
    </div>
  )
}

export default Task
