import React from 'react'
import { useState } from 'react'

function Todo() {

    const[inputValue,setInputValue]=useState('')
    const[todos,setTodos]=useState([])
   

    localStorage.setItem("ttoo",JSON.stringify(todos))


     function addTask()
     {
        let newTodos=
        {
            
          text:inputValue
        }

        setTodos([...todos,newTodos])
 
        setInputValue('')



     }

    const edit=(id)=>{
      
      const newtask=prompt("Enetr the text..")

      if(newtask!==null)
        {
           const updtask=todos.map((t,index)=>(
                id==index ? {...todos,text:newtask}: t
           ))

           setTodos(updtask)

          
         
        }
    }

    const del=(id)=>{
      
      let deltask=todos.filter((del)=>(
       
         todos.splice(id,1)
      ))

    setTodos(deltask)


    }

  return (
    <div>

        <h1 style={{color:'blue'}}>*** TODO LIST ***</h1>

        <br /> <br />

        <input type="text" placeholder='Enter your Task' value={inputValue} onChange={(e)=>setInputValue(e.target.value)}/>
        <input type="number" placeholder='Enter your slaary'/>
        <button onClick={addTask}>Add</button>

 <br /> <br />
        <table class="table" style={{width:"300px",border:"1px solid black",marginLeft:"620px"}}>
  <thead >
    <tr >
      <th scope="col">#</th>

      
      <th scope="col">Name</th>
      <th scope="col">Action</th>


    
    </tr>
  </thead>

<tbody>
                    {
                    
                    todos.map((el, i) => (
                        <tr key={i}>
                            <td scope="row">{i + 1}</td>
                            <td>{el.text}</td>
                            <td><i class="ri-edit-box-line bg-info text-white p-1" style={{fontSize:"18px"}} onClick={()=>edit(i)} /> <i class="ri-delete-bin-line bg-danger text-white p-1"style={{fontSize:"18px"}} onClick={()=>del(i)}/></td>
                            
                        </tr>


                    ))
                    
                    }
                </tbody>
       
                </table>
    </div>
  )
}

export default Todo