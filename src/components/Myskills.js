import React, { Component } from 'react';
import axios from 'axios';


class Myskills extends Component {
    constructor(props){
        super(props);
        this.state = {
            fetchUser: []
        }
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
        var listItems;
        if(this.state.fetchUser.length > 0) {
            var listItems = this.state.fetchUser[0].skills.map((item) =>
                <tr>
                    <td>{item.skillname}</td>
                    <td>{item.peopleMentored.length}</td>
                    <td>{eval(item.ratingsReceived .join('+'))/item.ratingsReceived.length}</td>
                    <td>unregister</td>
                </tr>
            );            
        }
        
        return (
        <div className="myskills">
            <h3>My Skills </h3>
                <table className="table table-bordered">
                    <thead>
                    <tr>
                        <th>Skill Area</th>
                        <th>People mentored</th>
                        <th>Mentee Ratings</th>
                        <th>Mentorship</th>
                    </tr>
                    </thead>
                    <tbody>
                        {listItems}
                    </tbody>
                </table>            
        </div>
        )
    }
}

export default Myskills;
