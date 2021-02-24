import React, { Component } from 'react';
import searchService from '../services/searchService';

import axios from 'axios';
import './Search.scss';


class Search extends Component {
    constructor(props) {
        super(props);
        this.state = { 'search': '',  result: [] };
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
    };
    // const searchResult = await searchService(data);
    searchService(data).then((item) => {
      this.setState({ result: item.data });
    });
    }
    render() {
        let mentorData;
        let self = this;
        console.log(this.state.result)
        
            mentorData = 
            self.state.result.map((item) => {
            return (
                <tr key={item._id}>
                    <td><span class="glyphicon glyphicon-user"></span></td>
                    <td>{item.username}</td>
                    <td>{item.description ? item.description: 'Not provided'}</td>
                    <td>Rating Not available</td>
                    <td><a href="#">View profile</a></td>
                    <td><a href="#">Chat <span class="glyphicon glyphicon-chat"></span></a></td>
                </tr>
            )
        
            })
        

        return (
            <div>
                <div>
                    <div className="row">
                    <div className="col-xs-6 search-container">
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
                    </div>
                </div>
            </div>
        )
    }
}

export default Search;
