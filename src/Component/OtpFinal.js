import React, { useState, useRef, useEffect } from 'react';
import Verifictioning from './verifiy';
import Timer from './timer';


function OtpFinal() {
    
    
      
      
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
                                        <div className='text-center' >  <h5>Enter Verification code that we send to</h5>
                                            {/* <h4>+91 536454564645</h4> */}
                                        </div>

                                        {/* <div className="row mb-3">
                                            <div className="col-md-12">
                                                <label htmlFor="username" className="form-label">OTP</label>
                                            </div>

                                            <div className="col text-center">
                                                <input type="text"  className="form-control text-center" id="tx1"  maxLength="1" placeholder="-" />

                                            </div>
                                            <div className="col text-center">
                                                <input type="text"  className="form-control text-center" id="tx2"  maxLength="1" placeholder="-" />

                                            </div>
                                            <div className="col text-center">
                                                <input type="text" className="form-control text-center" id="tx3"  maxLength="1" placeholder="-" />

                                            </div>
                                            <div className="col text-center">
                                                <input type="text"  className="form-control text-center" id="tx4"  maxLength="1" placeholder="-" />

                                            </div>
                                        </div> */}
                                        {/* <div className="mt-4 mt-3 d-grid">
                                            <button className="btn btn-primary waves-effect waves-light" type="submit" ></button>
                                        </div> */}
                                        <div><Verifictioning></Verifictioning> </div>
                                        <br></br>
                                        <div><Timer></Timer></div>


{/* 
                                      <div className="mt-4 text-center">

                                            <div className="mt-4 text-center">

                                                    <a href="" className="text-muted text-underlined" cursor='not-allowed'> Resend</a>
                                                </div>
                                            
                                        </div> */}

                                             {/* <div className="mt-4 text-center">
                                                <p id='couter'>Resend OTP in 00 </p>
                                            </div> */}

                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
    
}
    
    export default OtpFinal;