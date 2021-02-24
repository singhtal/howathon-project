/*eslint-disable */

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
        axios.get(`http://localhost:4000/relation/mydata?name=${name}`)
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
        let listItems;
        if(this.state.fetchUser.length > 0) {
            let active = 0;
            let self = this;
            let elem;
            console.log(this.state.fetchUser);
            let data = this.state.fetchUser[0];
            if (data.length < 1) return false;
            
            listItems = this.state.fetchUser.map((item) => {
                console.log(item.fields[0].skillID);
                let active = item.fields.filter(el => el.status === 'active').length;
                let mentored = item.fields.filter(el => el.status === 'active');
                let ratings = item.fields.filter(el => (el.rating !== null && el.rating !== undefined));
                let rate = ratings.map(a => a.rating);
                let ratingAvg = rate.reduce((a, b) => (a + b)/rate.length, 0);
                console.log(ratingAvg);
                let mapMentored = mentored.map(el => el.MenteeID); 
                return(
                    <tr key={item.fields[0].skillID}>
                        <td>{item.fields[0].skillID}</td>
                        <td>{item.fields.length} ({active} active)</td>
                        <td>{ratingAvg}</td>
                        <td>{mapMentored.join(", ")}</td>
                        <td><a href="#" data-status={active} data-skill={item.fields[0].skillID}
                        onClick={(event) => this.unregister(event)}>unregister</a></td>
                    </tr>
                )
            });

            //    var listItems = () => {
                // for(elem in data) {
                // console.log(data[elem]);
                // let active = data[elem].filter(el => el.status === 'active').length;
                // let mentored = data[elem].filter(el => el.status === 'active');
                // console.log(mentored)
                // let mapMentored = mentored.map(el => el.MenteeID); 
                //     return (
                //     <tr>
                //         <td>{elem}</td>
                //         <td>{data[elem].length} ({active} active)</td>
                //         <td>Rating not available</td>
                //         <td>{mapMentored.join(", ")}</td>';
                //     </tr>
                //     );
                // }
            // }          
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
