import React, { Component } from 'react';
import updateRequest from '../services/updateRequest';

class Notification extends Component {
    constructor(props){
        super(props);
    }

    updateRequestfn =  async (event) => {
        let mentor = event.target.getAttribute('data-mentor');
        let mentee = event.target.getAttribute('data-mentee');
        let skillCode = event.target.getAttribute('data-skillCode');
        let stat = event.target.getAttribute('data-status');
        let data = {
            mentor: mentor,
            mentee: mentee,
            skillCode: skillCode,
            status: stat
        }
        const request = await updateRequest(data);
    }
    render() {
        let req;
        let user = this.props.user;
        let pendingRequests = this.props.requests;
        // let pendingRequests = this.props.requests.filter(el => el.status === 'pending');
        if(pendingRequests) {
            let numbers = [1,2,3];
            req = pendingRequests.map(item => {
                let elm = item['fields'];
                return elm.map(elem => {
                    if(elem.status == 'pending') {
                    return (
                        <tr key={elem.MenteeID}>
                            <td>{elem.MenteeID}</td>
                            <td>{elem.searchText}</td>
                            <td>
                                <a 
                                href="#" 
                                data-mentor={user} 
                                data-mentee={elem.MenteeID}
                                data-skillCode={elem.skillID}
                                data-status="active"   
                                onClick={(event) => this.updateRequestfn(event,'active')}
                                >approve
                                </a>
                            </td>
                            <td>
                                <a 
                                href="#" 
                                data-mentor={user} 
                                data-mentee={elem.MenteeID}
                                data-skillCode={elem.skillID}
                                data-status="rejected"                    
                                onClick={(event) => this.updateRequestfn(event)}>reject
                                </a>
                            </td>
                        </tr>
                    )
                    } else return null
                })
            })
            console.log(req)
            
        }
        return(
        <div>
            <h3>Notifications</h3>
            <table className="table table-bordered">
            <tbody>
            {req}
            </tbody>
            </table>
        </div>
        )
    }
}

export default Notification;