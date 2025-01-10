import { useState } from "react"
import "./App.css"
import axios from "axios";
function Input(){
    const [task,setTask]=useState("");
    const handleAdd=(event)=>{
        event.preventDefault();
      
        axios.post("http://localhost:5000/create" ,{task:task})
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
