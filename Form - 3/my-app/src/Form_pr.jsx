import React from 'react'
import { useState,useEffect } from 'react'

function Event() {

    const[islogin,setlogin]=useState(false)

    const[data,setData]=useState(null)

    function handleout()
    {
        setlogin(false)
    }
    
    function handlein()
    {
        setlogin(true)
    }

    useEffect(()=>{

        const facthingData=async()=>{

            let responde=await fetch('https://fakestoreapi.com/products')
            let JsonData=await responde.json()
    
            console.log(JsonData)
            setData(JsonData)
    
         }
         facthingData()

})

  return (
    <div className='lo'>

{

        islogin ?
   
    ( 

        <div className='a1'>
        <button onClick={handleout} style={{width:'10%',background:'green',color:'white', border:'none',margin:'10px~'}}>Log Out</button>

          {
            
            data && data.map((el)=>(
            
             
               <div className='aa'>
        <br/>
                
               <img src={el.image}/>
             <h3 style={{color:'blue'}}>{el.title}</h3>
             <h2 style={{color:'red'}}>{el.price}</h2>

               </div>
              
                
            ))
        }
      

        </div>

           
) : 
       
(
        <div className='bb'>
              <h1 style={{paddingBottom:'20px',color:'blue'}}>Big Sale is here Grab Now......!</h1>
              <br /> <br />
              <button onClick={handlein} style={{width:'20%',background:'green',color:'white', border:'none'}}>Log In </button>
              <div>
      
        
    </div>

       </div>
)
       
       
       
       
       
       
               
               
}

</div>
               
 )


}

export default Event    