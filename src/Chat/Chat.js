import React from 'react'
import {ChatEngine} from 'react-chat-engine';
import { ReactDOM } from 'react'
import './chat.css'
import ChatFeed from'./ChatFeed'
import ChatLogin from './ChatLogin'

const projectID = 'b9372752-e3a1-434b-aa05-855d7a58627e';
function Chat() {
    
    if (!localStorage.getItem('username')) return <ChatLogin />;
    return (
        <div>
            <ChatEngine
                height="100vh"
                projectID={projectID}
                userName={localStorage.getItem('username')}
                userSecret={localStorage.getItem('password')}
                renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps} />}
                onNewMessage={() => new Audio('https://chat-engine-assets.s3.amazonaws.com/click.mp3').play()}
            />
        </div>
    )
}

export default Chat
