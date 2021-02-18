import React, { Component } from 'react';
import { Redirect } from 'react-router-dom'
import { Navbar, Nav, NavItem, NavDropdown, MenuItem } from 'react-bootstrap';
import Myskills from './Myskills';

class Home extends Component {

    constructor(props) {
        super();
        this.state = {
            'loggedin': true
        }
    }

    getCookie = (name) => {
        var match = document.cookie.match(new RegExp('(^| )' + name + '=([^;]+)'));
        if (match) return match[2];
    }
    componentDidMount() {
        setTimeout(
            function() {
                let user = this.getCookie('loggedUser') !== undefined ? true: false;
                this.setState({'loggedin': user});
            }
            .bind(this),
            500
        );
    }

    render() {
        let user = this.getCookie('loggedUser');
        if (this.state.loggedin === false) {
            return <Redirect to='/login'/>
        }
        return(
        <div>
            <nav className="navbar navbar-inverse">
                <div className="container-fluid">
                    <div className="navbar-header">
                    <a className="navbar-brand" href="#">WeLearn</a>
                    </div>
                    <ul className="nav navbar-nav">
                    <li className="active"><a href="#">Home</a></li>
                    </ul>
                    <ul className="nav navbar-nav navbar-right">
                    <li><a href="#"><span className="glyphicon glyphicon-user"></span> {user}</a></li>
                    <li><a href="#"><span className="glyphicon glyphicon-log-in"></span> Logout</a></li>
                    </ul>
                </div>
            </nav>

            <div className="container">
                <h1>Welcome {user}</h1>
                <Myskills name={user} />
            </div>
        </div>
        );
    }
}

export default Home;