import React, { Component } from 'react';
import axios from 'axios'

class AddUser extends Component {

    constructor() {
        super()
        this.handleSubmit = this.handleSubmit.bind(this)
        this.state = {
            name: '',
            point: '',
            support: '',
            username: '',
            Password: '',
            data_user: [],
            loading : false
        }

        this.handleNameChange = this.handleNameChange.bind(this)
        this.handlePointChange = this.handlePointChange.bind(this)
        this.handleSupportChange = this.handleSupportChange.bind(this)
        this.handleUserUserNameChange = this.handleUserUserNameChange.bind(this)
        this.handlePasswordChange = this.handlePasswordChange.bind(this)
    }

    handleNameChange(e) {
        this.setState({
            name: e.target.value
        })
    }
    handlePointChange(e) {
        this.setState({
            point: e.target.value
        })
    }

    handleSupportChange(e) {
        this.setState({
            support: e.target.value
        })
    }
    handleUserUserNameChange(e) {
        this.setState({
            username: e.target.value
        })
    }
    handlePasswordChange(e) {
        this.setState({
            password: e.target.value
        })
    }

    handleSubmit(event) {
        event.preventDefault();
        var formData = new FormData();
        formData.append('name', this.state.name);
        formData.append('point', this.state.point)
        formData.append('support', this.state.support);
        formData.append('user', this.state.username);
        formData.append('pass', this.state.password);

        axios.post('http://34.73.123.38/api/token/authRegister', formData).then(res => {
            alert("บันทึกสำเร็จ")
            this.setState({ name: '' })
            this.setState({ point: '' })
            this.setState({ support: '' })
            this.setState({ username: '' })
            this.setState({ password: '' })
        })
    }

    componentDidMount() {
        this.state.token = localStorage.getItem('token');
        fetch('http://34.73.123.38/api/token/get_all_user?token=' + this.state.token)
            .then((Response) => Response.json())
            .then((res) => {
                this.setState({
                    data_user : res,
                    loading : true
                })
            })
    }

    render() {

        let list_data_user = []
        this.state.data_user.map((val, i) => {
            return list_data_user.push(
                <tr key={i}>
                    <td>{ i+1 }</td>
                    <td>{val.name}</td>
                    <td>{val.status}</td>
                    <td>{val.create}</td>
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
                                                        <div className="card-header bg-primary text-white">ผู้ใช้งาน</div>
                                                        <div className="card-body">
                                                            <div className="row mb-2">
                                                                <div className="col-lg-3 border-right">
                                                                    <label htmlFor="avg_check" className="col-form-label">ชื่อเจ้าหน้าที่</label>
                                                                </div>
                                                                <div className="col-lg-9">
                                                                    <input type="text" className="form-control bg-blue-lv3 w-50" value={this.state.name} onChange={this.handleNameChange} name="avg_check" id="avg_check" />
                                                                </div>
                                                            </div>

                                                            <div className="row mb-2">
                                                                <div className="col-lg-3 border-right">
                                                                    <label htmlFor="avg_check" className="col-form-label">ตำแหน่ง</label>
                                                                </div>
                                                                <div className="col-lg-9">
                                                                    <input type="text" className="form-control bg-blue-lv3 w-50" value={this.state.point} onChange={this.handlePointChange} name="avg_check" id="avg_check" />
                                                                </div>
                                                            </div>

                                                            <div className="row mb-2">
                                                                <div className="col-lg-3 border-right">
                                                                    <label htmlFor="avg_check" className="col-form-label">สังกัด</label>
                                                                </div>
                                                                <div className="col-lg-9">
                                                                    <input type="text" className="form-control bg-blue-lv3 w-50" value={this.state.support} onChange={this.handleSupportChange} name="avg_check" id="avg_check" />
                                                                </div>
                                                            </div>

                                                            <div className="row mb-2">
                                                                <div className="col-lg-3 border-right">
                                                                    <label htmlFor="avg_check" className="col-form-label">Username</label>
                                                                </div>
                                                                <div className="col-lg-9">
                                                                    <input type="text" className="form-control bg-blue-lv3 w-50" value={this.state.username} onChange={this.handleUserUserNameChange} name="avg_check" id="avg_check" />
                                                                </div>
                                                            </div>

                                                            <div className="row mb-2">
                                                                <div className="col-lg-3 border-right">
                                                                    <label htmlFor="avg_check" className="col-form-label">Password</label>
                                                                </div>
                                                                <div className="col-lg-9">
                                                                    <input type="password" className="form-control bg-blue-lv3 w-50" value={this.state.password} onChange={this.handlePasswordChange} name="avg_check" id="avg_check" />
                                                                </div>
                                                            </div>
                                                        </div>

                                                    </div>
                                                    <br />
                                                    <div className="col-lg-12">
                                                        <center><button className="btn btn-primary">บันทึก (คพ.๓)</button></center>
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
                                                                        <div className="card-header bg-primary text-white">รายชื่อผู้ใช้งาน</div>
                                                                        <div className="card-body">
                                                                            <table className="table table-bordered">
                                                                                <thead>
                                                                                    <tr>
                                                                                        <th>ลำดับ</th>
                                                                                        <th>ผู้ใช้งาน</th>
                                                                                        <th>สถานะ</th>
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

export default AddUser