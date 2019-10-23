import React, { Component } from 'react'
import axios from 'axios';
import store from '../../store/index';
import { url , urlpdf } from '../../parameter/index';
import { Str_date } from '../libraries/DateThai';

class ShowData extends Component {


    constructor() {
        super()
        this.state = {
            token: '',
            data: [],
            
            data_two: [],
            data_three: [],
            data_four: [],

            check_check_id : '',
            res_check_id : '',
            name : '',

            check_check_id2 : '',
            res_check_id2 : '',
            name2 : '',

            check_check_id3 : '',
            res_check_id3 : '',
            name3 : '',
            check_check_id4 : '',
            res_check_id4 : '',
            name4 : '',

            check_check_id5 : '',
            res_check_id5 : '',
            name5 : '',

            id: '',
            loading: false,
            project_id : '',

            status : ''
        }

    }

    deletedata(id){
        if(window.confirm("คุณต้องการจะลบข้อมูลทั้งหมดหรือไม่")){
            // console.log("ok : "+ this.state.project_id)
            fetch(url + '/delete_doc_id?id='+this.state.project_id)
            .then((Response) => Response.json())
            .then((res) => {
                alert("ลบข้อมูลเรียบร้อย")
                window.location.href = "/home";
            })
        }
    }

    componentDidMount() {
        this.state.token = localStorage.getItem('token');
        this.state.status = localStorage.getItem('status');
        fetch(url + '/get_doc_id?id=' + this.props.match.params.id + "&token=" + this.state.token)
            .then((Response) => Response.json())
            .then((res) => {
                this.setState({
                    data: res,
                    project_id : res['0']['id'],
                    loading: true
                })
                fetch(url+'/get_user_one?id=' + res['0']['staff_check_id'])
                    .then((Response) => Response.json())
                    .then((res) => {
                        this.setState({
                            name : res['0']['name'],
                            check_check_id : res['0']['point'],
                            res_check_id : res['0']['support']
                        })
                    }).catch(()=>{
                
                    })

                fetch(url + '/get_doc_two_id?id=' + res['0']['id'] + "&token=" + this.state.token)
                    .then((Response) => Response.json())
                    .then((res) => {
                        this.setState({
                            data_two: res
                        })
                        fetch(url+'/get_user_one?id=' + res['0']['staff_allow_id'])
                        .then((Response) => Response.json())
                        .then((res) => {
                            this.setState({
                                name2 : res['0']['name'],
                                check_check_id2 : res['0']['point'],
                                res_check_id2 : res['0']['support']
                            })
                        }).catch(()=>{
                
                        })
                    }).catch(()=>{
                
                    })

                fetch(url + '/get_doc_three_id?id=' + res['0']['id'] + "&token=" + this.state.token)
                    .then((Response) => Response.json())
                    .then((res) => {
                        this.setState({
                            data_three: res
                        })
                        fetch(url+'/get_user_one?id=' + res['0']['staff_check_appvore_id'])
                        .then((Response) => Response.json())
                        .then((res) => {
                            this.setState({
                                name3 : res['0']['name'],
                                check_check_id3 : res['0']['point'],
                                res_check_id3 : res['0']['support']
                            })
                        }).catch(()=>{
                
                        })
                        fetch(url+'/get_user_one?id=' + res['0']['staff_support_id'])
                        .then((Response) => Response.json())
                        .then((res) => {
                            this.setState({
                                name4: res['0']['name'],
                                check_check_id4 : res['0']['point'],
                                res_check_id4 : res['0']['support']
                            })
                        }).catch(()=>{
                
                        })
                    }).catch(()=>{
                
                    })

                fetch(url + '/get_doc_four_id?id=' + res['0']['id'] + "&token=" + this.state.token)
                    .then((Response) => Response.json())
                    .then((res) => {
                        this.setState({
                            data_four: res
                        })
                        fetch(url+'/get_user_one?id=' + res['0']['staff_id'])
                        .then((Response) => Response.json())
                        .then((res) => {
                            this.setState({
                                name5 : res['0']['name'],
                                check_check_id5 : res['0']['point'],
                                res_check_id5 : res['0']['support']
                            })
                        }).catch(()=>{
                
                        })
                    }).catch(()=>{
                
                    })

            }).catch((e)=>{
                this.props.history.push("/");
            })

    }

    str_dataaa(e){
        return Str_date(e)
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
                                                                            <p>{val.date_check != '' ? this.str_dataaa(val.date_check):''} </p>
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
                                                                            <p>{this.state.name}</p>
                                                                            <p>{this.state.check_check_id}</p>
                                                                            <p>{this.state.res_check_id}</p>
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
                                                                            <p>{val.date_not_allow != '' ? this.str_dataaa(val.date_not_allow) : ''}</p>
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


        let list_data_two = []
        if(this.state.data_two != ''){
            this.state.data_two.map((val, i) => {
                return list_data_two.push(
                    <div className="row" key={i}>
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
                                                        {val.book_no}
                                                    </div>
                                                </div>
    
                                                <div className="row mb-2">
                                                    <div className="col-lg-4 border-right">
                                                        <label htmlFor="book_no" className="col-form-label">เลขที่</label>
                                                    </div>
                                                    <div className="col-lg-8">
                                                        {val.order_no}
                                                    </div>
                                                </div>
    
                                                <div className="row mb-2">
                                                    <div className="col-lg-4 border-right">
                                                        <label htmlFor="date_check" className="col-form-label">วันที่ออกใบอนุญาต</label>
                                                    </div>
                                                    <div className="col-lg-8">
                                                        {val.date_allow != '' ? this.str_dataaa(val.date_allow) : '' }
                                                    </div>
                                                </div>
    
                                                <div className="row mb-2">
                                                    <div className="col-lg-4 border-right">
                                                        <label htmlFor="location_check" className="col-form-label">สถานที่ออกใบอนุญาต</label>
                                                    </div>
                                                    <div className="col-lg-8">
                                                        {val.location_allow}
                                                    </div>
                                                </div>
    
                                                <div className="row mb-2">
                                                    <div className="col-lg-4 border-right">
                                                        <label htmlFor="staff_check" className="col-form-label">ผู้ออกใบอนุญาต</label>
                                                    </div>
                                                    <div className="col-lg-8">
                                                    <p>{this.state.name2}</p>
                                                                           
                                                    </div>
                                                </div>
    
                                                <div>
                                                    <div className="row mb-2">
                                                        <div className="col-lg-4 border-right">
                                                            <label htmlFor="position" className="col-form-label">ตำแหน่ง</label>
                                                        </div>
                                                        <div className="col-lg-8">
                                                        <p>{this.state.check_check_id2}</p>
                                                        </div>
                                                    </div>
    
                                                    <div className="row mb-2">
                                                        <div className="col-lg-4 border-right">
                                                            <label htmlFor="under" className="col-form-label">สังกัด</label>
                                                        </div>
                                                        <div className="col-lg-8">
                                                        <p>{this.state.res_check_id2}</p>
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
                                                        {val.garage_name}
                                                    </div>
                                                </div>
    
                                                <div className="row mb-2">
                                                    <div className="col-lg-4 border-right">
                                                        <label htmlFor="type_check" className="col-form-label">วัน/เวลาที่รถเข้าอู่</label>
                                                    </div>
                                                    <div className="col-lg-8">
                                                        { val.garage_in_date != '' ? this.str_dataaa(val.garage_in_date) : ''}
                                                    </div>
                                                </div>
    
                                                <div className="row mb-2">
                                                    <div className="col-lg-4 border-right">
                                                        <label htmlFor="type_check" className="col-form-label">วัน/เวลาที่รถออกจากอู่</label>
                                                    </div>
                                                    <div className="col-lg-8">
                                                        {val.garage_out_date != '' ? this.str_dataaa(val.garage_out_date) : ''}
                                                    </div>
                                                </div>
    
                                                <div className="row mb-2">
                                                    <div className="col-lg-4 border-right">
                                                        <label htmlFor="type_check" className="col-form-label">เวลาสิ้นสุดให้เคลื่อนย้าย</label>
                                                    </div>
                                                    <div className="col-lg-8">
                                                        {val.end_remove_car != '' ? this.str_dataaa(val.end_remove_car) : ''}
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
    
                )
            })
        }
       


        let list_data_three = []
        if(this.state.data_three != ''){
            this.state.data_three.map((val, i) => {
                return list_data_three.push(
                    <div className="row" key={i}>
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
                                                        {val.book_no}
                                                    </div>
                                                </div>
    
                                                <div className="row mb-2">
                                                    <div className="col-lg-4 border-right">
                                                        <label htmlFor="book_no" className="col-form-label">เลขที่</label>
                                                    </div>
                                                    <div className="col-lg-8">
                                                        {val.order_no}
                                                    </div>
                                                </div>
    
                                                <div className="row mb-2">
                                                    <div className="col-lg-4 border-right">
                                                        <label htmlFor="date_check" className="col-form-label">วันที่ขอให้ตรวจสอบ</label>
                                                    </div>
                                                    <div className="col-lg-8">
                                                        {val.data_check_appvore != '' ? this.str_dataaa(val.data_check_appvore) : ''}
                                                    </div>
                                                </div>
    
                                                <div className="row mb-2">
                                                    <div className="col-lg-4 border-right">
                                                        <label htmlFor="location_check" className="col-form-label">สถานที่รับเรื่อง</label>
                                                    </div>
                                                    <div className="col-lg-8">
                                                        {val.location_check_appvore}
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
                                                        {val.res_date_garage != '' ?  this.str_dataaa(val.res_date_garage): ''}
                                                    </div>
                                                </div>
    
                                                <div className="row mb-2">
                                                    <div className="col-lg-4 border-right">
                                                        <label htmlFor="date_check" className="col-form-label">วัน/เวลาที่สั่งคำร้อง</label>
                                                    </div>
                                                    <div className="col-lg-8">
                                                        {val.req_date_garage != '' ? this.str_dataaa(val.req_date_garage):''}
                                                    </div>
                                                </div>
    
                                                <div className="row mb-2">
                                                    <div className="col-lg-4 border-right">
                                                        <label htmlFor="type_check" className="col-form-label">การแจ้งผู้ร้อง</label>
                                                    </div>
                                                    <div className="col-lg-8">
                                                        {val.staff_req}
                                                    </div>
                                                </div>
    
                                                <div className="row mb-2">
                                                    <div className="col-lg-4 border-right">
                                                        <label htmlFor="staff_check" className="col-form-label">เจ้าหน้าที่ผู้บันทึก</label>
                                                    </div>
                                                    <div className="col-lg-8">
                                                         <p>{this.state.name4}</p>
                                                    </div>
                                                </div>
    
                                                <div>
                                                    <div className="row mb-2">
                                                        <div className="col-lg-4 border-right">
                                                            <label htmlFor="position" className="col-form-label">ตำแหน่ง</label>
                                                        </div>
                                                        <div className="col-lg-8">
                                                        <p>{this.state.check_check_id4}</p>
                                                        </div>
                                                    </div>
    
                                                    <div className="row mb-2">
                                                        <div className="col-lg-4 border-right">
                                                            <label htmlFor="under" className="col-form-label">สังกัด</label>
                                                        </div>
                                                        <div className="col-lg-8">
                                                        <p>{this.state.res_check_id4}</p>
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
                                                        {val.res_date_garage != ''? this.str_dataaa(val.res_date_garage) : ''}
                                                    </div>
                                                </div>
    
                                                <div className="row mb-2">
                                                    <div className="col-lg-4 border-right">
                                                        <label htmlFor="date_check" className="col-form-label">สถานที่นัดเพื่อตรวจสอบ</label>
                                                    </div>
                                                    <div className="col-lg-8">
                                                        {val.req_location}
                                                    </div>
                                                </div>
    
                                                <div className="row mb-2">
                                                    <div className="col-lg-4 border-right">
                                                        <label htmlFor="staff_check" className="col-form-label">เจ้าหน้าที่ผู้ออกคำสั่ง</label>
                                                    </div>
                                                    <div className="col-lg-8">
                                                        <p>{this.state.name3}</p>
                                                    </div>
                                                </div>
    
                                                <div>
                                                    <div className="row mb-2">
                                                        <div className="col-lg-4 border-right">
                                                            <label htmlFor="position" className="col-form-label">ตำแหน่ง</label>
                                                        </div>
                                                        <div className="col-lg-8">
                                                        <p>{this.state.check_check_id3}</p>
                                                        </div>
                                                    </div>
    
                                                    <div className="row mb-2">
                                                        <div className="col-lg-4 border-right">
                                                            <label htmlFor="under" className="col-form-label">สังกัด</label>
                                                        </div>
                                                        <div className="col-lg-8">
                                                        <p>{this.state.res_check_id3}</p>
                                                        </div>
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
    
                )
            })
        }
       

        let list_data_four = []
        if(this.state.data_four != ''){
            this.state.data_four.map((val, i) => {
                return list_data_four.push(
                    <div className="row" key={i}>
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
                                                        {val.book_no}
                                                    </div>
                                                </div>
    
                                                <div className="row mb-2">
                                                    <div className="col-lg-4 border-right">
                                                        <label htmlFor="book_no" className="col-form-label">เลขที่</label>
                                                    </div>
                                                    <div className="col-lg-8">
                                                        {val.order_no}
                                                    </div>
                                                </div>
    
                                                <div className="row mb-2">
                                                    <div className="col-lg-4 border-right">
                                                        <label htmlFor="date_check" className="col-form-label">วันที่ออกคำสั่งยกเลิก</label>
                                                    </div>
                                                    <div className="col-lg-8">
                                                        { val.date_out != '' ? this.str_dataaa(val.date_out) : ''}
                                                    </div>
                                                </div>
    
                                                <div className="row mb-2">
                                                    <div className="col-lg-4 border-right">
                                                        <label htmlFor="location_check" className="col-form-label">สถานที่ออกคำสั่งยกเลิก</label>
                                                    </div>
                                                    <div className="col-lg-8">
                                                        {val.location_out}
                                                    </div>
                                                </div>
    
                                                <div className="row mb-2">
                                                    <div className="col-lg-4 border-right">
                                                        <label htmlFor="staff_check" className="col-form-label">ผู้ออกคำสั่งยกเลิก</label>
                                                    </div>
                                                    <div className="col-lg-8">
                                                    <p>{this.state.name5}</p>
                                                    </div>
                                                </div>
    
                                                <div>
                                                    <div className="row mb-2">
                                                        <div className="col-lg-4 border-right">
                                                            <label htmlFor="position" className="col-form-label">ตำแหน่ง</label>
                                                        </div>
                                                        <div className="col-lg-8">
                                                        <p>{this.state.check_check_id5}</p>
                                                        </div>
                                                    </div>
    
                                                    <div className="row mb-2">
                                                        <div className="col-lg-4 border-right">
                                                            <label htmlFor="under" className="col-form-label">สังกัด</label>
                                                        </div>
                                                        <div className="col-lg-8">
                                                        <p>{this.state.res_check_id5}</p>
                                                        </div>
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
                                                        {val.type_check}
                                                    </div>
                                                </div>
    
                                                <div className="row mb-2">
                                                    <div className="col-lg-4 border-right">
                                                        <label htmlFor="avg_check" className="col-form-label">ค่าที่วัดได้</label>
                                                    </div>
                                                    <div className="col-lg-8">
                                                        {val.val_now}
                                                    </div>
                                                </div>
    
                                                <div className="row mb-2">
                                                    <div className="col-lg-4 border-right">
                                                        <label htmlFor="type_check" className="col-form-label">วัน/เวลาที่คำสั่งมีผล</label>
                                                    </div>
                                                    <div className="col-lg-8">
                                                        {  val.date_now != '' ? this.str_dataaa(val.date_now) : ''}
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
    
                )
            })
    
        }
       
        let urlform3 = urlpdf+'/_php/korpor3.php?id=' + this.props.match.params.id
        let urlform4 = urlpdf+'/_php/korpor4.php?id=' + this.props.match.params.id
        let urlform5 = urlpdf+'/_php/korpor5.php?id=' + this.props.match.params.id
        let urlform6 = urlpdf+'/_php/korpor6.php?id=' + this.props.match.params.id
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
                                                {
                                                    this.state.status == 'Admin'?
                                                    <div className="col-md-1">
                                                  
                                                    <button onClick={()=>{this.deletedata( this.props.match.params.id)}} type="button" class="btn btn-danger">ลบข้อมูลออก</button>
                                                   
                                                </div>
                                                :''
                                                }
                                                
                                                <div className="col-md-3">
                                                    <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
                                                        <li className="nav-item dropdown">
                                                            <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">พิมพ์เอกสาร</a>
                                                            <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                                                                <a className="dropdown-item" href={urlform3} target="_blank">เอกสาร ฟอร์ม คพ.3</a>
                                                                <a className="dropdown-item" href={urlform4} target="_blank">เอกสาร ฟอร์ม คพ.4</a>
                                                                <a className="dropdown-item" href={urlform5} target="_blank">เอกสาร ฟอร์ม คพ.5</a>
                                                                <a className="dropdown-item" href={urlform6} target="_blank">เอกสาร ฟอร์ม คพ.6</a>
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
                                                        {this.state.loading == true ? list_data_two : ''}
                                                    </div>
                                                </div>
                                                <div className="tab-pane fade" id="corpor5" role="tabpanel" aria-labelledby="corpor5-tab">
                                                    <div className="container-fluid py-4">
                                                        {this.state.loading == true ? list_data_three : ''}
                                                    </div>
                                                </div>

                                                <div className="tab-pane fade" id="corpor6" role="tabpanel" aria-labelledby="corpor6-tab">
                                                    <div className="container-fluid py-4">
                                                        {this.state.loading == true ? list_data_four : ''}
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