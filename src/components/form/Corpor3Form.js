import React, { Component } from 'react'
import axios from 'axios';
import store from '../../store/index';
import { url } from '../../parameter/index';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import moment from 'moment';
import { DateThai, YearThai } from '../libraries/DateThai';
import 'moment/locale/th';
import { registerLocale, setDefaultLocale } from 'react-datepicker';
import th from 'date-fns/locale/th';
import  {Str_date} from '../libraries/DateThai'
registerLocale('th', th);


class Corpor3Form extends Component {

    str_aaa(e){
        return Str_date(e)
    }


    // componentDidUpdate(prevProps, prevState){
    //     fetch(url+'/province?token=' + this.state.token)
    //         .then((Response) => Response.json())
    //         .then((res) => {
    //             console.log(res)
    //             this.setState({
    //                 data_province : res
    //             })
    //         })

    // }

   
    componentDidMount() {


       


        // this.setState({
            // date_show : now , 
            // date_check : now ,
            // date_not_allow : now
        // })
        

        

        this.state.token = localStorage.getItem('token');
        axios.get(url + '/province').then(res => {
            console.log("provine : " + res)
            this.setState({ 
                data_province: res.data })
        })


        axios.get(url + '/get_date_now').then(res => {
          

             this.setState({
            date_show : res.data.date , 
            date_check :  res.data.date ,
            date_not_allow : res.data.date
        })
            
    
        })


        

        fetch(url + '/get_all_user?token=' + this.state.token + "")
            .then((Response) => Response.json())
            .then((res) => {
                console.log("get_all_user : "+res)
                this.setState({
                    data_user: res,
                    check_user: true
                })
            }).catch(function (error) {
                console.log("error : " + error)
            });
        fetch(url + '/get_car?token=' + this.state.token)
            .then((Response) => Response.json())
            .then((res) => {
                this.setState({
                    data_car: res,
                    avg_car_brand_starus: true,
                    loading: true
                })
            }).catch(function (error) {
               console.log("error : " + error)
            });

            

    }

    constructor() {
        super()
        this.handleSubmit = this.handleSubmit.bind(this);
        this.state = {
            data_user: [],
            under_name: '',
            under_point: '',
            under_support: '',
            data_province: [],
            data_car: [],
            book_no: '',
            order_no: '',
            date_check: '',
            location_check: '',
            staff_check: '',
            staff_check_id: '',
            type_check: '',
            val_check: '',
            res_check: '',
            date_not_allow: '',
            avg_type_car: '',
            avg_car_number: '',
            avg_car_brand: '',
            avg_car_brand_starus: false,
            add_avg_car_brand: '',
            avg_car_province: '',
            avg_car_color: '',
            avg_car_engine: '',
            avg_car_type_engine: '',
            avg_car_type_fuel: '',
            driver_title: '',
            driver_name: '',
            home_number: '',
            home_code: '-',
            home_district: '',
            home_subdistrict: '',
            home_province: '',
            home_tel: '',
            time: '',
            check_button: false,
            data: [],
            loading: false,
            check_user: '',
            data_under: [],

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
        this.handleAddUnder = this.handleAddUnder.bind(this)
        this.handleAddUnderName = this.handleAddUnderName.bind(this)
        this.handleAddUnderPoint = this.handleAddUnderPoint.bind(this)

        // edit by first
        this.handleChangeDatePicker = this.handleChangeDatePicker.bind(this);
        this.handleAddCar = this.handleAddCar.bind(this)
    }


    handleBookOnChange(e) {
        this.setState({
            book_no: e.target.value
        });
    }
    handleOrderChange(e) {
        console.log(e.target.value)
        if ((parseInt(e.target.value) > 0) && (parseInt(e.target.value) <= 100)) {
            this.setState({
                order_no: e.target.value
            });
        } else {

            this.setState({
                order_no: ''
            });
        }

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
            date_not_allow: full_date_th,
            date_show: moment(full_date_th).format('YYYY-MM-DD')
        });
    }

    handleAddCar(e) {
        this.setState({
            add_avg_car_brand : e.target.value
        });
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

        if (this.state.type_check == "ควันดำ"){
            if ((parseInt(e.target.value) > 0) && (parseInt(e.target.value) <= 100)) {
                this.setState({
                    val_check: e.target.value
                });
            } else {
    
                this.setState({
                    val_check: ''
                });
            }
        }
        else if(this.state.type_check == "เสียงดัง"){
            if ((parseInt(e.target.value) > 0) && (parseInt(e.target.value) <= 130)) {
                this.setState({
                    val_check: e.target.value
                });
            } else {
    
                this.setState({
                    val_check: ''
                });
            }
        }else{
            this.setState({
                val_check: e.target.value
            });
        }
        

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
            date_show: moment(date_format_en).format('YYYY-MM-DD')
        });
        // console.log("date_show....", this.state.date_check);
    }

    handleDateTimeNotAllowChange = (date) => {
        moment.locale('en');
        const year_th = YearThai(moment(date).format('YYYY'))
        const full_date_th = `${year_th}-${moment(date).format('MM-DD')}`;

        this.setState({
            date_not_allow: full_date_th,
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

        if (e.target.value == 'add') {
            this.setState({
                avg_car_brand_starus: false
            })
            return;
        }

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

        if (e.target.value == 'add') {
            this.setState({
                avg_car_brand_starus: false
            })
            return;
        }




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


    handleAddUnder(e) {

        this.setState({
            under_support: e.target.value
        })
    }
    handleAddUnderName(e) {

        this.setState({
            under_name: e.target.value
        })
    }
    handleAddUnderPoint(e) {

        this.setState({
            under_point: e.target.value
        })
    }

    handleStaffCheckIdChange(e) {

        if (e.target.value == 'add') {
            this.setState({

                check_user: false

            })
            fetch(url + '/get_under?token=' + this.state.token)
                .then((Response) => Response.json())
                .then((res) => {

                    this.setState({
                        data_under: res
                    })
                }).catch((e) => {

                })
            return;
        }

        this.setState({
            staff_check_id: e.target.value,
            loading: false

        })
        if (e.target.value != '') {
            fetch(url + '/get_user_one?id=' + e.target.value)
                .then((Response) => Response.json())
                .then((res) => {
                    this.setState({
                        data: res,
                        loading: true
                    })
                })

        }
    }

    EndUnder(){
        this.setState({
            check_user: true
        })
    }

    SaveUnder() {

        var formData = new FormData();
        formData.append('name', this.state.under_name);
        formData.append('point', this.state.under_point)
        formData.append('support', this.state.under_support);

        axios.post(url + '/authRegisterCustomer', formData).then(res => {

            fetch(url + '/get_all_user?token=' + this.state.token + "")
                .then((Response) => Response.json())
                .then((res) => {
                    this.setState({
                        data_user: res,
                        check_user: true
                    })
                }).catch(function () {

                });
            this.setState({ under_name: '' })
            this.setState({ under_point: '' })
            this.setState({ under_support: '' })
        })

    }




    adddBrand(){
        this.setState({
            avg_car_brand_starus : false
        })
        var formData = new FormData();
        formData.append('name_car', this.state.add_avg_car_brand);
        
        axios.post(url+'/add_car', formData).then(res => {
            fetch(url + '/get_car?token=' + this.state.token)
            .then((Response) => Response.json())
            .then((res) => {
                this.setState({
                    data_car: res,
                    avg_car_brand_starus: true,
                    loading: true
                })
            })

           
        })
    }

    handleSubmit(event) {
        event.preventDefault();
        var formData = new FormData();

        if (this.state.book_no === '') { alert("กรุณากรอกข้อมูลให้ครบ"); console.log('book_no'); return; }
        if (this.state.order_no === '') { alert("กรุณากรอกข้อมูลให้ครบ"); console.log('order_no'); return; }
        if (this.state.date_check === '') { alert("กรุณากรอกข้อมูลให้ครบ");console.log('date_check'); return; }
        if (this.state.location_check === '') { alert("กรุณากรอกข้อมูลให้ครบ");console.log('location_check'); return; }
        if (this.state.staff_check === '') { alert("กรุณากรอกข้อมูลให้ครบ"); console.log('staff_check');return; }
        if (this.state.staff_check_id === '') { alert("กรุณากรอกข้อมูลให้ครบ");console.log('staff_check_id'); return; }
        if (this.state.type_check === '') { alert("กรุณากรอกข้อมูลให้ครบ");console.log('type_check'); return; }

        if (this.state.val_check === '') { alert("กรุณากรอกข้อมูลให้ครบ");console.log('val_check'); return; }
        if (this.state.res_check === '') { alert("กรุณากรอกข้อมูลให้ครบ"); console.log('res_check');return; }
        if (this.state.date_not_allow === '') { alert("กรุณากรอกข้อมูลให้ครบ");console.log('date_not_allow'); return; }
        if (this.state.avg_type_car === '') { alert("กรุณากรอกข้อมูลให้ครบ");console.log('avg_type_car'); return; }
        if (this.state.avg_car_number === '') { alert("กรุณากรอกข้อมูลให้ครบ"); console.log('avg_car_number');return; }
        if (this.state.avg_car_brand === '') { alert("กรุณากรอกข้อมูลให้ครบ");console.log('avg_car_brand'); return; }
        if (this.state.avg_car_province === '') { alert("กรุณากรอกข้อมูลให้ครบ"); console.log('avg_car_province');return; }

        if (this.state.avg_car_color === '') { alert("กรุณากรอกข้อมูลให้ครบ"); console.log('avg_car_color');return; }
        if (this.state.avg_car_engine === '') { alert("กรุณากรอกข้อมูลให้ครบ"); console.log('avg_car_engine');return; }
        if (this.state.avg_car_type_engine === '') { alert("กรุณากรอกข้อมูลให้ครบ");console.log('avg_car_type_engine'); return; }
        if (this.state.avg_car_type_fuel === '') { alert("กรุณากรอกข้อมูลให้ครบ");console.log('avg_car_type_fuel'); return; }

        // if (this.state.driver_title === '') { alert("กรุณากรอกข้อมูลให่ครบ"); return; }
        if (this.state.driver_name === '') { alert("กรุณากรอกข้อมูลให้ครบ");console.log('driver_name'); return; }
        if (this.state.home_number === '') { alert("กรุณากรอกข้อมูลให้ครบ"); console.log('home_number');return; }
        // if (this.state.home_code === '') { alert("กรุณากรอกข้อมูลให่ครบ"); return; }


        if (this.state.home_district === '') { alert("กรุณากรอกข้อมูลให้ครบ"); console.log('home_district');return; }
        if (this.state.home_subdistrict === '') { alert("กรุณากรอกข้อมูลให้ครบ"); console.log('home_subdistrict');return; }
        if (this.state.home_province === '') { alert("กรุณากรอกข้อมูลให้ครบ");console.log('home_province'); return; }
        if (this.state.home_tel === '') { alert("กรุณากรอกข้อมูลให้ครบ");console.log('home_tel'); return; }


        // console.log(this.state)


        if (window.confirm("คุณต้องการที่จะบันทึกหรือไม่")) {




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

            axios.post(url + '/carForm_one', formData, {
                onUploadProgress: ProgressEvent => {
                    this.setState({ loaded: 'upload' })
                },
            }).then(res => {
                console.log(res)

                
            if(res.data.status == 403){
                    alert("เนื่องจาก  "+this.state.avg_car_number +" มีอยู่ในระบบ กรุณาแก้ไขใหม่")
                    return ;
                }else{
                    // alert("ท่านได้ลงทะเบียนสำเร็จแล้ว กรุณารอการยืนยันจากผู้ดูแลระบบ เพื่อใช้งานอย่างถูกต้อง")
                    localStorage.setItem('project_id', res.data.res_id);
                    alert("คุณได้บันทึกแบบ คพ.3 เล่มที่ " + this.state.book_no + " เลขที่ " + this.state.order_no + " เรียบร้อยแล้ว")
                    window.location.reload();
                }
                
                // window.location.reload();


            })
        }
    }



    render() {
        let list_province = []
        this.state.data_province.map((val, i) => {
            return list_province.push(
                <option key={i} value={val.name_province}>{val.name_province}</option>
            )
        })

        let list_user = []
        this.state.data_user.map((val, i) => {
            return list_user.push(
                <option key={i} value={val._id.$oid}>{val.name}</option>
            )
        })

        let list_car = []
        this.state.data_car.map((val, i) => {
            return list_car.push(
                <option key={i} value={val.name_car}>{val.name_car}</option>
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


        let list_under = []
        this.state.data_under.map((val, i) => {
            return list_under.push(
                <option key={i} value={val.name}>{val.name}</option>
            )
        })

        return (
            <div>
                <div className="Corpor3Form">
                    <br />
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
                                                <label htmlFor="book_no" className="col-form-label" >เลขที่</label>
                                            </div>
                                            <div className="col-lg-8">
                                                <input className="form-control bg-blue-lv3" type="text" value={this.state.order_no} onChange={this.handleOrderChange} name="book_no" id="book_no" />
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
                                                <br />

                                                {/* <DatePicker 
                                                selected={this.state.date_show} 
                                                dateFormat="วันที่ d MMMM พ.ศ.YYYY"
                                                locale="th"
                                                name="" 
                                                id=""
                                                showTimeSelect
                                                dateFormat="MMMM d, yyyy h:mm aa"
                                                timeFormat="HH:mm"/> */}
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
                                                <label htmlFor="location_check" className="col-form-label">จังหวัดที่ออกคำสั่ง</label>
                                            </div>
                                            <div className="col-lg-8">
                                            {/* <input type="text" className="form-control bg-blue-lv3 mb-1" name="staff_check" id="staff_check" value={this.state.staff_check} onChange={this.handleStaffCheckChange} placeholder="นาย, นาง, นางสาว, ยศ" /> */}
                                            <select className="form-control bg-blue-lv3" onChange={this.handleStaffCheckChange} name="avg_check" id="avg_check">
                                                        <option value=""></option>
                                                        {
                                                            list_province
                                                        }
                                                    </select>
                                            
                                            </div>
                                        </div>

                                        {this.state.check_user == true ?
                                            <div className="row mb-2">
                                                <div className="col-lg-4 border-right">
                                                    <label htmlFor="staff_check" className="col-form-label">เจ้าหน้าที่ผู้ตรวจสอบ</label>
                                                </div>

                                                <div className="col-lg-8">
                                            
                                                    <select name="select_staff_check" id="select_staff_check" onChange={this.handleStaffCheckIdChange} className="form-control bg-blue-lv3">
                                                        <option value=""></option>
                                                        <option value="add">เพิ่มข้อมูล</option>
                                                        {list_user}

                                                    </select>
                                                </div>
                                            </div>
                                            : this.state.check_user == false ?
                                                <div>
                                                    <div className="row mb-2">
                                                        <div className="col-lg-4 border-right">
                                                            <label htmlFor="position" className="col-form-label">ผู้ออกคำสั่ง</label>
                                                        </div>
                                                        <div className="col-lg-8">
                                                            <input type="text" className="form-control bg-blue-lv3" name="position" id="position" value={this.state.under_name} onChange={this.handleAddUnderName} />
                                                        </div>
                                                    </div>
                                                    <div className="row mb-2">
                                                        <div className="col-lg-4 border-right">
                                                            <label htmlFor="position" className="col-form-label">ตำแหน่ง</label>
                                                        </div>
                                                        <div className="col-lg-8">
                                                            <input type="text" className="form-control bg-blue-lv3" name="position" id="position" value={this.state.under_point} onChange={this.handleAddUnderPoint} />
                                                        </div>
                                                    </div>

                                                    <div className="row mb-2">
                                                        <div className="col-lg-4 border-right">
                                                            <label htmlFor="under" className="col-form-label">สังกัด</label>
                                                        </div>
                                                        <div className="col-lg-8">
                                                            <select className="form-control bg-blue-lv3" name="avg_check" id="avg_check" onChange={this.handleAddUnder} >
                                                                <option value=""></option>
                                                                {
                                                                    list_under
                                                                }
                                                            </select>
                                                        </div>
                                                    </div>
                                                    <div className="row mb-2">
                                                        <div className="col-lg-4 border-right">
                                                            <label htmlFor="under" className="col-form-label"></label>
                                                        </div>
                                                        <div className="col-lg-8">
                                                            <center><input type="button" value="บันทึก" className="btn btn-primary" onClick={() => { this.SaveUnder() }} /><input type="button" class="btn btn-danger" value="ยกเลิก" onClick={() => { this.EndUnder() }} /></center>
                                                           
                                                        </div>
                                                    </div>
                                                </div>
                                                : ''
                                        }



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
                                    <div className="card-header bg-primary text-white">ผลการตรวจสอบ</div>
                                    <div className="card-body">
                                        <div className="row mb-2">
                                            <div className="col-lg-4 border-right">
                                                <label htmlFor="type_check" className="col-form-label">ประเภทการตรวจ</label>
                                            </div>
                                            <div className="col-lg-8">
                                                <input type="radio" name="type_check" value="ควันดำ" defaultChecked={this.state.type_check === 'ควันดำ'} onChange={this.handleTypeCheckChange} /> <label className="mb-0" htmlFor="1">ควันดำ</label> <br />
                                                <input type="radio" name="type_check" value="เสียงดัง" defaultChecked={this.state.type_check === 'เสียงดัง'} onChange={this.handleTypeCheckChange} /> <label className="mb-0" htmlFor="2">เสียงดัง</label> <br />
                                                <input type="radio" name="type_check" value="ไฮโดรคาร์บอน" defaultChecked={this.state.type_check === 'ไฮโดรคาร์บอน'} onChange={this.handleTypeCheckChange} /> <label className="mb-0" htmlFor="3">ไฮโดรคาร์บอน</label> <br />
                                                <input type="radio" name="type_check" value="คาร์บอนไดออกไซด์" defaultChecked={this.state.type_check === 'คาร์บอนไดออกไซด์'} onChange={this.handleTypeCheckChange} /> <label className="mb-0" htmlFor="4">คาร์บอนไดออกไซด์</label>
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
                                                <input type="radio" name="type_check1" value="ห้ามใช้ยานพาหนะชั่วคราว" defaultChecked={this.state.res_check === 'ห้ามใช้ยานพาหนะชั่วคราว'} onChange={this.handleResCheckChange} /> <label className="mb-0 colorBGText" htmlFor="1">ห้ามใช้ยานพาหนะชั่วคราว</label> <br />
                                                <input type="radio" name="type_check1" value="ห้ามใช้ยานพาหนะเด็ดขาด" defaultChecked={this.state.res_check === 'ห้ามใช้ยานพาหนะเด็ดขาด'} onChange={this.handleResCheckChange} /> <label className="mb-0 colorBGTextRd" htmlFor="2">ห้ามใช้ยานพาหนะเด็ดขาด</label>
                                            </div>
                                        </div>

                                        <div className="row mb-2">
                                            <div className="col-lg-4 border-right">
                                                <label htmlFor="date_check" className="col-form-label">วันที่ห้ามใช้ยานพาหนะ</label>
                                            </div>
                                            <div className="col-lg-8">
                                                <DatePicker
                                                    selected={this.state.date_not_allow}

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
                                                    <input type="radio" name="type_check2" id="1" value="รถยนต์" defaultChecked={this.state.type_car === 'รถยนต์'} onChange={this.handleTypeCarChange} /> <label className="mb-0" htmlFor="1">รถยนต์</label> <br />
                                                    <input type="radio" name="type_check2" id="2" value="รถยนต์สามล้อใช้งาน" defaultChecked={this.state.type_car === 'รถยนต์สามล้อใช้งาน'} onChange={this.handleTypeCarChange} /> <label className="mb-0" htmlFor="2">รถยนต์สามล้อใช้งาน</label> <br />
                                                    <input type="radio" name="type_check2" id="3" value="รถจักรยานยนต์" defaultChecked={this.state.type_car === 'รถจักรยานยนต์'} onChange={this.handleTypeCarChange} /> <label className="mb-0" htmlFor="3">รถจักรยานยนต์</label> <br />
                                                    <input type="radio" name="type_check2" id="4" value="เรือ" defaultChecked={this.state.type_car === 'เรือ'} onChange={this.handleTypeCarChange} /> <label className="mb-0" htmlFor="4">เรือ</label>
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
                                                    { this.state.avg_car_brand_starus == true?
                                                    <select className="form-control bg-blue-lv3 w-50" onChange={this.handleAvgCarBandChange} name="avg_check" id="avg_check">
                                                    <option value=""></option>

                                                    {
                                                        list_car
                                                    }
                                                </select>:''    
                                                }
                                                    
                                                    
                                                </div>
                                                

                                                <div id="myModal3" class="modal fade" role="dialog">
                                                    <div class="modal-dialog">


                                                        <div class="modal-content">
                                                            <div class="modal-header">
            
                                                                <h4 class="modal-title">เพิ่มยี่ห้อยานพาหนะ และ เครื่องยนต์</h4>
                                                            </div>
                                                            <div class="modal-body">
                                                            <div className="row mb-2">
                                                                <div className="col-lg-3 border-right">
                                                                    <label htmlFor="avg_check" className="col-form-label">ชื่อ</label>
                                                                </div>
                                                                <div className="col-lg-9">
                                                                    <input type="text" className="form-control bg-blue-lv3" value={this.state.add_avg_car_brand} onChange={this.handleAddCar} name="avg_check" id="avg_check" />
                                                                </div>
                                                            </div>

                                                            </div>
                                                            <div class="modal-footer">
                                                            <button type="button" class="btn btn-success" data-dismiss="modal" onClick={()=>{this.adddBrand()}}>บันทึก</button>
                                                                <button type="button" class="btn btn-danger" data-dismiss="modal">ปิด</button>
                                                            </div>
                                                        </div>

                                                    </div>
                                                </div>


                                            </div>

                                            <div className="row mb-2">
                                                <div className="col-lg-3 border-right">
                                                    <label htmlFor="avg_check" className="col-form-label">ยี่ห้อเครื่องยนต์</label>
                                                </div>
                                                <div className="col-lg-9">
                                                { this.state.avg_car_brand_starus == true?
                                                    <select className="form-control bg-blue-lv3 w-50" onChange={this.handleAvgCarEngineChange} name="avg_check" id="avg_check">
                                                        <option value=""></option>
                                                     
                                                        {
                                                            list_car
                                                        }
                                                    </select>:''
                                                }
                                                    <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#myModal3">เพิ่มยี่ห้อยานพาหนะ / เครื่องยนต์</button>

                                                </div>
                                            </div>

                                            <div className="row mb-2">
                                                <div className="col-lg-3 border-right">
                                                    <label htmlFor="avg_check" className="col-form-label">สี</label>
                                                </div>
                                                <div className="col-lg-9">
                                                    <input type="text" className="form-control bg-blue-lv3 w-50" value={this.state.avg_car_color} onChange={this.handleAvgCarColorChange} name="avg_check" id="avg_check" />
                                                </div>
                                            </div>

                                            

                                            <div className="row mb-2">
                                                <div className="col-lg-3 border-right">
                                                    <label htmlFor="type_check" className="col-form-label">ประเภทเครื่องยนต์</label>
                                                </div>
                                                <div className="col-lg-9">
                                                    <input type="radio" name="type_check3" id="1" value="น้ำมันดีเซล" defaultChecked={this.state.avg_car_type_engine === 'น้ำมันดีเซล'} onChange={this.handleTypeCarEngineChange} /> <label className="mb-0" htmlFor="1">น้ำมันดีเซล</label> <br />
                                                    <input type="radio" name="type_check3" id="2" value="น้ำมันเบนซิน" defaultChecked={this.state.avg_car_type_engine === 'น้ำมันเบนซิน'} onChange={this.handleTypeCarEngineChange} /> <label className="mb-0" htmlFor="2">น้ำมันเบนซิน</label> <br />
                                                    <input type="radio" name="type_check3" id="3" value="ไฟฟ้า" defaultChecked={this.state.avg_car_type_engine === 'ไฟฟ้า'} onChange={this.handleTypeCarEngineChange} /> <label className="mb-0" htmlFor="3">ไฟฟ้า</label> <br />
                                                    <input type="radio" name="type_check3" id="4" value="ไฮบริด" defaultChecked={this.state.avg_car_type_engine === 'ไฮบริด'} onChange={this.handleTypeCarEngineChange} /> <label className="mb-0" htmlFor="4">ไฮบริด</label>
                                                </div>
                                            </div>

                                            <div className="row mb-2">
                                                <div className="col-lg-3 border-right">
                                                    <label htmlFor="type_check" className="col-form-label">ประเภทเชื้อเพลิง</label>
                                                </div>
                                                <div className="col-lg-9">
                                                    <input type="radio" name="type_check4" id="1" value="น้ำมันดีเซล" defaultChecked={this.state.avg_car_type_fuel === 'น้ำมันดีเซล'} onChange={this.handleTypeCarFuelChange} /> <label className="mb-0" htmlFor="1">น้ำมันดีเซล</label> <br />
                                                    <input type="radio" name="type_check4" id="2" value="น้ำมันเบนซิน" defaultChecked={this.state.avg_car_type_fuel === 'น้ำมันเบนซิน'} onChange={this.handleTypeCarFuelChange} /> <label className="mb-0" htmlFor="2">น้ำมันเบนซิน</label> <br />
                                                    <input type="radio" name="type_check4" id="2" value="ก๊าซธรรมชาติ" defaultChecked={this.state.avg_car_type_fuel === 'ก๊าซธรรมชาติ'} onChange={this.handleTypeCarFuelChange} /> <label className="mb-0" htmlFor="2">ก๊าซธรรมชาติ</label> <br />
                                                    <input type="radio" name="type_check4" id="3" value="ไฟฟ้า" defaultChecked={this.state.avg_car_type_fuel === 'ไฟฟ้า'} onChange={this.handleTypeCarFuelChange} /> <label className="mb-0" htmlFor="3">ไฟฟ้า</label> <br />
                                                    <input type="radio" name="type_check4" id="4" value="ไฮบริด" defaultChecked={this.state.avg_car_type_fuel === 'ไฮบริด'} onChange={this.handleTypeCarFuelChange} /> <label className="mb-0" htmlFor="4">ไฮบริด</label>
                                                </div>
                                            </div>

                                            <div className="row mb-2">
                                                <div className="col-lg-3 border-right">
                                                    <label htmlFor="staff_check" className="col-form-label">ผู้ขับ</label>
                                                </div>
                                                <div className="col-lg-9">
                                                    {/* <input type="text" className="form-control bg-blue-lv3 mb-1 w-50" name="driver_title" value={this.state.driver_title} onChange={this.handleDriverTitleChange} id="staff_check" placeholder="นาย, นาง, นางสาว, ยศ" /> */}
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
                                                    {/* <input type="text" className="form-control bg-blue-lv3 mb-1 w-50" name="home_code" value={this.state.home_code} onChange={this.handleHomeCodeChange} id="staff_check" placeholder="รหัสไปรษณีย์" /> */}
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
                            <center><button className="btn btn-primary" data-toggle="modal" data-target="#myModal">บันทึก (คพ.๓)</button></center>
                        </div>
                    </form>
                </div>
                <div id="myModal" class="modal fade" role="dialog">
                        <div class="modal-dialog">

                       
                            <div class="modal-content">
                            <div class="modal-header">
                                <h4 class="modal-title">ระบบกำลังตรวจสอบ และบันทึกข้อมูล</h4>
                            </div>
                            <div class="modal-body">
                                <p>ระบบกำลังตรวจสอบ และบันทึกข้อมูล</p>
                            </div>
                            
                            </div>

                        </div>
                        </div>
            </div>
        )
    }
}

export default Corpor3Form;