import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { url } from '../parameter/index';
import ShowChart from '../components/home/showchart';
import ShowTable from '../components/home/showtable';
import ShowHome from '../components/home/showhome';


class Home extends Component {

    constructor() {
        super()
        this.state = {
            token: '',
            button_check: 1
        }
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
        this.setState({ token: this.state.token })

    }

    render() {

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
                                    <form className="form-inline my-2 my-lg-0">
                                        <input className="form-control ml-auto mr-sm-2 w-75" type="search" placeholder="Search" aria-label="Search" />
                                        <button className="btn btn-default"><i className="fas fa-search"></i></button>
                                    </form>

                                    <ul className="nav nav-pills" id="pills-tab" role="tablist">
                                        <li className="nav-item ml-auto">
                                            <a className="nav-link active" id="pills-home-tab" data-toggle="pill" href="#pills-home" role="tab" onClick={() => this.handleHomeCodeChange(1)} aria-controls="pills-home" aria-selected="true"><i className="fas fa-list-ul"></i></a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link" id="pills-profile-tab" data-toggle="pill" href="#pills-profile" role="tab" onClick={() => this.handleHomeCodeChange(2)} aria-controls="pills-profile" aria-selected="false"><i className="fas fa-chart-bar"></i></a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link" id="pills-contact-tab" data-toggle="pill" href="#pills-contact" role="tab" onClick={() => this.handleHomeCodeChange(3)} aria-controls="pills-contact" aria-selected="false"><i className="fas fa-calendar-alt"></i></a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link" id="pills-contact-tab" data-toggle="pill" href="#pills-contact" role="tab" onClick={() => this.handleHomeCodeChange(4)} aria-controls="pills-contact" aria-selected="false"><i className="fas fa-table"></i></a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link" id="pills-contact-tab" data-toggle="pill" href="#pills-contact" role="tab" onClick={() => this.handleHomeCodeChange(5)} aria-controls="pills-contact" aria-selected="false"><i className="fas fa-align-left"></i></a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <div className="card-body bg-gray-lv1">
                            {
                                    this.state.button_check == 1 ?
                                    <div>
                                        {this.state.token != '' ?
                                            <ShowHome token={this.state.token} /> : <div></div>
                                        }

                                    </div>
                                    : this.state.button_check == 2 ?
                                        <div>
                                           <ShowChart />
                                        </div>
                                    : this.state.button_check == 3 ?
                                        <div>
                                        
                                        </div>
                                    : this.state.button_check == 4 ?
                                        <div>
                                            <ShowTable  token={this.state.token} />
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