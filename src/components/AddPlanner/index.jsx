import { useState } from "react";
import TaskList from "./TaskList";
function AddPlanner(){
    const [myTasks, setMyTasks]=useState([]);
    const [subject,setSubject]=useState("");
    const [hours,setHours]=useState("");

    const  handleAddTask= () =>{
        if(!subject && !hours) return;

        const reqObj={
            subject,
            hours,
        };
     setMyTasks({...myTasks,reqObj});
     setSubject("");
     setHours("");
    }; 
  return (
    <div>
        <h2>Geekster Education Planner</h2>
        <section>
            <input value={subject} type="text" placeholder="Subject" onChange={(e) => setSubject(e.target.value)} />
            <input value={hours} type="number" placeholder="Hours" onChange={(e) => setHours(e.target.value)}/>
            <button onClick={handleAddTask}>Add Button</button>
        </section>
        <section>
            {
                myTasks.map((task,index) => (
                    <TaskList key ={index} subject={task.subject} hours={task.hours}/>
                ))
            }
        </section>
    </div>
    );
}

export default AddPlanner;
