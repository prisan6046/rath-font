import React, { Component } from 'react'
import { Link , withRouter } from 'react-router-dom';
import axios from 'axios'
import { connect } from 'react-redux';
import store from '../../store/index'

class Header extends Component {

    constructor(){
        super()
        this.state = {
            name : '',
            loading :false,
            token : ''
        }   
    }

    componentDidMount(){
        // store.dispatch(console.log("store : " , store.getState()))
        this.state.token = localStorage.getItem('token');
        axios.get('http://34.73.123.38/api/token/getProfile?token='+this.state.token ).then(res => {
            if(res.data.status == 200){
                this.setState({ name : res.data.name})
            }else{
                alert("เข้าสู่ระบบไม่สำเร็จ " + res.data.status)
            }
            
        })   
    }
    

    render() {  
        
    

        return(            
            <div className="Header">

                <nav className="navbar navbar-expand-lg navbar-dark bg-blue-lv1">
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
                        <Link className="navbar-brand" to="/">ข้อมูลการตรวจสอบยานพาหนะ</Link>
                        <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
                            <li className="nav-item active">
                                <a className="nav-link" href="#"> <span className="sr-only">(current)</span></a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/home">หน้าหลัก</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/add">ลงข้อมูลแบบ คพ.</a>
                            </li>
            
                            <li className="nav-item">
                                <a className="nav-link" href="/chart">สรุปสถิติ</a>
                            </li>
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">ตั้งค่าระบบ</a>
                                <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                                    <a className="dropdown-item" href="/adduser">เพิ่ม/ลบ ผู้ใช้งาน</a>
                                    <a className="dropdown-item" href="/addlocation">เพิ่ม/ลบ สถานที่</a>
                                    <a className="dropdown-item" href="/addservicecar">เพิ่ม/ลบ อู่</a>
                                </div>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link disabled" href="#"  aria-disabled="true"></a>
                            </li>
                        </ul>

                        <ul className="navbar-nav my-2 my-lg-0">
                            <li className="nav-item">
                                <a className="nav-link" href="#"><i className="fas fa-at"></i> <span className="sr-only">(current)</span></a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#"><i className="fas fa-comments"></i></a>
                            </li>
                            
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">{this.state.name}</a>
                                <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                                    <a className="dropdown-item" href="/logout">ออกจากระบบ</a>
                                </div>
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>
        )
    }
}



export default Header;