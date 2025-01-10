import { useEffect, useState } from 'react'
import axios from 'axios';
import './App.css'
import Input from './Input'
import { BsCircle, BsCircleFill } from "react-icons/bs";
import { BiRadioCircleMarked } from "react-icons/bi";
import { BsTrashFill } from "react-icons/bs";
function App() {
  const backendUrl = process.env.REACT_APP_BACKEND_URL;
  const [todos, settodo] = useState([]);


  useEffect(()=> {
    
    axios.get(`${backendUrl}`)
    .then(result=>settodo(result.data))


  })


  const handleChange=(id)=>{
    axios.put(`${backendUrl}/update/${id}`)
    .then(result=> console.log(result));
   
  }


const handleDelete=(id)=>{
  console.log("clicked");
  axios.delete(`${backendUrl}/delete/${id}`)
  .then(result=>console.log(result))
}


  return (
    <>
    <div className='h'>
        <h2>TODO Items</h2>
        <Input/>
        {
          todos.length==0 ? <div><h2>No Record</h2></div> :
          todos.map(todo=>(
            
            <div className ="task" key={todo._id}>
             {
              todo.done == true ?  <div className='checkbo'>
              <BiRadioCircleMarked className='iconS' onClick={()=>(handleChange(todo._id))}/>
             <p> {todo.task} </p>
             </div> : <div className='checkbox'>
                <BsCircleFill className='iconS' onClick={()=>(handleChange(todo._id))}/>
             <p> {todo.task} </p>
             </div>
             }
             <div>
                <BsTrashFill onClick={()=>(handleDelete(todo._id))} />
             </div>
             </div>
          ))

        }
    </div>
    
    </>
  )
}

export default App
