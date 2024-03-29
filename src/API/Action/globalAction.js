
import axios from 'axios';

import {
    IS_LOADING, baseURL, sendOtp_URL, sendOtpReg, verifyOtp_URL, verifyOtpReg, sendthayotp_URL, sendthayreducer,
    verificationotpRducer, verificattionoyp_URL, Resendotp_URL, ResendOTPReg,stateCity_URL, statecityRer
} from '../../Constant';
import { toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';

function getAsios(token) {

    if (token) {
        return axios.create({
            baseURL: baseURL,
            headers: {
                // Authorization: `Bearer ${token}`,
                Authorization: "bearer " + token,

            }
        });
    }
    else {
        return axios.create({
            baseURL: baseURL,
            headers: {
                "Access-Control-Allow-Origin": "*",
            }
        });

    }

}

const tokenexpire = "Your token has expired! Please sign in again."
export function saveTokenInLocalStorage(tokenDetails) {

    localStorage.setItem('token', JSON.stringify(tokenDetails));
}

export function dispatchLoadingStatus(loading) {
    return function (dispatch, getState) {
        dispatch({ type: IS_LOADING, payload: { loading: loading } });
    };
}



export function sendOtpAPI(data) {
    return function (dispatch) {
        return getAsios().post(sendOtp_URL, data)

            .then((response) => {
                dispatch(dispatchLoadingStatus(false));
                console.log('response..', response.data)
                // dispatch(dispatchLoadingStatus(false));
                // localStorage.setItem('token' , response.data.data.token);

                if (response.data.errorcode == 0) {
                    localStorage.setItem(sendOtp_URL, true);

                    localStorage.setItem("insertedId", response.data.data.insertedId);
                    localStorage.setItem("isregister", response.data.data.isregister);
                    localStorage.setItem("freelancerId", response.data.data.freelancerId);

                    dispatch({ type: sendOtpReg, payload: response.data });

                    if (response.data.data.isregister == true) {
                        window.location.href = window.location.origin + `/otp`;


                    }
                    else {
                        window.location.href = window.location.origin + `/Personaldetails`;

                    }

                }
                else {
                    toast.error(response.data.message, {
                        style: { fontSize: 14 },
                        autoClose: 10000
                    });

                }


            })
            .catch(err => {
                dispatch(dispatchLoadingStatus(false))
                toast.error("Something went wrong, please try again", {
                    style: { fontSize: 14 },
                    autoClose: 3000
                });
            }
            )
    }
}

//aa send otp mate nu function  che
export function newpostAPI(formData) {

    return function (dispatch) {
        return getAsios()
            .post(sendthayotp_URL, formData)
            .then((response) => {


                if (response.data.errorcode == 0) {
                    localStorage.setItem('key',response.data.insertedId)
                    dispatch({ type: sendthayreducer, payload: response.data });


                }
                else {
                    dispatch({ type: sendthayreducer, payload: "" });

                }


                return;
            })
            .catch((err) => {
                alert("hoiii")
                // toast.error("Something went wrong, please try again", {
                //     style: { fontSize: 14 },
                //     autoClose: 3000
                // });

            });
    };
}
//aa verify otp mate nu function che
export function thenpostAPI(formData) {
    return function (dispatch) {
        return getAsios()
            .post(verificattionoyp_URL, formData)
            .then((response) => {
                console.log("REsponse", response.data.data);

                dispatch({ type: verificationotpRducer, payload: response.data.data });
                return;
            })
            .catch((err) => {
                alert("HIIIIIIIIIIIIIIIIIIIIIIi")
                // toast.error("Something went wrong, please try again", {
                //     style: { fontSize: 14 },
                //     autoClose: 3000
                // });

            });
    };
}

//aa statre city mate nu functiom che

export function SendGetAPI() {
    return function (dispatch) {
        return getAsios()
            .get(stateCity_URL)
            .then((response) => {   
                console.log("statinggggggggggggggggggggggg", response.data);

                dispatch({ type: statecityRer, payload: response.data.data });
                return;
            })
            .catch((err) => {
                alert("HOIIIIIIIIIIIIIIIIIIIIIII")
                // toast.error("Something went wrong, please try again", {
                //     style: { fontSize: 14 },
                //     autoClose: 3000
                // });

            });
    };
}
export function verifyOtpAPI(data) {
    return function (dispatch) {
        return getAsios().post(verifyOtp_URL, data)
            .then((response) => {
                dispatch(dispatchLoadingStatus(false));
                // dispatch(dispatchLoadingStatus(false));
                // localStorage.setItem('token' , response.data.data.token);

                if (response.data.errorcode == 0) {


                    dispatch({ type: verifyOtpReg, payload: response.data.data });

                    localStorage.setItem('islogged', true)


                    localStorage.setItem(verifyOtp_URL, true);
                    localStorage.setItem("freelancerId", response.data.data.freelancerId);
                    localStorage.setItem("step", response.data.data.step);
                    window.location.href = window.location.origin + '/home'



                    const freelancerId = localStorage.getItem('freelancerId');
                    const step = localStorage.getItem('step');



                    // if (step == 5 ) {
                    //     window.location.href = window.location.origin + '/home'
                    // }




                    // if (response.data.data.isregister && response.data.data.iskyc) {
                    //     let formData = new FormData();
                    //     formData.append('freelancerId', response.data.data.freelancerId);
                    //     dispatch(getProfileAPI(formData))
                    //     localStorage.setItem('islogged', true)
                    //     window.location.href = window.location.origin + '/home'
                    // }

                    // else {
                    //     window.location.href = window.location.origin + '/Personaldetails'
                    // }

                }
                else {
                    toast.error(response.data.message, {
                        style: { fontSize: 14 },
                        autoClose: 3000
                    });

                    // alert(response.data.message)


                }


                // return;
            })
            .catch(err => {
                dispatch(dispatchLoadingStatus(false))
                toast.error("Something went wrong, please try again", {
                    style: { fontSize: 14 },
                    autoClose: 3000
                });
            }
            )
    }
}


// export function setProfileAPI(data) {
//     return function (dispatch) {
//         return getAsios().post(setProfile_URL, data)
//             .then((response) => {
//                 dispatch(dispatchLoadingStatus(false));
//                 // dispatch(dispatchLoadingStatus(false));
//                 // localStorage.setItem('token' , response.data.data.token);

//                 if (response.data.errorcode == 0) {
//                     dispatch({ type: setProfileReg, payload: response.data });
//                     // window.location.href = window.location.origin+'/Financialdetails';
//                     // window.location.href = window.location.origin + '/Academicdetails';





//                 }
//                 else {
//                     toast.error(response.data.message, {
//                         style: { fontSize: 14 },
//                         autoClose: 3000
//                     });
//                     // alert(response.data.message)  
//                 }
//             })
//             .catch(err => {
//                 dispatch(dispatchLoadingStatus(false))
//                 toast.error("Something went wrong, please try again", {
//                     style: { fontSize: 14 },
//                     autoClose: 3000
//                 });
//             }
//             )
//     }
// }

// export function getBankAPI(data) {
//     return function (dispatch) {
//         return getAsios().get(getBank_URL, data)
//             .then((response) => {
//                 dispatch(dispatchLoadingStatus(false));
//                 // dispatch(dispatchLoadingStatus(false));
//                 // localStorage.setItem('token' , response.data.data.token);

//                 if (response.data.errorcode == 0) {

//                     dispatch({ type: getBankReg, payload: response.data.data });
//                 }
//                 else {
//                     toast.error(response.data.message, {
//                         style: { fontSize: 14 },
//                         autoClose: 3000
//                     });
//                     // alert(response.data.message)  
//                 }
//             })
//             .catch(err => {
//                 dispatch(dispatchLoadingStatus(false))
//                 toast.error("Something went wrong, please try again", {
//                     style: { fontSize: 14 },
//                     autoClose: 3000
//                 });
//             }
//             )
//     }
// }


//Resend Otp mate Nu che 
export function newResetAPI(formData) {
    return function (dispatch) {
        return getAsios()
            .post(Resendotp_URL, formData)
            .then((response) => {
                console.log("newres", response.data.data);

                dispatch({ type: ResendOTPReg, payload: response.data.data });
                return;
            })
            .catch((err) => {
                alert("Eroor..........................")
                // toast.error("Something went wrong, please try again", {
                //     style: { fontSize: 14 },
                //     autoClose: 3000
                // });

            });
    };
}

