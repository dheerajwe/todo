import { useState } from "react"
import "./App.css"
import axios from "axios";
function Input(){
    const backendUrl = process.env.REACT_APP_BACKEND_URL;
    const [task,setTask]=useState("");
    const handleAdd=(event)=>{
        event.preventDefault();
      
        axios.post(`${backendUrl}/create`,{task:task})
        .then(result=>console.log(result));

        setTask("");
    // 
    }

    return(
        <div className="hlo">
           
            <input className="hi" type="text" placeholder="Enter todo" value={task} onChange={(e)=>setTask(e.target.value)}/>
            <button className="s" onClick={handleAdd}>ADD</button>

        </div>
    )
}
export default Input;
