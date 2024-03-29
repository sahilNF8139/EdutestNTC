import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { newResetAPI } from '../API/Action/globalAction';

const Timer = () => {
  const [timer, setTimer] = useState(5);
  const [isTimerRunning, setIsTimerRunning] = useState(true);//timer useState
  let [count, setcount] = useState(0)
  console.log("counttt", count && count);
  // const[show,setshow]=useState(true)
  const gtitem = localStorage.getItem('key')


const dispatch=useDispatch()

  let ResendOTPReg = useSelector(state => state.globalReducer.ResendOTPReg);
  console.log("Resend OTP Response", ResendOTPReg )   


  useEffect(() => {
    let interval;

    if (gtitem == 2) {

   setIsTimerRunning(false);

    }

    else {
      if (isTimerRunning && timer > 0) {
        interval = setInterval(() => {
          setTimer(prevTimer => prevTimer - 1);
        }, 1000);
      }
      else if (timer === 0) {
        setIsTimerRunning(false);
      }

      return () => clearInterval(interval);
    }

  }, [isTimerRunning, timer]);
 const Numberget=localStorage.getItem('numbr mate nu get ') 

console.log("GEt vali Itemmmmmmmmmmmmmmmmmmmmmm",Numberget)

 let formData = new FormData();

 formData.append('phone', Numberget);

  function Rsethndler() {
 
    setcount(count + 1)
    localStorage.setItem('key', count + 1)
    console.log('getitem', gtitem);

    // if (count>=3) {
    // timer&&button
    // }
    if (setTimer <= 2) {
    }
    setTimer(5);
    setIsTimerRunning(true);
    dispatch(newResetAPI(formData))
  }

  console.log("counting", count);
  return (
    <div>


      {isTimerRunning === true ? <p>Timer:{timer}</p> : gtitem == 2 ? "" :
        <div> <button onClick={Rsethndler}>ResendOTP</button></div>


      }
      {/* {
        gtitem >= 2 ? null :
        <div> <button>ResendOTP</button></div>
      } */}
      {/* {   gtitem >= 2 ? null :
          <p>Timer:{timer}</p>        
      } */}
      <></>
    </div>
  );
};

export default Timer;

