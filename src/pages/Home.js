import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { url } from '../parameter/index';
import { Chart } from "react-charts";
import  ChartConfig  from '../components/libraries/ChartConfig'


class Home extends Component {

    constructor() {
        super()
        this.state = {
            token: '',
            list_doc: [],
            status: false,
            sum1: '',
            sum2: '',
            sum3: '',
            sum4: '',
            sum5: '',
            sum6: '',
            sum7: '',
            button_check: 1
        }
        // this.handleHomeCodeChange = this.handleHomeCodeChange.bind(this);
    }

    handleHomeCodeChange(e) {
        this.setState({
            button_check: e
        })
    }

    componentDidMount() {


        this.state.token = localStorage.getItem('token');
        if (this.state.token == null) {
            this.props.history.push("/")
        }
        fetch(url + '/get_all_doc?token=' + this.state.token)
            .then((Response) => Response.json())
            .then((res) => {
                this.setState({
                    list_doc: res
                })
            }).catch(function () {
                localStorage.removeItem('token');
                window.location.href = '/';
            });

        fetch(url + '/get_sum_order?token=' + this.state.token)
            .then((Response) => Response.json())
            .then((res) => {
                this.setState({
                    sum1: res.sumone,
                    sum2: res.sumtwo,
                    sum3: res.sumthree,
                    sum4: res.sumfour,
                    sum5: res.sumfive,
                    sum6: res.sumsix,
                    sum7: res.sumseven
                })
            }).catch(function () {
                localStorage.removeItem('token');
                window.location.href = '/';
            });


    }

    render() {

        let list_doc = []
        this.state.list_doc.map((val, i) => {
            let url = "/showdata/" + val._id.$oid
            return list_doc.push(
                <tr key={i}>
                    <td></td>
                    <td>{val.avg_car_number}</td>
                    <td>{val.avg_car_province}</td>
                    <td>{val.avg_car_brand}</td>
                    <td>{val.date_not_allow}</td>
                    <td>{val.date_check}</td>
                    <td>{val.date_check}</td>
                    <td>{val.date_check}</td>
                    <td></td>

                </tr>
            )
        })

        const car_statuses = [
            'ห้ามใช้ชั่วคราว',
            'ห้ามใช้ชั่วคราวแต่ใกล้ครบกำหนดเวลา',
            'ยกเลิกคำสั่งห้ามใช้ชั่วคราว',
            'ห้ามใช้ชั่วคราวและเกินกำหนดเวลา 30 วัน',
            'ห้ามใช้เด็ดขาด',
            'ห้ามใช้ห้ามใช้ชั่วคราวและกำลังปรับปรุงชั่วคราว',
            'ยกเลิกคำสั่งห้ามใช้เด็ดขาด'
        ];

        

        const color_collapse = ['#FFFF98', '#FF66CB', '#98CB02', '#FF9836', '#FF0001', '#A4A4A4', '#36CB36'];

        return (
            <div className="Home">
                <div className="col-lg-12 p-0">
                    <div className="card">
                        <div className="card-header bg-blue-lv2">
                            <div className="row">
                                <div className="col-lg-3">
                                    <h3 className="box-title">รายการ</h3>
                                    <a href="/add"><button className="btn btn-primary">ลงข้อมูลแบบ คพ.</button></a>
                                </div>
                                <div className="col-lg">
                                    {/* <select className="form-control">
                                        <option>กรุณาเลือก</option>
                                        <option>ห้ามใช้ชั่วคราว</option>
                                        <option>ห้ามใช้ชั่วคราวแต่ใกล้ครบกำหนดเวลา</option>
                                        <option>ยกเลิกคำสั่งห้ามใช้ชั่วคราว</option>
                                        <option>ห้ามใช้ชั่วคราวและเกินกำหนดเวลา 30 วัน</option>
                                        <option>ห้ามใช้เด็ดขาด</option>
                                        <option>ห้ามใช้ชั่วคราวและกำลังปรับปรุง</option>
                                        <option>ยกเลิกคำสั่งห้ามใช้เด็ดขาด</option>
                                    </select> */}
                                </div>
                                <div className="col-lg-6">
                                    <form class="form-inline my-2 my-lg-0">
                                        <input class="form-control ml-auto mr-sm-2 w-75" type="search" placeholder="Search" aria-label="Search" />
                                        <button className="btn btn-default"><i class="fas fa-search"></i></button>
                                    </form>

                                    <ul class="nav nav-pills" id="pills-tab" role="tablist">
                                        <li class="nav-item ml-auto">
                                            <a class="nav-link active" id="pills-home-tab" data-toggle="pill" href="#pills-home" role="tab" onClick={() => this.handleHomeCodeChange(1)} aria-controls="pills-home" aria-selected="true"><i class="fas fa-list-ul"></i></a>
                                        </li>
                                        <li class="nav-item">
                                            <a class="nav-link" id="pills-profile-tab" data-toggle="pill" href="#pills-profile" role="tab" onClick={() => this.handleHomeCodeChange(2)} aria-controls="pills-profile" aria-selected="false"><i class="fas fa-chart-bar"></i></a>
                                        </li>
                                        <li class="nav-item">
                                            <a class="nav-link" id="pills-contact-tab" data-toggle="pill" href="#pills-contact" role="tab" onClick={() => this.handleHomeCodeChange(3)} aria-controls="pills-contact" aria-selected="false"><i class="fas fa-calendar-alt"></i></a>
                                        </li>
                                        <li class="nav-item">
                                            <a class="nav-link" id="pills-contact-tab" data-toggle="pill" href="#pills-contact" role="tab" onClick={() => this.handleHomeCodeChange(4)} aria-controls="pills-contact" aria-selected="false"><i class="fas fa-table"></i></a>
                                        </li>
                                        <li class="nav-item">
                                            <a class="nav-link" id="pills-contact-tab" data-toggle="pill" href="#pills-contact" role="tab" onClick={() => this.handleHomeCodeChange(5)} aria-controls="pills-contact" aria-selected="false"><i class="fas fa-align-left"></i></a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <div className="card-body bg-gray-lv1">
                            {
                                this.state.button_check == 1 ? <div className="row mb-2">
                                    <div className="col-lg-12">
                                        <table className="table table-home">
                                            <thead>
                                                <tr>
                                                    <th className="w-25"></th>
                                                    <th><input type="checkbox" name="id_car" id="id_car" className="bg-white" /> ทะเบียนรถ</th>
                                                    <th>ทะเบียนจังหวัด</th>
                                                    <th>ยี่ห้อยานพาหนะ</th>
                                                    <th>วันที่ห้ามใช้ยานพาหนะ</th>
                                                    <th>วันที่ออกใบอนุญาติ</th>
                                                    <th>วันที่ขอให้ตรวจสอบ</th>
                                                    <th>วัน/เวลาที่คำสั่งมีผล</th>
                                                    <th>สถานะการตรวจ</th>
                                                </tr>
                                            </thead>


                                            <tbody>
                                                <tr>
                                                    <td colSpan="9">
                                                        <div className="list-group">
                                                            <a href="#" className="list-group-item list-group-item-action border-0" data-toggle="collapse" href="#collapseExample-0" role="button" aria-expanded="false" aria-controls="collapseExample-0"><i className="fas fa-caret-right">{car_statuses[0]} ({this.state.sum1})</i></a>
                                                        </div>
                                                    </td>
                                                </tr>
                                                {this.state.list_doc.map((val, n) => {
                                                    let url = "/showdata/" + val._id.$oid
                                                    if (val.res_check == "ห้ามใช้ยานพาหนะชั่วคราว") {

                                                        return (
                                                            <tr key={n} className="collapse" id="collapseExample-0" style={{ backgroundColor: color_collapse[0] }}>
                                                                {/* <div className="card card-body" style={{backgroundColor: color_collapse[i]}}> */}
                                                                <td className="border-0"></td>
                                                                <td className="border-0"><Link to={url} className="text-dark">{val.avg_car_number}</Link></td>
                                                                <td className="border-0">{val.avg_car_province}</td>
                                                                <td className="border-0">{val.avg_car_brand}</td>
                                                                <td className="border-0">{val.date_not_allow}</td>
                                                                <td className="border-0">{val.date_check}</td>
                                                                <td className="border-0">{val.date_check}</td>
                                                                <td className="border-0">{val.date_check}</td>
                                                                <td className="border-0">{car_statuses[0]}</td>
                                                                {/* </div> */}
                                                            </tr>
                                                        );
                                                    }

                                                })}
                                            </tbody>

                                            <tbody>
                                                <tr>
                                                    <td colSpan="9">
                                                        <div className="list-group">
                                                            <a href="#" className="list-group-item list-group-item-action border-0" data-toggle="collapse" href="#collapseExample-1" role="button" aria-expanded="false" aria-controls="collapseExample-0"><i className="fas fa-caret-right">{car_statuses[1]}({this.state.sum2})</i></a>
                                                        </div>
                                                    </td>
                                                </tr>
                                                {this.state.list_doc.map((val, n) => {
                                                    let url = "/showdata/" + val._id.$oid
                                                    if (val.res_check == "ห้ามใช้ชั่วคราวแต่ใกล้ครบกำหนดเวลา") {
                                                        return (
                                                            <tr key={n} className="collapse" id="collapseExample-1" style={{ backgroundColor: color_collapse[1] }}>
                                                                {/* <div className="card card-body" style={{backgroundColor: color_collapse[i]}}> */}
                                                                <td className="border-0"></td>
                                                                <td className="border-0"><Link to={url} className="text-dark">{val.avg_car_number}</Link></td>
                                                                <td className="border-0">{val.avg_car_province}</td>
                                                                <td className="border-0">{val.avg_car_brand}</td>
                                                                <td className="border-0">{val.date_not_allow}</td>
                                                                <td className="border-0">{val.date_check}</td>
                                                                <td className="border-0">{val.date_check}</td>
                                                                <td className="border-0">{val.date_check}</td>
                                                                <td className="border-0">{car_statuses[1]}</td>
                                                                {/* </div> */}
                                                            </tr>
                                                        );
                                                    }

                                                })}
                                            </tbody>

                                            <tbody>
                                                <tr>
                                                    <td colSpan="9">
                                                        <div className="list-group">
                                                            <a href="#" className="list-group-item list-group-item-action border-0" data-toggle="collapse" href="#collapseExample-2" role="button" aria-expanded="false" aria-controls="collapseExample-0"><i className="fas fa-caret-right">{car_statuses[2]} ({this.state.sum3})</i></a>
                                                        </div>
                                                    </td>
                                                </tr>
                                                {this.state.list_doc.map((val, n) => {
                                                    let url = "/showdata/" + val._id.$oid
                                                    if (val.res_check == "ยกเลิกคำสั่งห้ามใช้ชั่วคราว") {
                                                        return (
                                                            <tr key={n} className="collapse" id="collapseExample-2" style={{ backgroundColor: color_collapse[2] }}>
                                                                {/* <div className="card card-body" style={{backgroundColor: color_collapse[i]}}> */}
                                                                <td className="border-0"></td>
                                                                <td className="border-0"><Link to={url} className="text-dark">{val.avg_car_number}</Link></td>
                                                                <td className="border-0">{val.avg_car_province}</td>
                                                                <td className="border-0">{val.avg_car_brand}</td>
                                                                <td className="border-0">{val.date_not_allow}</td>
                                                                <td className="border-0">{val.date_check}</td>
                                                                <td className="border-0">{val.date_check}</td>
                                                                <td className="border-0">{val.date_check}</td>
                                                                <td className="border-0">{car_statuses[2]}</td>
                                                                {/* </div> */}
                                                            </tr>
                                                        );
                                                    }

                                                })}
                                            </tbody>

                                            <tbody>
                                                <tr>
                                                    <td colSpan="9">
                                                        <div className="list-group">
                                                            <a href="#" className="list-group-item list-group-item-action border-0" data-toggle="collapse" href="#collapseExample-3" role="button" aria-expanded="false" aria-controls="collapseExample-0"><i className="fas fa-caret-right">{car_statuses[3]} ({this.state.sum4})</i></a>
                                                        </div>
                                                    </td>
                                                </tr>
                                                {this.state.list_doc.map((val, n) => {
                                                    let url = "/showdata/" + val._id.$oid
                                                    if (val.res_check == "ห้ามใช้ชั่วคราวและเกินกำหนดเวลา 30 วัน") {
                                                        return (
                                                            <tr key={n} className="collapse" id="collapseExample-3" style={{ backgroundColor: color_collapse[3] }}>
                                                                {/* <div className="card card-body" style={{backgroundColor: color_collapse[i]}}> */}
                                                                <td className="border-0"></td>
                                                                <td className="border-0"><Link to={url} className="text-dark">{val.avg_car_number}</Link></td>
                                                                <td className="border-0">{val.avg_car_province}</td>
                                                                <td className="border-0">{val.avg_car_brand}</td>
                                                                <td className="border-0">{val.date_not_allow}</td>
                                                                <td className="border-0">{val.date_check}</td>
                                                                <td className="border-0">{val.date_check}</td>
                                                                <td className="border-0">{val.date_check}</td>
                                                                <td className="border-0">{car_statuses[3]}</td>
                                                                {/* </div> */}
                                                            </tr>
                                                        );
                                                    }

                                                })}
                                            </tbody>

                                            <tbody>
                                                <tr>
                                                    <td colSpan="9">
                                                        <div className="list-group">
                                                            <a href="#" className="list-group-item list-group-item-action border-0" data-toggle="collapse" href="#collapseExample-4" role="button" aria-expanded="false" aria-controls="collapseExample-0"><i className="fas fa-caret-right">{car_statuses[4]} ({this.state.sum5})</i></a>
                                                        </div>
                                                    </td>
                                                </tr>
                                                {this.state.list_doc.map((val, n) => {
                                                    let url = "/showdata/" + val._id.$oid
                                                    if (val.res_check == "ห้ามใช้ยานพาหนะเด็ดขาด") {
                                                        return (
                                                            <tr key={n} className="collapse" id="collapseExample-4" style={{ backgroundColor: color_collapse[4] }}>
                                                                {/* <div className="card card-body" style={{backgroundColor: color_collapse[i]}}> */}
                                                                <td className="border-0"></td>
                                                                <td className="border-0"><Link to={url} className="text-dark">{val.avg_car_number}</Link></td>
                                                                <td className="border-0">{val.avg_car_province}</td>
                                                                <td className="border-0">{val.avg_car_brand}</td>
                                                                <td className="border-0">{val.date_not_allow}</td>
                                                                <td className="border-0">{val.date_check}</td>
                                                                <td className="border-0">{val.date_check}</td>
                                                                <td className="border-0">{val.date_check}</td>
                                                                <td className="border-0">{car_statuses[4]}</td>
                                                                {/* </div> */}
                                                            </tr>
                                                        );
                                                    }

                                                })}
                                            </tbody>

                                            <tbody>
                                                <tr>
                                                    <td colSpan="9">
                                                        <div className="list-group">
                                                            <a href="#" className="list-group-item list-group-item-action border-0" data-toggle="collapse" href="#collapseExample-5" role="button" aria-expanded="false" aria-controls="collapseExample-0"><i className="fas fa-caret-right">{car_statuses[5]} ({this.state.sum6})</i></a>
                                                        </div>
                                                    </td>
                                                </tr>
                                                {this.state.list_doc.map((val, n) => {
                                                    let url = "/showdata/" + val._id.$oid
                                                    if (val.res_check == "ห้ามใช้ห้ามใช้ชั่วคราวและกำลังปรับปรุงชั่วคราว") {
                                                        return (
                                                            <tr key={n} className="collapse" id="collapseExample-5" style={{ backgroundColor: color_collapse[5] }}>
                                                                {/* <div className="card card-body" style={{backgroundColor: color_collapse[i]}}> */}
                                                                <td className="border-0"></td>
                                                                <td className="border-0"><Link to={url} className="text-dark">{val.avg_car_number}</Link></td>
                                                                <td className="border-0">{val.avg_car_province}</td>
                                                                <td className="border-0">{val.avg_car_brand}</td>
                                                                <td className="border-0">{val.date_not_allow}</td>
                                                                <td className="border-0">{val.date_check}</td>
                                                                <td className="border-0">{val.date_check}</td>
                                                                <td className="border-0">{val.date_check}</td>
                                                                <td className="border-0">{car_statuses[5]}</td>
                                                                {/* </div> */}
                                                            </tr>
                                                        );
                                                    }

                                                })}
                                            </tbody>

                                            <tbody>
                                                <tr>
                                                    <td colSpan="9">
                                                        <div className="list-group">
                                                            <a href="#" className="list-group-item list-group-item-action border-0" data-toggle="collapse" href="#collapseExample-6" role="button" aria-expanded="false" aria-controls="collapseExample-0"><i className="fas fa-caret-right">{car_statuses[6]} ({this.state.sum7})</i></a>
                                                        </div>
                                                    </td>
                                                </tr>
                                                {this.state.list_doc.map((val, n) => {
                                                    let url = "/showdata/" + val._id.$oid
                                                    if (val.res_check == "ยกเลิกคำสั่งห้ามใช้เด็ดขาด") {
                                                        return (
                                                            <tr key={n} className="collapse" id="collapseExample-6" style={{ backgroundColor: color_collapse[6] }}>
                                                                {/* <div className="card card-body" style={{backgroundColor: color_collapse[i]}}> */}
                                                                <td className="border-0"></td>
                                                                <td className="border-0"><Link to={url} className="text-dark">{val.avg_car_number}</Link></td>
                                                                <td className="border-0">{val.avg_car_province}</td>
                                                                <td className="border-0">{val.avg_car_brand}</td>
                                                                <td className="border-0">{val.date_not_allow}</td>
                                                                <td className="border-0">{val.date_check}</td>
                                                                <td className="border-0">{val.date_check}</td>
                                                                <td className="border-0">{val.date_check}</td>
                                                                <td className="border-0">{car_statuses[6]}</td>
                                                                {/* </div> */}
                                                            </tr>
                                                        );
                                                    }

                                                })}
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                                    : this.state.button_check == 2?
                                    <div>
                                        <div className="col-lg-12">
                                        <ChartConfig dataType="ordinal">
                                                {({ data }) => (
                                                <Chart
                                                    data={data}
                                                    series={{ type: 'bar' }}
                                                    axes={[
                                                    { primary: true, type: 'ordinal', position: 'bottom' },
                                                    { position: 'left', type: 'linear', stacked: true },
                                                    ]}
                                                    primaryCursor
                                                    secondaryCursor
                                              
                                                />
                                                )}
                                        </ChartConfig>

                                        </div>
                                    </div>
                                    :
                                    <div>
                                    </div>
                            }

                        </div>
                        <div className="card-footer bg-blue-lv1 p-0">&nbsp;</div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Home;