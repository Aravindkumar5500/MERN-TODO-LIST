import React,{useState} from 'react'
import{ useNavigate, useParams } from 'react-router-dom'
import axios from 'axios'


const Update = () => {
  const nav = useNavigate()
  //  const {id} = useParams()
  const[input,setInput] = useState("")

  const paramvalue = useParams()
  console.warn(paramvalue.id)

  const update = async()=>{
    
      const updateValue = await axios.put("http://localhost:3001/update/"+paramvalue.id,{task:input},{headers:{token:sessionStorage.getItem("token")}})
      console.log(updateValue)

      if (updateValue.data.status === 200) {
        alert('Updated successfully')
        nav('/task')
      }else {
        alert('Update failed')
        console.error(updateValue)
      }
    
      
    }
  
  return (
    <div>
      <from>
      <input onChange={(e)=>setInput(e.target.value)} style={{margin:"25px"}} type='text' placeholder='Enter Task'/>
      <button type='button' onClick={update} className='btn btn-primary'>Update</button>
      </from>
    </div>
  )
}

export default Update
