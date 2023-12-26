import React, { useEffect, useState } from 'react'
import axios from "axios"

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const Api = () => {
 
  const [train,settrain]=useState("");
  const [gettrain,setgettraindata] = useState([])
  async function getData(){

    try {

      console.log(train.length)

      if(train.length===5){

        const res =await axios.get(`https://indian-railway-api.cyclic.app/trains/getTrain/?trainNo=${train}`)
        // const val = await res.json()
        setgettraindata(res.data.data)
      }

      else{
        toast("please fill the correct train number")
      }
      
      
    } catch (error) {
      console.log(error)
    }
  }



  //  getData()

  return (

    <div>
<ToastContainer style={{color:"red"}} />
    <div>
      <input type="number" name="" id="" value={train} onChange={(e)=>settrain(e.target.value)}/>
      <button onClick={()=> getData()}>Search</button>
    </div>

<div>

    {/* {
      gettrain.map((el)=>{
        return (
        <div key={el.id}>
          <p>{el.train_name}</p>
          <p>{el.from_stn_name}</p>
          <p>{el.to_stn_name}</p>
          <p>{el.train_no}</p>
        </div>
        )
      })
    } */}

    <div>
      <p>{gettrain.train_name}</p>
    </div>
    </div>

    </div>


  )
}

export default Api