import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Home extends Component {

    constructor() {
        super()
        this.state = {
            token: '',
            list_doc: [],
            status: false,
        }

    }

    componentDidMount() {
        this.state.token = localStorage.getItem('token');
        if (this.state.token == null) {
            this.props.history.push("/")
        }

        fetch('http://34.73.123.38/api/token/get_all_doc?token=' + this.state.token)
            .then((Response) => Response.json())
            .then((res) => {
                this.setState({
                    list_doc: res
                })
                console.log(res)
            })
    }

    render() {

        let list_doc = []
        this.state.list_doc.map((val, i) => {
            let url = "/showdata/"+val._id.$oid
            return list_doc.push(
                <tr key={i}>
                    <td>{val.avg_car_number}</td>
                    <td>{val.avg_car_province}</td>
                    <td>{val.avg_car_brand}</td>
                    <td>{val.date_not_allow}</td>
                    <td>{val.date_check}</td>
                    <td>{val.date_check}</td>
                    <td>{val.date_check}</td>
                    <td>รอการตรวจสอบ</td>
                    <td><a href={url} ><button type="button" className="btn btn-primary">ดูข้อมูล</button></a> </td>
                </tr>
            )
        })

        return (
            <div className="Home">
                <div className="container-fluid py-4">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="card">
                                <div className="card-body">
                                    <div className="row mb-2">
                                        <div className="col-lg-12">
                                            <div className="tab-content" id="myTabContent">
                                                <div className="tab-pane fade show active" id="corpor3" role="tabpanel" aria-labelledby="corpor3-tab">
                                                    <div className="Corpor3Form">
                                                        <div className="row">
                                                            <div className="col-lg-12">
                                                                <div className="CarForm">
                                                                    <div className="box">
                                                                        <div className="box-header">
                                                                            <h3 className="box-title">รายการ</h3>
                                                                        </div>
                                                                        <div className="box-body table-responsive no-padding">
                                                                            <div className="box-body">
                                                                                <div className="form-group">
                                                                                    <select className="form-control">
                                                                                        <option>กรุณาเลือก</option>
                                                                                        <option>ห้ามใช้ชั่วคราว</option>
                                                                                        <option>ห้ามใช้ชั่วคราวแต่ใกล้ครบกำหนดเวลา</option>
                                                                                        <option>ยกเลิกคำสั่งห้ามใช้ชั่วคราว</option>
                                                                                        <option>ห้ามใช้ชั่วคราวและเกินกำหนดเวลา 30 วัน</option>
                                                                                        <option>ห้ามใช้เด็ดขาด</option>
                                                                                        <option>ห้ามใช้ชั่วคราวและกำลังปรับปรุง</option>
                                                                                        <option>ยกเลิกคำสั่งห้ามใช้เด็ดขาด</option>
                                                                                    </select>
                                                                                </div>
                                                                            </div>
                                                                            <table className="table">
                                                                                <thead>
                                                                                    <tr>
                                                                                        <th>ทะเบียนรถ</th>
                                                                                        <th>ทะเบียนจังหวัด</th>
                                                                                        <th>ยี่ห้อยานพาหนะ</th>
                                                                                        <th>วันที่ห้ามใช้ยานพาหนะ</th>
                                                                                        <th>วันที่ออกใบอนุญาติ</th>
                                                                                        <th>วันที่ขอให้ตรวจสอบ</th>
                                                                                        <th>วัน/เวลาที่คำสั่งมีผล</th>
                                                                                        <th>สถานะการตรวจ</th>
                                                                                        <th></th>
                                                                                    </tr>
                                                                                </thead>
                                                                                <tbody>
                                                                                    {
                                                                                        list_doc
                                                                                    }

                                                                                </tbody>
                                                                            </table>
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

export default Home;