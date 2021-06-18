import React,{useEffect, useState} from 'react'
import CreateIcon from '@material-ui/icons/Create'
import ImageIcon from '@material-ui/icons/Image'
import "./Feed.css"
import InputOption from './InputOption'

import SubscriptionsIcon from  '@material-ui/icons/Subscriptions';

import EventNoteIcon from '@material-ui/icons/EventNote';

import CalendarViewDayIcon from '@material-ui/icons/CalendarViewDay';
import Post from  './Post';
import { Container } from 'react-bootstrap'
import { db } from '../firebase/config';
import firebase from 'firebase';
import { useSelector } from 'react-redux'
import { selectUser } from '../features/userSlice';


function Feed() {
    const user = useSelector(selectUser); 
    const [input, setInput]=useState('');
    const [posts,setPosts] =useState ([]);
    useEffect(()=>{
        db.collection("posts")
            .orderBy("timestamp","desc")
            .onSnapshot((snapshot) =>(
            setPosts(snapshot.docs.map(doc=> (
                {
                    id:doc.id,
                    data:doc.data()
                }
            )))
        ));
    },[]);
    const sendPost = e =>{
        e.preventDefault();
        db.collection('posts').add({
            name: user.user.displayName,
            description: user.user.email,
            message:input,
            photoUrl:user.user.email[0],
            timestamp: firebase.firestore.FieldValue.serverTimestamp(),
            likes:Array(),
        });
        setInput("");
    }
   

    return (
        
        <div className="feed">
            <Container>
            <div className="feed_inputContainer">
               <div className="feed_input">
                   <CreateIcon />
                   <form>
                        <input value={input} onChange={e=>setInput(e.target.value)} type="text"/>
                        <button onClick={sendPost} type="submit">Send</button>
                    </form>
                </div>
                
                <div className="feed_inputOptions">
                    {/* input options*/}

                    <InputOption Icon={ImageIcon} title="Photo" color="#70B5F9" />
                   
                </div>
                
            </div>
            </Container>

            {/* Posts*/}
           {posts.map(({id,data:{name,description,message,photoUrl,likes}}) => (
               <Post
                     key = {id}
                     name = {name}
                     description={description}
                     message={message}
                     photoUrl = {photoUrl}
                     likes={likes}
               />
           ))}     

          
        </div>
    )
}

export default Feed
