import React, { useEffect, useState } from 'react'
import { json } from 'react-router-dom'

function Addtodo() {
  const [todo,setTodo]= useState("")

  const [tasks,setTasks] = useState([])

  console.log(todo)


  const addTodo=()=>{

    setTasks([...tasks,{name:todo}])

    setTodo('')
  
   
 }
     useEffect(()=>{
      let x =   JSON.parse(localStorage.getItem("todos"))
      if(x){

        setTasks(x)
      }
      },[])



     useEffect(()=>{
    
      localStorage.setItem("todos",JSON.stringify(tasks))
      
     },[tasks,todo])

  return (
    <>
     <div className="add h-[100vh] flex justify-center items-center w-full border border-black ">
        <div className="addtodo text-center h-[30%] w-1/3   rounded-2xl ">
          <h1 className='text-2xl font-semibold '>ADD-TODO</h1>
          <input type="text" value={todo} onChange={(event) => setTodo(event.target.value)} placeholder='ADD-YOUR-TODO' className=' mt-10 placeholder:text-center placeholder:text-white px-10 w-[95%] text-center text-white h-10  bg-gray-400 rounded-xl text-xl' />
       
<button class="cssbuttons-io-button ms-[35%] mt-5" onClick={addTodo}>
Add TODO
  <div class="icon"><svg height="24"width="24"viewBox="0 0 24 24"xmlns="http://www.w3.org/2000/svg">
      <path d="M0 0h24v24H0z" fill="none"/>
      <path d="M16.172 11l-5.364-5.364 1.414-1.414L20 12l-7.778 7.778-1.414-1.414L16.172 13H4v-2z"fill="currentColor" />
    </svg>
  </div>
</button>
        </div>
        

     </div>
    </>
  )
}

export default Addtodo
