
import { sendOtpReg, verifyOtpReg ,verificationotpRducer, sendthayreducer,ResendOTPReg,statecityRer} from '../../Constant';


let defaultState = {
  sendOtpReg: null,
  verifyOtpReg: null,
  verificationotpReducer:null,
  ResendOTPReg:null,
  statecityRer:null


}

const globalReducer = (state = defaultState, action) => {

  switch (action.type) {


    case sendOtpReg:
      return Object.assign({}, state, {
        sendOtpReg: action.payload
      });


      //aa send thay mat nu che
    case sendthayreducer:
      return Object.assign({}, state, {
        sendthayreducer: action.payload
      });
    case verifyOtpReg:
      return Object.assign({}, state, {
        verifyOtpReg: action.payload
      });
    // aa verifity mate nu che 
      case verificationotpRducer:
        return Object.assign({}, state, {
          verificationotpRducer: action.payload
        });
// aa Resend mate nu che 
       case ResendOTPReg:
       return Object.assign({},state,{
        ResendOTPReg:action.payload
       })
      
//aa State city mate nu che
case statecityRer:
  return Object.assign({},state,{
    statecityRer:action.payload
  })
    default:
      return state;
  }



};
export default globalReducer;

