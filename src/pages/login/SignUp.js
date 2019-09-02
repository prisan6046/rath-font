import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { th } from 'date-fns/esm/locale';
import axios from 'axios'
import { url } from '../../parameter/index'

class SignUp extends Component {




    constructor(props){
        super(props)
        this.state = {
            name : '',
            email : '',
            phone : '',
            point : '',
            support : '',
            username : '',
            password : '',
            confp : ''
        
        }
        this.handleConPassChange = this.handleConPassChange.bind(this)
        this.handleEmailChange = this.handleEmailChange.bind(this)
        this.handleNameChange = this.handleNameChange.bind(this)
        this.handlePassChange = this.handlePassChange.bind(this)
        this.handlePhoneChange = this.handlePhoneChange.bind(this)
        this.handleUsernamehange = this.handleUsernamehange.bind(this)
        this.handlePointChange = this.handlePointChange.bind(this)
        this.handleSupportChange = this.handleSupportChange.bind(this)
    }
    handlePointChange(e) {
        this.setState({
            point : e.target.value
        });
    }
    handleSupportChange(e) {
        this.setState({
            support : e.target.value
        });
    }

    handleNameChange(e) {
        this.setState({
            name : e.target.value
        });
    }

    handleEmailChange(e) {
        this.setState({
            email : e.target.value
        });
    }
    handlePhoneChange(e) {
        this.setState({
            phone : e.target.value
        });
    }
    handleUsernamehange(e) {
        this.setState({
            username : e.target.value
        });
    }
    handlePassChange(e) {
        this.setState({
            password : e.target.value
        });
    }
    handleConPassChange(e) {
        this.setState({
            confp : e.target.value
        });
    }

    addUser(){
        var formData = new FormData();
        if(this.state.password != this.state.confp ){
            alert("รหัสผ่านไม่ตรงกัน กรุณากรอกรหัสผ่านใหม่")
            return ;
        }
        formData.append('name', this.state.name);
        formData.append('point', this.state.point)
        formData.append('support', this.state.support);
        formData.append('user', this.state.username);
        formData.append('pass', this.state.password);
        formData.append('email', this.state.email);
        formData.append('phone', this.state.phone);

        
        axios.post(url+'/authRegister', formData).then(res => {
            if (res.data.status == 402) {
                alert("เนื่องจาก  "+this.state.name +" มีอยู่ในระบบ กรุณาแก้ไขใหม่")
                return ;
            }
            else if(res.data.status == 403){
                alert("เนื่องจาก  "+this.state.username +" มีอยู่ในระบบ กรุณาแก้ไขใหม่")
                return ;
            }else{
                alert("ท่านได้ลงทะเบียนสำเร็จแล้ว กรุณารอการยืนยันจากผู้ดูแลระบบ เพื่อใช้งานอย่างถูกต้อง")
           
                window.location.reload();
            }

             
        })
        
    }




    render() {
        return(
            <div className="SignUp">
                <div className="container">
                    <div className="row">
                        <div className="col-5 mx-auto">
                            <div className="card bg-light">
                                <div className="card-body text-center">
                                    <div className="form-group mb-5 text-center">
                                        <img src="/assets/img/company_logo.png" className="img-fluid logo-login"/>
                                    </div>                                   
                                    
                                    <div className="form-group">
                                        <label htmlFor="">ชื่อและนามสกุล</label>
                                        <input type="text" className="form-control" value={this.state.name} onChange={this.handleNameChange} name="" id=""/>
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="">ตำแหน่ง</label>
                                        <input type="text" className="form-control" value={this.state.point} onChange={this.handlePointChange} name="" id=""/>
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="">สังกัด</label>
                                        <input type="text" className="form-control" value={this.state.support} onChange={this.handleSupportChange} name="" id=""/>
                                    </div>
                                    
                                    <div className="form-group">
                                        <label htmlFor="">อีเมล</label>
                                        <input type="email" className="form-control" value={this.state.email} onChange={this.handleEmailChange} name="" id=""/>
                                    </div>
                                    
                                    <div className="form-group">
                                        <label htmlFor="">เบอร์โทรศัพท์</label>
                                        <input type="text" className="form-control" value={this.state.phone} onChange={this.handlePhoneChange} name="" id=""/>
                                    </div>

                                    <div className="form-group">
                                        <label htmlFor="">Username</label>
                                        <input type="text" className="form-control" value={this.state.username} onChange={this.handleUsernamehange} name="" id=""/>
                                    </div>
                                   
                                    <div className="form-group">
                                        <label htmlFor="">Password</label>
                                        <input type="password" className="form-control" value={this.state.password} onChange={this.handlePassChange} name="" id=""/>
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="">confirm Password</label>
                                        <input type="password" className="form-control" value={this.state.confp} onChange={this.handleConPassChange} name="" id=""/>
                                    </div>

                                    <div className="form-group form-inline">
                                        <div className="mx-auto">
                                            <button to="" onClick={()=>{this.addUser()}} className="btn btn-primary mr-2">ลงทะเบียน</button>
                                            {/* <Link to="/home" className="btn btn-primary mr-2">ลงทะเบียน</Link> */}
                                            <Link to="/signin" className="btn btn-default">กลับสู่หน้าเข้าสู่ระบบ</Link>
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

export default SignUp