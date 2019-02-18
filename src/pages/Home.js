import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Home extends Component {
    
    constructor(){
        super()
        this.state = {
            token : '',
            status : false ,
        }

    }

    componentDidMount(){
        this.state.token = localStorage.getItem('token');
        if(this.state.token == null){
            this.props.history.push("/")
        }
    }

    render() {
        return(
            <div className="Home">
                <div className="container-fluid bg-blue-lv2 py-3 border-bottom">
                    <div className="row">
                        <div className="col-lg-6">
                            <h4 className="text-secondary">Title</h4>                            
                            <Link to="/add" className="btn btn-primary">Add</Link>
                        </div>

                        <div className="col-lg-6">
                            <form class="form-inline my-2 my-lg-0">
                                <input class="form-control ml-auto mr-sm-2 w-75" type="search" placeholder="Search" aria-label="Search" />
                                <button className="btn btn-default"><i class="fas fa-search"></i></button>
                            </form>

                            <ul class="nav nav-pills" id="pills-tab" role="tablist">
                                <li class="nav-item ml-auto">
                                    <a class="nav-link active" id="pills-home-tab" data-toggle="pill" href="#pills-home" role="tab" aria-controls="pills-home" aria-selected="true"><i class="fas fa-list-ul"></i></a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" id="pills-profile-tab" data-toggle="pill" href="#pills-profile" role="tab" aria-controls="pills-profile" aria-selected="false"><i class="fas fa-chart-bar"></i></a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" id="pills-contact-tab" data-toggle="pill" href="#pills-contact" role="tab" aria-controls="pills-contact" aria-selected="false"><i class="fas fa-calendar-alt"></i></a>                    
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" id="pills-contact-tab" data-toggle="pill" href="#pills-contact" role="tab" aria-controls="pills-contact" aria-selected="false"><i class="fas fa-table"></i></a>  
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" id="pills-contact-tab" data-toggle="pill" href="#pills-contact" role="tab" aria-controls="pills-contact" aria-selected="false"><i class="fas fa-align-left"></i></a>                    
                                </li>
                            </ul>
                            {/* <div class="tab-content" id="pills-tabContent">
                                <div class="tab-pane fade show active" id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab">...</div>
                                <div class="tab-pane fade" id="pills-profile" role="tabpanel" aria-labelledby="pills-profile-tab">...</div>
                                <div class="tab-pane fade" id="pills-contact" role="tabpanel" aria-labelledby="pills-contact-tab">...</div>
                            </div> */}
                        </div>
                    {/* /.row */}
                    </div>
                {/* /.container */}
                </div>

                <div className="container-fluid bg-gray-lv1 py-3">
                    <div className="row">
                        <div className="col-lg-12">                     
                            <table class="table table-striped">
                                <thead>
                                    <tr>
                                        <th scope="col"></th>
                                        <th scope="col">ทะเบียนรถ</th>
                                        <th scope="col">ทะเบียนรถ</th>
                                        <th scope="col">ทะเบียนรถ</th>
                                        <th scope="col">ทะเบียนรถ</th>
                                        <th scope="col">ทะเบียนรถ</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <th scope="row">ห้ามใช้ชั่วคราว (1)</th>                                        
                                    </tr>
                                    <tr>
                                        <th scope="row">ห้ามใช้ชั่วคราว (1)</th>                                        
                                    </tr>
                                    <tr>
                                        <th scope="row">ห้ามใช้ชั่วคราว (1)</th>                                        
                                    </tr>
                                    <tr>
                                        <th scope="row">ห้ามใช้ชั่วคราว (1)</th>                                        
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Home;