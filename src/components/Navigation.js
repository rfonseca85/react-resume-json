import React from 'react';

class Navigation extends React.Component {

    render() {
        return (
          <div>
            <nav className="navbar fixed-top navbar-toggleable-md navbar-light" id="mainNav">
                <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarExample" aria-controls="navbarExample" aria-expanded="false" aria-label="Toggle navigation">
                    Menu <i className="fa fa-bars"></i>
                </button>
                <div className="container">
                    <a className="navbar-brand" href="#page-top">Start Bootstrap</a>
                    <div className="collapse navbar-collapse" id="navbarExample">
                        <ul className="navbar-nav ml-auto">
                            <li className="nav-item">
                                <a className="nav-link" href="#portfolio">Portfolio</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#about">About</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#contact">Contact</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
          </div>
        );
    }
}

export default Navigation;
