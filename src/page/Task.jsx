import React, { useEffect, useState } from 'react'
import axios from 'axios'
import{useNavigate} from 'react-router-dom'

const Task = () => {

  const[newTodo,setNewTodo] = useState([])
  const [Data,setData]= useState([])

  const nav=useNavigate()
  const addTodo = async ()=>{
   let data = await axios.get('http://localhost:3001/todo')

    console.warn(data.data.data)
    setData(data.data.data)
  }
  console.log(Data)


  useEffect(()=>{

    addTodo()

  },[])


  return (
    <div>


     
      <h1 style={{margin:"25px"}}>TO-DO LIST </h1>
 
      <br/>
      <div>
      <textarea class="form-control" id="exampleFormControlTextarea1" rows="3" style={{width:"500px",margin:"auto",height:"100px"}} 
      type='button' onClick={addTodo} value={newTodo} onChange={(e)=>setNewTodo(e.target.value)} placeholder='Add New Task...'
      ></textarea>
      </div>
      <br/>
      <button  class="btn btn-primary" onClick={async()=>{
        let data = await axios.post("http://localhost:3001/add",{
         task: newTodo
        })
        console.log(data)
        if(data.data.status===200){
          addTodo()

          alert("susscess")

        }else {
          alert(data.data.message)
        }
      }}>ADD</button>
      <br/>
      <br/>
     <table class="table table-bordered border-primary" border="1" style={{margin:"auto",height:"100px",width:"700px",padding:"auto"}}>
      <thead >
        <tr>
         
          <th style={{margin:"auto"}}>TODO</th>
          <th style={{margin:"auto",width:"100px"}}>Update</th>
          <th style={{margin:"auto",width:"100px"}}>Delete</th>
        </tr>
      </thead>
      <tbody>
        {Data.map((e,i)=>{
          return<>
          <tr>
           
            <td>{e.task}</td>
            <td><button type='button' class="btn btn-outline-success" onClick={()=>nav('/update/'+e._id)}>update</button></td>
            <td><button type='button' class="btn btn-outline-danger" onClick={()=>nav('/delete/'+e._id)}>delete</button></td>
          </tr>
          </>
        })}
        </tbody>
     </table>

     <br/>

     <div>
      <button type='button' class="btn btn-danger" onClick={()=>{sessionStorage.clear()
        nav('/')}}>Logout</button>
      </div>

    </div>

  
  )
}

export default Task


