import React, {Component} from 'react'

const AppHeader = () => (
    <nav className="navbar navbar-default">
        <div className="container-fluid">
            <div className="navbar-header">
                <a className="navbar-brand" href="#">Truffle Box</a>
            </div>
            <div id="navbar" className="navbar-collapse collapse">
                <ul className="nav navbar-nav">
                    <li className="active"><a href="#">Home</a></li>
                </ul>
            </div>{/*/.nav-collapse */}
        </div>{/*/.container-fluid */}
    </nav>
);

export default AppHeader;
