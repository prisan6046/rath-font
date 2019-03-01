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
                    <td></td>
                    <td>{val.avg_car_number}</td>
                    <td>{val.avg_car_province}</td>
                    <td>{val.avg_car_brand}</td>
                    <td>{val.date_not_allow}</td>
                    <td>{val.date_check}</td>
                    <td>{val.date_check}</td>
                    <td>{val.date_check}</td>
                    <td>รอการตรวจสอบ</td>
                    
                </tr>
            )
        })

        const car_statuses = [
            'ห้ามใช้ชั่วคราว',
            'ห้ามใช้ชั่วคราวแต่ใกล้ครบกำหนดเวลา',
            'ยกเลิกคำสั่งห้ามใช้ชั่วคราว',
            'ห้ามใช้ชั่วคราวและเกินกำหนดเวลา 30 วัน',
            'ห้ามใช้เด็ดขาด',
            'ห้ามใช้ชั่ห้ามใช้ชั่วคราวและกำลังปรับปรุงวคราว',
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
                            </div>                                                                        
                        </div>
                        <div className="card-body bg-gray-lv1">
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
                                        
                                            {car_statuses.map((val, i) => {
                                                return (    
                                                    <tbody>                                                
                                                        <tr>
                                                            <td colSpan="9">
                                                                <div class="list-group">
                                                                    <a href="#" className="list-group-item list-group-item-action border-0" data-toggle="collapse" href={`#collapseExample-${i}`} role="button" aria-expanded="false" aria-controls={`collapseExample-${i}`}><i class="fas fa-caret-right"></i> {val} ({Object.keys(this.state.list_doc).length})</a>
                                                                </div>
                                                            </td>                                                                                                                        
                                                        </tr>
                                                        
                                                        {this.state.list_doc.map((val, n) => {
                                                            let url = "/showdata/"+val._id.$oid
                                                            return(
                                                                <tr key={n} className="collapse" id={`collapseExample-${i}`} style={{backgroundColor: color_collapse[i]}}>
                                                                    {/* <div className="card card-body" style={{backgroundColor: color_collapse[i]}}> */}
                                                                        <td className="border-0"></td>
                                                                        <td className="border-0"><Link to={url} className="text-dark">{val.avg_car_number}</Link></td>
                                                                        <td className="border-0">{val.avg_car_province}</td>
                                                                        <td className="border-0">{val.avg_car_brand}</td>
                                                                        <td className="border-0">{val.date_not_allow}</td>
                                                                        <td className="border-0">{val.date_check}</td>
                                                                        <td className="border-0">{val.date_check}</td>
                                                                        <td className="border-0">{val.date_check}</td>
                                                                        <td className="border-0">รอการตรวจสอบ</td>
                                                                    {/* </div> */}
                                                                </tr>  
                                                            );
                                                        })}
                                                    </tbody>
                                                );
                                            })}                                        
                                    </table>
                                </div>
                            </div>
                        </div>
                        <div class="card-footer bg-blue-lv1 p-0">&nbsp;</div>
                    </div>
                </div>              
            </div>
        )
    }
}

export default Home;