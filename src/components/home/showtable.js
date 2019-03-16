import React, { Component } from 'react';
import { url } from '../../parameter/index';

class ShowTable extends Component {


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

    }


    render() {

        return (
            <div className="Add">

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
                                                                    <div className="card">
                                                                        <div className="card-header bg-primary text-white">ข้อมูลสถิติ</div>
                                                                        <div className="card-body">
                                                                            <table className="table table-bordered">
                                                                                <thead>
                                                                                    <tr>
                                                                                        <th>เดือน</th>
                                                                                        <th>จำนวน</th>
                                                                                    </tr>
                                                                                </thead>
                                                                                <tbody>
                                                                                    <tr>
                                                                                        <td>ห้ามใช้ชั่วคราว</td>
                                                                                        <td>{ this.state.sum1 != ''? this.state.sum1 : '0' }</td>
                                                                                    </tr>
                                                                                    <tr>
                                                                                        <td>ห้ามใช้ชั่วคราวแต่ใกล้ครบกำหนดเวลา</td>
                                                                                        <td>{ this.state.sum2 != ''? this.state.sum2 : '0' }</td>
                                                                                    </tr>
                                                                                    <tr>
                                                                                        <td>ยกเลิกคำสั่งห้ามใช้ชั่วคราว</td>
                                                                                        <td>{ this.state.sum3 != ''? this.state.sum3 : '0' }</td>
                                                                                    </tr>
                                                                                    <tr>
                                                                                        <td>ห้ามใช้ชั่วคราวและเกินกำหนดเวลา 30 วัน</td>
                                                                                        <td>{ this.state.sum4 != ''? this.state.sum4 : '0' }</td>
                                                                                    </tr>
                                                                                    <tr>
                                                                                        <td>ห้ามใช้เด็ดขาด</td>
                                                                                        <td>{ this.state.sum5 != ''? this.state.sum5 : '0' }</td>
                                                                                    </tr>
                                                                                    <tr>
                                                                                        <td>ห้ามใช้ห้ามใช้ชั่วคราวและกำลังปรับปรุงชั่วคราว</td>
                                                                                        <td>{ this.state.sum6 != ''? this.state.sum6 : '0' }</td>
                                                                                    </tr>
                                                                                    <tr>
                                                                                        <td>ยกเลิกคำสั่งห้ามใช้เด็ดขาด</td>
                                                                                        <td>{ this.state.sum7 != ''? this.state.sum7 : '0' }</td>
                                                                                    </tr>
                                                                                
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

export default ShowTable