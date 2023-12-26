import React, { useState } from 'react'

const TrainSlider = () => {
    const [toggle,settoggle] = useState(true)

    const handletoggle = ()=>{
        settoggle(!toggle)
    }
  return (
    <div>
        {
            toggle?<p>Completed</p>:<p>Incompleted</p>
        }
        <button onClick={handletoggle}>handleToggle</button>
    </div>
  )
}

export default TrainSlider