import React , { Component }from 'react';
import axios from 'axios';
import { url } from '../../parameter/index';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import moment from 'moment';
import { DateThai, YearThai } from '../libraries/DateThai';
import 'moment/locale/th';
import { registerLocale, setDefaultLocale } from 'react-datepicker';
import th from 'date-fns/locale/th';

class EditFormFour extends Component{

    componentDidMount(){
        this.state.token = localStorage.getItem('token');
        fetch(url+'/get_all_user?token=' + this.state.token)
            .then((Response) => Response.json())
            .then((res) => {
                this.setState({
                    data_user: res
                })
            })

        fetch(url+'/get_doc_two_id?id=' + this.props.id + "&token=" + this.state.token)
            .then((Response) => Response.json())
            .then((res) => {
               this.setState({
                project_id : res['0']['project_id'],
                data_province: res['0']['project_id'],
                book_no: res['0']['book_no'],
                order_no: res['0']['order_no'],
                date_allow: res['0']['date_allow'],
                location_allow: res['0']['location_allow'],
                staff_allow: res['0']['staff_allow'],
                staff_allow_id : res['0']['staff_allow_id'],
                garage_name: res['0']['garage_name'],
                garage_in_date: res['0']['garage_in_date'],
                garage_out_date: res['0']['garage_out_date'],
                end_remove_car: res['0']['end_remove_car']
            })
        })

        fetch(url+'/get_service?token=' + this.state.token)
            .then((Response) => Response.json())
            .then((res) => {
                this.setState({
                    data_servicecar : res,
                    loading : true
                })
            })

       
    }

    constructor() {
        super()
        this.state = {
            data : [],
            data_user : [],
            loading : false,
            project_id : '',
            data_province: [],
            book_no: '',
            order_no: '',
            date_allow: '',
            location_allow: '',
            staff_allow: '',
            staff_allow_id : '',

            garage_name: '',
            garage_in_date: '',
            garage_out_date: '',
            end_remove_car: '',
            data_servicecar : []
        }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleGarageNameChange = this.handleGarageNameChange.bind(this);
        this.handleGarageInDateChange = this.handleGarageInDateChange.bind(this);
        this.handleGarageOutDateChange = this.handleGarageOutDateChange.bind(this);
        this.handleEndRomoveCarChange = this.handleEndRomoveCarChange.bind(this);
        this.handleBookOnChange = this.handleBookOnChange.bind(this);
        this.handleOrderNoChange = this.handleOrderNoChange.bind(this);

        this.handleDateAllowChange = this.handleDateAllowChange.bind(this);
        this.handleLocationAllowChange = this.handleLocationAllowChange.bind(this);
        this.handleStaffAllowChange = this.handleStaffAllowChange.bind(this);
        this.handleStaffAllowIdChange = this.handleStaffAllowIdChange.bind(this)


    }

    handleGarageNameChange(e) {
        this.setState({
            garage_name : e.target.value
        })
    }

    handleGarageInDateChange = (date) => {
        moment.locale('en');
        const year_th = YearThai(moment(date).format('YYYY'))
        const full_date_th = `${year_th}-${moment(date).format('MM-DD')}`;
        const date_format_en = moment(date).format('YYYY-MM-DD');

        this.setState({
            garage_in_date: full_date_th
        });
    }
    handleGarageOutDateChange = (date)=> {
        moment.locale('en');
        const year_th = YearThai(moment(date).format('YYYY'))
        const full_date_th = `${year_th}-${moment(date).format('MM-DD')}`;
        const date_format_en = moment(date).format('YYYY-MM-DD');

        this.setState({
            garage_out_date: full_date_th
        });
    }

    handleEndRomoveCarChange = (date) => {
        moment.locale('en');
        const year_th = YearThai(moment(date).format('YYYY'))
        const full_date_th = `${year_th}-${moment(date).format('MM-DD')}`;
        const date_format_en = moment(date).format('YYYY-MM-DD');

        this.setState({
            end_remove_car: full_date_th
        });
       
    }
    handleBookOnChange(e) {
        this.setState({
            book_no: e.target.value
        })
    }
    handleOrderNoChange(e) {
        this.setState({
            order_no: e.target.value
        })
    }
    handleDateAllowChange(e) {
        this.setState({
            date_allow: e.target.value
        })
    }
    handleLocationAllowChange(e) {
        this.setState({
            location_allow: e.target.value
        })
    }
    handleStaffAllowChange(e) {
        this.setState({
            staff_allow: e.target.value
        })
    }
    handleStaffAllowIdChange(e){
        this.setState({
            staff_allow_id : e.target.value,
            loading : false
        })

        if(e.target.value != ''){
            fetch(url+'/get_user_one?id=' + e.target.value)
            .then((Response) => Response.json())
            .then((res) => {
                this.setState({
                    data: res,
                    loading: true
                })
            })
        }

    }

    handleSubmit(event) {
        event.preventDefault();
        var formData = new FormData();
        formData.append('project_id', this.props.id);
        formData.append('book_no', this.state.book_no);
        formData.append('order_no', this.state.order_no);
        formData.append('date_allow', this.state.date_allow);
        formData.append('location_allow', this.state.location_allow);
        formData.append('staff_allow', this.state.staff_allow);
        formData.append('staff_allow_id' , this.state.staff_allow_id )
        formData.append('garage_name', this.state.garage_name);
        formData.append('garage_in_date', this.state.garage_in_date);
        formData.append('garage_out_date', this.state.garage_out_date);
        formData.append('end_remove_car', this.state.end_remove_car);
        

        axios.post(url+'/carForm_two', formData, {
            onUploadProgress: ProgressEvent => {
                this.setState({ loaded: 'upload'})
            },
        }).then(res => {
            console.log(res)
            alert("บันทึกสำเร็จ")
        })
    }

    handleDateNotAllowChange = (date) => {        
        moment.locale('en');
        const year_th = YearThai(moment(date).format('YYYY'))
        const full_date_th = `${year_th}-${moment(date).format('MM-DD')}`;
        const date_format_en = moment(date).format('YYYY-MM-DD');

        this.setState({
            date_allow: full_date_th
        });
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

        let list_user = []
        this.state.data_user.map((val, i) => {
            if(val._id.$oid == this.state.staff_allow_id){
                return list_user.push(
                    <option key={i} value={val._id.$oid} selected>{val.name}</option>
                )
            }else{
                return list_user.push(
                    <option key={i} value={val._id.$oid}>{val.name}</option>
                )
            }
           
        })

        let list_service = []
        this.state.data_servicecar.map((val, i) => {
            if(val.name_service == this.state.garage_name){
                return list_service.push(
                    <option key={i} value={val.name_service} selected>{val.name_service}</option>
                )
            }else{
                return list_service.push(
                    <option key={i} value={val.name_service}>{val.name_service}</option>
                )
            }

           
        })
        return (
            <div className="Corpor4Form">
            <br />
                <form onSubmit={this.handleSubmit} >
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
                                            <input type="text" className="form-control bg-blue-lv3" value={this.state.book_no} onChange={this.handleBookOnChange} name="book_no" id="book_no" />
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
                                            <label htmlFor="date_check" className="col-form-label">วันที่ออกใบอนุญาต</label>
                                        </div>
                                        <div className="col-lg-8">
                                            <DatePicker 
                                                selected={this.state.date_allow} 
                                                onChange={this.handleDateNotAllowChange} 
                                                dateFormat="วันที่ d MMMM พ.ศ.YYYY"
                                                locale="th"
                                                name="date_check" 
                                                id="date_check" />
                                            {/* <input type="date" className="form-control bg-blue-lv3" value={this.state.date_allow} onChange={this.handleDateAllowChange} name="date_check" id="date_check" /> */}
                                        </div>
                                    </div>

                                    <div className="row mb-2">
                                        <div className="col-lg-4 border-right">
                                            <label htmlFor="location_check" className="col-form-label">สถานที่ออกใบอนุญาต</label>
                                        </div>
                                        <div className="col-lg-8">
                                            <input type="text" className="form-control bg-blue-lv3" value={this.state.location_allow} onChange={this.handleLocationAllowChange} name="location_check" id="location_check" />
                                        </div>
                                    </div>

                                    <div className="row mb-2">
                                        <div className="col-lg-4 border-right">
                                            <label htmlFor="staff_check" className="col-form-label">ผู้ออกใบอนุญาต</label>
                                        </div>
                                        <div className="col-lg-8">
                                            <input type="text" className="form-control bg-blue-lv3 mb-1" name="staff_check" value={this.state.staff_allow} onChange={this.handleStaffAllowChange} id="staff_check" placeholder="นาย, นาง, นางสาว, ยศ" />
                                            <select name="select_staff_check" id="select_staff_check" onChange={this.handleStaffAllowIdChange} className="form-control bg-blue-lv3">
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
                                <div className="card-header bg-primary text-white">รายละเอียดอู่รถ</div>
                                <div className="card-body">
                                    <div className="row mb-2">
                                        <div className="col-lg-4 border-right">
                                            <label htmlFor="type_check" className="col-form-label">อู่รถ</label>
                                        </div>
                                        <div className="col-lg-8">
                                            <select name="select_staff_check" id="select_staff_check" onChange={this.handleGarageNameChange} className="form-control bg-blue-lv3">
                                                <option value=""></option>
                                                {
                                                    list_service
                                                }
                                            </select>
                                        </div>
                                    </div>

                                    <div className="row mb-2">
                                        <div className="col-lg-4 border-right">
                                            <label htmlFor="type_check" className="col-form-label">วัน/เวลาที่รถเข้าอู่</label>
                                        </div>
                                        <div className="col-lg-8">
                                            <DatePicker 
                                                selected={this.state.garage_in_date} 
                                                onChange={this.handleGarageInDateChange} 
                                                dateFormat="วันที่ d MMMM พ.ศ.YYYY"
                                                locale="th"
                                                name="avg_check" 
                                                id="avg_check" />
                                            {/* <input type="datetime-local" className="form-control bg-blue-lv3 w-50" value={this.state.garage_in_date} onChange={this.handleGarageInDateChange} name="avg_check" id="avg_check" /> */}
                                        </div>
                                    </div>

                                    <div className="row mb-2">
                                        <div className="col-lg-4 border-right">
                                            <label htmlFor="type_check" className="col-form-label">วัน/เวลาที่รถออกจากอู่</label>
                                        </div>
                                        <div className="col-lg-8">
                                            <DatePicker 
                                                selected={this.state.garage_out_date} 
                                                onChange={this.handleGarageOutDateChange} 
                                                dateFormat="วันที่ d MMMM พ.ศ.YYYY"
                                                locale="th"
                                                name="avg_check" 
                                                id="avg_check" />
                                            {/* <input type="datetime-local" className="form-control bg-blue-lv3 w-50" value={this.state.garage_out_date} onChange={this.handleGarageOutDateChange} name="avg_check" id="avg_check" /> */}
                                        </div>
                                    </div>

                                    <div className="row mb-2">
                                        <div className="col-lg-4 border-right">
                                            <label htmlFor="type_check" className="col-form-label">เวลาสิ้นสุดให้เคลื่อนย้าย</label>
                                        </div>
                                        <div className="col-lg-8">
                                            <DatePicker 
                                                selected={this.state.end_remove_car} 
                                                onChange={this.handleEndRomoveCarChange} 
                                                dateFormat="วันที่ d MMMM พ.ศ.YYYY"
                                                locale="th"
                                                name="avg_check" 
                                                id="avg_check" />
                                            {/* <input type="datetime-local" className="form-control bg-blue-lv3 w-50" value={this.state.end_remove_car} onChange={this.handleEndRomoveCarChange} name="avg_check" id="avg_check" /> */}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <hr />
                    <div className="row">
                        <div className="col-lg-12">
                            
                        </div>
                    </div>
                    <br />
                    <div className="col-lg-12">
                        <center><button className="btn btn-primary">บันทึก (คพ.๔) </button></center>
                    </div>
                </form>
            </div>
        )
    }
}

export default EditFormFour