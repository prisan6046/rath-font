import React, { Component } from 'react';
import axios from 'axios'
import { url } from '../../parameter/index'
import { Str_date } from '../libraries/DateThai';

class AddUser extends Component {

    constructor() {
        super()
        this.handleSubmit = this.handleSubmit.bind(this)
        this.state = {
            name: '',
            email : '',
            tel : '',
            point: '',
            support: '',
            username: '',
            Password: '',
            confpassword : '',
            edit : false,
            id : '',
            data_user: [],
            loading : false
        }

        this.handleNameChange = this.handleNameChange.bind(this)
        this.handlePointChange = this.handlePointChange.bind(this)
        this.handleSupportChange = this.handleSupportChange.bind(this)
        this.handleUserUserNameChange = this.handleUserUserNameChange.bind(this)
        this.handlePasswordChange = this.handlePasswordChange.bind(this)
        this.handleConfPasswordChange = this.handleConfPasswordChange.bind(this)
        this.handleEmailChanage = this.handleEmailChanage.bind(this)
        this.handleTelChanage = this.handleTelChanage.bind(this)
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
    handleConfPasswordChange(e) {
        this.setState({
            confpassword: e.target.value
        })
    }
    handleEmailChanage(e){
        this.setState({
            email : e.target.value
        })
    }
    handleTelChanage(e){
        this.setState({
            tel : e.target.value
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

    ActiveUserChange(e, user , status){
        if (window.confirm("คุณต้องการที่จะยืนยันชื่อ "+ user + " เป็น " +status + " หรือไม่")) {
            fetch(url+'/active_user?id=' + e+"&status="+status)
            .then((Response) => Response.json())
            .then((res) => {
                window.location.reload(); 
            }).catch((e)=>{
                alert("ผิดพลาดในการลบข้อมูลกรุณาติดต่อผู้พัฒนาระบบ")
            })
          }  
    }

    str_dataaa(e){

        return Str_date(e)
    }

    handleSubmit(event) {
        event.preventDefault();
        var formData = new FormData();

        
        if (this.state.name === '') { alert("กรุณากรอกข้อมูลให้ครบ"); return; }
        if (this.state.point === '') { alert("กรุณากรอกข้อมูลให้ครบ"); return; }
        if (this.state.support === '') { alert("กรุณากรอกข้อมูลให้ครบ"); return; }

        if (this.state.email === '') { alert("กรุณากรอกข้อมูลให้ครบ"); return; }
        if (this.state.tel === '') { alert("กรุณากรอกข้อมูลให้ครบ"); return; }

        formData.append('name', this.state.name);
        formData.append('point', this.state.point)
        formData.append('support', this.state.support);
        formData.append('user', this.state.username);
        formData.append('pass', this.state.password);

        formData.append('email', this.state.email);
        formData.append('phone', this.state.tel);
        formData.append('id', this.state.id);

        if(this.edit == false){
            if(this.state.password != this.state.confpassword){
                alert("รหัสผ่านไม่ตรงกัน กรุณาใส่ใหม่");
                return ;
            }
            axios.post(url+'/authRegister', formData).then(res => {
            
                if (res.data.status == 402) {
                    alert("เนื่องจาก  "+this.state.name +" มีอยู่ในระบบ กรุณาแก้ไขใหม่")
                    return ;
                }
                else if(res.data.status == 403){
                    alert("เนื่องจาก  "+this.state.username +" มีอยู่ในระบบ กรุณาแก้ไขใหม่")
                    return ;
                }else{
                    // alert("ท่านได้ลงทะเบียนสำเร็จแล้ว กรุณารอการยืนยันจากผู้ดูแลระบบ เพื่อใช้งานอย่างถูกต้อง")
                    alert("บันทึกสำเร็จ")
               
                    window.location.reload();
                }
    
            })
        }else{
            axios.post(url+'/edit_user_id', formData).then(res => {
            
               
                    // alert("ท่านได้ลงทะเบียนสำเร็จแล้ว กรุณารอการยืนยันจากผู้ดูแลระบบ เพื่อใช้งานอย่างถูกต้อง")
                    alert("บันทึกสำเร็จ")
                   
               
                    window.location.reload();
                
    
            })
        }
        
        
    }

    

    componentDidMount() {
        this.state.token = localStorage.getItem('token');
        fetch(url+'/get_all_user?token=' + this.state.token+ '&admin=admin')
            .then((Response) => Response.json())
            .then((res) => {
                // console.log(res)
                this.setState({
                    data_user : res,
                    loading : true
                })
            }).catch(()=>{
                
            })
    }


    getiduser(e){
        if(window.confirm("คุณต้องการแก้ไขข้อมูลหรือไม่")){

            this.setState({
                id : "",
                name : "",
                point : "",
                support : "",
                username : "",
                email : "",
                tel :""
            })


            fetch(url+'/get_user_id?id=' + e)
            .then((Response) => Response.json())
            .then((res) => {
               
                this.setState({
                    id : e,
                    name : res['name'],
                    point : res['point'],
                    support : res['support'],
                    username : res['user'],
                    email : res['email'],
                    tel : res['tel'],
                    edit : true
                })
            }).catch(()=>{
                
            })
        }
       
    }

    render() {

        let list_data_user = []
        let list_customer = []
        let list_actvice = []
        this.state.data_user.map((val, i) => {
            if(val.status != 'customer' && val.active =='true'){
                return list_data_user.push(
                    <tr key={i}>
                    
                        <td>{val.name}</td>
          
                        <td>{val.point}</td>
                        <td>{val.support}</td>
                        <td>{val.email}</td>
                        <td>{val.phone}</td>
                        <td>{val.status}</td>
                        <td><button className="btn btn-primary" onClick={() => this.deluserChange(val._id.$oid , val.name)}>ลบข้อมูล</button>&nbsp;&nbsp;
                        <button className="btn btn-success" onClick={()=> this.getiduser(val._id.$oid)} >แก้ไข</button></td>
                    </tr>
                )
            }else if(val.status != 'customer' && val.active == 'false'){
                return list_actvice.push(
                    <tr key={i}>
                    
                        <td>{val.name}</td>
          
                        <td>{val.point}</td>
                        <td>{val.support}</td>
                        <td>{val.email}</td>
                        <td>{val.user}</td>
                        <td>{val.phone}</td>
                        
                        <td><button className="btn btn-primary" onClick={() => this.ActiveUserChange(val._id.$oid , val.name , 'User')}>ยืนยันเป็นสถานะ User</button>&nbsp;&nbsp;
                        <button className="btn btn-primary" onClick={() => this.ActiveUserChange(val._id.$oid , val.name , 'Admin')}>ยืนยันเป็นสถานะ Admin</button>&nbsp;&nbsp;
                        <button className="btn btn-danger" onClick={() => this.deluserChange(val._id.$oid , val.name)}>ลบข้อมูล</button>
                        </td>
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
                                                                    <label htmlFor="avg_check" className="col-form-label">email </label>
                                                                </div>
                                                                <div className="col-lg-9">
                                                                    <input type="text" className="form-control bg-blue-lv3 w-50" value={this.state.email} onChange={this.handleEmailChanage} name="avg_check" id="avg_check" />
                                                                   
                                                                </div>
                                                            </div>

                                                            <div className="row mb-2">
                                                                <div className="col-lg-3 border-right">
                                                                    <label htmlFor="avg_check" className="col-form-label">เบอร์โทรศัพท์ </label>
                                                                </div>
                                                                <div className="col-lg-9">
                                                                    <input type="text" className="form-control bg-blue-lv3 w-50" value={this.state.tel} onChange={this.handleTelChanage} name="avg_check" id="avg_check" />
                                                                   
                                                                </div>
                                                            </div>



                                                            <div className="row mb-2">
                                                                <div className="col-lg-3 border-right">
                                                                    <label htmlFor="avg_check" className="col-form-label">Username </label>
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

                                                            <div className="row mb-2">
                                                                <div className="col-lg-3 border-right">
                                                                    <label htmlFor="avg_check" className="col-form-label"> Confirm Password</label>
                                                                </div>
                                                                <div className="col-lg-9">
                                                                    <input type="password" className="form-control bg-blue-lv3 w-50" value={this.state.confpassword} onChange={this.handleConfPasswordChange} name="avg_check" id="avg_check" />
                                                                   
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

                                                    <ul class="nav nav-tabs">
                                                        <li><a data-toggle="tab" className="btn btn-primary" href="#home">ตรวจสอบผู้สมัครล่าสุด</a></li>
                                                        <li><a data-toggle="tab" href="#menu1" className="btn btn-primary">รายชื่อผู้อนุมัติแล้ว</a></li>
                                                       
                                                        </ul>

                                                        <div class="tab-content">
                                                        <div id="home" class="tab-pane fade in active">
                                                        <div className="row">
                                                            <div className="col-lg-12">
                                                                <div className="CarForm">
                                                                    <div className="card">
                                                                        <div className="card-header bg-primary text-white">รายชื่อผู้ขอใช้งาน</div>
                                                                        <div className="card-body">
                                                                            <table className="table table-bordered">
                                                                                <thead>
                                                                                    <tr>
                                                                                        
                                                                                        <th>ผู้ใช้งาน</th>
                            
                                                                                        <th>ตำแหน่ง</th>
                                                                                        <th>สังกัด</th>
                                                                                        <th>email</th>
                                                                                        <th>username</th>
                                                                                        <th>เบอร์โทรศัพท์</th>
                                                                                    </tr>
                                                                                </thead>
                                                                                <tbody>
                                                                                    { this.state.loading == true ? list_actvice:'' }
                                                                                </tbody>
                                                                            </table>

                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        </div>
                                                        <div id="menu1" class="tab-pane fade">
                                                        <div className="row">
                                                            <div className="col-lg-12">
                                                                <div className="CarForm">
                                                                    <div className="card">
                                                                        <div className="card-header bg-primary text-white">รายชื่อผู้อนุมัติแล้ว</div>
                                                                        <div className="card-body">
                                                                            <table className="table table-bordered">
                                                                                <thead>
                                                                                    <tr>
                                                                                        
                                                                                        <th>ผู้ใช้งาน</th>
                            
                                                                                        <th>ตำแหน่ง</th>
                                                                                        <th>สังกัด</th>
                                                                                        <th>email</th>
                                                                                        <th>เบอร์โทรศัพท์</th>
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
                </div>



           
           
           
           
           
            </div>


        )
    }

}

export default AddUser