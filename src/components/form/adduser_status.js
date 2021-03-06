import React, { Component } from 'react';
import axios from 'axios'
import { url } from '../../parameter/index'

class AddUserStatus extends Component {

    constructor() {
        super()
        this.handleSubmit = this.handleSubmit.bind(this)
        this.state = {
            name: '',
            point: '',
            support: '',

            data_user: [],
            loading : false,
            data_under : []
        }

        this.handleNameChange = this.handleNameChange.bind(this)
        this.handlePointChange = this.handlePointChange.bind(this)
        this.handleSupportChange = this.handleSupportChange.bind(this)
        this.handleStaffCheckIdChange = this.handleStaffCheckIdChange.bind(this)

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


    deluserChange(e, user){
        if (window.confirm("คุณต้องการที่จะลบชื่อ "+ user + " หรือไม่")) {
            fetch(url+'/del_user_id?id=' + e)
            .then((Response) => Response.json())
            .then((res) => {
                window.location.reload(); 
            }).catch((e)=>{
                alert("ผิดพลาดในการลบข้อมูลกรุณาติดต่อผู้พัฒนาระบบ")
            })
          } 
        
    }

    handleSubmit(event) {
        event.preventDefault();
        var formData = new FormData();
        if (this.state.name === '') { alert("กรุณากรอกข้อมูลให้ครบ"); return; }
        if (this.state.point === '') { alert("กรุณากรอกข้อมูลให้ครบ"); return; }
        if (this.state.support === '') { alert("กรุณากรอกข้อมูลให้ครบ"); return; }

        formData.append('name', this.state.name);
        formData.append('point', this.state.point)
        formData.append('support', this.state.support);
        
        axios.post(url+'/authRegisterCustomer', formData).then(res => {
            alert("บันทึกสำเร็จ")
            this.setState({ name: '' })
            this.setState({ point: '' })
            this.setState({ support: '' })

            window.location.reload(); 
        })
        
    }

    

    componentDidMount() {
        this.state.token = localStorage.getItem('token');
        fetch(url+'/get_all_user?token=' + this.state.token+ '&admin=admin')
            .then((Response) => Response.json())
            .then((res) => {
                this.setState({
                    data_user : res,
                    loading : true
                })
            }).catch(()=>{
                
            })
        
        fetch(url+'/get_under?token=' + this.state.token)
            .then((Response) => Response.json())
            .then((res) => {
        
                this.setState({
                    data_under : res,
                    loading : true
                })
            }).catch((e)=>{
                
            })
    }

    handleStaffCheckIdChange(e) {
        this.setState({
            support: e.target.value
        })
      
    }

    render() {

        let list_under = []
        this.state.data_under.map((val, i) => {
            return list_under.push(
                <option key={i} value={val.name}>{val.name}</option>
            )
        })


        let list_data_user = []
        this.state.data_user.map((val, i) => {
            if(val.status == 'customer'){
                return list_data_user.push(
                    <tr key={i}>
                    
                        <td>{val.name}</td>
          
                        <td>{val.create}</td>
                        <td><button className="btn btn-primary" onClick={() => this.deluserChange(val._id.$oid , val.name)}>ลบข้อมูล</button></td>
                    </tr>
                )
            }
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
                                                        <div className="card-header bg-primary text-white">ผู้ออกคำสั่ง</div>
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
                                                                    <select className="form-control bg-blue-lv3 w-50" name="avg_check" id="avg_check"  onChange={this.handleStaffCheckIdChange} >
                                                                        <option value=""></option>
                                                                        {
                                                                            list_under
                                                                        }
                                                                    </select>
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
                                                                        <div className="card-header bg-primary text-white">รายชื่อผู้ออกคำสั่ง</div>
                                                                        <div className="card-body">
                                                                            <table className="table table-bordered">
                                                                                <thead>
                                                                                    <tr>
                                                                                    
                                                                                        <th>ผู้ใช้งาน</th>
                                                                                        <th>สร้างวันที่</th>
                                                                                        <th></th>
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

export default AddUserStatus