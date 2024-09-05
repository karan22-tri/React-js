import React from 'react'
import { useState , useEffect } from 'react'

function FetchingData() {
  
    const[data, setData] = useState([])


    useEffect(()=>{
        const dataFetched=async()=>{
            try{
                let response = await fetch('https://fake-coffee-api.vercel.app/api')
                let jsonData = await response.json()
                console.log(jsonData);
                setData(jsonData)
            }catch(err){
                console.log(err)
            }


        }
        dataFetched();
    },[])
  
    return (
        <>
        <center>
            <h1 style={{color:'blue'}}>Our Products</h1>
            </center>
            <div style={{border:'1px solid black',display:'flex',flexWrap:'wrap',justifyContent:'space-evenly',backgroundColor:''}}>
        {
            data.map((el,index)=>(
                <>
                <ul key={index} style={{textDecoration:'none'}}>
              
                    
             
                
              <div style={{border:'1px solid black',width:'300px',boxShadow:'5px 5px 5px'}}>

              <img src={el.image_url} style={{height:'300px',width:'300px'}} alt="" />
                <br />

                <center>
                    
                <h2 style={{color:'gray'}}>{el.category}</h2>
                <h3>{el.name}</h3>
               
                <h4 style={{color:'red'}}>price : - {el.price}$</h4>
                </center>

              </div>

                
                
                 </ul>
                </>

               
                 
            ))
        }
        </div>
        </>
  )
}

export default FetchingData