import React, { useState } from 'react'
import Home from './Home'

function About() {
    const [data,setData] = useState(0)

function login(){
    setData(1)


}
function logout(){
  setData(0)


}
  return (
    <>


    {
      data ?(
        <div>
          <Home/>

        <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full ms-[50%]"   onClick={logout}>Logout</button>
      </div>
      ):(
        <div className='flex justify-center items-center flex-col mt-[100px]'>
        <div className='w-[350px] h-[350px] bg-[#233656]  rounded-[10px]'>
          <div className='w-full h-[50px] bg-[#EFF5FF] flex items-center'>

            <h5 className='ms-2 font-semibold'>Sign-in to Policybazaar</h5>
          </div>
          <div className='w-full h-[300px] border flex-col'>

                <input type='text' className='w-full p-2 rounded-md border-2 border-gray-400 mt-4' placeholder='Mobile Number'/>
                <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full mt-5 ms-[20%]" onClick={login}>Login with number</button>

                <h1 className='text-[white] mt-3 text'>________________________or__________________________</h1>
                <input type="text" className='w-full p-2 rounded-md border-2 border-gray-400 mt-4' placeholder='Enter youre email' />
                <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full mt-5 ms-[20%]" onClick={login}>Login with Google</button>
            </div>

        </div>

        </div>
      )

    }

    </>
  )
}

export default About