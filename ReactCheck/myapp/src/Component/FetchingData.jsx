import React from 'react'
import { useState , useEffect } from 'react'

function FetchingData() {
  
    const[data, setData] = useState([])


    useEffect(()=>{
        const dataFetched=async()=>{
            try{
                let response = await fetch('https://fakestoreapi.com/products')
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
        {
            data.map((el,index)=>(
                <>
                <li key={index}>
                <div>
                 <li>{el.title}</li>
                 <img src={el.image} alt="" />
               
                 </div>
                
                 </li>
                </>

               
                 
            ))
        }</>
  )
}

export default FetchingData