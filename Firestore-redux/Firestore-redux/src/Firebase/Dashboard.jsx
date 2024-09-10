import React, { useEffect, useState } from 'react'
import { auth, firestore } from '../../firebaseConfig';
import { addDoc, collection, deleteDoc, doc,  getDocs, updateDoc } from 'firebase/firestore';
import { onAuthStateChanged } from 'firebase/auth';
import './Dashboard.css'

export default function Dashboard() {
  
  const [user,Setuser]=useState("");
  const [name,SetName]=useState("");
  const [sub,SetSub]  =useState("");


  const [record,setRecord] = useState(null);
  const [editIndex,SetEditIndex] = useState(null);

  useEffect(()=>{
    let unsub = onAuthStateChanged(auth,(currentUser)=>{
      if(currentUser){
        console.log(currentUser)
        fetchUser(currentUser)
        Setuser (currentUser)
      }else{
        Setuser("Guest")
      }
    })
  },[])


  const fetchUser = async() =>{
    let querySnapshot = await getDocs(collection(firestore,"Students"))
    console.log(querySnapshot);
    let allData = querySnapshot.docs.map((doc)=>({docId: doc.id,...doc.data()}))
    
    setRecord(allData)
  }

  const handleSubmit =async () => {
   console.log(editIndex);

   if(editIndex === null || editIndex < 0) {
    console.log("add doc" + editIndex);
    
    await addDoc(collection(firestore,"Students"),{
      id: user.uid , name  , sub
  })
   }else{
    console.log("update doc" + editIndex);
    await updateDoc(doc(firestore,"Students",record[editIndex].docId),{
      name : name,
      sub  : sub,
    })
   }

    // if(editIndex>=0  ){
    //   console.log("update doc" + editIndex);
    //     await updateDoc(doc(firestore,"Students",record[editIndex].docId),{
    //       name : name,
    //       sub  : sub,
    //     })
    // }else{
    //   console.log("add doc" + editIndex);
    //     await addDoc(collection(firestore,"Students"),{
    //       id: user.uid , name  , sub})
    // }
    
    SetName("");
    SetSub("");
    SetEditIndex(null)
    fetchUser();

  }

  const handleDelete = async (index) => {
    await deleteDoc(doc(firestore,"Students",record[index].docId))
    let remainingData = record.filter((e,i) => i !== index);
    console.log(remainingData);

    setRecord(remainingData)
    
  }

  const handleEdit =  (index) => {
    let singleData = record[index];
    SetName(singleData.name);
    SetSub(singleData.sub);
    SetEditIndex(index)
  }
    return (
      <div className="sec1">
     
      <input type="text" placeholder='Enter Youe Name ' onChange={(e)=> SetName(e.target.value)} value={name}/>
      <input type="text" placeholder='Enter Your Subject ' onChange={(e)=> SetSub(e.target.value)} value={sub}/>
        <button onClick={handleSubmit}>Submit</button>
      

      <table border="1" width="60%">
        <thead>
            <th>Uid</th>
            <th>Name</th>
            <th>Subject</th>
            <th colSpan={2}>Action</th>

        </thead>
        <tbody>
            {
                record ?
                record.map((e,i)=>{
                    return  <tr key={i} >
                        <td>{e.id}</td>
                        <td>{e.name}</td>
                        <td>{e.sub}</td>
                        <td><button onClick={()=>handleEdit(i)} style={{padding:'5px 20px'}}>Edit</button></td>
                        <td><button onClick={()=>handleDelete(i) } style={{padding:'5px 20px'}}>Delete</button></td>
                    </tr>
                })
                :   <p>Loading</p>
            }
        </tbody>
      </table>
    </div>
  )
}
