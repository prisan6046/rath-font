import React, { Component } from 'react'
import './Template.scss';

const Side = () => (
    <div className="Side">
        <nav className="nav flex-column font-13-px">
            <li><a className="nav-link text-white active" href="#"><img src="/assets/img/icon/car.png" className="img-responsive img-side-menu" /> ข้อมูลการตรวจสอบยานพาหนะ</a></li>                                
            <li><a className="nav-link text-white" href="#"><img src="/assets/img/icon/admin.png" className="img-responsive img-side-menu" /> ผู้ดูแลเว็บไซต์</a></li>
            <li><a className="nav-link text-white" href="#"><img src="/assets/img/icon/app.png" className="img-responsive img-side-menu" /> แอพ</a></li>
            <li><a className="nav-link text-white" href="#"><img src="/assets/img/icon/option.png" className="img-responsive img-side-menu" /> ตั้งค่า</a></li>
        </nav>
    </div>
);

export default Side;