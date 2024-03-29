import { current } from "@reduxjs/toolkit";
import React from "react"
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { SendGetAPI } from "../API/Action/globalAction";
import { useEffect } from "react";
import { set } from "react-hook-form";
function Personalpage() {


    const [firstname, setfirstname] = useState("")// first name mate
    const [Lastname, setLastname] = useState("")// Last name mate
    const [Email, setEmail] = useState("")// Email addres  mate 
    const [Alternativph, setAlternativph] = useState("")//Alternatiiv PhoneNumber mate
    const [pinNumber, setpinNumber] = useState("")//pincode mate    
    const [currentAdres, setcurrentAdres] = useState("")
    const [state, setState] = useState()
    const [city, setCity] = useState()

    const [cityList, setCityList] = useState([])




    //Red akshar ni eroor lava mate 
    const [firstnameeror, setfirstnameeror] = useState("")
    const [Lastnamenameeror, setLastnameeror] = useState("")
    const [Emailaddreseror, setEmailaddreseror] = useState("")
    const [Alternativpheror, setAlternativpheror] = useState("")
    const [pinNumbereror, setpinNumbereror] = useState("")
    const [currentAdreseror, setcurrentAdreseror] = useState("")
    const [cityeror, setcityeror] = useState("")
    const[stateeror,setstateeror]=useState("")

    const dispatch = useDispatch()
    let statecityRer = useSelector(state => state.globalReducer.statecityRer);
    console.log("GET API CALLLLLLLLLLLLLLLLLLLL", statecityRer)

    useEffect(() => {
        dispatch(SendGetAPI())
    }, [])

    //Firstnamechange mate
    function FstNamechanngeHandler(e) {
        const Firstnameregix = /^[a-zA-Z]*$/;
        if (Firstnameregix.test(e.target.value)) {
            setfirstname(e.target.value)
            setfirstnameeror("")
        } else {
            setfirstnameeror("only for carectors only")
        }

    }
    //Last name Change mate 
    function LstNamechangeHandler(e) {
        const Lastnameregex = /^[a-zA-Z]*$/;
        if (Lastnameregex.test(e.target.value)) {
            setLastname(e.target.value)
            setLastnameeror("")
        } else {
            setLastnameeror("only for carectors only")
        }


    }


    //Email change mate 
    function EmailchangeHandler(e) {
        const Emailregex = /^[^\s@]+@([\w-]+\.)+[\w-]{2,3}$/;
        //  const Emailregex=/^[a-zA-Z]{1,10}@gmail\.com$/;
        // const Emailregex=/\S+@\S+\.\S+/;
        setEmail(e.target.value)
        if (Emailregex.test(e.target.value)) {
            setEmailaddreseror("")
        }
        else {
            setEmailaddreseror("Only for Email Alowed carectors only")
        }
    }

    //AlterNAtiv mate 
    function AlterNativchangeHandler(e) {
        const numberregex = /^[0-9]*$/
        if (numberregex.test(e.target.value)) {
            setAlternativph(e.target.value)
            setAlternativpheror("")
        } else {
            setAlternativpheror("only for Numbers Aloowed only")
        }

    }
    //Current Addres mate
    function currentChangeHandler(e) {
        setcurrentAdres(e.target.value)
    }
    function pinnumberchangeHandler(e) {
        const numberregex = /^[0-9]*$/
        if (numberregex.test(e.target.value)) {
            setpinNumber(e.target.value)
            setpinNumbereror("")
        } else {
            setpinNumbereror("only for  PIN Numbers Aloowed only")
        }


    }

    //submit mate nu che

    function ClickSubmitHendler(e) {
        e.preventDefault()

        //first name mate nu submit
        if (firstname) {
            setfirstnameeror("")
        } else {
            setfirstnameeror(" First Name Required")
        }

        //Email matenu che
        if (Email) {
            setEmailaddreseror("")
        } else {
            setEmailaddreseror(" Email Addresh Name Required")
        }
        //pincode mate
        if (pinNumber) {
            setpinNumbereror("")
        } else {
            setpinNumbereror("PinCode Number Required")
        }


        //Current Addres mate
        if (currentAdres) {
            setcurrentAdreseror("")
        } else {
            setcurrentAdreseror("current Adrees Required")
        }
        //city mate nu che 
        if (city) {
            setcityeror("")
        } else {
            setcityeror("Please city Required")
        }

        //state mate nu che 
        if(state){
            setstateeror("")
        }else{
            setstateeror("pleace state Required")
        }
    }

    function SelectChangeHandler(e) {
        setState(e.target.value)

        let data = statecityRer && statecityRer.filter((i) => i._id === e.target.value)
        setCityList(e.target.value && data[0].districts)

    }
    function cityHandler(e) {
        setCity(e.target.value)

    }
    return (

        <div className="account-pages my-5 pt-sm-5">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-md-12 col-lg-10 ">
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
                                {/* <div className=''>
                                <div className="mt-5">
                                    <div class="stepper-wrapper">
                                        <div class="stepper-item completed">
                                            <div class="step-counter">1</div>
                                            <div class="step-name">Personal Details</div>
                                        </div>
                                        <div class="stepper-item active">
                                            <div class="step-counter">2</div>
                                            <div class="step-name">Academic Details</div>
                                        </div>
                                        <div class="stepper-item active">
                                            <div class="step-counter">3</div>
                                            <div class="step-name">Professional Details</div>
                                        </div>
                                        <div class="stepper-item">
                                            <div class="step-counter">4</div>
                                            <div class="step-name">Exam Experience </div>
                                        </div>

                                        <div class="stepper-item">
                                            <div class="step-counter">5</div>
                                            <div class="step-name">Financial Details</div>
                                        </div>
                                        <div class="stepper-item">
                                            <div class="step-counter">6</div>
                                            <div class="step-name">Preferred Roles </div>
                                        </div>

                                    </div>

                                </div>
                            </div> */}
                                <div className="p-2">

                                    <form className="form-horizontal row" id=''>
                                        {/* onSubmit={handleSubmit(onSubmit)} */}
                                        <div className='col-md-12 mb-3'>
                                            <p className="m-0">
                                                Continue With :- <b></b></p>
                                        </div>

                                        <div className="col-md-6">
                                            <div className="mb-3">
                                                <label htmlFor="fname" className="form-label">First Name *</label>
                                                <input type="text" className="form-control" name="fname" id="fname" placeholder="Enter First Name" value={firstname} onChange={FstNamechanngeHandler} maxLength={15} />
                                                {firstnameeror && <span style={{ color: 'red' }}>{firstnameeror}</span>}

                                            </div>
                                        </div>

                                        <div className="col-md-6">
                                            <div className="mb-3">
                                                <label htmlFor="lname" className="form-label">Last Name</label>
                                                <input type="text" name="lastname" id="lname" placeholder="Enter Last Name" className="form-control" value={Lastname} onChange={LstNamechangeHandler} maxLength={15} />
                                                {Lastnamenameeror && <span style={{ color: 'red' }}>{Lastnamenameeror}</span>}



                                            </div>
                                        </div>

                                        <div className="col-md-6">
                                            <div className="mb-3">
                                                <label htmlFor="email" className="form-label">Email *</label>
                                                <input type="text" className="form-control" value={Email}
                                                    onChange={EmailchangeHandler} />
                                                {Emailaddreseror && <span style={{ color: 'red' }}>{Emailaddreseror}</span>}

                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="mb-3">
                                                <label htmlFor="altrphone" className="form-label">Alternative Phone Number </label>
                                                <input type="text" className="form-control" value={Alternativph} onChange={AlterNativchangeHandler} maxLength={10} />
                                                {Alternativpheror && <span style={{ color: 'red' }}>{Alternativpheror}</span>}
                                            </div>
                                        </div>


                                        <div className="col-md-6">
                                            <div className="mb-3">
                                                <label htmlFor="dob" className="form-label">Date Of Birth *</label>
                                                <input type="date" className="form-control"></input>

                                            </div>

                                        </div>


      
                                        <div className="col-md-6">
                                            <div className="mb-3">
                                                <label htmlFor="CurrentAddress" className="form-label">Current Address *</label>
                                                <textarea style={{ resize: "none" }} name="CurrentAddress" id='CurrentAddress' className="form-control" placeholder='Enter Current Address' value={currentAdres} onChange={currentChangeHandler}></textarea>

                                            </div>
                                            {currentAdreseror && <span style={{ color: 'red' }}>{currentAdreseror}</span>}


                                        </div>
                                        <div className="col-md-6">
                                            <div className="mb-3">
                                                <label htmlFor="state" className="form-label">State *</label>
                                                <select className="form-select" value={state} onChange={SelectChangeHandler} >
                                                    <option value=''>Select State </option>

                                                    {
                                                        statecityRer && statecityRer.map((i, index) =>
                                                            <option value={i._id} key={index}>{i.state} </option>
                                                        )
                                                    }


                                                </select>
                                                {stateeror&&<span style={{color:'red'}}>{stateeror}</span>}

                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="mb-3">
                                                <label htmlFor="city" className="form-label">City *</label>
                                                <select className="form-select" id='city' value={city} onChange={cityHandler}>
                                                    <option value=''>Select City </option>

                                                    {
                                                        cityList && cityList.map((i, index) =>
                                                            <option value={i} key={index}>{i} </option>
                                                        )
                                                    }
                                                </select>
                                                <span style={{ color: 'red' }}>{cityeror}</span>




                                            </div>
                                        </div>

                                        <div className="col-md-6">
                                            <div className="mb-3">
                                                <label htmlFor="pincode" className="form-label">Pincode *</label>
                                                <input type="text"
                                                    className="form-control"
                                                    value={pinNumber}
                                                    onChange={pinnumberchangeHandler}
                                                    maxLength={6} />
                                                {pinNumbereror && <span style={{ color: 'red' }}>{pinNumbereror}</span>}


                                            </div>
                                        </div>

                                        {/* <div className="mt-3 px-2 d-flex justify-content-between"> */}

                                        <div className="mt-3 d-grid">


                                            {/* <button className="btn btn-primary " type='button' onClick={() => {handleFormId() ; setChangeButton(false)}} >
                                            Submit
                                        </button> */}

                                            <button className="btn btn-primary ms-3" type="submit" onClick={ClickSubmitHendler}>
                                                Submit
                                            </button>
                                        </div>

                                    </form>


                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>




    )
}

export default Personalpage;
