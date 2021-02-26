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
                        <img className="agent circle" src="images/avatar.png" alt="Jesse Tino" />
                    </div>
                </div>
                <div className="chat">
                    <div className="chat-title">
                        <h1>{this.props.chatWith.username}</h1>
                        <h2>Rating: {this.props.chatWith.avgRating.toFixed(2)}</h2>
                    </div>
                    <div className="messages">
                        <div className="mCustomScrollbar messages-content">
                            <div id="mCSB_1" className="mCustomScrollBox mCS-light mCSB_vertical mCSB_inside"
                                style={{"max-height": "none"}}>
                                <div id="mCSB_1_container" className="mCSB_container" dir={"ltr"}>
                                    <div className="message new">
                                        <figure className="avatar"><img src="images/avatar.png" /></figure>Hi there, I'm Jesse and you?
                                        <div className="timestamp">16:17</div>
                                        <div className="checkmark-sent-delivered">✓</div>
                                        <div className="checkmark-read">✓</div>
                                    </div>
                                    <div className="message message-personal new">fdfd</div>
                                    <div className="message new">
                                        <figure className="avatar"><img src="images/avatar.png" /></figure>Nice to meet you
                                    </div>
                                    <div className="message message-personal new">need help<div className="timestamp">17:13</div>
                                        <div className="checkmark-sent-delivered">✓</div>
                                        <div className="checkmark-read">✓</div>
                                    </div>
                                    <div className="message new">
                                        <figure className="avatar"><img src="images/avatar.png" /></figure>How are you?
                                    </div>
                                </div>
                                <div id="mCSB_1_scrollbar_vertical"
                                    className="mCSB_scrollTools mCSB_1_scrollbar mCS-light mCSB_scrollTools_vertical" style={{"display": "block"}}>
                                    <div className="mCSB_draggerContainer">
                                        <div id="mCSB_1_dragger_vertical" className="mCSB_dragger"
                                            style={{"position": "absolute", "min-height": "30px", "top": "27px", "height": "18px", "display": "block", "max-height": "60px"}}
                                            oncontextmenu="return false;">
                                            <div className="mCSB_dragger_bar" style={{"line-height": "30px"}}></div>
                                        </div>
                                        <div className="mCSB_draggerRail"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
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