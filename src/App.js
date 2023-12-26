import logo from './logo.svg';
import { IoMdSunny } from "react-icons/io";
import './App.css';
import Api from './Components/api';
import TrainfromTo from './Components/TrainfromTo';
import TrainFromToUi from './Components/TrainFromToUi';
import { useState } from 'react';
// import Centereddiv from './Api/Centereddiv';
import { IoIosMoon } from "react-icons/io";
import MainROutes from './Components/MainROutes';
import Navbar from './Components/Navbar';
import RightScrollable from './Components/RightScrollable';
import LeftScrollable from './Components/LeftScrollable';
import TrainSlider from './Components/TrainSlider';
function App() {
  const [isDarkMode, setDarkMode] = useState(false);

  const toggleMode = () => {
    setDarkMode(!isDarkMode);
    document.body.classList.toggle('dark-mode', !isDarkMode);
  };
  return (
    <div className={`App ${isDarkMode ? 'dark-mode' : ''}`}>

      {/* <button className='toggler-button' onClick={toggleMode}>{!isDarkMode ? <IoIosMoon /> : <IoMdSunny />}</button> */}
      {/* <TrainfromTo/> */}
      {/* <Navbar/> */}
      <MainROutes/>
      <div style={{display:"flex",justifyContent:"space-between",maxWidth:"50%"}}>

    <LeftScrollable/>
    <RightScrollable/>
      </div>

    </div>


  );
}

export default App;
