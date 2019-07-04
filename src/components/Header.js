import React from 'react';

class Header extends React.Component {

    render() {
        return (
          <div>
          <header className="masthead">
              <div className="container">
                  <img className="img-fluid" src="img/profile.png" alt=""/>
                  <div className="intro-text">
                      <span className="name">Rafael Fonseca FODAO</span>
                      <hr className="star-light"/>
                      <span className="skills">Java Developer - React Developer - Architect</span>
                  </div>
              </div>
          </header>
          </div>
        );
    }
}

export default Header;
