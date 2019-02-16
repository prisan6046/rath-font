import React, { Component } from 'react'
import './Login.scss';
import { Link } from 'react-router-dom'

class SignIn extends Component {
    render() {
        return(
            <div className="SignIn">
                <div className="container">
                    <div className="row">
                        <div className="col-5 mx-auto">
                            <div className="card bg-light">
                                <div className="card-body h-fixed">
                                    <div className="form-group mb-5 text-center">
                                        <img src="/assets/img/company_logo.png" className="img-fluid logo-login"/>
                                    </div>                                   
                                    <div className="form-group text-center">
                                        <label htmlFor="">Email</label>
                                        <input type="text" className="form-control" name="" id=""/>
                                    </div>
                                    <div className="form-group text-center">
                                        <label htmlFor="">Password</label>
                                        <input type="text" className="form-control" name="" id=""/>
                                    </div>
                                    <div className="form-group form-inline">
                                        <div className="mx-auto">
                                            <Link to="/home" className="btn btn-primary mr-2">เข้าสู่ระบบ</Link>
                                            <Link to="/signup" className="btn btn-default">ลงทะเบียน</Link>
                                        </div>                                                                                
                                    </div>
                                </div>
                            </div>                            
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default SignIn