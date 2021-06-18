import { Avatar } from '@material-ui/core';
import {  ChatOutlined, SendOutlined, ShareOutlined, ThumbUpAltOutlined } from '@material-ui/icons';
import firebase from "firebase";

import { Container } from 'react-bootstrap';
import InputOption from './InputOption';
import "./Post.css";
import React from 'react'
import { useSelector } from 'react-redux'
import { selectUser } from '../features/userSlice';
import { db } from '../firebase/config';
const Post = ({name,description,rollid,message,photoUrl,likes,key}) => {
   console.log(likes);
   const user = useSelector(selectUser);

   function sendLike(e){
        e.preventDefault();
        const  arrayUnion = firebase.firestore.FieldValue.arrayUnion;
        const doc = db.collection('posts').doc('likes');
    //  const doc = db.doc('posts/likes');
        console.log("printing doc");
        console.log(doc);
        doc.update({
            likes: arrayUnion(user.user.email),
        });
        console.log('You clicked like',user.user.email);

   };
   

    return (
        <Container>
        <div className="post">
            <div className="post__header">
                <Avatar src={photoUrl} ></Avatar>
                <div className="post_info">
                    <h2>{name}</h2>
                    <h2>{rollid}</h2>
                    <p>{description}</p>
                </div>
            </div>
            <div className="post_body">
                <p>{message}</p>

            </div>
            <div className="post_buttons">
                
                <button onClick={sendLike} type="submit"><InputOption  Icon={ThumbUpAltOutlined} title= {likes? "Likes " + likes.length: "Likes 0"  } color="gray"  /></button>

            </div>
            
        </div>
        </Container>
    )
}

export default Post
