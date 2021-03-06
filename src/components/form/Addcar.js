import React, { Component } from 'react';
import axios from 'axios'
import { url } from './../../parameter/index'


class Addcar extends Component {

    constructor() {
        super()
        this.handleSubmit = this.handleSubmit.bind(this)
        this.state = {
            name_location : '',
            data_location : [],
            loading : false
        }
        this.handleNameLocationChange = this.handleNameLocationChange.bind(this)

       
    }

    handleNameLocationChange(e) {
        this.setState({
            name_location: e.target.value
        })
    }
   
    handleSubmit(event) {
        event.preventDefault();
        var formData = new FormData();
        formData.append('name_car', this.state.name_location);
        
        axios.post(url+'/add_car', formData).then(res => {
            alert("บันทึกสำเร็จ")
            // this.setState({ 
            //     name_service: '' 
            // })
            this.props.history.push("/addcar")

           
        })
    }

    componentDidMount() {
        this.state.token = localStorage.getItem('token');
        fetch(url+'/get_car?token=' + this.state.token)
            .then((Response) => Response.json())
            .then((res) => {
           
                this.setState({
                    data_location : res,
                    loading : true
                })
            })
    }

    deluserChange(e, user){
        if (window.confirm("คุณต้องการที่จะลบชื่อ "+ user + " หรือไม่")) {
            fetch(url+'/del_car?id=' + e)
            .then((Response) => Response.json())
            .then((res) => {
                window.location.reload(); 
            }).catch((e)=>{
                alert("ผิดพลาดในการลบข้อมูลกรุณาติดต่อผู้พัฒนาระบบ")
            })
          } 
        
    }

    render() {

        let list_data_user = []
        this.state.data_location.map((val, i) => {
            return list_data_user.push(
                <tr key={i}>
                    <td>{ i+1 }</td>
                    <td>{val.name_car}</td>
                    <td>{val.create_time}</td>
                    <td><button className="btn btn-primary" onClick={() => this.deluserChange(val._id.$oid , val.name_car)}>ลบข้อมูล</button></td>
                </tr>
            )
        })
        return (
            <div className="Add">

                <div className="container-fluid py-4">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="card">
                                <div className="card-body">
                                    <div className="row mb-2">
                                        <div className="col-lg-12">
                                            <div className="CarForm">
                                                <form onSubmit={this.handleSubmit} >
                                                    <div className="card">
                                                        <div className="card-header bg-primary text-white">ยี่ห้อรถ</div>
                                                        <div className="card-body">
                                                            <div className="row mb-2">
                                                                <div className="col-lg-3 border-right">
                                                                    <label htmlFor="avg_check" className="col-form-label">ชื่อ</label>
                                                                </div>
                                                                <div className="col-lg-9">
                                                                    <input type="text" className="form-control bg-blue-lv3 w-50" value={this.state.name_location} onChange={this.handleNameLocationChange} name="avg_check" id="avg_check" />
                                                                </div>
                                                            </div>

                                                        </div>

                                                    </div>
                                                    <br />
                                                    <div className="col-lg-12">
                                                        <center><button className="btn btn-primary">บันทึก</button></center>
                                                    </div>
                                                </form>

                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
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
                                                                        <div className="card-header bg-primary text-white">รายชื่อยี่ห้อรถ</div>
                                                                        <div className="card-body">
                                                                            <table className="table table-bordered">
                                                                                <thead>
                                                                                    <tr>
                                                                                        <th>ลำดับ</th>
                                                                                        <th>ชื่อยี่ห้อ</th>
                                                                                        <th>สร้างวันที่</th>
                                                                                    </tr>
                                                                                </thead>
                                                                                <tbody>
                                                                                    { this.state.loading == true ? list_data_user:'' }
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

export default Addcar