import React, { Component } from 'react'
import CarForm from './CarForm';
import axios from 'axios';
import { url } from '../../parameter/index'


import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import moment from 'moment';
import { DateThai, YearThai } from '../libraries/DateThai';
import 'moment/locale/th';
import { registerLocale, setDefaultLocale } from 'react-datepicker';
import th from 'date-fns/locale/th';
registerLocale('th', th);


class Corpor5Form extends Component {

    componentDidMount() {
        this.state.token = localStorage.getItem('token');
        fetch(url+'/get_all_user?token=' + this.state.token)
            .then((Response) => Response.json())
            .then((res) => {
                this.setState({
                    data_user: res
                })
            }).catch(() => {

            })

        fetch(url+'/get_location?token=' + this.state.token)
            .then((Response) => Response.json())
            .then((res) => {
                this.setState({
                    data_location : res,
                    loading : true
                })
            }).catch(() => {
                
            })
    }

    constructor() {
        super()
        this.state = {
            data_user: [],
            data_location : [],
            loading_one: false,
            loading_two: false,
            data : [],
            data_app : [],

            project_id: '',
            book_no: '',
            order_no: '',
            req_data_check: '',
            req_location: '',

            res_date_garage: '',
            req_date_garage: '',
            staff_req: '',
            staff_support: '',
            staff_support_id: '',

            data_check_appvore: '',
            location_check_appvore: '',
            staff_check_appvore: '',
            staff_check_appvore_id: ''

        }
        this.handleDataCheckAppvoreChange = this.handleDataCheckAppvoreChange.bind(this);
        this.handleLocationCheckAppvoreChange = this.handleLocationCheckAppvoreChange.bind(this);
        this.handleStaffCheckAppvoreChange = this.handleStaffCheckAppvoreChange.bind(this);

        this.handleResDataGarageChange = this.handleResDataGarageChange.bind(this);
        this.handleReqDataGarageChange = this.handleReqDataGarageChange.bind(this);
        this.handleStaffReqChange = this.handleStaffReqChange.bind(this);
        this.handleStaffSupportChange = this.handleStaffSupportChange.bind(this);

        this.handleBookNoChange = this.handleBookNoChange.bind(this)
        this.handleOrderNoChange = this.handleOrderNoChange.bind(this)
        this.handleDataCheckChange = this.handleDataCheckChange.bind(this)
        this.handleReqLocationChange = this.handleReqLocationChange.bind(this)
        this.handleStaffSupportIdChange = this.handleStaffSupportIdChange.bind(this)
        this.handleStaffCheckAppvoreIdChange = this.handleStaffCheckAppvoreIdChange.bind(this)

        this.handleSubmit = this.handleSubmit.bind(this)

    }

    handleDataCheckAppvoreChange = (date) => {

        moment.locale('en');
        const year_th = YearThai(moment(date).format('YYYY'))
        const full_date_th = `${year_th}-${moment(date).format('MM-DD')}`;

        this.setState({
            data_check_appvore : full_date_th
        });
    }

    handleLocationChange(){

    }

    handleLocationCheckAppvoreChange(e) {
        this.setState({
            location_check_appvore: e.target.value
        })
    }
    handleStaffCheckAppvoreChange(e) {
        this.setState({
            staff_check_appvore: e.target.value
        })
    }

    handleResDataGarageChange = (date) => {
        moment.locale('en');
        const year_th = YearThai(moment(date).format('YYYY'))
        const full_date_th = `${year_th}-${moment(date).format('MM-DD')}`;

        this.setState({
            res_date_garage : full_date_th
        });

    }
    handleReqDataGarageChange = (date) => {
        moment.locale('en');
        const year_th = YearThai(moment(date).format('YYYY'))
        const full_date_th = `${year_th}-${moment(date).format('MM-DD')}`;

        this.setState({
            req_date_garage : full_date_th
        });

    }

    handleStaffReqChange(e) {
        this.setState({
            staff_req: e.target.value
        })
    }
    handleStaffSupportChange(e) {
        this.setState({
            staff_support: e.target.value
        })
    }

    handleBookNoChange(e) {
        this.setState({
            book_no: e.target.value
        })
    }

    handleOrderNoChange(e) {
        this.setState({
            order_no: e.target.value
        })
    }
    handleDataCheckChange =(date)=> {
        moment.locale('en');
        const year_th = YearThai(moment(date).format('YYYY'))
        const full_date_th = `${year_th}-${moment(date).format('MM-DD')}`;

        this.setState({
            req_data_check : full_date_th
        });
    
    }

    handleReqLocationChange(e) {
        this.setState({
            req_location: e.target.value
        })
    }

    handleStaffSupportIdChange(e) {
        this.setState({
            staff_support_id: e.target.value,
            loading_one: true
        })

        if (e.target.value != '') {
            fetch(url+'/get_user_one?id=' + e.target.value)
                .then((Response) => Response.json())
                .then((res) => {
                    this.setState({
                        data : res,
                        loading: true
                    })
                })
        }
    }
    handleStaffCheckAppvoreIdChange(e) {
        this.setState({
            staff_check_appvore_id : e.target.value,
            loading_one: true
        })

        if (e.target.value != '') {
            fetch(url+'/get_user_one?id=' + e.target.value)
                .then((Response) => Response.json())
                .then((res) => {
                    this.setState({
                        data_app : res,
                        loading: true
                    })
                })
        }

    }


    handleSubmit(event) {
        event.preventDefault();
        this.state.project_id = localStorage.getItem('project_id');
        var formData = new FormData();

        formData.append('project_id', this.state.project_id);
        formData.append('book_no', this.state.book_no);
        formData.append('order_no', this.state.order_no);
        formData.append('req_data_check', this.state.req_data_check);
        formData.append('req_location', this.state.req_location);

        formData.append('res_date_garage', this.state.res_date_garage);
        formData.append('req_date_garage', this.state.req_date_garage);
        formData.append('staff_req', this.state.staff_req);
        formData.append('staff_support', "-");
        formData.append('staff_support_id' , this.state.staff_support_id );
        
        formData.append('data_check_appvore', this.state.data_check_appvore);
        formData.append('location_check_appvore', this.state.location_check_appvore);
        formData.append('staff_check_appvore', "-");
        formData.append('staff_check_appvore_id', this.state.staff_check_appvore_id)


        axios.post(url+'/carForm_three', formData, {
            onUploadProgress: ProgressEvent => {
                this.setState({ loaded: 'upload' })
            },
        }).then(res => {
            alert("บันทึกสำเร็จ")
        })
    }


    render() {

        let set_user_list = []
        this.state.data.map((val, i) => {
            return set_user_list.push(
                <div key={i}>
                    <div className="row mb-2">
                        <div className="col-lg-4 border-right">
                            <label htmlFor="position" className="col-form-label">ตำแหน่ง</label>
                        </div>
                        <div className="col-lg-8">
                            <input type="text" className="form-control bg-blue-lv3" name="position" defaultValue={val.point} id="position" />
                        </div>
                    </div>

                    <div className="row mb-2">
                        <div className="col-lg-4 border-right">
                            <label htmlFor="under" className="col-form-label">สังกัด</label>
                        </div>
                        <div className="col-lg-8">
                            <input type="text" className="form-control bg-blue-lv3" name="under" defaultValue={val.support} id="under" />
                        </div>
                    </div>

                </div>
            )
        })

        let set_user_list_app = []
        this.state.data_app.map((val, i) => {
            return set_user_list_app.push(
                <div key={i}>
                    <div className="row mb-2">
                        <div className="col-lg-4 border-right">
                            <label htmlFor="position" className="col-form-label">ตำแหน่ง</label>
                        </div>
                        <div className="col-lg-8">
                            <input type="text" className="form-control bg-blue-lv3" name="position" defaultValue={val.point} id="position" />
                        </div>
                    </div>

                    <div className="row mb-2">
                        <div className="col-lg-4 border-right">
                            <label htmlFor="under" className="col-form-label">สังกัด</label>
                        </div>
                        <div className="col-lg-8">
                            <input type="text" className="form-control bg-blue-lv3" name="under" defaultValue={val.support} id="under" />
                        </div>
                    </div>

                </div>
            )
        })


        let list_user = []
        this.state.data_user.map((val, i) => {
            return list_user.push(
                <option key={i} value={val._id.$oid}>{val.name}</option>
            )
        })

        let list_location = []
        this.state.data_location.map((val, i) => {
            return list_location.push(
                <option key={i} value={val.name_location}>{val.name_location}</option>
            )
        })

        

        return (
            <div className="Corpor5Form">
              <br />
                <form onSubmit={this.handleSubmit} >
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
                                            <input type="text" className="form-control bg-blue-lv3" value={this.state.book_no} onChange={this.handleBookNoChange} name="book_no" id="book_no" />
                                        </div>
                                    </div>

                                    <div className="row mb-2">
                                        <div className="col-lg-4 border-right">
                                            <label htmlFor="book_no" className="col-form-label">เลขที่</label>
                                        </div>
                                        <div className="col-lg-8">
                                            <input type="text" className="form-control bg-blue-lv3" value={this.state.order_no} onChange={this.handleOrderNoChange} name="book_no" id="book_no" />
                                        </div>
                                    </div>

                                    <div className="row mb-2">
                                        <div className="col-lg-4 border-right">
                                            <label htmlFor="date_check" className="col-form-label">วันที่ขอให้ตรวจสอบ</label>
                                        </div>
                                        <div className="col-lg-8">
                                            <DatePicker 
                                                selected={this.state.req_data_check} 
                                                onChange={this.handleDataCheckChange} 
                                                dateFormat="วันที่ d MMMM พ.ศ.YYYY"
                                                locale="th"
                                                name="date_check" 
                                                id="date_check" />
                                            {/* <input type="date" className="form-control bg-blue-lv3" value={this.state.req_data_check} onChange={this.handleDataCheckChange} name="date_check" id="date_check" /> */}
                                        </div>
                                    </div>

                                    <div className="row mb-2">
                                        <div className="col-lg-4 border-right">
                                            <label htmlFor="location_check" className="col-form-label">สถานที่รับเรื่อง</label>
                                        </div>
                                        <div className="col-lg-8">
                                            <select name="select_staff_check" id="select_staff_check" onChange={this.handleReqLocationChange} className="form-control bg-blue-lv3">
                                                <option value=""></option>
                                                {
                                                    list_location
                                                }
                                            </select>
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
                                            <DatePicker 
                                                selected={this.state.res_date_garage} 
                                                onChange={this.handleResDataGarageChange} 
                                                dateFormat="วันที่ d MMMM พ.ศ.YYYY"
                                                locale="th"
                                                name="date_check" 
                                                id="date_check" />
                                            {/* <input type="datetime-local" className="form-control bg-blue-lv3" value={this.state.res_date_garage} onChange={this.handleResDataGarageChange} name="date_check" id="date_check" /> */}
                                        </div>
                                    </div>

                                    <div className="row mb-2">
                                        <div className="col-lg-4 border-right">
                                            <label htmlFor="date_check" className="col-form-label">วัน/เวลาที่สั่งคำร้อง</label>
                                        </div>
                                        <div className="col-lg-8">
                                         <DatePicker 
                                                selected={this.state.req_date_garage} 
                                                onChange={this.handleReqDataGarageChange} 
                                                dateFormat="วันที่ d MMMM พ.ศ.YYYY"
                                                locale="th"
                                                name="date_check" 
                                                id="date_check" />
                                            {/* <input type="datetime-local" className="form-control bg-blue-lv3" value={this.state.req_date_garage} onChange={this.handleReqDataGarageChange} name="date_check" id="date_check" /> */}
                                        </div>
                                    </div>

                                    <div className="row mb-2">
                                        <div className="col-lg-4 border-right">
                                            <label htmlFor="type_check" className="col-form-label">การแจ้งผู้ร้อง</label>
                                        </div>
                                        <div className="col-lg-8">
                                            <input type="radio" name="type_check" id="1" value="แจ้งให้ผู้ร้องทราบในวันนั้น" defaultChecked={this.state.staff_req === '1'} onChange={this.handleStaffReqChange} /> <label className="mb-0" htmlFor="1">แจ้งให้ผู้ร้องทราบในวันนั้น</label> <br />
                                            <input type="radio" name="type_check" id="2" value="ผู้ร้องไม่อยู่รอฟังคำสั่ง" defaultChecked={this.state.staff_req === '2'} onChange={this.handleStaffReqChange} /> <label className="mb-0" htmlFor="2">ผู้ร้องไม่อยู่รอฟังคำสั่ง</label>
                                        </div>
                                    </div>

                                    <div className="row mb-2">
                                        <div className="col-lg-4 border-right">
                                            <label htmlFor="staff_check" className="col-form-label">เจ้าหน้าที่ผู้บันทึก</label>
                                        </div>
                                        <div className="col-lg-8">
                                            {/* <input type="text" className="form-control bg-blue-lv3 mb-1" name="staff_check" id="staff_check" value={this.state.staff_support} onChange={this.handleStaffSupportChange} placeholder="นาย, นาง, นางสาว, ยศ" /> */}
                                            <select name="select_staff_check" id="select_staff_check" onChange={this.handleStaffSupportIdChange} className="form-control bg-blue-lv3">
                                                <option value=""></option>
                                                {
                                                    list_user
                                                }
                                            </select>
                                        </div>
                                    </div>

                                    {
                                        this.state.loading == true ? set_user_list :
                                            <div>
                                                <div className="row mb-2">
                                                    <div className="col-lg-4 border-right">
                                                        <label htmlFor="position" className="col-form-label">ตำแหน่ง</label>
                                                    </div>
                                                    <div className="col-lg-8">
                                                        <input type="text" className="form-control bg-blue-lv3" name="position" id="position" />
                                                    </div>
                                                </div>

                                                <div className="row mb-2">
                                                    <div className="col-lg-4 border-right">
                                                        <label htmlFor="under" className="col-form-label">สังกัด</label>
                                                    </div>
                                                    <div className="col-lg-8">
                                                        <input type="text" className="form-control bg-blue-lv3" name="under" id="under" />
                                                    </div>
                                                </div>
                                            </div>
                                    }


                                </div>
                                {/* /.card */}
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
                                        <DatePicker 
                                                selected={this.state.data_check_appvore} 
                                                onChange={this.handleDataCheckAppvoreChange} 
                                                dateFormat="วันที่ d MMMM พ.ศ.YYYY"
                                                locale="th"
                                                name="date_check" 
                                                id="date_check" />
                                            {/* <input type="datetime-local" className="form-control bg-blue-lv3" value={this.state.data_check_appvore} onChange={this.handleDataCheckAppvoreChange} name="date_check" id="date_check" /> */}
                                        </div>
                                    </div>

                                    <div className="row mb-2">
                                        <div className="col-lg-4 border-right">
                                            <label htmlFor="date_check" className="col-form-label">สถานที่นัดเพื่อตรวจสอบ</label>
                                        </div>
                                        <div className="col-lg-8">
                                            <select name="select_staff_check" id="select_staff_check" onChange={this.handleLocationCheckAppvoreChange} className="form-control bg-blue-lv3">
                                                <option value=""></option>
                                                {
                                                    list_location
                                                }
                                            </select>
                                        </div>
                                    </div>

                                    <div className="row mb-2">
                                        <div className="col-lg-4 border-right">
                                            <label htmlFor="staff_check" className="col-form-label">เจ้าหน้าที่ผู้ออกคำสั่ง</label>
                                        </div>
                                        <div className="col-lg-8">
                                            {/* <input type="text" className="form-control bg-blue-lv3 mb-1" name="staff_check" value={this.state.staff_check_appvore} onChange={this.handleStaffCheckAppvoreChange} id="staff_check" placeholder="นาย, นาง, นางสาว, ยศ" /> */}
                                            <select name="select_staff_check" id="select_staff_check" onChange={this.handleStaffCheckAppvoreIdChange} className="form-control bg-blue-lv3">
                                                <option value=""></option>
                                               {
                                                   list_user
                                               }
                                            </select>
                                        </div>
                                    </div>

                                    {
                                        this.state.loading == true ? set_user_list_app :
                                            <div>
                                                <div className="row mb-2">
                                                    <div className="col-lg-4 border-right">
                                                        <label htmlFor="position" className="col-form-label">ตำแหน่ง</label>
                                                    </div>
                                                    <div className="col-lg-8">
                                                        <input type="text" className="form-control bg-blue-lv3" name="position" id="position" />
                                                    </div>
                                                </div>

                                                <div className="row mb-2">
                                                    <div className="col-lg-4 border-right">
                                                        <label htmlFor="under" className="col-form-label">สังกัด</label>
                                                    </div>
                                                    <div className="col-lg-8">
                                                        <input type="text" className="form-control bg-blue-lv3" name="under" id="under" />
                                                    </div>
                                                </div>
                                            </div>
                                    }
                                </div>
                                {/* /.card */}
                            </div>
                            {/* /.col */}
                        </div>
                    </div>
                    <hr />
                    <div className="row">
                        <div className="col-lg-12">
                            
                        </div>
                    </div>
                    <br />
                    <div className="col-lg-12">
                        <center><button className="btn btn-primary">บันทึก (คพ.๕) </button></center>
                    </div>
                </form>
            </div>
        )
    }
}

export default Corpor5Form;