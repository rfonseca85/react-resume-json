import React from 'react';

class Portifolio extends React.Component {

    render() {
        return (
          <div>
            <section id="portfolio">
              <div className="container">
                  <h2 className="text-center">Portfolio</h2>
                  <hr className="star-primary"/>
                  <div className="row">
                      <div className="col-sm-4 portfolio-item">
                          <div className="portfolio-link" href="#portfolioModal1" data-toggle="modal">
                              <div className="caption">
                                  <div className="caption-content">
                                      <i className="fa fa-search-plus fa-3x"></i>
                                  </div>
                              </div>
                              <img className="img-fluid" src="img/portfolio/cabin.png" alt=""/>
                          </div>
                      </div>
                      <div className="col-sm-4 portfolio-item">
                          <div className="portfolio-link" href="#portfolioModal2" data-toggle="modal">
                              <div className="caption">
                                  <div className="caption-content">
                                      <i className="fa fa-search-plus fa-3x"></i>
                                  </div>
                              </div>
                              <img className="img-fluid" src="img/portfolio/cake.png" alt=""/>
                          </div>
                      </div>
                      <div className="col-sm-4 portfolio-item">
                          <div className="portfolio-link" href="#portfolioModal3" data-toggle="modal">
                              <div className="caption">
                                  <div className="caption-content">
                                      <i className="fa fa-search-plus fa-3x"></i>
                                  </div>
                              </div>
                              <img className="img-fluid" src="img/portfolio/circus.png" alt=""/>
                          </div>
                      </div>
                      <div className="col-sm-4 portfolio-item">
                          <div className="portfolio-link" href="#portfolioModal4" data-toggle="modal">
                              <div className="caption">
                                  <div className="caption-content">
                                      <i className="fa fa-search-plus fa-3x"></i>
                                  </div>
                              </div>
                              <img className="img-fluid" src="img/portfolio/game.png" alt=""/>
                          </div>
                      </div>
                      <div className="col-sm-4 portfolio-item">
                          <div className="portfolio-link" href="#portfolioModal5" data-toggle="modal">
                              <div className="caption">
                                  <div className="caption-content">
                                      <i className="fa fa-search-plus fa-3x"></i>
                                  </div>
                              </div>
                              <img className="img-fluid" src="img/portfolio/safe.png" alt=""/>
                          </div>
                      </div>
                      <div className="col-sm-4 portfolio-item">
                          <div className="portfolio-link" href="#portfolioModal6" data-toggle="modal">
                              <div className="caption">
                                  <div className="caption-content">
                                      <i className="fa fa-search-plus fa-3x"></i>
                                  </div>
                              </div>
                              <img className="img-fluid" src="img/portfolio/submarine.png" alt=""/>
                          </div>
                      </div>
                  </div>
              </div>
          </section>
          </div>
        );
    }
}

export default Portifolio;
