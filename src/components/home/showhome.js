import React, { Component } from 'react';
import { url } from '../../parameter/index';
import { Link } from 'react-router-dom';

class ShowHome extends Component {

    constructor() {
        super()
        this.state = {
            list_doc: [],
            status: false,
            sum1: '',
            sum2: '',
            sum3: '',
            sum4: '',
            sum5: '',
            sum6: '',
            sum7: '',
        }
    }



    componentDidMount() {
        // console.log("token ... >> " , this.props.token)

        fetch(url + '/get_sum_order?token=' + this.props.token)
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

        fetch(url + '/get_all_doc?token=' + this.props.token)
            .then((Response) => Response.json())
            .then((res) => {
                this.setState({
                    list_doc: res
                })
            }).catch(function () {
                localStorage.removeItem('token');
                window.location.href = '/';
            });

    }

    render() {

        
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
            <div className="row mb-2">
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
        )
    }


}
export default ShowHome