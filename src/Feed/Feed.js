import React,{useEffect, useState} from 'react'
import CreateIcon from '@material-ui/icons/Create'
import ImageIcon from '@material-ui/icons/Image'
import "./Feed.css"
import InputOption from './InputOption'

import SubscriptionsIcon from  '@material-ui/icons/Subscriptions';

import EventNoteIcon from '@material-ui/icons/EventNote';

import CalendarViewDayIcon from '@material-ui/icons/CalendarViewDay';
import Post from  './Post';

function Feed() {
   
    const [input, setInput]=useState('');
    const [posts,setPosts] =useState ([]);

    return (
        <div className="feed">
            <div className="feed_inputContainer">
               <div className="feed_input">
                   <CreateIcon />
                   <form>
                        <input value={input} onChange={e=>setInput(e.target.value)} type="text"/>
                        <button type="submit">Send</button>
                    </form>
                </div>
                <div className="feed_inputOptions">
                    {/* input options*/}

                    <InputOption Icon={ImageIcon} title="Photo" color="#70B5F9"/>
                    <InputOption Icon={SubscriptionsIcon} title="Video" color="#E7A33E"/>
                    <InputOption Icon={EventNoteIcon} title="Event" color="#C0CBCD"/>
                    
                    <InputOption Icon={CalendarViewDayIcon} title="Write article" color="#7FC15E"/>
                </div>
            </div>

            {/* Posts*/}
            {posts.map(({id, data:{ name,description,message, photoUrl}})=>(
                <Post
                    key={id}
                    name={name}
                    description={description}
                    message={message}
                    photoUrl={photoUrl}
                />
            ))}
            
        </div>
    )
}

export default Feed
