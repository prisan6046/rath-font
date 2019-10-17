import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios'
import { url } from '../parameter/index';
import ShowChart from '../components/home/showchart';
import ShowTable from '../components/home/showtable';
import ShowHome from '../components/home/showhome';
import ShowCalendar from '../components/home/ShowCalendar';
import ShowBarXaxis from '../components/home/ShowBarXaxis';
import { Str_date } from '../components/libraries/DateThai';



class Home extends Component {

    constructor() {
        super()
        this.state = {
            token: '',
            getExport: '',
            button_check: 1,
            status: '',
            list_doc: [],
            options: [],
            options_all: [],
            data: [],
            searching: '',
            searching_data: [],
            status_searching: false,
            status_load: false
        }
        this.handleGetData = this.handleGetData.bind(this)
        this.handleSearching = this.handleSearching.bind(this)
    }

    handleSearching(e) {
        this.setState({
            searching: e.target.value,
        })

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
        localStorage.removeItem('project_id');
        this.setState({ token: this.state.token })
        axios.get(url + '/getProfile?token=' + this.state.token).then(res => {
            if (res.data.status == 200) {
                this.setState({ status: res.data['status_user'] })
            }
        })

        fetch(url + '/get_all_doc?token=' + this.state.token)
            .then((Response) => Response.json())
            .then((res) => {

                this.setState({
                    list_doc: res,
                    status_load: true
                })
                
            }).catch(function () {
                alert("มีข้อผิดพลาดมีผู้อื่นเข้าใช้ user ของคุณ กรุณาเข้าใหม่อีกครั้ง")
            });

    }

    onChange(e) {
      
        const options = this.state.options
        let index

        if (e.target.checked) {
           
            options.push(e.target.value)
        } else {
         
            index = options.indexOf(e.target.value)
            options.splice(index, 1)
        }

        this.setState({ options: options })
    }


    showdata(id) {
        var formData = new FormData();
        if(id == 0){
           
            if (this.state.options.length === 0) { alert("กรุณาเลือกข้อมูล"); return; }
            formData.append('listcar', this.state.options);
        }
        if(id == 1){
            // console.log(this.state.options_all);
            // return ;
            formData.append('listcar', this.state.options_all);
        }
        

        axios({
            url: url + '/export_car',
            method: 'POST',
            responseType: 'blob',
            data: formData,
        }).then((response) => {
            const url = window.URL.createObjectURL(new Blob([response.data]));
            const link = document.createElement('a');
            link.href = url;
            link.setAttribute('download', 'data_car.xlsx');
            document.body.appendChild(link);
            link.click();
            this.setState({ options : ''})
            window.location.reload();
        });


    }

    finddata() {
        this.setState({
            status_load: false
        })
        fetch(url + '/get_doc_res?token=' + this.state.token + '&getExport=' + this.state.getExport)
            .then((Response) => Response.json())
            .then((res) => {

                this.setState({
                    list_doc: res,
                    status_load: true
                })

                let get = []
                this.state.list_doc.map((val, i) => {
                    return get.push(val.avg_car_number)
                })
                this.setState({
                    options_all : get
                })

            }).catch(function (error) {

            });
    }

    handleGetData(e) {
        this.setState({
            getExport: e.target.value,
        })
    }

    findSearching() {
        this.setState({

            status_searching: false
        })
        fetch(url + '/searching?token=' + this.state.token + '&searching=' + this.state.searching)
            .then((Response) => Response.json())
            .then((res) => {
           
                this.setState({
                    searching_data : res,
                    status_searching : true
                })
            }).catch(function (error) {
                alert("ไม่พบข้อมูลที่ค้นหา")
           
            });

    }


    str_dataaa(e) {
        return Str_date(e)
    }


    render() {


        let list_checkbox = []
        this.state.list_doc.map((val, i) => {

            return list_checkbox.push(
                <tr key={i}>
                    <td><input className="form-check-input" type="checkbox" id="inlineCheckbox1[]" onChange={this.onChange.bind(this)} value={val.avg_car_number} /></td>
                    <td><label className="form-check-label" htmlFor="inlineCheckbox1">{val.avg_car_number}</label></td>
                    <td><label className="form-check-label" htmlFor="inlineCheckbox" >{this.str_dataaa(val.date_check)}</label></td>
                </tr>
            )

        })

        let list_searching = []
        this.state.searching_data.map((val , i) => {
            let url = "/showdata/" + val._id.$oid
                return list_searching.push(

                    <tr key={i}>
                        <td><label className="form-check-label" htmlFor="inlineCheckbox1">{val.book_no}</label></td>
                        <td><label className="form-check-label" htmlFor="inlineCheckbox1">{val.order_no}</label></td>
                        
                        <td><label className="form-check-label" htmlFor="inlineCheckbox1">{val.avg_car_number}</label></td>
                        <td><label className="form-check-label" htmlFor="inlineCheckbox1">{val.staff_check}</label></td>
                        <td><label className="form-check-label" htmlFor="inlineCheckbox1">{val.res_check}</label></td>
                        <td><a href={url}><button type="button" class="btn btn-primary">ดูข้อมูล</button></a></td>



                    </tr>
                )

        })

        return (
            <div className="Home">
                {/* {this.state.status == 'Admin' ?
                    <div className="Add">
                        <div className="container-fluid bg-blue-lv2 py-3 border-bottom">
                            <div className="row">
                                <div className="col-lg-6">
                                    <h4 className="text-secondary"><a href="#">ผู้ดูแลระบบ</a></h4>
                                </div>

                                <div className="col-lg-6">

                                </div>
                            </div>
                        </div>

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
                                                                                <div className="card-header bg-primary text-white">เมนูจัดการระบบ</div>
                                                                                <div className="card-body">
                                                                                    <table className="table table-bordered">

                                                                                        <tbody>
                                                                                            <tr>
                                                                                                <td>เพิ่ม/ลบ ผู้ลงข้อมูล</td>
                                                                                                <td><a href="/adduser"><button className="btn btn-primary">คลิกเพื่อจัดการข้อมูล</button></a></td>
                                                                                            </tr>
                                                                                            <tr>
                                                                                                <td>เพิ่ม/ลบ สถานที่</td>
                                                                                                <td><a href="/addlocation"><button className="btn btn-primary">คลิกเพื่อจัดการข้อมูล</button></a></td>
                                                                                            </tr>
                                                                                            <tr>
                                                                                                <td>เพิ่ม/ลบ อู่</td>
                                                                                                <td><a href="/addservicecar"><button className="btn btn-primary">คลิกเพื่อจัดการข้อมูล</button></a></td>
                                                                                            </tr>
                                                                                            <tr>
                                                                                                <td>เพิ่ม/ลบ สังกัด</td>
                                                                                                <td><a href="/addUnder"><button className="btn btn-primary">คลิกเพื่อจัดการข้อมูล</button></a></td>
                                                                                            </tr>
                                                                                            
                                                                                            <tr>
                                                                                                <td>เพิ่ม/ลบ ยี่ห้อรถ</td>
                                                                                                <td><a href="/addcar"><button className="btn btn-primary">คลิกเพื่อจัดการข้อมูล</button></a></td>
                                                                                            </tr>
                                                                                            <tr>
                                                                                                <td>เพิ่ม/ลบ จังหวัด</td>
                                                                                                <td><a href="/addprovince"><button className="btn btn-primary">คลิกเพื่อจัดการข้อมูล</button></a></td>
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
                    </div> */}

                <div className="col-lg-12 p-0">
                    <div className="card">
                        <div className="card-header bg-blue-lv2">
                            <div className="row">
                                <div className="col-lg-3">
                                    <h3 className="box-title">รายการ</h3>
                                    <a href="/add"><button className="btn btn-primary">ลงข้อมูลแบบ คพ.</button></a>
                                    &nbsp;&nbsp;&nbsp;&nbsp;
                                            <button data-toggle="modal" data-target="#exampleModal" className="btn btn-primary">นำข้อมูลออก</button>
                                </div>


                                <div className="modal fade" id="exampleModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                    <div className="modal-dialog modal-lg" role="document">
                                        <div className="modal-content">
                                            <div className="modal-header">
                                                <h5 className="modal-title" id="exampleModalLabel"> นำข้อมูลออก </h5>
                                                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                                    <span aria-hidden="true">&times;</span>
                                                </button>
                                            </div>
                                            <div className="modal-body">
                                                <div className="row">

                                                    <div className="col-md-6">
                                                        <select className="form-control" id="sel1" onChange={this.handleGetData} >
                                                            <option >เลือกประเภทข้อมูล</option>
                                                            <option value="ห้ามใช้ยานพาหนะชั่วคราว">ห้ามใช้ยานพาหนะชั่วคราว</option>
                                                            <option value="ห้ามใช้ชั่วคราวแต่ใกล้ครบกำหนดเวลา">ห้ามใช้ชั่วคราวแต่ใกล้ครบกำหนดเวลา</option>
                                                            <option value="ห้ามใช้ชั่วคราวและเกินกำหนดเวลา 30 วัน">ห้ามใช้ชั่วคราวและเกินกำหนดเวลา 30 วัน</option>
                                                            <option value="ยกเลิกคำสั่งห้ามใช้ชั่วคราว">ยกเลิกคำสั่งห้ามใช้ชั่วคราว</option>
                                                            <option value="ห้ามใช้ยานพาหนะเด็ดขาด">ห้ามใช้ยานพาหนะเด็ดขาด</option>
                                                            <option value="กำลังปรับปรุงชั่วคราว">กำลังปรับปรุง</option>
                                                            <option value="ยกเลิกคำสั่งห้ามใช้เด็ดขาด">ยกเลิกคำสั่งห้ามใช้เด็ดขาด</option>
                                                        </select>
                                                    </div>
                                                    <div className="col-md-3">
                                                        <button type="button" onClick={() => { this.finddata() }} className="btn btn-primary">ค้นหา</button>
                                                    </div>

                                                </div>
                                                <br />


                                                <table className="table">
                                                    <thead>

                                                    </thead>
                                                    <tbody>
                                                        {
                                                            this.state.status_load == true ? list_checkbox : ''
                                                        }

                                                    </tbody>
                                                </table>


                                            </div>
                                            <div className="modal-footer">
                                                <button type="button" className="btn btn-secondary" data-dismiss="modal">ปิด</button>
                                                <button type="button" data-toggle="modal" data-target="#exampleModal" onClick={() => { this.showdata(1) }} className="btn btn-primary">นำข้อมูลออกทั้งหมด</button>
                                                <button type="button" data-toggle="modal" data-target="#exampleModal" onClick={() => { this.showdata(2) }} className="btn btn-primary">นำข้อมูลออกตามที่เลือก</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-lg">

                                </div>
                                <div className="col-lg-6">
                                    <div className="form-inline my-2 my-lg-0">
                                        <input className="form-control ml-auto mr-sm-2 w-75" type="search" placeholder="Search" aria-label="Search" value={this.state.searching} onChange={this.handleSearching} />
                                        <button className="btn btn-default" data-toggle="modal" data-target="#myModalSearch" onClick={() => { this.findSearching() }}><i className="fas fa-search"></i></button>


                                    </div>

                                    <ul className="nav nav-pills" id="pills-tab" role="tablist">
                                        <li className="nav-item ml-auto">
                                            <a className="nav-link active" id="pills-home-tab" data-toggle="pill" href="#pills-home" role="tab" onClick={() => this.handleHomeCodeChange(1)} aria-controls="pills-home" aria-selected="true"><i className="fas fa-list-ul"></i></a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link" id="pills-profile-tab" data-toggle="pill" href="#pills-profile" role="tab" onClick={() => this.handleHomeCodeChange(2)} aria-controls="pills-profile" aria-selected="false"><i className="fas fa-chart-bar"></i></a>
                                        </li>
                                        {/* <li className="nav-item">
                                            <a className="nav-link" id="pills-contact-tab" data-toggle="pill" href="#pills-contact" role="tab" onClick={() => this.handleHomeCodeChange(3)} aria-controls="pills-contact" aria-selected="false"><i className="fas fa-calendar-alt"></i></a>
                                        </li> */}
                                        <li className="nav-item">
                                            <a className="nav-link" id="pills-contact-tab" data-toggle="pill" href="#pills-contact" role="tab" onClick={() => this.handleHomeCodeChange(4)} aria-controls="pills-contact" aria-selected="false"><i className="fas fa-table"></i></a>
                                        </li>

                                    </ul>
                                </div>
                            </div>
                        </div>


                        <div id="myModalSearch" class="modal fade" role="dialog">
                            <div class="modal-dialog modal-lg">
                                <div class="modal-content">
                                    <div class="modal-body">
                                        <table className="table">
                                            <thead>
                                                <tr>
                                                <th>เล่มที่</th>
                                                <th>เลขที่</th>
                                                <th>ทะเบียนรถ</th>
                                                <th>จังหวัด</th>
                                                <th>สถานะ</th>
                                            </tr>


                                            </thead>
                                            <tbody>
                                                {
                                                    this.state.status_searching == true ? list_searching : ''
                                                }

                                            </tbody>
                                        </table>
                                    </div>
                                    <div class="modal-footer">
                                        <button type="button" class="btn btn-default" data-dismiss="modal">ปิด</button>
                                    </div>
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
                                            <ShowChart token={this.state.token} />
                                        </div>
                                        : this.state.button_check == 3 ?
                                            <div>
                                                <ShowCalendar />
                                            </div>
                                            : this.state.button_check == 4 ?
                                                <div>
                                                    <ShowTable token={this.state.token} />
                                                </div>
                                                :
                                                <div>

                                                </div>
                            }

                        </div>
                        <div className="card-footer bg-blue-lv1 p-0">&nbsp;</div>
                    </div>
                </div>
                {/* :
                        <div></div> */}





            </div>
        )
    }
}

export default Home;