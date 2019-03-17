import React, { Component } from 'react'
import axios from 'axios';
import store from '../../store/index';

class ShowData extends Component {


    constructor() {
        super()
        this.state = {
            token: '',
            data: [],
            id : '',
            loading: false
        }

    }

    componentDidMount() {
        this.state.token = localStorage.getItem('token');
        // console.log(this.props.match.params.id)
        fetch('http://34.73.123.38/api/token/get_doc_id?id=' + this.props.match.params.id + "&token=" + this.state.token)
            .then((Response) => Response.json())
            .then((res) => {
                this.setState({
                    data: res,
                    loading: true
                })
            })
    }

    handleAvgGetIdEdit(id) {
        console.log(id)
    }



    render() {


        let list_formdetail = []
        this.state.data.map((val, i) => {
            return list_formdetail.push(
                <div key={i} className="row">
                    <div className="col-lg-12">
                        <div className="CarForm">
                            <div className="card">
                                <div className="card-header bg-primary text-white">ข้อมูลยานพาหนะ</div>
                                <div className="card-body">
                                    <div className="row mb-2">
                                        <div className="col-lg-3 border-right">
                                            <label htmlFor="type_check" className="col-form-label">ประเภทยานพาหนะ</label>
                                        </div>
                                        <div className="col-lg-9">
                                            <p>{val.avg_type_car}</p>
                                        </div>
                                    </div>

                                    <div className="row mb-2">
                                        <div className="col-lg-3 border-right">
                                            <label htmlFor="avg_check" className="col-form-label ">ทะเบียนรถ</label>
                                        </div>
                                        <div className="col-lg-9">
                                            <p>{val.avg_car_number}</p>
                                        </div>
                                    </div>

                                    <div className="row mb-2">
                                        <div className="col-lg-3 border-right">
                                            <label htmlFor="avg_check" className="col-form-label">ทะเบียนรถจังหวัด</label>
                                        </div>
                                        <div className="col-lg-9">
                                            <p>{val.avg_car_province}</p>
                                        </div>
                                    </div>

                                    <div className="row mb-2">
                                        <div className="col-lg-3 border-right">
                                            <label htmlFor="avg_check" className="col-form-label">ยี่ห้อยานพาหนะ</label>
                                        </div>
                                        <div className="col-lg-9">
                                            <p>{val.avg_car_brand}</p>
                                        </div>
                                    </div>

                                    <div className="row mb-2">
                                        <div className="col-lg-3 border-right">
                                            <label htmlFor="avg_check" className="col-form-label">สี</label>
                                        </div>
                                        <div className="col-lg-9">
                                            <p>{val.avg_car_color}</p>
                                        </div>
                                    </div>

                                    <div className="row mb-2">
                                        <div className="col-lg-3 border-right">
                                            <label htmlFor="avg_check" className="col-form-label">ยี่ห้อเครื่องยนต์</label>
                                        </div>
                                        <div className="col-lg-9">
                                            <p>{val.avg_car_engine}</p>
                                        </div>
                                    </div>

                                    <div className="row mb-2">
                                        <div className="col-lg-3 border-right">
                                            <label htmlFor="type_check" className="col-form-label">ประเภทเครื่องยนต์</label>
                                        </div>
                                        <div className="col-lg-9">
                                            <p>{val.avg_car_type_engine}</p>
                                        </div>
                                    </div>

                                    <div className="row mb-2">
                                        <div className="col-lg-3 border-right">
                                            <label htmlFor="type_check" className="col-form-label">ประเภทเชื้อเพลิง</label>
                                        </div>
                                        <div className="col-lg-9">
                                            <p>{val.avg_car_type_fuel}</p>
                                        </div>
                                    </div>

                                    <div className="row mb-2">
                                        <div className="col-lg-3 border-right">
                                            <label htmlFor="staff_check" className="col-form-label">ผู้ขับ</label>
                                        </div>
                                        <div className="col-lg-9">
                                            <p>{val.driver_title}</p>
                                            <p>{val.driver_name}</p>
                                        </div>
                                    </div>

                                    <div className="row mb-2">
                                        <div className="col-lg-3 border-right">
                                            <label htmlFor="staff_check" className="col-form-label">ที่อยู่</label>
                                        </div>
                                        <div className="col-lg-9">
                                            <p>{val.home_number}</p>
                                            <p>{val.home_subdistrict}</p>
                                            <p>{val.home_district}</p>
                                            <p>{val.home_province}</p>
                                            <p>{val.home_code}</p>
                                        </div>
                                    </div>

                                    <div className="row mb-2">
                                        <div className="col-lg-3 border-right">
                                            <label htmlFor="staff_check" className="col-form-label">เบอร์ติดต่อ</label>
                                        </div>
                                        <div className="col-lg-9">
                                            <p>{val.home_tel}</p>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            )
        })





        let list_province = []
        this.state.data.map((val, i) => {
            return list_province.push(
                <div className="row" key={i}>
                    <div className="col-lg-12">
                        <div className="card">
                            <div className="card-body">
                                <div className="row mb-2">
                                    <div className="col-lg-12">
                                        <div className="tab-content" id="myTabContent">
                                            <div className="tab-pane fade show active" id="corpor3" role="tabpanel" aria-labelledby="corpor3-tab">
                                                <div className="Corpor3Form">
                                                    <div className="row">
                                                        <div className="col-lg-6">
                                                            <div className="card">
                                                                <div className="card-header bg-primary text-white">รายละเอียดคำสั่ง (คพ.๓)</div>
                                                                <div className="card-body">
                                                                    <div className="row mb-2">
                                                                        <div className="col-lg-4 border-right">
                                                                            <label htmlFor="book_no" className="col-form-label">เล่มที่</label>
                                                                        </div>
                                                                        <div className="col-lg-8">
                                                                            <p>{val.book_no}</p>
                                                                        </div>
                                                                    </div>

                                                                    <div className="row mb-2">
                                                                        <div className="col-lg-4 border-right">
                                                                            <label htmlFor="book_no" className="col-form-label">เลขที่</label>
                                                                        </div>
                                                                        <div className="col-lg-8">
                                                                            <p>{val.order_no}</p>
                                                                        </div>
                                                                    </div>

                                                                    <div className="row mb-2">
                                                                        <div className="col-lg-4 border-right">
                                                                            <label htmlFor="date_check" className="col-form-label">วันที่ตรวจสอบ</label>
                                                                        </div>
                                                                        <div className="col-lg-8">
                                                                            <p>{val.date_check}</p>
                                                                        </div>
                                                                    </div>

                                                                    <div className="row mb-2">
                                                                        <div className="col-lg-4 border-right">
                                                                            <label htmlFor="location_check" className="col-form-label">สถานที่ตรวจสอบ</label>
                                                                        </div>
                                                                        <div className="col-lg-8">
                                                                            <p>{val.location_check}</p>
                                                                        </div>
                                                                    </div>

                                                                    <div className="row mb-2">
                                                                        <div className="col-lg-4 border-right">
                                                                            <label htmlFor="staff_check" className="col-form-label">เจ้าหน้าที่ผู้ตรวจสอบ</label>
                                                                        </div>
                                                                        <div className="col-lg-8">
                                                                            <p>{val.staff_check}</p>
                                                                        </div>
                                                                    </div>

                                                                </div>
                                                            </div>
                                                        </div>

                                                        <div className="col-lg-6">
                                                            <div className="card">
                                                                <div className="card-header bg-primary text-white">ผลการตรวจสอบ</div>
                                                                <div className="card-body">
                                                                    <div className="row mb-2">
                                                                        <div className="col-lg-4 border-right">
                                                                            <label htmlFor="type_check" className="col-form-label">ประเภทการตรวจ</label>
                                                                        </div>
                                                                        <div className="col-lg-8">
                                                                            <p>{val.type_check}</p>
                                                                        </div>
                                                                    </div>

                                                                    <div className="row mb-2">
                                                                        <div className="col-lg-4 border-right">
                                                                            <label htmlFor="avg_check" className="col-form-label">ค่าที่วัดได้</label>
                                                                        </div>
                                                                        <div className="col-lg-8">
                                                                            <p>{val.val_check}</p>
                                                                        </div>
                                                                    </div>

                                                                    <div className="row mb-2">
                                                                        <div className="col-lg-4 border-right">
                                                                            <label htmlFor="type_check" className="col-form-label">ผลการตรวจสอบ</label>
                                                                        </div>
                                                                        <div className="col-lg-8">
                                                                            <p>{val.res_check}</p>
                                                                        </div>
                                                                    </div>

                                                                    <div className="row mb-2">
                                                                        <div className="col-lg-4 border-right">
                                                                            <label htmlFor="date_check" className="col-form-label">วันที่ห้ามใช้ยานพาหนะ</label>
                                                                        </div>
                                                                        <div className="col-lg-8">
                                                                            <p>{val.date_not_allow}</p>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <hr />
                                                    {list_formdetail}
                                                </div>
                                            </div>

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            )
        })


        let urlform3 = '/PDF3/'  + this.props.match.params.id
        let urlform4 = '/PDF4/'  + this.props.match.params.id
        let urlform5 = '/PDF5/'  + this.props.match.params.id
        let urlform6 = '/PDF6/'  + this.props.match.params.id
        let getIdedit = '/Edit/' + this.props.match.params.id

        return (
            <div className="Add">

                <div className="container-fluid py-4">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="card">
                                <div className="card-body">
                                    <div className="row mb-2">
                                        <div className="col-lg-12">

                                            <div className="row">
                                                <div className="col-md-1">
                                                    <a href={getIdedit}>
                                                        <center><button className="btn btn-primary">แก้ไข</button></center>
                                                    </a>
                                                </div>
                                                <div className="col-md-3">
                                                    <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
                                                        <li className="nav-item dropdown">
                                                            <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">พิมพ์เอกสาร</a>
                                                            <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                                                                <a className="dropdown-item" href={urlform3}>เอกสาร ฟอร์ม คพ.3</a>
                                                                <a className="dropdown-item" href={urlform4}>เอกสาร ฟอร์ม คพ.4</a>
                                                                <a className="dropdown-item" href={urlform5}>เอกสาร ฟอร์ม คพ.5</a>
                                                                <a className="dropdown-item" href={urlform6}>เอกสาร ฟอร์ม คพ.6</a>
                                                            </div>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <br />

                                            <ul className="nav nav-tabs">
                                                <li className="nav-item">
                                                    <a className="nav-link active" id="corpor3-tab" data-toggle="tab" href="#corpor3" role="tab" aria-controls="corpor3" aria-selected="true">ฟอร์ม คพ.3</a>
                                                </li>
                                                <li className="nav-item">
                                                    <a className="nav-link" id="corpor4-tab" data-toggle="tab" href="#corpor4" role="tab" aria-controls="corpor3" aria-selected="true">ฟอร์ม คพ.4</a>
                                                </li>
                                                <li className="nav-item">
                                                    <a className="nav-link" id="corpor5-tab" data-toggle="tab" href="#corpor5" role="tab" aria-controls="corpor3" aria-selected="true">ฟอร์ม คพ.5</a>
                                                </li>
                                                <li className="nav-item">
                                                    <a className="nav-link" id="corpor6-tab" data-toggle="tab" href="#corpor6" role="tab" aria-controls="corpor3" aria-selected="true">ฟอร์ม คพ.6</a>
                                                </li>
                                            </ul>

                                            <div className="tab-content" id="myTabContent">
                                                <div className="tab-pane fade show active" id="corpor3" role="tabpanel" aria-labelledby="corpor3-tab">
                                                    <div className="container-fluid py-4">
                                                        {this.state.loading == true ? list_province : ''}
                                                    </div>
                                                </div>
                                                <div className="tab-pane fade" id="corpor4" role="tabpanel" aria-labelledby="corpor4-tab">
                                                    <div className="container-fluid py-4">
                                                        <div className="row">
                                                            <div className="col-lg-12">
                                                                <div className="Corpor4Form">
                                                                    <div className="row">
                                                                        <div className="col-lg-6">
                                                                            <div className="card">

                                                                                <div className="card-header bg-primary text-white">รายละเอียดคำสั่ง (คพ.๔)</div>
                                                                                <div className="card-body">
                                                                                    <div className="row mb-2">
                                                                                        <div className="col-lg-4 border-right">
                                                                                            <label htmlFor="book_no" className="col-form-label">เล่มที่</label>
                                                                                        </div>
                                                                                        <div className="col-lg-8">

                                                                                        </div>
                                                                                    </div>

                                                                                    <div className="row mb-2">
                                                                                        <div className="col-lg-4 border-right">
                                                                                            <label htmlFor="book_no" className="col-form-label">เลขที่</label>
                                                                                        </div>
                                                                                        <div className="col-lg-8">

                                                                                        </div>
                                                                                    </div>

                                                                                    <div className="row mb-2">
                                                                                        <div className="col-lg-4 border-right">
                                                                                            <label htmlFor="date_check" className="col-form-label">วันที่ออกใบอนุญาต</label>
                                                                                        </div>
                                                                                        <div className="col-lg-8">

                                                                                        </div>
                                                                                    </div>

                                                                                    <div className="row mb-2">
                                                                                        <div className="col-lg-4 border-right">
                                                                                            <label htmlFor="location_check" className="col-form-label">สถานที่ออกใบอนุญาต</label>
                                                                                        </div>
                                                                                        <div className="col-lg-8">

                                                                                        </div>
                                                                                    </div>

                                                                                    <div className="row mb-2">
                                                                                        <div className="col-lg-4 border-right">
                                                                                            <label htmlFor="staff_check" className="col-form-label">ผู้ออกใบอนุญาต</label>
                                                                                        </div>
                                                                                        <div className="col-lg-8">

                                                                                        </div>
                                                                                    </div>

                                                                                    <div>
                                                                                        <div className="row mb-2">
                                                                                            <div className="col-lg-4 border-right">
                                                                                                <label htmlFor="position" className="col-form-label">ตำแหน่ง</label>
                                                                                            </div>
                                                                                            <div className="col-lg-8">

                                                                                            </div>
                                                                                        </div>

                                                                                        <div className="row mb-2">
                                                                                            <div className="col-lg-4 border-right">
                                                                                                <label htmlFor="under" className="col-form-label">สังกัด</label>
                                                                                            </div>
                                                                                            <div className="col-lg-8">

                                                                                            </div>
                                                                                        </div>
                                                                                    </div>


                                                                                </div>
                                                                            </div>
                                                                        </div>

                                                                        <div className="col-lg-6">
                                                                            <div className="card">
                                                                                <div className="card-header bg-primary text-white">รายละเอียดอู่รถ</div>
                                                                                <div className="card-body">
                                                                                    <div className="row mb-2">
                                                                                        <div className="col-lg-4 border-right">
                                                                                            <label htmlFor="type_check" className="col-form-label">อู่รถ</label>
                                                                                        </div>
                                                                                        <div className="col-lg-8">

                                                                                        </div>
                                                                                    </div>

                                                                                    <div className="row mb-2">
                                                                                        <div className="col-lg-4 border-right">
                                                                                            <label htmlFor="type_check" className="col-form-label">วัน/เวลาที่รถเข้าอู่</label>
                                                                                        </div>
                                                                                        <div className="col-lg-8">

                                                                                        </div>
                                                                                    </div>

                                                                                    <div className="row mb-2">
                                                                                        <div className="col-lg-4 border-right">
                                                                                            <label htmlFor="type_check" className="col-form-label">วัน/เวลาที่รถออกจากอู่</label>
                                                                                        </div>
                                                                                        <div className="col-lg-8">

                                                                                        </div>
                                                                                    </div>

                                                                                    <div className="row mb-2">
                                                                                        <div className="col-lg-4 border-right">
                                                                                            <label htmlFor="type_check" className="col-form-label">เวลาสิ้นสุดให้เคลื่อนย้าย</label>
                                                                                        </div>
                                                                                        <div className="col-lg-8">

                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <hr />
                                                                    <div className="row">
                                                                        <div className="col-lg-12">
                                                                            {list_formdetail}
                                                                        </div>
                                                                    </div>

                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="tab-pane fade" id="corpor5" role="tabpanel" aria-labelledby="corpor5-tab">
                                                    <div className="container-fluid py-4">
                                                        <div className="row">
                                                            <div className="col-lg-12">
                                                                <div className="Corpor5Form">
                                                                    <div className="row">
                                                                        <div className="col">
                                                                            <div className="card">
                                                                                <div className="card-header bg-primary text-white">รายละเอียดคำสั่ง (คพ.๕)</div>
                                                                                <div className="card-body">
                                                                                    <div className="row mb-2">
                                                                                        <div className="col-lg-4 border-right">
                                                                                            <label htmlFor="book_no" className="col-form-label">เล่มที่</label>
                                                                                        </div>
                                                                                        <div className="col-lg-8">

                                                                                        </div>
                                                                                    </div>

                                                                                    <div className="row mb-2">
                                                                                        <div className="col-lg-4 border-right">
                                                                                            <label htmlFor="book_no" className="col-form-label">เลขที่</label>
                                                                                        </div>
                                                                                        <div className="col-lg-8">

                                                                                        </div>
                                                                                    </div>

                                                                                    <div className="row mb-2">
                                                                                        <div className="col-lg-4 border-right">
                                                                                            <label htmlFor="date_check" className="col-form-label">วันที่ขอให้ตรวจสอบ</label>
                                                                                        </div>
                                                                                        <div className="col-lg-8">

                                                                                        </div>
                                                                                    </div>

                                                                                    <div className="row mb-2">
                                                                                        <div className="col-lg-4 border-right">
                                                                                            <label htmlFor="location_check" className="col-form-label">สถานที่รับเรื่อง</label>
                                                                                        </div>
                                                                                        <div className="col-lg-8">

                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        </div>

                                                                        <div className="col">
                                                                            <div className="card">
                                                                                <div className="card-header bg-primary text-white">รายละเอียดอู่รถ</div>
                                                                                <div className="card-body">
                                                                                    <div className="row mb-2">
                                                                                        <div className="col-lg-4 border-right">
                                                                                            <label htmlFor="date_check" className="col-form-label">วัน/เวลาที่รับคำร้อง</label>
                                                                                        </div>
                                                                                        <div className="col-lg-8">

                                                                                        </div>
                                                                                    </div>

                                                                                    <div className="row mb-2">
                                                                                        <div className="col-lg-4 border-right">
                                                                                            <label htmlFor="date_check" className="col-form-label">วัน/เวลาที่สั่งคำร้อง</label>
                                                                                        </div>
                                                                                        <div className="col-lg-8">

                                                                                        </div>
                                                                                    </div>

                                                                                    <div className="row mb-2">
                                                                                        <div className="col-lg-4 border-right">
                                                                                            <label htmlFor="type_check" className="col-form-label">การแจ้งผู้ร้อง</label>
                                                                                        </div>
                                                                                        <div className="col-lg-8">

                                                                                        </div>
                                                                                    </div>

                                                                                    <div className="row mb-2">
                                                                                        <div className="col-lg-4 border-right">
                                                                                            <label htmlFor="staff_check" className="col-form-label">เจ้าหน้าที่ผู้บันทึก</label>
                                                                                        </div>
                                                                                        <div className="col-lg-8">

                                                                                        </div>
                                                                                    </div>

                                                                                    <div>
                                                                                        <div className="row mb-2">
                                                                                            <div className="col-lg-4 border-right">
                                                                                                <label htmlFor="position" className="col-form-label">ตำแหน่ง</label>
                                                                                            </div>
                                                                                            <div className="col-lg-8">

                                                                                            </div>
                                                                                        </div>

                                                                                        <div className="row mb-2">
                                                                                            <div className="col-lg-4 border-right">
                                                                                                <label htmlFor="under" className="col-form-label">สังกัด</label>
                                                                                            </div>
                                                                                            <div className="col-lg-8">

                                                                                            </div>
                                                                                        </div>
                                                                                    </div>



                                                                                </div>

                                                                            </div>
                                                                        </div>

                                                                        <div className="col">
                                                                            <div className="card">
                                                                                <div className="card-header bg-primary text-white">รายละเอียดคำสั่ง</div>
                                                                                <div className="card-body">
                                                                                    <div className="row mb-2">
                                                                                        <div className="col-lg-4 border-right">
                                                                                            <label htmlFor="date_check" className="col-form-label">วัน/เวลาที่นัดตรวจสอบ</label>
                                                                                        </div>
                                                                                        <div className="col-lg-8">

                                                                                        </div>
                                                                                    </div>

                                                                                    <div className="row mb-2">
                                                                                        <div className="col-lg-4 border-right">
                                                                                            <label htmlFor="date_check" className="col-form-label">สถานที่นัดเพื่อตรวจสอบ</label>
                                                                                        </div>
                                                                                        <div className="col-lg-8">

                                                                                        </div>
                                                                                    </div>

                                                                                    <div className="row mb-2">
                                                                                        <div className="col-lg-4 border-right">
                                                                                            <label htmlFor="staff_check" className="col-form-label">เจ้าหน้าที่ผู้ออกคำสั่ง</label>
                                                                                        </div>
                                                                                        <div className="col-lg-8">

                                                                                        </div>
                                                                                    </div>

                                                                                    <div className="row mb-2">
                                                                                        <div className="col-lg-4 border-right">
                                                                                            <label htmlFor="position" className="col-form-label">ตำแหน่ง</label>
                                                                                        </div>
                                                                                        <div className="col-lg-8">

                                                                                        </div>
                                                                                    </div>

                                                                                    <div className="row mb-2">
                                                                                        <div className="col-lg-4 border-right">
                                                                                            <label htmlFor="under" className="col-form-label">สังกัด</label>
                                                                                        </div>
                                                                                        <div className="col-lg-8">

                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <hr />
                                                                    <div className="row">
                                                                        <div className="col-lg-12">
                                                                            {list_formdetail}
                                                                        </div>
                                                                    </div>

                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className="tab-pane fade" id="corpor6" role="tabpanel" aria-labelledby="corpor6-tab">
                                                    <div className="container-fluid py-4">
                                                        <div className="row">
                                                            <div className="col-lg-12">





                                                                <div className="Corpor6Form">

                                                                    <div className="row">
                                                                        <div className="col-lg-6">
                                                                            <div className="card">
                                                                                <div className="card-header bg-primary text-white">รายละเอียดคำสั่ง (คพ.๖)</div>
                                                                                <div className="card-body">
                                                                                    <div className="row mb-2">
                                                                                        <div className="col-lg-4 border-right">
                                                                                            <label htmlFor="book_no" className="col-form-label">เล่มที่</label>
                                                                                        </div>
                                                                                        <div className="col-lg-8">

                                                                                        </div>
                                                                                    </div>

                                                                                    <div className="row mb-2">
                                                                                        <div className="col-lg-4 border-right">
                                                                                            <label htmlFor="book_no" className="col-form-label">เลขที่</label>
                                                                                        </div>
                                                                                        <div className="col-lg-8">

                                                                                        </div>
                                                                                    </div>

                                                                                    <div className="row mb-2">
                                                                                        <div className="col-lg-4 border-right">
                                                                                            <label htmlFor="date_check" className="col-form-label">วันที่ออกคำสั่งยกเลิก</label>
                                                                                        </div>
                                                                                        <div className="col-lg-8">

                                                                                        </div>
                                                                                    </div>

                                                                                    <div className="row mb-2">
                                                                                        <div className="col-lg-4 border-right">
                                                                                            <label htmlFor="location_check" className="col-form-label">สถานที่ออกคำสั่งยกเลิก</label>
                                                                                        </div>
                                                                                        <div className="col-lg-8">

                                                                                        </div>
                                                                                    </div>

                                                                                    <div className="row mb-2">
                                                                                        <div className="col-lg-4 border-right">
                                                                                            <label htmlFor="staff_check" className="col-form-label">ผู้ออกคำสั่งยกเลิก</label>
                                                                                        </div>
                                                                                        <div className="col-lg-8">

                                                                                        </div>
                                                                                    </div>

                                                                                    <div className="row mb-2">
                                                                                        <div className="col-lg-4 border-right">
                                                                                            <label htmlFor="position" className="col-form-label">ตำแหน่ง</label>
                                                                                        </div>
                                                                                        <div className="col-lg-8">

                                                                                        </div>
                                                                                    </div>

                                                                                    <div className="row mb-2">
                                                                                        <div className="col-lg-4 border-right">
                                                                                            <label htmlFor="under" className="col-form-label">สังกัด</label>
                                                                                        </div>
                                                                                        <div className="col-lg-8">

                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        </div>

                                                                        <div className="col-lg-6">
                                                                            <div className="card">
                                                                                <div className="card-header bg-primary text-white">รายละเอียดการยกเลิกคำสั่ง</div>
                                                                                <div className="card-body">
                                                                                    <div className="row mb-2">
                                                                                        <div className="col-lg-4 border-right">
                                                                                            <label htmlFor="type_check" className="col-form-label">ประเภทการตรวจ</label>
                                                                                        </div>
                                                                                        <div className="col-lg-8">

                                                                                        </div>
                                                                                    </div>

                                                                                    <div className="row mb-2">
                                                                                        <div className="col-lg-4 border-right">
                                                                                            <label htmlFor="avg_check" className="col-form-label">ค่าที่วัดได้</label>
                                                                                        </div>
                                                                                        <div className="col-lg-8">

                                                                                        </div>
                                                                                    </div>

                                                                                    <div className="row mb-2">
                                                                                        <div className="col-lg-4 border-right">
                                                                                            <label htmlFor="type_check" className="col-form-label">วัน/เวลาที่คำสั่งมีผล</label>
                                                                                        </div>
                                                                                        <div className="col-lg-8">

                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <hr />
                                                                    <div className="row">
                                                                        <div className="col-lg-12">
                                                                            {list_formdetail}
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
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

export default ShowData;