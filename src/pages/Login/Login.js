import React from 'react';
import { useHistory, useLocation } from 'react-router';
import { Link } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';

const Login = () => {
    const { signInWithGoogle , signInWithGithub} = useAuth();
    const location = useLocation();
    const history = useHistory();
    const redirect_uri = location.state?.from || '/home';
    const handleSignInGoogle = () => {
        signInWithGoogle()
            .then(result => {
                history.push(redirect_uri);
            })
    }
    const handleSignInGithub= () => {
        signInWithGithub()
            .then(result => {
                history.push(redirect_uri);
            })
    }

    return (
        <div className="login-form">
            <div>
                <h2 className="mt-5">Login</h2>
                <div className="underline"></div>
                <form>
                    <input className="border my-3 w-50 text-center p-2" type="email" name="" id="" placeholder="Enter Your Email"  required/>
                    <br />
                    <input className="border my-3 w-50 text-center p-2" type="password" name="" id=""placeholder="Enter Your Password" required />
                    <br />
                    <input className="border my-3 w-25 text-center p-2 bg-warning rounded text-white" type="submit" value="Submit" />
                </form> 
                <p>new to Heart Care Website? <Link to="/register">Create Account</Link></p>
                <button
                    className=" btn ms-4"
                    onClick={handleSignInGoogle}
                >Google Sign In</button>
                <button
                    className="btn ms-4"
                    onClick={handleSignInGithub}
                >Github Sign In</button>
            </div>
        </div>
    );
};

export default Login;