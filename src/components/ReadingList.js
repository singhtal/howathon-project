import React, { Component } from 'react';
import searchService from '../services/searchService';
import requestMentor from '../services/mentorReqService';
import axios from 'axios';
import './Search.scss';
import Rating from './Rating';


class ReadingList extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        
        return (

            <div className="col-xs-6">
                <div className="readinglist-container">
                    <h4>My reading list</h4>
                    <table className="table table-striped">
                        <tbody>
                            <tr>
                                <td>Fundamentals of JavaScript</td>
                                <td>In progress</td>
                                <td><a href="">Mark completed</a></td>
                            </tr>
                            <tr>
                                <td>Fundamentals of CSS</td>
                                <td>Completed</td>
                                <td><a href="">Rate this</a></td>
                            </tr>
                            <tr>
                                <td>Fundamentals of NodeJS</td>
                                <td>Completed</td>
                                <td>You rated
                                    <Rating value={4}></Rating>
                                </td>
                            </tr>
                            <tr>
                                <td>Fundamentals of AWS</td>
                                <td>Completed</td>
                                <td>You rated
                                    <Rating value={3}></Rating>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>              
            </div>                        
        )
    }
}

export default ReadingList;
