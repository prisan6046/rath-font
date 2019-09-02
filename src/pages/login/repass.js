import React, { Component } from 'react'
import './Login.scss';
import { Link } from 'react-router-dom'
import axios from 'axios';
import store from '../../store/index';
import { url } from '../../parameter/index'

class ResetPassword extends Component {

    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.state = {
            email: '',
            password: '',
            confirmpass : '',
            set : false , 
            client_id: '',
            client_secret: '',
        };

        this.handleUserChange = this.handleUserChange.bind(this)
        this.handlePasswordChange = this.handlePasswordChange.bind(this)
        this.handleConfrimPasswordChange = this.handleConfrimPasswordChange.bind(this)    
    }

    handleUserChange(e) {
        this.setState({
            email : e.target.value
        });
    }
    handlePasswordChange(e) {
        this.setState({
            password: e.target.value
        });
    }
    handleConfrimPasswordChange(e) {
        this.setState({
            confirmpass : e.target.value
        });
    }

    handleSubmit(event) {
        event.preventDefault();
        var formData = new FormData();

        if(this.state.set == false){
            formData.append('email', this.state.email);
            axios.post(url+'/check_email', formData).then(res => {
            if (res.data.status == 200) {
                localStorage.setItem('email', this.state.email );
                this.setState({
                    set: true
                });

            } else {
                alert("ขอ อภัยเนื่องจาก "+this.state.email +" ไม่มีอยู่ในระบบ ")
                this.setState({ email : '' })
            }

        })
        }else{
        
            

            // console.log("update")
            if(this.state.password != this.state.confirmpass ){
                alert("รหัสผ่านไม่ตรงกัน กรุณากรอกรหัสผ่านใหม่")
                return ;
            }

            formData.append('email', this.state.email);
            formData.append('pass', this.state.password);
            axios.post(url+'/reset_pass', formData).then(res => {
                if (res.data.status == 200) {
                    alert("ยืนยันสำเร็จ")
                    window.location.href = "/";
                    // localStorage.setItem('email', this.state.email );
                    // this.setState({
                    //     set: true
                    // });

                } else {
                    alert("ขอ อภัยเนื่องจาก "+this.state.email +" ไม่มีอยู่ในระบบ ")
            
                }
            })


        }
    }

    render() {
        return (
            <div className="SignIn">
                <div className="container">
                    <div className="row">
                        <div className="col-5 mx-auto">
                            <div className="card bg-light">
                                <div className="card-body h-fixed">
                                    <div className="form-group mb-5 text-center">
                                        <img src="/assets/img/company_logo.png" className="img-fluid logo-login" />
                                    </div>
                                    <form onSubmit={this.handleSubmit} >
                                        <div className="form-group text-center">
                                            <label htmlFor="">Email</label>
                                            <input type="text" value={this.state.email} onChange={this.handleUserChange} className="form-control" name="name" />
                                        </div>
                                        {
                                            this.state.set == true? 
                                            <div className="form-group text-center">
                                                <label htmlFor="">password</label>
                                                <input type="password" value={this.state.password} onChange={this.handlePasswordChange} className="form-control" name="name" />
                                            </div>
                                        
                                            : ''
                                        }
                                        {
                                            this.state.set == true? 
                                            <div className="form-group text-center">
                                                <label htmlFor="">confrim password</label>
                                                <input type="password" value={this.state.confirmpass} onChange={this.handleConfrimPasswordChange} className="form-control" name="name" />
                                            </div>
                                        
                                            : ''
                                        }
                                       
                                        <div className="form-group form-inline">
                                            <div className="mx-auto">
                                                <button to="" className="btn btn-primary mr-2">ยืนยัน</button>
                                    
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

export default ResetPassword