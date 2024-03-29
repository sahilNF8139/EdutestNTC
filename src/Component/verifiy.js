import React, { useState} from 'react';
import OtpInput from 'react-otp-input';
// import Timer from './timer';
import { useDispatch,useSelector } from 'react-redux';
// import { verifictionOtpAPI, verifyOtpAPI } from '../API/Action/globalAction';
import { thenpostAPI } from '../API/Action/globalAction';
 
function Verifictioning() {
  const dispatch = useDispatch()
  const [otp, setOtp] = useState('');
  const [numbereror, setnumbereror] = useState("")



  let verificationotpRducer = useSelector(state => state.globalReducer.verificationotpRducer);
  console.log("DONEEEEEEEEEEEEEEEEEEEEEE", verificationotpRducer )   

  function handleVerify () { 
    

   const GT_valiitem= localStorage.getItem('key')
    
    let formData = new FormData(); 
    formData.append('otp', otp);
    formData.append('id', GT_valiitem);
    
   console.log('Get vali Item',GT_valiitem);
  //  debugger;
    if (otp) {
      setnumbereror("")
      if (otp.length == 4) {
        dispatch( thenpostAPI(formData))
        setnumbereror("")

    } else {
        setnumbereror("please Enter valid otp")
    }
  } else {
      setnumbereror("please Enter the  OTp  first priority ")
  }

//   if (otp) {
//     if (otp.length == 4) {
//         setnumbereror("")
//         // dispatch(newpostAPI(formData))

//     } else {
//         setnumbereror("please Enter valid otp")
//     }
// }
}
    // Send 'otp' to your server for validation
    // If validation is successful, proceed; otherwise, show an error message
    console.log('OTP is ', otp);
  

  return (
    <div className="App">
      {/* <h2>OTP verification screen in React <a href="https://www.cluemediator.com" target="_blank" rel="noopener">Clue Mediator</a></h2> */}
    
      <OtpInput
        value={otp} 
        onChange={setOtp} 
        numInputs={4}
        renderSeparator={<span> </span>}
        inputType="tel"
        containerStyle={{ display: 'unset' }}
        inputStyle={{ width: "3rem", height: "3.5rem" }}
        renderInput={(props) => <input {...props} className='otp-input' />}
      />
      <div className='btn-container'>
         <div>
         {/* <Timer></Timer> */}
         {/* <button onClick={Rsethndler}>ResendOTP</button> */}
         </div> 
         <br/>
        <div> {numbereror && <span style={{ color: 'red' }}>{numbereror}</span>}</div>
        <button onClick={handleVerify}>Verify OTP</button>
      </div>
     
    </div>
  );
  }   
export default Verifictioning;
