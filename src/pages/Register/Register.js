import { useState } from "react";
import { getAuth,  createUserWithEmailAndPassword, signInWithEmailAndPassword, sendEmailVerification, sendPasswordResetEmail, updateProfile } from "firebase/auth";
import firebaseInitialization from "../../Firebase/firebase.init";

firebaseInitialization();
const Register = () => {
    const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isLogin, setIsLogin] = useState(false);

  const auth = getAuth();

    const toggleLogin = e => {
        setIsLogin(e.target.checked)
      }
    
      const changeName = e => {
        setName(e.target.value);
      }
      const handleEmailChange = e => {
        setEmail(e.target.value);
      }
    
      const handlePasswordChange = e => {
        setPassword(e.target.value)
      }
    
      const handleRegistration = e => {
        e.preventDefault();
        console.log(email, password);
        if (password.length < 6) {
          setError('Password Must be at least 6 characters long.')
          return;
        }
        if (!/(?=.*[A-Z].*[A-Z])/.test(password)) {
          setError('Password Must contain 2 upper case');
          return;
        }
    
        if (isLogin) {
          processLogin(email, password);
        }
        else {
          registerNewUser(email, password);
        }
    
      }
    
      const processLogin = (email, password) => {
        signInWithEmailAndPassword(auth, email, password)
          .then(result => {
            const user = result.user;
            console.log(user);
            setError('');
          })
          .catch(error => {
            setError(error.message);
          })
      }
    
      const registerNewUser = (email, password) => {
        createUserWithEmailAndPassword(auth, email, password)
          .then(result => {
            const user = result.user;
            console.log(user);
            setError('');
            verifyEmail();
            setUserName();
          })
          .catch(error => {
            setError(error.message);
          })
      }
    
      const setUserName = () => {
        updateProfile(auth.currentUser, { displayName: name })
          .then(result => { })
      }
    
      const verifyEmail = () => {
        sendEmailVerification(auth.currentUser)
          .then(result => {
            console.log(result);
          })
      }
    
      const handleResetPassword = () => {
        sendPasswordResetEmail(auth, email)
          .then(result => { })
      }
    return (

            <form onSubmit={handleRegistration} className="w-75 mx-auto">
                <h3 className="text-success ">Please
               {isLogin ? 'Login' : 'Register'}
                 </h3>
                 <div className="underline"></div>
                {isLogin && <div class="mb-3">
                    <label htmlfor="InputName" className ="mx-auto col-sm-3 form-label">Name</label>
                    <div className="col-sm-9">
                         <input type="name" onBlur={changeName} className="form-control" id="InputName"  placeholder="Enter Your Name" required/>
                    </div>
                </div>}
                
                <div class="mb-3">
                    <label htmlfor="InputEmail" className ="me-5 col-sm-3 form-label">Email</label>
                    <div className="col-sm-9">
                         <input type="Email" onBlur={handleEmailChange} className="form-control" id="InputEmail"  placeholder="Enter Your Email" required/>
                    </div>
                </div>
                <div class="mb-3">
                    <label htmlfor="InputPassword" className ="me-5 col-sm-3 form-label">Password</label>
                    <div className="col-sm-9">
                         <input type="password" onBlur={handlePasswordChange} className="form-control" id="InputPassword"  placeholder="Enter Your Password" required/>
                    </div>
                    
                </div>
                <div className="row mb-3">
                <div className="col-sm-10 offset-sm-2">
                    <div className="form-check">
                    <input onChange={toggleLogin} className="form-check-input" type="checkbox" id="gridCheck1" />
                    <label className="form-check-label mx-auto" htmlFor="gridCheck1">
                        Already Registered?
                    </label>
                    </div>
                </div>
                </div>
                <button type="submit" className="btn btn-primary">
                {isLogin ? 'Login' : 'Register'}
                </button>
                <button type="button" onClick={handleResetPassword} className="btn btn-secondary mx-5">Reset Password</button>

            </form>

     

  )};
  

export default Register;