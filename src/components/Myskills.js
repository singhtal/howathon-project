import React, { Component } from 'react';
import axios from 'axios';


class Myskills extends Component {
    constructor(props){
        super(props);
    }
    componentDidMount() {
        var name = this.props.name;
        axios.get(`http://localhost:4000/mentor/mydata?name=${name}`)
        .then( (response) => {
            console.log("response", response);
            this.setState({
                fetchUser: response.data
            });
        })
        .catch( (error) => {
            console.log(error);
        });         
    }
    render() {
        return (
        <div className="myskills">
            <h3>My Skills </h3>
        </div>
        )
    }
}

export default Myskills;
