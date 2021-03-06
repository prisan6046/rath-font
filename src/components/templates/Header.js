import React, { Component } from 'react'
import { Link , withRouter } from 'react-router-dom';
import axios from 'axios'
import { url } from '../../parameter/index';
import { connect } from 'react-redux';
import store from '../../store/index'
import './Template.scss';

class Header extends Component {

    constructor(){
        super()
        this.state = {
            name : '',
            status : '',
            loading :false,
            token : ''
        }   
    }

    componentDidMount(){
        this.state.token = localStorage.getItem('token');
        axios.get(url+'/getProfile?token='+this.state.token ).then(res => {
            
            if(res.data.status == 200){
                this.setState({ name : res.data['name'] })
                this.setState({ status : res.data['status_user'] })
                localStorage.setItem('status', res.data['status_user']);
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
                        <Link className="navbar-brand" to="/home">ข้อมูลการตรวจสอบยานพาหนะ</Link>
                        <ul className="navbar-nav mr-auto mt-2 mt-lg-0">

                            <li className="nav-item">
                                <a className="nav-link" href="/home" id="navbarDropdown" role="button" >หน้าหลัก</a>
        
                            </li>
                                
                                <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">ตั้งค่าระบบ</a>
                                <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                                    { 
                                        this.state.status == 'User' ?<div>
                                    {/* <a className="dropdown-item" href="/adduserstatus">เพิ่ม/ลบ ผู้ออกคำสั่ง</a> */}
                                    <a className="dropdown-item" href="/addcar">เพิ่ม/ลบ ยี่ห้อ</a>
                                    <a className="dropdown-item" href="/addservicecar">เพิ่ม/ลบ อู่</a>
                                    </div>
                                    :
                                        this.state.status == 'Admin' ?<div>
                                    <a className="dropdown-item" href="/adduser">เพิ่ม/ลบ ผู้ลงข้อมูล</a>
                                    <a className="dropdown-item" href="/adduserstatus">เพิ่ม/ลบ ผู้ออกคำสั่ง</a>
                                    <a className="dropdown-item" href="/addlocation">เพิ่ม/ลบ สถานที่</a>
                                    <a className="dropdown-item" href="/addservicecar">เพิ่ม/ลบ อู่</a>
                                    <a className="dropdown-item" href="/addUnder">เพิ่ม/ลบ สังกัด</a>
                                    <a className="dropdown-item" href="/addcar">เพิ่ม/ลบ ยี่ห้อรถ</a>
                                    <a className="dropdown-item" href="/addprovince">เพิ่ม/ลบ จังหวัด</a>
                                    </div>
                                    :
                                    ''}
                                    
                                </div>
                                </li>
                               
                            
                            <li className="nav-item">
                                <a className="nav-link disabled" href="#"  aria-disabled="true"></a>
                            </li>
                        </ul>

                        <ul className="navbar-nav my-2 my-lg-0">
                            {/* <li className="nav-item">
                                <a className="nav-link" href="#"><i className="fas fa-at"></i> <span className="sr-only">(current)</span></a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#"><i className="fas fa-comments"></i></a>
                            </li> */}
                            
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