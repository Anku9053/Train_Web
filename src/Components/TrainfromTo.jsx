import axios from 'axios'
import React, { useEffect, useState } from 'react'
// import TrainFromToUi from './TrainFromToUi'
import { useNavigate } from 'react-router-dom';
const TrainfromTo = () => {

    const [data, setgetdata] = useState([] || null)
    const [from, setfrom] = useState("")
    const [to, setto] = useState("")
    const navigate = useNavigate()

    const newpage = ()=>{
        navigate("./practicepage")
    }
    async function gettraininfo() {

        const res = await axios.get(`https://indian-railway-api.cyclic.app/trains/betweenStations/?from=${from}&to=${to}`)
        setgetdata(res.data.data)
    }
    // console.log(data[0].train_base.train_no)
    // useEffect(()=>{

    //     gettraininfo()
    // },[])
    console.log(data)
    return (
        <div>
            <div>
                <input type="text" value={from} onChange={(e) => setfrom(e.target.value)} />
                <input type="text" value={to} onChange={(e) => setto(e.target.value)} />
                <button onClick={() => gettraininfo()}>Search</button>
            </div>
<button onClick={newpage}>Practicepage</button>

            {data.length === 0 ? <>Loading......</> : <div>
                {
                    data.map((el) => {
                        return (
                            <div style={{display:"flex",justifyContent:'space-between',width:"60%",margin:"auto"}}>
                                <p>{el?.train_base?.train_no}</p>
                                <p>{el?.train_base?.train_name}</p>
                                <p>{el?.train_base?.dstn_stn_name}</p>
                                <p>{el?.train_base?.from_stn_name}</p>
                                <p>{el?.train_base?.to_stn_name}</p>
                            </div>
                        )
                    })
                }
            </div>

            }



        </div>
    )
}

export default TrainfromTo