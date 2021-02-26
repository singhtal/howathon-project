import React, { Component } from 'react';
import './newmentor.scss';

class NewMentor extends Component {
    render(){
        return(
            <div className="col-xs-6">
                <div className="newmentor">
                    <h4>New Mentor Suggestions:</h4>
                    <ul className="suggestion-list">
                        <li>
                            <span className="glyphicon glyphicon-user"></span>
                            <p>Adam Gilchrist</p>
                        </li>
                        <li>
                            <span className="glyphicon glyphicon-user"></span>
                            <p>Matthew Hayden</p>
                        </li>
                        <li>
                            <span className="glyphicon glyphicon-user"></span>
                            <p>Shane Warne</p>
                        </li>
                    </ul>
                </div>
            </div>
        )
    }
}

export default NewMentor;