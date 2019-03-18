import React, { Component } from 'react'
import CarForm from './CarForm';
import axios from 'axios';
import { url } from '../../parameter/index';

import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import moment from 'moment';
import { DateThai, YearThai } from '../libraries/DateThai';
import 'moment/locale/th';
import { registerLocale, setDefaultLocale } from 'react-datepicker';
import th from 'date-fns/locale/th';
registerLocale('th', th);



class Corpor6Form extends Component {

    componentDidMount() {
        this.state.token = localStorage.getItem('token');
        fetch(url+'/get_all_user?token=' + this.state.token)
            .then((Response) => Response.json())
            .then((res) => {
                this.setState({
                    data_user: res
                })
            })
    
    }

    constructor(){
        super()
        this.state = {
            data_user : [],
            loading : false,
            data : [],
            book_no : '',
            order_no : '',
            date_out : '',
            location_out: '',
            staff_out: '',
            staff_id : '',
            type_check : '',
            val_now : '',
            date_now : ''

        }

        this.handleBookOnChange = this.handleBookOnChange.bind(this)
        this.handleOrderNoChange = this.handleOrderNoChange.bind(this)
        this.handleDateOutChange = this.handleDateOutChange.bind(this)
        this.handleLocationOutChange = this.handleLocationOutChange.bind(this)
        this.handleStaffOutChange = this.handleStaffOutChange.bind(this)
        this.handleTypeCheckChange = this.handleTypeCheckChange.bind(this)
        this.handleValNowChange = this.handleValNowChange.bind(this)
        this.handleDateNowChange = this.handleDateNowChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleStaffIdChange = this.handleStaffIdChange.bind(this)

    }

    handleBookOnChange(e){
        this.setState({
            book_no : e.target.value
        })
    }

    handleOrderNoChange(e){
        this.setState({
            order_no : e.target.value
        })
    }

    handleDateOutChange = (date) => {
        moment.locale('en');
        const year_th = YearThai(moment(date).format('YYYY'))
        const full_date_th = `${year_th}-${moment(date).format('MM-DD')}`;

        this.setState({
            date_out : full_date_th
        });
    }

    handleLocationOutChange(e){
        this.setState({
            location_out : e.target.value
        })
    }

    handleStaffOutChange(e){
        this.setState({
            staff_out : e.target.value
        })
    }

    handleTypeCheckChange(e){
        this.setState({
            type_check : e.target.value
        })
    }

    handleValNowChange(e){
        this.setState({
            val_now : e.target.value
        })
    }
    handleDateNowChange =(date)=>{
        moment.locale('en');
        const year_th = YearThai(moment(date).format('YYYY'))
        const full_date_th = `${year_th}-${moment(date).format('MM-DD')}`;

        this.setState({
            date_now : full_date_th
        });
    }
   

    handleStaffIdChange(e){
        this.setState({
            staff_id : e.target.value,
        })

        if (e.target.value != '') {
            fetch(url+'/get_user_one?id=' + e.target.value)
                .then((Response) => Response.json())
                .then((res) => {
                    console.log(res)
                    this.setState({
                        data : res,
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
        formData.append('order_no' , this.state.order_no)
        formData.append('date_out', this.state.date_out);
        formData.append('location_out', this.state.location_out);
        formData.append('staff_out', this.state.staff_out);
        formData.append('type_check', this.state.type_check);
        formData.append('val_now', this.state.val_now);
        formData.append('date_now', this.state.date_now);
        formData.append('staff_id', this.state.staff_id);

        axios.post(url+'/carForm_four', formData, {
            onUploadProgress: ProgressEvent => {
                this.setState({ loaded: 'upload'})
            },
        }).then(res => {
            console.log(res)
            alert("บันทึกสำเร็จ")
        })
    }

    render() {

        let list_user = []
        this.state.data_user.map((val, i) => {
            return list_user.push(
                <option key={i} value={val._id.$oid}>{val.name}</option>
            )
        })

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

        return(
            <div className="Corpor6Form">   
               <br />
                <form onSubmit={this.handleSubmit} >                                                 
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
                                            <input type="text" className="form-control bg-blue-lv3" value={this.state.book_no} onChange={this.handleBookOnChange} name="book_no" id="book_no"/>
                                        </div>
                                    </div>

                                    <div className="row mb-2">
                                        <div className="col-lg-4 border-right">
                                            <label htmlFor="book_no" className="col-form-label">เลขที่</label>
                                        </div>
                                        <div className="col-lg-8">
                                            <input type="text" className="form-control bg-blue-lv3" value={this.state.order_no} onChange={this.handleOrderNoChange} name="book_no" id="book_no"/>
                                        </div>
                                    </div>

                                    <div className="row mb-2">
                                        <div className="col-lg-4 border-right">
                                            <label htmlFor="date_check" className="col-form-label">วันที่ออกคำสั่งยกเลิก</label>
                                        </div>
                                        <div className="col-lg-8">
                                             <DatePicker 
                                                selected={this.state.date_out} 
                                                onChange={this.handleDateOutChange} 
                                                dateFormat="วันที่ d MMMM พ.ศ.YYYY"
                                                locale="th"
                                                name="date_check" 
                                                id="date_check" />
                                            {/* <input type="date" className="form-control bg-blue-lv3" value={this.state.date_out} onChange={this.handleDateOutChange} name="date_check" id="date_check"/> */}
                                        </div>
                                    </div>

                                    <div className="row mb-2">
                                        <div className="col-lg-4 border-right">
                                            <label htmlFor="location_check" className="col-form-label">สถานที่ออกคำสั่งยกเลิก</label>
                                        </div>
                                        <div className="col-lg-8">
                                            <input type="text" className="form-control bg-blue-lv3" value={this.state.location_out} onChange={this.handleLocationOutChange} name="location_check" id="location_check"/>
                                        </div>
                                    </div>

                                    <div className="row mb-2">
                                        <div className="col-lg-4 border-right">
                                            <label htmlFor="staff_check" className="col-form-label">ผู้ออกคำสั่งยกเลิก</label>
                                        </div>
                                        <div className="col-lg-8">
                                            <input type="text" className="form-control bg-blue-lv3 mb-1" name="staff_check" value={this.state.staff_out} onChange={this.handleStaffOutChange}  id="staff_check" placeholder="นาย, นาง, นางสาว, ยศ"/>
                                            <select name="select_staff_check" id="select_staff_check" onChange={this.handleStaffIdChange} className="form-control bg-blue-lv3">
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
                                            <input type="radio" name="type_check" id="1" value="ควันดำ" defaultChecked={this.state.type_check === 'ควันดำ'} onChange={this.handleTypeCheckChange} /> <label className="mb-0" htmlFor="1">ควันดำ</label> <br/>
                                            <input type="radio" name="type_check" id="2" value="เสียงดัง" defaultChecked={this.state.type_check === 'เสียงดัง'} onChange={this.handleTypeCheckChange} /> <label className="mb-0" htmlFor="2">เสียงดัง</label> <br/>
                                            <input type="radio" name="type_check" id="3" value="ไฮโดรคาร์บอน" defaultChecked={this.state.type_check === 'ไฮโดรคาร์บอน'} onChange={this.handleTypeCheckChange} /> <label className="mb-0" htmlFor="3">ไฮโดรคาร์บอน</label> <br/>
                                            <input type="radio" name="type_check" id="4" value="คาร์บอนไดออกไซด์" defaultChecked={this.state.type_check === 'คาร์บอนไดออกไซด์'} onChange={this.handleTypeCheckChange} /> <label className="mb-0" htmlFor="4">คาร์บอนไดออกไซด์</label>
                                        </div>
                                    </div>

                                    <div className="row mb-2">
                                        <div className="col-lg-4 border-right">
                                            <label htmlFor="avg_check" className="col-form-label">ค่าที่วัดได้</label>
                                        </div>
                                        <div className="col-lg-8">
                                            <input type="text" className="form-control bg-blue-lv3" value={this.state.val_now} onChange={this.handleValNowChange} name="avg_check" id="avg_check"/>
                                        </div>
                                    </div>

                                    <div className="row mb-2">
                                        <div className="col-lg-4 border-right">
                                            <label htmlFor="type_check" className="col-form-label">วัน/เวลาที่คำสั่งมีผล</label>
                                        </div>
                                        <div className="col-lg-8">
                                            <DatePicker 
                                                selected={this.state.date_now} 
                                                onChange={this.handleDateNowChange} 
                                                dateFormat="วันที่ d MMMM พ.ศ.YYYY"
                                                locale="th"
                                                name="date_check" 
                                                id="date_check" />
                                            {/* <input type="date" className="form-control bg-blue-lv3" name="date_check" value={this.state.date_now} onChange={this.handleDateNowChange} id="date_check"/> */}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <hr/>
                    <div className="row">
                        <div className="col-lg-12">                                            
                           
                        </div>
                    </div>
                    <br />
                    <div className="col-lg-12">
                        <center><button className="btn btn-primary">บันทึก (คพ.๖)</button></center>
                    </div>
                </form>
            </div>            
        )
    }
}

export default Corpor6Form;