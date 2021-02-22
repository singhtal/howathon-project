import React, { Component } from 'react';
import axios from 'axios';


class Myskills extends Component {
    constructor(props){
        super(props);
        this.state = {
            fetchUser: [],
            user: this.props.name,
            updated: false
        }
    }
    getUser() {
         var name = this.props.name;
        axios.get(`http://localhost:4000/mentor/mydata?name=${name}`)
        .then((response) => {
            console.log("response", response);
            this.setState({
                fetchUser: response.data
            });
        })
        .catch( (error) => {
            console.log(error);
        });         
    }
    componentDidMount() {
       this.getUser();
        // this.setState({user: name}); 
    }
    unregister(event) {
        event.preventDefault();
        console.log(event.target.parentElement.parentElement);
        var self = this;
        let obj = event.target;
        var name = this.props.name;
        if(obj.getAttribute('data-status') > 0) {
            alert('cannot unregister as you have active mentees');
            return false;
        }
        var skill = obj.getAttribute('data-skill');

        axios.get(`http://localhost:4000/mentor/unregisterSkill?name=${name}&skill=${skill}`)
        .then((response) => {
             self.getUser();
        })
        .catch( (error) => {
            console.log(error);
        });  

    }
    render() {
        var listItems;
        if(this.state.fetchUser.length > 0) {
            let active = 0;
            let self = this;
            var listItems = this.state.fetchUser[0].skills.map((item) => {
                
               let active = item.peopleMentored.filter(elem => elem.status === 'active').length;
               let rating = (eval(item.ratingsReceived .join('+'))/item.ratingsReceived.length).toFixed(2);
               let mentored = item.peopleMentored.filter(elem => elem.status === 'active');
               let mapMentored = mentored.map(elem => elem.name);

                return (
                <tr key={item.skillname}>
                    <td>{item.skillname}</td>
                    <td>{item.peopleMentored.length} ({active} active)</td>
                    <td>{rating}</td>
                    <td>
                        {mapMentored.join(", ")}
                    </td>
                    <td><a href="#" data-skill={item.skillname} 
                        data-status={active}
                    onClick={(event) => this.unregister(event)}>unregister</a></td>
                </tr> )
            }
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
                        <th>Active Mentee</th>
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
