import React, { Component } from 'react'
import './Login.scss';
import { Link } from 'react-router-dom'
import axios from 'axios';

class SignIn extends Component {

    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.state = { 
            user : '',
            password : '',
            client_id :'',
            client_secret : '',
        };

        this.handleUserChange = this.handleUserChange.bind(this)
        this.handlePasswordChange = this.handlePasswordChange.bind(this)
      }


      handleUserChange(e) {
        this.setState({
            user : e.target.value
        });
    }
    handlePasswordChange(e) {
        this.setState({
            password : e.target.value
        });
    }

    handleSubmit(event) {
        event.preventDefault();
        var formData = new FormData();
        formData.append('user', this.state.user);
        formData.append('pass', this.state.password);

        axios.post('http://34.73.123.38/api/token/authLogin', formData, {
            onUploadProgress: ProgressEvent => {

            },
        }).then(res => {
            if(res.data.status == 200){
                localStorage.setItem('token' , res.data.token);
                this.props.history.push("/home");
            }else{
                alert("เข้าสู่ระบบไม่สำเร็จ " + res.data.status)
                this.setState({ user : ''})
                this.setState({ password : ''})
            }
            
        })

    }

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
                                    <form onSubmit={this.handleSubmit} >                        
                                        <div className="form-group text-center">
                                            <label htmlFor="">Email</label>
                                            <input type="text" value={this.state.user } onChange={this.handleUserChange} className="form-control" name="" id=""/>
                                        </div>
                                        <div className="form-group text-center">
                                            <label htmlFor="">Password</label>
                                            <input type="text" value={this.state.password} onChange={this.handlePasswordChange} className="form-control" name="" id=""/>
                                        </div>
                                        <div className="form-group form-inline">
                                            <div className="mx-auto">
                                                <Link to="/home" className="btn btn-primary mr-2">เข้าสู่ระบบ</Link>
                                                <Link to="/signup" className="btn btn-default">ลงทะเบียน</Link>
                                            </div>                                                                                
                                        </div>
                                    </form>  
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