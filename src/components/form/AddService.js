import React, { Component } from 'react';
import axios from 'axios'

class AddService extends Component {

    constructor() {
        super()
        this.handleSubmit = this.handleSubmit.bind(this)
        this.state = {
            name_service : '',
            data_servicecar : [],
            loading : false
        }
        this.handleNameServiceChange = this.handleNameServiceChange.bind(this)

       
    }

    handleNameServiceChange(e) {
        this.setState({
            name_service: e.target.value
        })
    }
   
    handleSubmit(event) {
        event.preventDefault();
        var formData = new FormData();
        formData.append('name_service', this.state.name_service);
        
        axios.post('http://34.73.123.38/api/token/add_service', formData).then(res => {
            alert("บันทึกสำเร็จ")
            // this.setState({ 
            //     name_service: '' 
            // })
            this.props.history.push("/addservicecar")

           
        })
    }

    componentDidMount() {
        this.state.token = localStorage.getItem('token');
        fetch('http://34.73.123.38/api/token/get_service?token=' + this.state.token)
            .then((Response) => Response.json())
            .then((res) => {
                this.setState({
                    data_servicecar : res,
                    loading : true
                })
            })
    }

    render() {

        let list_data_user = []
        this.state.data_servicecar.map((val, i) => {
            return list_data_user.push(
                <tr key={i}>
                    <td>{ i+1 }</td>
                    <td>{val.name_service}</td>
                    <td>{val.create_time}</td>
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
                                                        <div className="card-header bg-primary text-white">อู่รถ</div>
                                                        <div className="card-body">
                                                            <div className="row mb-2">
                                                                <div className="col-lg-3 border-right">
                                                                    <label htmlFor="avg_check" className="col-form-label">ชื่ออู่</label>
                                                                </div>
                                                                <div className="col-lg-9">
                                                                    <input type="text" className="form-control bg-blue-lv3 w-50" value={this.state.name_service} onChange={this.handleNameServiceChange} name="avg_check" id="avg_check" />
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
                                                                        <div className="card-header bg-primary text-white">รายชื่ออู่</div>
                                                                        <div className="card-body">
                                                                            <table className="table table-bordered">
                                                                                <thead>
                                                                                    <tr>
                                                                                        <th>ลำดับ</th>
                                                                                        <th>ชื่ออู่</th>
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

export default AddService