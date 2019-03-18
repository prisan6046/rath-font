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


class EditformThree extends Component{

    componentDidMount() {

        this.state.token = localStorage.getItem('token');
        axios.get(url+'/province').then(res => {
            this.setState({ data_province: res.data })
        })

        fetch(url+'/get_all_user?token=' + this.state.token)
            .then((Response) => Response.json())
            .then((res) => {
                this.setState({
                    data_user: res
                })
        })

        fetch(url+'/get_doc_id?id=' + this.props.id + "&token=" + this.state.token)
            .then((Response) => Response.json())
            .then((res) => {
                console.log(res)
                this.setState({
                    book_no: res['0']['book_no'],
                    order_no: res['0']['order_no'],
                    date_show : res['0']['date_check'],
                    location_check: res['0']['location_check'],
                    staff_check: res['0']['staff_check'],
                    staff_check_id: res['0']['staff_check_id'],
                    type_check: res['0']['type_check'],
                    val_check: res['0']['val_check'],
                    res_check: res['0']['res_check'],
                    date_not_allow: res['0']['date_not_allow'],
                    avg_type_car: res['0']['avg_type_car'],
                    avg_car_number: res['0']['avg_car_number'],
                    avg_car_brand: res['0']['avg_car_brand'],
                    avg_car_province: res['0']['avg_car_province'],
                    avg_car_color: res['0']['avg_car_color'],
                    avg_car_engine: res['0']['avg_car_engine'],
                    avg_car_type_engine: res['0']['avg_car_type_engine'],
                    avg_car_type_fuel: res['0']['avg_car_type_fuel'],
                    driver_title: res['0']['driver_title'],
                    driver_name: res['0']['driver_name'],
                    home_number: res['0']['home_number'],
                    home_code: res['0']['home_code'],
                    home_district: res['0']['home_district'],
                    home_subdistrict: res['0']['home_subdistrict'],
                    home_province: res['0']['home_province'],
                    home_tel: res['0']['home_tel'],
            })
            fetch(url+'/get_user_one?id=' + this.state.staff_check_id)
            .then((Response) => Response.json())
            .then((res) => {
               
                this.setState({
                    check_check_id : res['0']['point'],
                    res_check_id : res['0']['support']
                    // loading: true
                })
            })
        })
        

    }

    constructor() {
        super()
        this.handleSubmit = this.handleSubmit.bind(this);
        this.state = {
            data : [],
            data_user: [],
            data_province: [],
            book_no: '',
            order_no: '',
            date_show: '',
            location_check: '',
            staff_check: '',
            staff_check_id: '',
            check_check_id : '',
            res_check_id : '',
            type_check: '',
            val_check: '',
            res_check: '',
            date_not_allow: '',
            avg_type_car: '',
            avg_car_number: '',
            avg_car_brand: '',
            avg_car_province: '',
            avg_car_color: '',
            avg_car_engine: '',
            avg_car_type_engine: '',
            avg_car_type_fuel: '',
            driver_title: '',
            driver_name: '',
            home_number: '',
            home_code: '',
            home_district: '',
            home_subdistrict: '',
            home_province: '',
            home_tel: '',

            data: [],
            loading: false,

            // edit by first
            date_show: "" 
        }

        this.handleBookOnChange = this.handleBookOnChange.bind(this);
        this.handleOrderChange = this.handleOrderChange.bind(this);
        this.handleDateCheckChange = this.handleDateCheckChange.bind(this);
        this.handleLocationCheckChange = this.handleLocationCheckChange.bind(this);
        this.handleStaffCheckChange = this.handleStaffCheckChange.bind(this);
        this.handleTypeCheckChange = this.handleTypeCheckChange.bind(this);

        this.handleValCheckChange = this.handleValCheckChange.bind(this);
        this.handleResCheckChange = this.handleResCheckChange.bind(this);
        this.handleDateNotAllowChange = this.handleDateNotAllowChange.bind(this);

        this.handleTypeCarChange = this.handleTypeCarChange.bind(this);
        this.handleAvgCarProvinceChange = this.handleAvgCarProvinceChange.bind(this);
        this.handleAvgCarNumberChange = this.handleAvgCarNumberChange.bind(this);
        this.handleAvgCarColorChange = this.handleAvgCarColorChange.bind(this);
        this.handleAvgCarEngineChange = this.handleAvgCarEngineChange.bind(this);
        this.handleTypeCarEngineChange = this.handleTypeCarEngineChange.bind(this);
        this.handleTypeCarFuelChange = this.handleTypeCarFuelChange.bind(this);
        this.handleDriverNameChange = this.handleDriverNameChange.bind(this);
        this.handleHomeNumberChange = this.handleHomeNumberChange.bind(this);
        this.handleHomeSubdisChange = this.handleHomeSubdisChange.bind(this);
        this.handleHomeDistrictChange = this.handleHomeDistrictChange.bind(this);
        this.handleHomeProvinceChange = this.handleHomeProvinceChange.bind(this);
        this.handleHomeProvinceChange = this.handleHomeProvinceChange.bind(this);
        this.handleHomeTelChange = this.handleHomeTelChange.bind(this);
        this.handleAvgCarBandChange = this.handleAvgCarBandChange.bind(this)
        this.handleDriverTitleChange = this.handleDriverTitleChange.bind(this)
        this.handleHomeCodeChange = this.handleHomeCodeChange.bind(this)
        this.handleStaffCheckIdChange = this.handleStaffCheckIdChange.bind(this)

        // edit by first
        this.handleChangeDatePicker = this.handleChangeDatePicker.bind(this);
    }


    handleBookOnChange(e) {
        this.setState({
            book_no: e.target.value
        });
    }
    handleOrderChange(e) {
        this.setState({
            order_no: e.target.value
        });
    }
    handleDateCheckChange(e) {
        this.setState({
            date_check: e.target.value
        });
    }

    // edit by first
    handleChangeDatePicker = (date) => {        
        moment.locale('en');
        const year_th = YearThai(moment(date).format('YYYY'))
        const full_date_th = `${year_th}-${moment(date).format('MM-DD')}`;
        const date_format_en = moment(date).format('YYYY-MM-DD');
        this.setState({
            date_check: full_date_th,
            date_show: moment(full_date_th).format('YYYY-MM-DD')
        });
        // console.log("date_show....", this.state.date_check);
    }


    handleLocationCheckChange(e) {
        this.setState({
            location_check: e.target.value
        });
    }
    handleStaffCheckChange(e) {
        this.setState({
            staff_check: e.target.value
        });
    }

    handleTypeCheckChange(e) {
        this.setState({
            type_check: e.target.value
        });
    }


    handleValCheckChange(e) {
        this.setState({
            val_check: e.target.value
        });
    }
    handleResCheckChange(e) {
        this.setState({
            res_check: e.target.value
        });
    }

    handleDateNotAllowChange = (date) => {        
        moment.locale('en');
        const year_th = YearThai(moment(date).format('YYYY'))
        const full_date_th = `${year_th}-${moment(date).format('MM-DD')}`;
        const date_format_en = moment(date).format('YYYY-MM-DD');

        this.setState({
            date_not_allow : date_format_en,
            date_show: moment(date_format_en).format('YYYY-MM-DD')
        });
        // console.log("date_show....", this.state.date_check);
    }

    handleTypeCarChange(e) {
        this.setState({
            avg_type_car: e.target.value
        });
    }


    handleAvgCarNumberChange(e) {
        this.setState({
            avg_car_number: e.target.value
        })
    }

    handleAvgCarProvinceChange(e) {
        
        this.setState({
            avg_car_province: e.target.value
        });
    }
    handleAvgCarBandChange(e) {
        this.setState({
            avg_car_brand: e.target.value
        });
    }
    handleAvgCarColorChange(e) {
        this.setState({
            avg_car_color: e.target.value
        })
    }

    handleAvgCarEngineChange(e) {
        this.setState({
            avg_car_engine: e.target.value
        })
    }

    handleTypeCarEngineChange(e) {
        this.setState({
            avg_car_type_engine: e.target.value
        })
    }
    handleTypeCarFuelChange(e) {
        this.setState({
            avg_car_type_fuel: e.target.value
        })
    }
    handleDriverTitleChange(e) {
        this.setState({
            driver_title: e.target.value
        })
    }
    handleDriverNameChange(e) {
        this.setState({
            driver_name: e.target.value
        })
    }
    handleHomeNumberChange(e) {
        this.setState({
            home_number: e.target.value
        })
    }
    handleHomeSubdisChange(e) {
        this.setState({
            home_subdistrict: e.target.value
        })
    }
    handleHomeDistrictChange(e) {
        this.setState({
            home_district: e.target.value
        })
    }
    handleHomeProvinceChange(e) {
        this.setState({
            home_province: e.target.value
        })
    }
    handleHomeCodeChange(e) {
        this.setState({
            home_code: e.target.value
        })
    }
    handleHomeProvinceChange(e) {
        this.setState({
            home_province: e.target.value
        })
    }
    handleHomeTelChange(e) {
        this.setState({
            home_tel: e.target.value
        })
    }

    handleStaffCheckIdChange(e) {
        this.setState({
            staff_check_id: e.target.value,
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
        formData.append('book_no', this.state.book_no);
        formData.append('order_no', this.state.order_no)
        formData.append('date_check', this.state.date_check);
        formData.append('location_check', this.state.location_check);
        formData.append('staff_check', this.state.staff_check);
        formData.append('staff_check_id', this.state.staff_check_id);
        formData.append('type_check', this.state.type_check);
        formData.append('val_check', this.state.val_check);
        formData.append('res_check', this.state.res_check);
        formData.append('date_not_allow', this.state.date_not_allow);
        formData.append('avg_type_car', this.state.avg_type_car);
        formData.append('avg_car_number', this.state.avg_car_number);
        formData.append('avg_car_brand', this.state.avg_car_brand);
        formData.append('avg_car_province', this.state.avg_car_province);
        formData.append('avg_car_color', this.state.avg_car_color);
        formData.append('avg_car_engine', this.state.avg_car_engine);
        formData.append('avg_car_type_engine', this.state.avg_car_type_engine);
        formData.append('avg_car_type_fuel', this.state.avg_car_type_fuel);
        formData.append('driver_title', this.state.driver_title);
        formData.append('driver_name', this.state.driver_name);
        formData.append('home_number', this.state.home_number);
        formData.append('home_code', this.state.home_code);
        formData.append('home_district', this.state.home_district);
        formData.append('home_subdistrict', this.state.home_subdistrict);
        formData.append('home_province', this.state.home_province);
        formData.append('home_tel', this.state.home_tel);

        axios.post(url+'/updata_carForm_one', formData ).then(res => {
            localStorage.setItem('project_id', res.data.res_id);
            alert("บันทึกสำเร็จ")
            window.location.reload();

        }).catch((e)=>{
            alert("error" + e)
        })
    }



    render() {
        let list_province = []
        this.state.data_province.map((val, i) => {
            if(val.name_province == this.state.avg_car_province){
                return list_province.push(
                    <option key={i} value={val.name_province} selected>{val.name_province}</option>
                )
            }else{
                return list_province.push(
                    <option key={i} value={val.name_province}>{val.name_province}</option>
                )

            }
            
        })

        let list_user = []
        this.state.data_user.map((val, i) => {
            if(val._id.$oid == this.state.staff_check_id){
                return list_user.push(
                    <option key={i} value={val._id.$oid} selected>{val.name}</option>
                )
            }else{
                return list_user.push(
                    <option key={i} value={val._id.$oid}>{val.name}</option>
                )
            }
            
        })

        
        return (
            <div>
                <br />
                <div className="Corpor3Form">
                  
                    <form onSubmit={this.handleSubmit} >
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
                                                <input type="text" className="form-control bg-blue-lv3" value={this.state.book_no} onChange={this.handleBookOnChange} name="book_no" id="book_no" />
                                            </div>
                                        </div>

                                        <div className="row mb-2">
                                            <div className="col-lg-4 border-right">
                                                <label htmlFor="book_no" className="col-form-label">เลขที่</label>
                                            </div>
                                            <div className="col-lg-8">
                                                <input type="text" className="form-control bg-blue-lv3" value={this.state.order_no} onChange={this.handleOrderChange} name="book_no" id="book_no" />
                                            </div>
                                        </div>

                                        <div className="row mb-2">
                                            <div className="col-lg-4 border-right">
                                                <label htmlFor="date_check" className="col-form-label">วันที่ตรวจสอบ</label>
                                            </div>
                                            <div className="col-lg-8">
                                                {/* <input type="date" className="form-control bg-blue-lv3" value={this.state.date_show} onChange={this.handleDateCheckChange} name="date_check" id="date_check" /> */}                                                
                                                <DatePicker 
                                                selected={this.state.date_show} 
                                                onChange={this.handleChangeDatePicker} 
                                                dateFormat="วันที่ d MMMM พ.ศ.YYYY"
                                                locale="th"
                                                name="date_check" 
                                                id="date_check" />
                                                <br/>
                                                
                                            </div>
                                        </div>

                                        <div className="row mb-2">
                                            <div className="col-lg-4 border-right">
                                                <label htmlFor="location_check" className="col-form-label">สถานที่ตรวจสอบ</label>
                                            </div>
                                            <div className="col-lg-8">
                                                <input type="text" className="form-control bg-blue-lv3" value={this.state.location_check} onChange={this.handleLocationCheckChange} name="location_check" id="location_check" />
                                            </div>
                                        </div>

                                        <div className="row mb-2">
                                            <div className="col-lg-4 border-right">
                                                <label htmlFor="staff_check" className="col-form-label">เจ้าหน้าที่ผู้ตรวจสอบ</label>
                                            </div>
                                            <div className="col-lg-8">
                                                <input type="text" className="form-control bg-blue-lv3 mb-1" name="staff_check" id="staff_check" value={this.state.staff_check} onChange={this.handleStaffCheckChange} placeholder="นาย, นาง, นางสาว, ยศ" />
                                                <select name="select_staff_check" id="select_staff_check" onChange={this.handleStaffCheckIdChange} className="form-control bg-blue-lv3">
                                                    <option value=""></option>
                                                    {list_user}
                                                </select>
                                            </div>
                                        </div>

                                            <div>
                                                <div className="row mb-2">
                                                    <div className="col-lg-4 border-right">
                                                        <label htmlFor="position" className="col-form-label">ตำแหน่ง</label>
                                                    </div>
                                                    <div className="col-lg-8">
                                                        <input type="text" className="form-control bg-blue-lv3" name="position" id="position"  value={this.state.check_check_id}/>
                                                    </div>
                                                </div>

                                                <div className="row mb-2">
                                                    <div className="col-lg-4 border-right">
                                                        <label htmlFor="under" className="col-form-label">สังกัด</label>
                                                    </div>
                                                    <div className="col-lg-8">
                                                        <input type="text" className="form-control bg-blue-lv3" name="under" id="under" value={this.state.res_check_id} />
                                                    </div>
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
                                                <input type="radio" name="type_check" value="ควันดำ" defaultChecked={this.state.type_check == 'ควันดำ'} onChange={this.handleTypeCheckChange}  checked={this.state.type_check === "ควันดำ"} /> <label className="mb-0" htmlFor="1">ควันดำ</label> <br />
                                                <input type="radio" name="type_check" value="เสียงดัง" defaultChecked={this.state.type_check == 'เสียงดัง'} onChange={this.handleTypeCheckChange} checked={this.state.type_check === "เสียงดัง"} /> <label className="mb-0" htmlFor="2">เสียงดัง</label> <br />
                                                <input type="radio" name="type_check" value="ไฮโดรคาร์บอน" defaultChecked={this.state.type_check == 'ไฮโดรคาร์บอน'} onChange={this.handleTypeCheckChange} checked={this.state.type_check === "ไฮโดรคาร์บอน"} /> <label className="mb-0" htmlFor="3">ไฮโดรคาร์บอน</label> <br />
                                                <input type="radio" name="type_check" value="คาร์บอนไดออกไซด์" defaultChecked={this.state.type_check == 'คาร์บอนไดออกไซด์'} onChange={this.handleTypeCheckChange} checked={this.state.type_check === "คาร์บอนไดออกไซด์"} /> <label className="mb-0" htmlFor="4">คาร์บอนไดออกไซด์</label>
                                            </div>
                                        </div>

                                        <div className="row mb-2">
                                            <div className="col-lg-4 border-right">
                                                <label htmlFor="avg_check" className="col-form-label">ค่าที่วัดได้</label>
                                            </div>
                                            <div className="col-lg-8">
                                                <input type="text" className="form-control bg-blue-lv3" value={this.state.val_check} onChange={this.handleValCheckChange} name="avg_check" id="avg_check" />
                                            </div>
                                        </div>

                                        <div className="row mb-2">
                                            <div className="col-lg-4 border-right">
                                                <label htmlFor="type_check" className="col-form-label">ผลการตรวจสอบ</label>
                                            </div>
                                            <div className="col-lg-8">
                                                <input type="radio" name="type_check1" value="ห้ามใช้ยานพาหนะชั่วคราว" defaultChecked={this.state.res_check === 'ห้ามใช้ยานพาหนะชั่วคราว'} onChange={this.handleResCheckChange} checked={this.state.res_check === "ห้ามใช้ยานพาหนะชั่วคราว"}/> <label className="mb-0" htmlFor="1">ห้ามใช้ยานพาหนะชั่วคราว</label> <br />
                                                <input type="radio" name="type_check1" value="ห้ามใช้ยานพาหนะเด็ดขาด" defaultChecked={this.state.res_check === 'ห้ามใช้ยานพาหนะเด็ดขาด'} onChange={this.handleResCheckChange} checked={this.state.res_check === "ห้ามใช้ยานพาหนะเด็ดขาด"}/> <label className="mb-0" htmlFor="2">ห้ามใช้ยานพาหนะเด็ดขาด</label>
                                            </div>
                                        </div>

                                        <div className="row mb-2">
                                            <div className="col-lg-4 border-right">
                                                <label htmlFor="date_check" className="col-form-label">วันที่ห้ามใช้ยานพาหนะ</label>
                                            </div>
                                            <div className="col-lg-8">
                                            <DatePicker 
                                                selected={this.state.date_not_allow} 
                                                onChange={this.handleDateNotAllowChange} 
                                                dateFormat="วันที่ d MMMM พ.ศ.YYYY"
                                                locale="th"
                                                name="date_check" 
                                                id="date_check" />
                                                {/* <input type="date" className="form-control bg-blue-lv3" value={this.state.date_not_allow} onChange={this.handleDateNotAllowChange} name="date_check" id="date_check" /> */}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <hr />
                        <div className="row">
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
                                                    <input type="radio" name="type_check2" id="1" value="รถยนต์" defaultChecked={this.state.avg_type_car === 'รถยนต์'} onChange={this.handleTypeCarChange} checked={this.state.avg_type_car === "รถยนต์"} /> <label className="mb-0" htmlFor="1">รถยนต์</label> <br />
                                                    <input type="radio" name="type_check2" id="2" value="รถยนต์สามล้อใช้งาน" defaultChecked={this.state.avg_type_car === 'รถยนต์สามล้อใช้งาน'} onChange={this.handleTypeCarChange} checked={this.state.avg_type_car === "รถยนต์สามล้อใช้งาน"} /> <label className="mb-0" htmlFor="2">รถยนต์สามล้อใช้งาน</label> <br />
                                                    <input type="radio" name="type_check2" id="3" value="รถจักรยานยนต์" defaultChecked={this.state.avg_type_car === 'รถจักรยานยนต์'} onChange={this.handleTypeCarChange} checked={this.state.avg_type_car === "รถจักรยานยนต์"} /> <label className="mb-0" htmlFor="3">รถจักรยานยนต์</label> <br />
                                                    <input type="radio" name="type_check2" id="4" value="เรือ" defaultChecked={this.state.avg_type_car === 'เรือ'} onChange={this.handleTypeCarChange} checked={this.state.avg_type_car === "เรือ"} /> <label className="mb-0" htmlFor="4">เรือ</label>
                                                </div>
                                            </div>

                                            <div className="row mb-2">
                                                <div className="col-lg-3 border-right">
                                                    <label htmlFor="avg_check" className="col-form-label text-danger">ทะเบียนรถ</label>
                                                </div>
                                                <div className="col-lg-9">
                                                    <input type="text" className="form-control bg-blue-lv3 w-50" value={this.state.avg_car_number} onChange={this.handleAvgCarNumberChange} name="avg_check" id="avg_check" placeholder="กก1234" />
                                                </div>
                                            </div>

                                            <div className="row mb-2">
                                                <div className="col-lg-3 border-right">
                                                    <label htmlFor="avg_check" className="col-form-label">ทะเบียนรถจังหวัด</label>
                                                </div>
                                                <div className="col-lg-9">
                                                    <select className="form-control bg-blue-lv3 w-50" onChange={this.handleAvgCarProvinceChange} name="avg_check" id="avg_check">
                                                    <option value=""></option>
                                                        {
                                                            list_province
                                                        }
                                                    </select>
                                                </div>
                                            </div>

                                            <div className="row mb-2">
                                                <div className="col-lg-3 border-right">
                                                    <label htmlFor="avg_check" className="col-form-label text-danger">ยี่ห้อยานพาหนะ</label>
                                                </div>
                                                <div className="col-lg-9">
                                                    <select className="form-control bg-blue-lv3 w-50" onChange={this.handleAvgCarBandChange} name="avg_check" id="avg_check">
                                                        <option value=""></option>
                                                        <option value="Honda" selected={this.state.avg_car_brand == 'Honda'}>Honda</option>
                                                        <option value="Toyota" selected={this.state.avg_car_brand == 'Toyota'}>Toyota</option>
                                                        <option value="Misubishi" selected={this.state.avg_car_brand == 'Misubishi'}>Misubishi</option>
                                                        <option value="Nissan" selected={this.state.avg_car_brand == 'Nissan'}>Nissan</option>
                                                        <option value="Mazda" selected={this.state.avg_car_brand == 'Mazda'}>Mazda</option>
                                                        <option value="Chevtolet" selected={this.state.avg_car_brand == 'Chevtolet'}>Chevtolet</option>
                                                        <option value="Bmw" selected={this.state.avg_car_brand == 'Bmw'}>Bmw</option>
                                                        <option value="Benz" selected={this.state.avg_car_brand == 'Benz'}>Benz</option>
                                                        <option value="Ford" selected={this.state.avg_car_brand == 'Ford'}>Ford</option>
                                                        <option value="Volvo Band" selected={this.state.avg_car_brand == 'Volvo Band'}>Volvo Band</option>
                                                    </select>
                                                </div>
                                            </div>

                                            <div className="row mb-2">
                                                <div className="col-lg-3 border-right">
                                                    <label htmlFor="avg_check" className="col-form-label">สี</label>
                                                </div>
                                                <div className="col-lg-9">
                                                    <input type="text" className="form-control bg-blue-lv3 w-50" value={this.state.avg_car_color} onChange={this.handleAvgCarColorChange} name="avg_check" id="avg_check" placeholder="กก1234" />
                                                </div>
                                            </div>

                                            <div className="row mb-2">
                                                <div className="col-lg-3 border-right">
                                                    <label htmlFor="avg_check" className="col-form-label">ยี่ห้อเครื่องยนต์</label>
                                                </div>
                                                <div className="col-lg-9">
                                                    <select className="form-control bg-blue-lv3 w-50" onChange={this.handleAvgCarEngineChange} name="avg_check" id="avg_check">
                                                        <option value=""></option>
                                                        <option value="Honda" selected={this.state.avg_car_engine == 'Honda'} >Honda</option>
                                                        <option value="Toyota" selected={this.state.avg_car_engine == 'Toyota'}>Toyota</option>
                                                        <option value="Misubishi" selected={this.state.avg_car_engine == 'Misubishi'} >Misubishi</option>
                                                        <option value="Nissan"selected={this.state.avg_car_engine == 'Nissan'}>Nissan</option>
                                                        <option value="Mazda" selected={this.state.avg_car_engine == 'Mazda'}>Mazda</option>
                                                        <option value="Chevtolet" selected={this.state.avg_car_engine == 'Chevtolet'}>Chevtolet</option>
                                                        <option value="Bmw" selected={this.state.avg_car_engine == 'Bmw'}>Bmw</option>
                                                        <option value="Benz" selected={this.state.avg_car_engine == 'Benz'}>Benz</option>
                                                        <option value="Ford" selected={this.state.avg_car_engine == 'Ford'}>Ford</option>
                                                        <option value="Volvo Band" selected={this.state.avg_car_engine == 'Volvo Band'}>Volvo Band</option>
                                                    </select>
                                                </div>
                                            </div>

                                            <div className="row mb-2">
                                                <div className="col-lg-3 border-right">
                                                    <label htmlFor="type_check" className="col-form-label">ประเภทเครื่องยนต์</label>
                                                </div>
                                                <div className="col-lg-9">
                                                    <input type="radio" name="type_check3" id="1" value="น้ำมันดีเซล" defaultChecked={this.state.avg_car_type_engine === 'น้ำมันดีเซล'} onChange={this.handleTypeCarEngineChange} checked={this.state.avg_car_type_engine === "น้ำมันดีเซล"} /> <label className="mb-0" htmlFor="1">น้ำมันดีเซล</label> <br />
                                                    <input type="radio" name="type_check3" id="2" value="น้ำมันเบนซิน" defaultChecked={this.state.avg_car_type_engine === 'น้ำมันเบนซิน'} onChange={this.handleTypeCarEngineChange} checked={this.state.avg_car_type_engine === "น้ำมันเบนซิน"} /> <label className="mb-0" htmlFor="2">น้ำมันเบนซิน</label> <br />
                                                    <input type="radio" name="type_check3" id="3" value="ไฟฟ้า" defaultChecked={this.state.avg_car_type_engine === 'ไฟฟ้า'} onChange={this.handleTypeCarEngineChange} checked={this.state.avg_car_type_engine === "ไฟฟ้า"} /> <label className="mb-0" htmlFor="3">ไฟฟ้า</label> <br />
                                                    <input type="radio" name="type_check3" id="4" value="ไฮบริด" defaultChecked={this.state.avg_car_type_engine === 'ไฮบริด'} onChange={this.handleTypeCarEngineChange} checked={this.state.avg_car_type_engine === "ไฮบริด"} /> <label className="mb-0" htmlFor="4">ไฮบริด</label>
                                                </div>
                                            </div>

                                            <div className="row mb-2">
                                                <div className="col-lg-3 border-right">
                                                    <label htmlFor="type_check" className="col-form-label">ประเภทเชื้อเพลิง</label>
                                                </div>
                                                <div className="col-lg-9">
                                                    <input type="radio" name="type_check4" id="1" value="น้ำมันดีเซล" defaultChecked={this.state.avg_car_type_fuel === 'น้ำมันดีเซล'} onChange={this.handleTypeCarFuelChange} checked={this.state.avg_car_type_fuel === "น้ำมันดีเซล"} /> <label className="mb-0" htmlFor="1">น้ำมันดีเซล</label> <br />
                                                    <input type="radio" name="type_check4" id="2" value="น้ำมันเบนซิน" defaultChecked={this.state.avg_car_type_fuel === 'น้ำมันเบนซิน'} onChange={this.handleTypeCarFuelChange} checked={this.state.avg_car_type_fuel === "น้ำมันเบนซิน"} /> <label className="mb-0" htmlFor="2">น้ำมันเบนซิน</label> <br />
                                                    <input type="radio" name="type_check4" id="2" value="ก๊าซธรรมชาติ" defaultChecked={this.state.avg_car_type_fuel === 'ก๊าซธรรมชาติ'} onChange={this.handleTypeCarFuelChange} checked={this.state.avg_car_type_fuel === "ก๊าซธรรมชาติ"} /> <label className="mb-0" htmlFor="2">ก๊าซธรรมชาติ</label> <br />
                                                    <input type="radio" name="type_check4" id="3" value="ไฟฟ้า" defaultChecked={this.state.avg_car_type_fuel === 'ไฟฟ้า'} onChange={this.handleTypeCarFuelChange} checked={this.state.avg_car_type_fuel === "ไฟฟ้า"} /> <label className="mb-0" htmlFor="3">ไฟฟ้า</label> <br />
                                                    <input type="radio" name="type_check4" id="4" value="ไฮบริด" defaultChecked={this.state.avg_car_type_fuel === 'ไฮบริด'} onChange={this.handleTypeCarFuelChange} checked={this.state.avg_car_type_fuel === "ไฮบริด"} /> <label className="mb-0" htmlFor="4">ไฮบริด</label>
                                                </div>
                                            </div>

                                            <div className="row mb-2">
                                                <div className="col-lg-3 border-right">
                                                    <label htmlFor="staff_check" className="col-form-label">ผู้ขับ</label>
                                                </div>
                                                <div className="col-lg-9">
                                                    <input type="text" className="form-control bg-blue-lv3 mb-1 w-50" name="driver_title" value={this.state.driver_title} onChange={this.handleDriverTitleChange} id="staff_check" placeholder="นาย, นาง, นางสาว, ยศ" />
                                                    <input type="text" className="form-control bg-blue-lv3 mb-1 w-50" name="driver_name" value={this.state.driver_name} onChange={this.handleDriverNameChange} id="staff_check" placeholder="ชื่อและนามสกุล" />
                                                </div>
                                            </div>

                                            <div className="row mb-2">
                                                <div className="col-lg-3 border-right">
                                                    <label htmlFor="staff_check" className="col-form-label">ที่อยู่</label>
                                                </div>
                                                <div className="col-lg-9">
                                                    <input type="text" className="form-control bg-blue-lv3 mb-1 w-50" name="home_number" value={this.state.home_number} onChange={this.handleHomeNumberChange} id="staff_check" placeholder="บ้านเลขที่/หมู่" />
                                                    <input type="text" className="form-control bg-blue-lv3 mb-1 w-50" name="home_subdistrict" value={this.state.home_subdistrict} onChange={this.handleHomeSubdisChange} id="staff_check" placeholder="แขวง/ตำบล" />
                                                    <input type="text" className="form-control bg-blue-lv3 mb-1 w-50" name="home_district" value={this.state.home_district} onChange={this.handleHomeDistrictChange} id="staff_check" placeholder="เขต/อำเภอ" />
                                                    <input type="text" className="form-control bg-blue-lv3 mb-1 w-50" name="home_code" value={this.state.home_code} onChange={this.handleHomeCodeChange} id="staff_check" placeholder="รหัสไปรษณีย์" />
                                                    <select name="select_staff_check" id="select_staff_check" onChange={this.handleHomeProvinceChange} className="form-control bg-blue-lv3 w-50">
                                                    <option value=""></option>
                                                        {
                                                            list_province
                                                        }

                                                    </select>
                                                </div>
                                            </div>

                                            <div className="row mb-2">
                                                <div className="col-lg-3 border-right">
                                                    <label htmlFor="staff_check" className="col-form-label">เบอร์ติดต่อ</label>
                                                </div>
                                                <div className="col-lg-9">
                                                    <input type="text" value={this.state.home_tel} onChange={this.handleHomeTelChange} className="form-control bg-blue-lv3 mb-1 w-50" name="staff_check" id="staff_check" />
                                                </div>
                                            </div>

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <br />
                        <div className="col-lg-12">
                            <center><button className="btn btn-primary">บันทึก (คพ.๓)</button></center>
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}

export default EditformThree