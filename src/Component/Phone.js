import React, { useState } from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { newpostAPI } from '../API/Action/globalAction';
import OtpFipnal from './OtpFinal';
import { useNavigate } from 'react-router-dom';
import globalReducer from '../API/Reducer/globalReducer';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
// import { dasherize } from 'i/lib/methods';
function Phone() {
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const [number, setnumber] = useState("")
    localStorage.setItem('numbr mate nu get ', number)
    const [numbereror, setnumbereror] = useState("") //red akshar ni error lava mate 

    // debugger;
    let sendthayreducer = useSelector(state => state.globalReducer.sendthayreducer);
    console.log("finally", sendthayreducer)


    useEffect(() => {
        if (sendthayreducer) {
            console.log('Done', sendthayreducer && sendthayreducer.data.isregister)
            toast.success(sendthayreducer.message);

            setTimeout(() => {
                if (sendthayreducer.data.isregister == true) {
                    navigate('/otp');

                }else{
                    navigate('/personal')
                }   
            }, (2000))


        }

    }, [sendthayreducer])



    // useEffect(()=> {

    //     // let data = {
    //     //   title: 'sahil khalani',
    //     //   body: 'web devloping',
    //     //   userId: 1,
    //     // }
    //     dispatch(newpostAPI (number))

    // },[])
    function numberchangehandler(e) {
        const numberregex = /^[0-9]*$/
        if (numberregex.test(e.target.value)) {
            setnumber(e.target.value)
            setnumbereror("")
        } else {
            setnumbereror("only for Numbers only")
        }

    }
    // let red= sendthayreducer.isregister 
    //  console.log( "Done",sendthayreducer.isregister);
    function clickhendler(e) {


        let formData = new FormData();

        formData.append('phone', number);


        e.preventDefault()
        if (number) {
            setnumbereror("")
        } else {
            setnumbereror("please Enter your  Mobile Number")
        }
        //10 NUMBER aDHURA MATE 
        if (number) {
            if (number.length == 10) {
                setnumbereror("")
                dispatch(newpostAPI(formData))
            } else {
                setnumbereror("please Enter valid Number")

            }
        }

    }
    let sbtdata = {
        Number: number
    }
    console.log(sbtdata);


    return (

        <div className="account-pages my-5 pt-sm-5">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-md-8 col-lg-6 col-xl-5">
                        <div className="card">

                            <div className="card-body ">
                                <div className="auth-logo">


                                    <a href="" className="auth-logo-dark">
                                        <div className="avatar-md profile-user-wid mb-4">
                                            <span className="avatar-title ">
                                                <img src="images/logo.png" alt="" className="" height="" />
                                            </span>
                                        </div>
                                    </a>
                                </div>
                                <div className="p-2">
                                    <div className="form-horizontal" action="">
                                        <div className="div mb-3">
                                            <label htmlFor="username" className="form-label">Mobile Number</label>
                                            <div className='input-group'>

                                                <div className="input-group-text">+91</div>
                                                <input type="text" className="form-control" id="username" placeholder="Enter Mobile Number" name="number" maxLength='10' value={number} onChange={numberchangehandler} />
                                            </div>
                                            {numbereror && <span style={{ color: 'red' }}>{numbereror}</span>}

                                        </div>

                                        <div className="mt-3 d-grid">
                                            <button className="btn btn-primary waves-effect waves-light" type="submit" onClick={clickhendler}>Submit</button>
                                            <ToastContainer></ToastContainer>

                                        </div>
<br></br>

<br></br>


<br></br>


<br></br>


<br></br>
                                       <div>
                                       <iframe src={"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7343.9173491130305!2d72.52705847449437!3d23.02528951622835!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e84ce4a953913%3A0x8cd1bf81df9a0903!2sNicheTech%20Computer%20Solutions%20Private%20Limited!5e0!3m2!1sen!2sin!4v1710914073207!5m2!1sen!2sin" }width="400" height="450"  allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                                       </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Phone;