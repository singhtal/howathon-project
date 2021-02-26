import React, { Component } from 'react';
import './chat.scss';

class Chat extends Component {
    constructor(props) {
        super(props);
    }
    render(){
        return(
            <section className="avenue-messenger">
                <div className="menu">
                    <div className="items">
                        <span>
                            <a href="#" title="Minimize">&mdash;</a><br />
                            <a href="#" title="End Chat">&#10005;</a>
                        </span>
                    </div>
                    <div className="button"
                        onClick={(event) => this.props.hideChatWindow(event)}
                        title="End Chat">&#10005;</div>
                </div>
                <div className="agent-face">
                    <div className="half">
                        <img className="agent circle" src="http://askavenue.com/img/17.jpg" alt="Jesse Tino" />
                    </div>
                </div>
                <div className="chat">
                    <div className="chat-title">
                        <h1>Jesse Tino</h1>
                        <h2>RE/MAX</h2>
                    </div>
                    <div className="messages">
                        <div className="messages-content"></div>
                    </div>
                    <div className="message-box">
                        <textarea type="text" className="message-input" placeholder="Type message..."></textarea>
                        <button type="submit" className="message-submit">Send</button>
                    </div>
                </div>
            </section>
        )
    }
}

export default Chat;