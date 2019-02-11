import React, { Component } from 'react';
import Skill from './Skill';
// import useragent from 'useragent';

class Profile extends Component{
    render() {
        // console.log('useragent', useragent);
        const target_link = "_blank";
        return (
            
            <div className="Profile">
                {/* Porfile Grid Section */}
                <section className="profile" id="profile">
                    <div className="container">
                        <h2 className="text-center text-uppercase text-secondary mb-0">Profile</h2>
                        <hr className="star-dark mb-5" />
                        <div className="row">
                            <div className="col-10 mx-auto">
                                <div className="form-group mb-5">
                                    <h4 className="text-uppercase">Education</h4>
                                    <hr/>                                    
                                    <div className="row mb-2">
                                        <div className="col-lg-2 text-center">
                                            <img src="/assets/img/msu.png" className="img-fluid h-100-px" />
                                        </div>
                                        <div className="col-lg-10 my-auto">
                                            <p className="lead mb-2">
                                                <strong>BACHELOR: 2013 - 2017 MAHASARAKHAM UNIVERSITY</strong><br/>
                                                Bachelor of Science Degree, Major Information of Technology, Faculty of Informatics
                                            </p>
                                        </div>
                                    </div>

                                    <div className="row mb-2">
                                        <div className="col-lg-2 text-center">
                                            <img src="/assets/img/mt.jpg" className="img-fluid h-100-px" />
                                        </div>
                                        <div className="col-lg-10 my-auto">
                                            <p className="lead mb-2">
                                                <strong className="text-uppercase">Hight School: 2010 - 2013 Matthayom Dankhunthod School</strong><br />
                                                Art-English
                                            </p>
                                        </div>
                                    </div>
                                {/* /.form-group */}
                                </div>

                                <div className="form-group mb-5">
                                    <h4 className="text-uppercase">Experience</h4>
                                    <hr/>     
                                    <div className="row mb-2">
                                        <div className="col-lg-2 text-center">
                                            <img src="/assets/img/connexted.jpg" className="img-fluid h-100-px" />
                                        </div>
                                        <div className="col-lg-10 my-auto">
                                            <p className="lead mb-2">
                                                <strong className="text-uppercase">Work: Connexted (True Corporation) & True Plookpanya: AUG 2017 – OCT 2018</strong><br/>
                                                <p className="mb-1">- Developer & Admin Web (Frontend) <a href="http://www.pracharathschool.go.th/" target={target_link}>Pracharathschool</a></p>
                                                <p className="mb-1">- Developer Web (Backend) Connexted</p>
                                            </p>
                                        </div>
                                    </div>

                                    <div className="row mb-2">
                                        <div className="col-lg-2 text-center">
                                            <img src="/assets/img/tppy.png" className="img-fluid h-100-px" />
                                        </div>
                                        <div className="col-lg-10 my-auto">
                                            <p className="lead mb-2">
                                                <strong className="text-uppercase">Trainee: True Plookpanya: MAY 2017 – JULY 2017</strong><br/>
                                                Development <a href="http://www.trueplookpanya.com/plookfriends/" target={target_link}>www.trueplookpanya.com/plookfriends</a> and Log in
                                                to work System by Codeigniter Structure as HMVC+OOP with
                                                PHP, Jquery, Ajax, CSS, SQL, HTML and Output all Screen as Responsive
                                            </p>
                                        </div>
                                    </div>
                                {/* /.form-group */}
                                </div>

                                <div className="form-group mb-5">
                                    <h4 className="text-uppercase">Skills</h4>
                                    <hr/>                                         
                                    <Skill />                                    
                                {/* /.form-group */}
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Portfolio Grid Section */}
                <section className="portfolio bg-dark-section-1" id="portfolio">
                    <div className="container">
                        <h2 className="text-center text-uppercase text-secondary mb-0">Portfolio</h2>
                        <hr className="star-dark mb-5" />
                        <div className="row">
                            <div className="col-md-6 col-lg-4">
                                <a className="portfolio-item d-block mx-auto" href="#portfolio-modal-1">
                                    <div className="portfolio-item-caption d-flex position-absolute h-100 w-100">
                                        <div className="portfolio-item-caption-content my-auto w-100 text-center text-white">
                                        <i className="fas fa-search-plus fa-3x"></i>
                                        </div>
                                    </div>
                                    <img className="img-fluid" src="/assets/img/portfolio/senior-project.png" alt="" />
                                </a>
                            </div>
                            <div className="col-md-6 col-lg-4">
                                <a className="portfolio-item d-block mx-auto" href="#portfolio-modal-2">
                                    <div className="portfolio-item-caption d-flex position-absolute h-100 w-100">
                                        <div className="portfolio-item-caption-content my-auto w-100 text-center text-white">
                                        <i className="fas fa-search-plus fa-3x"></i>
                                        </div>
                                    </div>
                                    <img className="img-fluid" src="/assets/img/portfolio/cake.png" alt="" />
                                </a>
                            </div>
                            <div className="col-md-6 col-lg-4">
                                <a className="portfolio-item d-block mx-auto" href="#portfolio-modal-3">
                                    <div className="portfolio-item-caption d-flex position-absolute h-100 w-100">
                                        <div className="portfolio-item-caption-content my-auto w-100 text-center text-white">
                                        <i className="fas fa-search-plus fa-3x"></i>
                                        </div>
                                    </div>
                                    <img className="img-fluid" src="/assets/img/portfolio/circus.png" alt="" />
                                </a>
                            </div>
                            <div className="col-md-6 col-lg-4">
                                <a className="portfolio-item d-block mx-auto" href="#portfolio-modal-4">
                                    <div className="portfolio-item-caption d-flex position-absolute h-100 w-100">
                                        <div className="portfolio-item-caption-content my-auto w-100 text-center text-white">
                                        <i className="fas fa-search-plus fa-3x"></i>
                                        </div>
                                    </div>
                                    <img className="img-fluid" src="/assets/img/portfolio/game.png" alt="" />
                                </a>
                            </div>
                            <div className="col-md-6 col-lg-4">
                                <a className="portfolio-item d-block mx-auto" href="#portfolio-modal-5">
                                    <div className="portfolio-item-caption d-flex position-absolute h-100 w-100">
                                        <div className="portfolio-item-caption-content my-auto w-100 text-center text-white">
                                        <i className="fas fa-search-plus fa-3x"></i>
                                        </div>
                                    </div>
                                    <img className="img-fluid" src="/assets/img/portfolio/safe.png" alt="" />
                                </a>
                            </div>
                            <div className="col-md-6 col-lg-4">
                                <a className="portfolio-item d-block mx-auto" href="#portfolio-modal-6">
                                    <div className="portfolio-item-caption d-flex position-absolute h-100 w-100">
                                        <div className="portfolio-item-caption-content my-auto w-100 text-center text-white">
                                        <i className="fas fa-search-plus fa-3x"></i>
                                        </div>
                                    </div>
                                    <img className="img-fluid" src="/assets/img/portfolio/submarine.png" alt="" />
                                </a>
                            </div>
                        </div>
                    </div>
                </section>

                {/* About Section */}
                <section className="bg-primary text-white mb-0" id="about">
                    <div className="container">
                        <h2 className="text-center text-uppercase text-white">About</h2>
                        <hr className="star-light mb-5" />
                        <div className="row">
                            <div className="col-lg-4 ml-auto">
                                <p className="lead">Freelancer is a free bootstrap theme created by Start Bootstrap. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional LESS stylesheets for easy customization.</p>
                            </div>
                            <div className="col-lg-4 mr-auto">
                                <p className="lead">Whether you're a student looking to showcase your work, a professional looking to attract clients, or a graphic artist looking to share your projects, this template is the perfect starting point!</p>
                            </div>
                        </div>
                        <div className="text-center mt-4">
                            <a className="btn btn-xl btn-outline-light" href="#">
                                <i className="fas fa-download mr-2"></i>
                                Download Now!
                            </a>
                        </div>
                    </div>
                </section>      

                {/* Portfolio Modals */}
                {/* Portfolio Modal 1 */}
                <div className="portfolio-modal mfp-hide" id="portfolio-modal-1">
                    <div className="portfolio-modal-dialog bg-white">
                        <a className="close-button d-none d-md-block portfolio-modal-dismiss" href="#">
                            <i className="fa fa-3x fa-times"></i>
                        </a>
                        <div className="container text-center">
                            <div className="row">
                                <div className="col-lg-8 mx-auto">
                                    <h2 className="text-secondary text-uppercase mb-0">Project Name</h2>
                                    <hr className="star-dark mb-5" />
                                    <img className="img-fluid mb-5" src="/assets/img/portfolio/cabin.png" alt="" />
                                    <p className="mb-5">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia neque assumenda ipsam nihil, molestias magnam, recusandae quos quis inventore quisquam velit asperiores, vitae? Reprehenderit soluta, eos quod consequuntur itaque. Nam.</p>
                                    <a className="btn btn-primary btn-lg rounded-pill portfolio-modal-dismiss" href="#">
                                        <i className="fa fa-close"></i>Close Project
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Portfolio Modal 2 */}
                <div className="portfolio-modal mfp-hide" id="portfolio-modal-2">
                    <div className="portfolio-modal-dialog bg-white">
                        <a className="close-button d-none d-md-block portfolio-modal-dismiss" href="#">
                            <i className="fa fa-3x fa-times"></i>
                        </a>
                        <div className="container text-center">
                            <div className="row">
                                <div className="col-lg-8 mx-auto">
                                    <h2 className="text-secondary text-uppercase mb-0">Project Name</h2>
                                    <hr className="star-dark mb-5" />
                                    <img className="img-fluid mb-5" src="/assets/img/portfolio/cake.png" alt="" />
                                    <p className="mb-5">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia neque assumenda ipsam nihil, molestias magnam, recusandae quos quis inventore quisquam velit asperiores, vitae? Reprehenderit soluta, eos quod consequuntur itaque. Nam.</p>
                                    <a className="btn btn-primary btn-lg rounded-pill portfolio-modal-dismiss" href="#">
                                        <i className="fa fa-close"></i>Close Project
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Portfolio Modal 3 */}
                <div className="portfolio-modal mfp-hide" id="portfolio-modal-3">
                    <div className="portfolio-modal-dialog bg-white">
                        <a className="close-button d-none d-md-block portfolio-modal-dismiss" href="#">
                            <i className="fa fa-3x fa-times"></i>
                        </a>
                        <div className="container text-center">
                            <div className="row">
                                <div className="col-lg-8 mx-auto">
                                    <h2 className="text-secondary text-uppercase mb-0">Project Name</h2>
                                    <hr className="star-dark mb-5" />
                                    <img className="img-fluid mb-5" src="/assets/img/portfolio/circus.png" alt="" />
                                    <p className="mb-5">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia neque assumenda ipsam nihil, molestias magnam, recusandae quos quis inventore quisquam velit asperiores, vitae? Reprehenderit soluta, eos quod consequuntur itaque. Nam.</p>
                                    <a className="btn btn-primary btn-lg rounded-pill portfolio-modal-dismiss" href="#">
                                        <i className="fa fa-close"></i>Close Project
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Portfolio Modal 4 */}
                <div className="portfolio-modal mfp-hide" id="portfolio-modal-4">
                    <div className="portfolio-modal-dialog bg-white">
                        <a className="close-button d-none d-md-block portfolio-modal-dismiss" href="#">
                            <i className="fa fa-3x fa-times"></i>
                        </a>
                        <div className="container text-center">
                            <div className="row">
                                <div className="col-lg-8 mx-auto">
                                    <h2 className="text-secondary text-uppercase mb-0">Project Name</h2>
                                    <hr className="star-dark mb-5" />
                                    <img className="img-fluid mb-5" src="/assets/img/portfolio/game.png" alt="" />
                                    <p className="mb-5">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia neque assumenda ipsam nihil, molestias magnam, recusandae quos quis inventore quisquam velit asperiores, vitae? Reprehenderit soluta, eos quod consequuntur itaque. Nam.</p>
                                    <a className="btn btn-primary btn-lg rounded-pill portfolio-modal-dismiss" href="#">
                                        <i className="fa fa-close"></i>Close Project
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Portfolio Modal 5 */}
                <div className="portfolio-modal mfp-hide" id="portfolio-modal-5">
                    <div className="portfolio-modal-dialog bg-white">
                        <a className="close-button d-none d-md-block portfolio-modal-dismiss" href="#">
                            <i className="fa fa-3x fa-times"></i>
                        </a>
                        <div className="container text-center">
                            <div className="row">
                                <div className="col-lg-8 mx-auto">
                                    <h2 className="text-secondary text-uppercase mb-0">Project Name</h2>
                                    <hr className="star-dark mb-5" />
                                    <img className="img-fluid mb-5" src="/assets/img/portfolio/safe.png" alt="" />
                                    <p className="mb-5">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia neque assumenda ipsam nihil, molestias magnam, recusandae quos quis inventore quisquam velit asperiores, vitae? Reprehenderit soluta, eos quod consequuntur itaque. Nam.</p>
                                    <a className="btn btn-primary btn-lg rounded-pill portfolio-modal-dismiss" href="#">
                                        <i className="fa fa-close"></i>Close Project
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Portfolio Modal 6 */}
                <div className="portfolio-modal mfp-hide" id="portfolio-modal-6">
                    <div className="portfolio-modal-dialog bg-white">
                        <a className="close-button d-none d-md-block portfolio-modal-dismiss" href="#">
                        <i className="fa fa-3x fa-times"></i>
                        </a>
                        <div className="container text-center">
                        <div className="row">
                            <div className="col-lg-8 mx-auto">
                                <h2 className="text-secondary text-uppercase mb-0">Project Name</h2>
                                <hr className="star-dark mb-5" />
                                <img className="img-fluid mb-5" src="/assets/img/portfolio/submarine.png" alt="" />
                                <p className="mb-5">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia neque assumenda ipsam nihil, molestias magnam, recusandae quos quis inventore quisquam velit asperiores, vitae? Reprehenderit soluta, eos quod consequuntur itaque. Nam.</p>
                                <a className="btn btn-primary btn-lg rounded-pill portfolio-modal-dismiss" href="#">
                                    <i className="fa fa-close"></i>Close Project
                                </a>
                            </div>
                        </div>
                        </div>
                    </div>
                </div>
            {/* end jsx class */}
            </div>
        )
    }
}

export default Profile;