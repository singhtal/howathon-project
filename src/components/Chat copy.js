import React, {Component} from 'react';
import '../chat.css';
import { StreamChat } from 'stream-chat'; 

const apiKey = "yvaw2krrg5a3";
const userId = 1;
const userToken = "1";

const chatClient = StreamChat.getInstance(apiKey); 
 
chatClient.connectUser({ id: userId }, userToken);

export default class Chat extends Component {
  
  

  render () {
     return(
       <div>
      <div className="chat_window">
        <div className="top_menu">
            <div className="buttons">
                <div className="button close"></div>
                <div className="button minimize"></div>
                <div className="button maximize"></div>
            </div>
            <div className="title">Chat</div>
        </div>
        <ul class="messages"><li class="message left appeared"><div class="avatar"></div><div class="text_wrapper"><div class="text">Hello Philip! :)</div></div></li><li class="message right appeared"><div class="avatar"></div><div class="text_wrapper"><div class="text">Hi Sandy! How are you?</div></div></li><li class="message left appeared"><div class="avatar"></div><div class="text_wrapper"><div class="text">I'm fine, thank you!</div></div></li><li class="message right appeared"><div class="avatar"></div><div class="text_wrapper"><div class="text">degf</div></div></li></ul>
        <div className="bottom_wrapper clearfix">
            <div className="message_input_wrapper">
                <input className="message_input" placeholder="Type your message here..." />
            </div>
            <div className="send_message">
                <div className="icon"></div>
                <div className="text">Send</div>
            </div>
        </div>
    </div>
    <div className="message_template">
        <li className="message">
            <div className="avatar"></div>
            <div className="text_wrapper">
                <div className="text"></div>
            </div>
        </li>
    </div></div>
     );
  }
}
