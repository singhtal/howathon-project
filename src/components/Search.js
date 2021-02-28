import React, { Component } from 'react';
import searchService from '../services/searchService';
import requestMentor from '../services/mentorReqService';
import axios from 'axios';
import './Search.scss';
import Profile from "./profile";


class Search extends Component {
    constructor(props) {
        super(props);
        this.state = { 'search': '',  result: [], profileUser: '',showProfile: false };
    }
    changeHandler = (event) => {
        this.setState({
            search: event.target.value
        });
    }
    submitHandler = async (event) => {
    event.preventDefault();
    const data = {
      skillName: this.state.search,
      name: this.props.name
    };
    // const searchResult = await searchService(data);
    searchService(data).then((item) => {
      this.setState({ result: item.data });
    });
    }
    requestMentor = async (event) => {
        event.preventDefault();
        console.log(event.target);
        let mentor = event.target.getAttribute('data-mentor');
        let mentee = event.target.getAttribute('data-mentee');
        let skillName = event.target.getAttribute('data-skillName');
        let skillCode = event.target.getAttribute('data-skillCode');
        let data = {
            mentor: mentor,
            mentee: mentee,
            skillName: skillName,
            skillCode: skillCode
        }
        const request = await requestMentor(data);

    }
    viewProfile = (user) => {
        this.setState({showProfile: true,profileUser: user})
        console.log(this.state);
    }
    closeProfile = () => {
        this.setState({showProfile: false})
    }
    
    render() {
        let mentorData;
        let self = this;
            mentorData = 
            self.state.result.map((item) => {
            return (
                <tr key={item.username}>
                    <td><span className="glyphicon glyphicon-user"></span></td>
                    <td>{item.username}</td>
                    <td>{item.description ? item.description: 'Not provided'}</td>
                    <td>{item.avgRating.toFixed(2)}</td>
                    <td><a href="#"
                        onClick={(event) => this.viewProfile(item.username)}>View profile</a></td>
                    <td>
                    <a href="#" 
                        data-mentor={item.username} 
                        data-mentee={this.props.name}
                        data-skillName={this.state.search}
                        data-skillCode={item.skills}
                        onClick={(event) => this.requestMentor(event)}
                    >
                    Request Mentorship</a></td>
                    <td><a href="#"
                        onClick={(event) => this.props.showChatWindow(item)}
                    >Chat <span className="glyphicon glyphicon-chat"></span></a></td>
                </tr>
            )
        
            })
        

        return (

            <div className="col-xs-6">
                <div className="search-container">
                <form className="form-inline" onSubmit={this.submitHandler}>
                    <div className="form-group">
                    <label htmlFor="search">I need help on</label>
                    <input className="form-control" id="search"
                        placeholder="Enter Skill"
                        type='text'
                        onChange={this.changeHandler}
                    />
                </div>
                    <button type="submit" className="btn btn-danger">Search</button>
                </form>
                <hr />
                <table className="table table-striped">
                {mentorData.length ? 
                    <caption>We believe the below can help you</caption> : null
                }
                    <tbody>
                        {mentorData}
                    </tbody>
                </table>
                </div>
                {this.state.showProfile &&
                    <Profile user={this.state.profileUser} closeHandler= {this.closeProfile} />
                }
            </div>                        
        )
    }
}

export default Search;
