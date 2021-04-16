import React, { useContext } from 'react';
import { useForm } from "react-hook-form";
import './Login.css'
import googleIcon from '../../../images/Group 573.png'
import HeaderNavbar from '../../Shared/HeaderNavbar/HeaderNavbar';
import firebaseConfig from './firebase.config';
import firebase from "firebase/app";
import "firebase/auth";
import { useHistory, useLocation } from 'react-router';
import { UserContext } from '../../../App';

if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
} else {
    firebase.app();
}


const Login = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => console.log(data);

    const [loggedInUser, setLoggedInUser] = useContext(UserContext)

    let history = useHistory();
    let location = useLocation();
    let { from } = location.state || { from: { pathname: "/" } };

    const handleGoogle = () => {
        const google = new firebase.auth.GoogleAuthProvider();
        firebase.auth()
            .signInWithPopup(google)
            .then((result) => {
                var credential = result.credential;
                var token = credential.accessToken;
                const {displayName, email, photoURL} = result.user;
                const googleUserInfo = {name: displayName, email, photoURL, google: true};
                setLoggedInUser(googleUserInfo)
                history.replace(from)
            }).catch((error) => {
                var errorMessage = error.message;
            });
    }

    return (
        <section className="container">
            <HeaderNavbar></HeaderNavbar>
            <div className='row mb-5 mt-3'>
                <div className="col"></div>
                <div className="col-xs-8 col-sm-8 col-md-6 col-lg-4 col-xl-4 form-style py-4">
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <input type="text" {...register("email", { required: true })} placeholder="Email" className="form-control" />
                        {errors.email && <span>Email is required</span>}

                        <input type="password" {...register("password", { required: true })} placeholder="Password" className="form-control mt-2" />
                        {errors.password && <span>Password is required</span>}

                        <input type="submit" value="Login" className="btn btn-success mt-4 d-block mx-auto px-4" />
                    </form>
                </div>
                <div className="col"></div>
            </div>

            <div>
                <div className='row'>
                    <div className="col-3"></div>
                    <div className="col-sm-12 col-md-12 col-lg-6 col-xlg-6 mb-5">
                        <p className='text-center mt-3'>--------------- or ---------------</p>
                        <div onClick={handleGoogle} className="google-sign w-75"><img src={googleIcon} alt="" /> Continue with Google</div>
                    </div>
                    <div className="col-3"></div>
                </div>
            </div>
        </section>
    );
};

export default Login;