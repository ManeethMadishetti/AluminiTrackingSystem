import React, { useState } from 'react'
import './Login.css'
import {auth} from "../firebase/config"
import { useDispatch } from 'react-redux';
import { login } from '../features/userSlice';

function Login() {
    const [email,setEmail] = useState("");
    const [password,setPassword]  = useState("");
    const [name,setName] = useState("");
    const [profilePic,setProfilePic] =  useState("");
    const dispatch = useDispatch();
    const register = ()=> {
        if(!name){
            return alert('please enter a full name')
        } 
        
        auth.createUserWithEmailAndPassword(email,password).then(
            (userAuth)=>{
            userAuth.user
             .updateProfile({
                displayName:name,
                photoURL:profilePic,
            })
            .then(()=>{
                dispatch(login({
                    email: userAuth.user.email,
                    uid: userAuth.user.uid,
                    displayName: name,
                    photoURL: profilePic,
                
                }));
                
            }
            )
        })
        
        .catch((error)=> alert(error));
        
    };
       const loginToApp = (e)=> {
        e.preventDefault();
        auth.signInWithEmailAndPassword(email,password)
        .then(userAuth => {
            dispatch(login({
                email: userAuth.user.email,
                uid: userAuth.user.uid,
                displayName: userAuth.user.displayName,
                profileUrl: userAuth.user.photoURL,
            }))
        }).catch(error=> alert(error));
    };
    
    return (
        <div className="login">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZv0QwStxsPH0IivCqt-vESnaXhwE-7AidGmQFegxYkJyOUYVoBRRsaSM6o5_-EXaz2v8&usqp=CAU" 
            alt=""/>
            <form>
                <input value={name} onChange={e=> setName(e.target.value)} placeholder='Full name (required)' type="text"/>
                <input value={profilePic} onChange={e=>setProfilePic(e.target.value)}placeholder='profile pic url' type='text'/>
                <input value={email} onChange={e => setEmail(e.target.value)} placeholder='Email' type='email'/>
                <input value={password} onChange={(e)=> setPassword(e.target.value)}placeholder='password' type='password'/>
                <button type="submit" onClick={loginToApp}>Sign-in</button>
            </form>
            <p>Not a member?{" "}
                <span className="login__register" onClick={register}>Register Now</span>
            </p>
        </div>
    )
}

export default Login
 