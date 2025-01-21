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
    
      const updateValue = await axios.put("http://localhost:3001/update/"+paramvalue.id,{task:input})
      console.log(updateValue)

      if (updateValue.status === 200) {
        nav('/task')
      }else {
        // alert('something went wrong for Update ')
        console.error(updateValue)
      }
    
      
    }
  
  return (
    <div>
      <from>
      <input onChange={(e)=>setInput(e.target.value)} placeholder='Enter Task'/>
      <button type='button' onClick={update}>Update</button>
      </from>
    </div>
  )
}

export default Update
