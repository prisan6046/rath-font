import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class SignUp extends Component {
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
                                        <label htmlFor="">คำนำหน้าชื่อ</label>
                                        <input type="text" className="form-control" name="" id=""/>
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="">ชื่อและนามสกุล</label>
                                        <input type="text" className="form-control" name="" id=""/>
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="">ตำแหน่ง</label>
                                        <input type="text" className="form-control" name="" id=""/>
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="">สังกัด</label>
                                        <input type="text" className="form-control" name="" id=""/>
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="">อีเมล</label>
                                        <input type="text" className="form-control" name="" id=""/>
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="">ที่อยู่ (ที่ทำงาน)</label>
                                        <input type="text" className="form-control" name="" id=""/>
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="">ตำบล/แขวง</label>
                                        <input type="text" className="form-control" name="" id=""/>
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="">เขต/อำเภอ</label>
                                        <input type="text" className="form-control" name="" id=""/>
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="">จังหวัด</label>
                                        <select className="form-control" name="" id="">
                                            <option value=""></option>
                                        </select>
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="">รหัสไปรษณีย์</label>
                                        <input type="text" className="form-control" name="" id=""/>
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="">เบอร์โทรศัพท์</label>
                                        <input type="text" className="form-control" name="" id=""/>
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="">เบอร์มือถือ</label>
                                        <input type="text" className="form-control" name="" id=""/>
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="">รหัสผ่าน</label>
                                        <input type="text" className="form-control" name="" id=""/>
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="">ยืนยันรหัสผ่าน</label>
                                        <input type="text" className="form-control" name="" id=""/>
                                    </div>

                                    <div className="form-group form-inline">
                                        <div className="mx-auto">
                                            <Link to="/home" className="btn btn-primary mr-2">ลงทะเบียน</Link>
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