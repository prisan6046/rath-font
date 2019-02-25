import React, { Component } from 'react'
import axios from 'axios';
import store from '../../store/index';

class ShowData extends Component {

    
    constructor() {
        super()
        this.state = {
            token : '',
            data : [],
            loading : false
        }
    }

    componentDidMount() {
        this.state.token = localStorage.getItem('token');
        console.log(this.props.match.params.id )
        fetch('http://34.73.123.38/api/token/get_doc_id?id=' + this.props.match.params.id  +"&token="+this.state.token)
            .then((Response) => Response.json())
            .then((res) => {
                this.setState({
                    data: res,
                    loading: true
                })
            })
    }



    render() {

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

        

        return (

            <div className="container-fluid py-4">
                { this.state.loading == true ? list_province : ''}
            </div>

        )
    }
}

export default ShowData;