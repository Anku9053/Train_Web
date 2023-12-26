import React from 'react'

const TrainFromToUi = (e) => {
    console.log(e)
  return (
    <div>
        <div >

    <p>{e?.train_base?.train_no}</p>
    <p>{e?.train_base?.train_name}</p>
    <p>{e?.train_base?.dstn_stn_name}</p>
    <p>{e?.train_base?.from_stn_name}</p>
    <p>{e?.train_base?.to_stn_name}</p>
    <p>{e?.train_base?.travel_time}</p>
    </div>
    </div>
  )
}

export default TrainFromToUi