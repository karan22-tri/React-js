import React, { useEffect, useState } from 'react'

function Todolist() {

  const [tasks,setTasks] = useState([])
 

  const deleteTodo =(index)=>{
       
    const newTasks = tasks.filter((el, i) => i !== index);
  setTasks(newTasks);
  localStorage.setItem("todos", JSON.stringify(newTasks));

  }

  const editTodo = (name, index) => {
    let updatetodo = prompt("Update todo here", name);
    if (updatetodo !== null) {
      const updateTasks = tasks.map((task, i) => {
        if (i === index) {
          return { ...task, name: updatetodo };
        }
        return task;
      });
      setTasks(updateTasks);
      localStorage.setItem("todos", JSON.stringify(updateTasks));
    }
  };


  useEffect(()=>{
    let x =   JSON.parse(localStorage.getItem("todos"))
    if(x){

      setTasks(x)
    }
    },[])

  return (
    <>
     <div className="list h-[100vh] w-full flex items-end justify-center">
          <div className="todos h-[80%] w-[30%] border border-black  ">
              <h1 className='text-2xl font-semibold border-b-8 border-black text-center '>TODO-LIST</h1>
              <ul className='mt-2'>

      {
          tasks.map((el,index)=>{

             return<div className='my-2 ps-[25%] border-b border-black' style={{display:"flex"}}>
             <li className='text-xl font-semibold'>{el.name}</li>
             <button className='border mb-2 border-black p-1 rounded-xl w-20 ms-3' onClick={()=>editTodo(el.name,index)} >Edit</button>
             <button className='border mb-2 border-black p-1 rounded-xl w-20 ms-3' onClick={()=>deleteTodo(index)} >Delete</button>
             </div> 


          })
      }

      </ul>
          </div>
     </div>
    </>
  )
}

export default Todolist
