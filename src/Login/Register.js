import React, { useState } from 'react'
import {auth} from "../firebase/config"
import { useDispatch } from 'react-redux';
import { login } from '../features/userSlice';

function Register() {
    const [email,setEmail] = useState("");
    const [password,setPassword]  = useState("");
    const [name,setName] = useState("");
    const [profilePic,setProfilePic] =  useState("");
    const dispatch = useDispatch();
    const register = (e)=> {
        if(!name){
            return alert('please enter a full name')
        } 
        auth.createUserWithEmailAndPassword(email,password)
            .then( function(user){
                user.updateProfile({
                    displayName:name
                }).then(
                    function(){
                        alert("Updated Suceessfull")
                    }
                )
             })
        .catch((error)=> alert(error));
    
        
    };
    return (
        <div>
            <form className='login_form'>
                    <input value={name} onChange={e=> setName(e.target.value)} placeholder='Full name (required)' type="text"/>
                    <input value={profilePic} onChange={e=>setProfilePic(e.target.value)}placeholder='profile pic url' type='text'/>
                   
                    <input value={email} onChange={e => setEmail(e.target.value)} placeholder='Email' type='email'/>
                    <input value={password} onChange={(e)=> setPassword(e.target.value)}placeholder='password' type='password'/>
                    <button type="submit" onClick={register}>Register</button>
            </form>
        </div>
    )
}

export default Register
