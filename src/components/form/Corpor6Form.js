import React, { Component } from 'react'
import CarForm from './CarForm';
import axios from 'axios';

class Corpor6Form extends Component {

    constructor(){
        super()
        this.state = {
            book_no : '',
            order_no : '',
            date_out : '',
            location_out: '',
            staff_out: '',
            staff_id : '',
            type_check : '',
            val_now : '',
            date_now : ''

        }

        this.handleBookOnChange = this.handleBookOnChange.bind(this)
        this.handleOrderNoChange = this.handleOrderNoChange.bind(this)
        this.handleDateOutChange = this.handleDateOutChange.bind(this)
        this.handleLocationOutChange = this.handleLocationOutChange.bind(this)
        this.handleStaffOutChange = this.handleStaffOutChange.bind(this)
        this.handleTypeCheckChange = this.handleTypeCheckChange.bind(this)
        this.handleValNowChange = this.handleValNowChange.bind(this)
        this.handleDateNowChange = this.handleDateNowChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleStaffIdChange = this.handleStaffIdChange.bind(this)

    }

    handleBookOnChange(e){
        this.setState({
            book_no : e.target.value
        })
    }

    handleOrderNoChange(e){
        this.setState({
            order_no : e.target.value
        })
    }

    handleDateOutChange(e){
        this.setState({
            date_out : e.target.value
        })
    }

    handleLocationOutChange(e){
        this.setState({
            location_out : e.target.value
        })
    }

    handleStaffOutChange(e){
        this.setState({
            staff_out : e.target.value
        })
    }

    handleTypeCheckChange(e){
        this.setState({
            type_check : e.target.value
        })
    }

    handleValNowChange(e){
        this.setState({
            val_now : e.target.value
        })
    }
    handleDateNowChange(e){
        this.setState({
            date_now : e.target.value
        })
    }
    handleStaffIdChange(e){
        this.setState({
            staff_id : e.target.value
        })
    }


    handleSubmit(event) {
        event.preventDefault();
        this.state.project_id = localStorage.getItem('project_id');
        var formData = new FormData();
        formData.append('project_id', this.state.project_id);
        formData.append('book_no', this.state.book_no);
        formData.append('order_no' , this.state.order_no)
        formData.append('date_out', this.state.date_out);
        formData.append('location_out', this.state.location_out);
        formData.append('staff_out', this.state.staff_out);
        formData.append('type_check', this.state.type_check);
        formData.append('val_now', this.state.val_now);
        formData.append('date_now', this.state.date_now);
        formData.append('staff_id', this.state.staff_id);

        axios.post('http://34.73.123.38/api/token/carForm_four', formData, {
            onUploadProgress: ProgressEvent => {
                this.setState({ loaded: 'upload'})
            },
        }).then(res => {
            console.log(res)
            alert("บันทึกสำเร็จ")
        })
    }

    render() {
        return(
            <div className="Corpor6Form">   
                <br />
                <a href="http://localhost:3001/pdf_four"> <button type="button" className="btn btn-primary">พิมพ์เอกสาร (คพ.๖)</button></a>
                <br />
                <br />
                <form onSubmit={this.handleSubmit} >                                                 
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="card">
                                <div className="card-header bg-primary text-white">รายละเอียดคำสั่ง (คพ.๖)</div>
                                <div className="card-body">
                                    <div className="row mb-2">
                                        <div className="col-lg-4 border-right">
                                            <label htmlFor="book_no" className="col-form-label">เล่มที่</label>
                                        </div>
                                        <div className="col-lg-8">
                                            <input type="text" className="form-control bg-blue-lv3" value={this.state.book_no} onChange={this.handleBookOnChange} name="book_no" id="book_no"/>
                                        </div>
                                    </div>

                                    <div className="row mb-2">
                                        <div className="col-lg-4 border-right">
                                            <label htmlFor="book_no" className="col-form-label">เลขที่</label>
                                        </div>
                                        <div className="col-lg-8">
                                            <input type="text" className="form-control bg-blue-lv3" value={this.state.order_no} onChange={this.handleOrderNoChange} name="book_no" id="book_no"/>
                                        </div>
                                    </div>

                                    <div className="row mb-2">
                                        <div className="col-lg-4 border-right">
                                            <label htmlFor="date_check" className="col-form-label">วันที่ออกคำสั่งยกเลิก</label>
                                        </div>
                                        <div className="col-lg-8">
                                            <input type="date" className="form-control bg-blue-lv3" value={this.state.date_out} onChange={this.handleDateOutChange} name="date_check" id="date_check"/>
                                        </div>
                                    </div>

                                    <div className="row mb-2">
                                        <div className="col-lg-4 border-right">
                                            <label htmlFor="location_check" className="col-form-label">สถานที่ออกคำสั่งยกเลิก</label>
                                        </div>
                                        <div className="col-lg-8">
                                            <input type="text" className="form-control bg-blue-lv3" value={this.state.location_out} onChange={this.handleLocationOutChange} name="location_check" id="location_check"/>
                                        </div>
                                    </div>

                                    <div className="row mb-2">
                                        <div className="col-lg-4 border-right">
                                            <label htmlFor="staff_check" className="col-form-label">ผู้ออกคำสั่งยกเลิก</label>
                                        </div>
                                        <div className="col-lg-8">
                                            <input type="text" className="form-control bg-blue-lv3 mb-1" name="staff_check" value={this.state.staff_out} onChange={this.handleStaffOutChange}  id="staff_check" placeholder="นาย, นาง, นางสาว, ยศ"/>
                                            <select name="select_staff_check" id="select_staff_check" onClick={this.handleStaffChange} className="form-control bg-blue-lv3">
                                                <option value=""></option>
                                                <option value="">จ.ส.ต.ธนา ขันอุไร</option>
                                            </select>
                                        </div>
                                    </div>

                                    <div className="row mb-2">
                                        <div className="col-lg-4 border-right">
                                            <label htmlFor="position" className="col-form-label">ตำแหน่ง</label>
                                        </div>
                                        <div className="col-lg-8">
                                            <input type="text" className="form-control bg-blue-lv3" name="position" id="position"/>
                                        </div>
                                    </div>

                                    <div className="row mb-2">
                                        <div className="col-lg-4 border-right">
                                            <label htmlFor="under" className="col-form-label">สังกัด</label>
                                        </div>
                                        <div className="col-lg-8">
                                            <input type="text" className="form-control bg-blue-lv3" name="under" id="under"/>
                                        </div>
                                    </div>
                                </div>
                            </div>                                            
                        </div>

                        <div className="col-lg-6">                                            
                            <div className="card">
                                <div className="card-header bg-primary text-white">รายละเอียดการยกเลิกคำสั่ง</div>
                                <div className="card-body">
                                    <div className="row mb-2">
                                        <div className="col-lg-4 border-right">
                                            <label htmlFor="type_check" className="col-form-label">ประเภทการตรวจ</label>
                                        </div>
                                        <div className="col-lg-8">
                                            <input type="radio" name="type_check" id="1" defaultChecked={this.state.type_check === '1'} onChange={this.handleTypeCheckChange} /> <label className="mb-0" htmlFor="1">ควันดำ</label> <br/>
                                            <input type="radio" name="type_check" id="2" defaultChecked={this.state.type_check === '2'} onChange={this.handleTypeCheckChange} /> <label className="mb-0" htmlFor="2">เสียงดัง</label> <br/>
                                            <input type="radio" name="type_check" id="3" defaultChecked={this.state.type_check === '3'} onChange={this.handleTypeCheckChange} /> <label className="mb-0" htmlFor="3">ไฮโดรคาร์บอน</label> <br/>
                                            <input type="radio" name="type_check" id="4" defaultChecked={this.state.type_check === '4'} onChange={this.handleTypeCheckChange} /> <label className="mb-0" htmlFor="4">คาร์บอนไดออกไซด์</label>
                                        </div>
                                    </div>

                                    <div className="row mb-2">
                                        <div className="col-lg-4 border-right">
                                            <label htmlFor="avg_check" className="col-form-label">ค่าที่วัดได้</label>
                                        </div>
                                        <div className="col-lg-8">
                                            <input type="text" className="form-control bg-blue-lv3" value={this.state.val_now} onChange={this.handleValNowChange} name="avg_check" id="avg_check"/>
                                        </div>
                                    </div>

                                    <div className="row mb-2">
                                        <div className="col-lg-4 border-right">
                                            <label htmlFor="type_check" className="col-form-label">วัน/เวลาที่คำสั่งมีผล</label>
                                        </div>
                                        <div className="col-lg-8">
                                            <input type="date" className="form-control bg-blue-lv3" name="date_check" value={this.state.date_now} onChange={this.handleDateNowChange} id="date_check"/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <hr/>
                    <div className="row">
                        <div className="col-lg-12">                                            
                            <CarForm />
                        </div>
                    </div>
                    <br />
                    <div className="col-lg-12">
                        <center><button className="btn btn-primary">บันทึก (คพ.๖)</button></center>
                    </div>
                </form>
            </div>            
        )
    }
}

export default Corpor6Form;