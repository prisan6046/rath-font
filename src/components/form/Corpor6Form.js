import React, { Component } from 'react'
import CarForm from './CarForm';

class Corpor6Form extends Component {
    render() {
        return(
            <div className="Corpor6Form">                                                    
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
                                        <input type="text" className="form-control bg-blue-lv3" name="book_no" id="book_no"/>
                                    </div>
                                </div>

                                <div className="row mb-2">
                                    <div className="col-lg-4 border-right">
                                        <label htmlFor="book_no" className="col-form-label">เล่มที่</label>
                                    </div>
                                    <div className="col-lg-8">
                                        <input type="text" className="form-control bg-blue-lv3" name="book_no" id="book_no"/>
                                    </div>
                                </div>

                                <div className="row mb-2">
                                    <div className="col-lg-4 border-right">
                                        <label htmlFor="date_check" className="col-form-label">วันที่ตรวจสอบ</label>
                                    </div>
                                    <div className="col-lg-8">
                                        <input type="date" className="form-control bg-blue-lv3" name="date_check" id="date_check"/>
                                    </div>
                                </div>

                                <div className="row mb-2">
                                    <div className="col-lg-4 border-right">
                                        <label htmlFor="location_check" className="col-form-label">สถานที่ตรวจสอบ</label>
                                    </div>
                                    <div className="col-lg-8">
                                        <input type="text" className="form-control bg-blue-lv3" name="location_check" id="location_check"/>
                                    </div>
                                </div>

                                <div className="row mb-2">
                                    <div className="col-lg-4 border-right">
                                        <label htmlFor="staff_check" className="col-form-label">เจ้าหน้าที่ผู้ตรวจสอบ</label>
                                    </div>
                                    <div className="col-lg-8">
                                        <input type="text" className="form-control bg-blue-lv3 mb-1" name="staff_check" id="staff_check" placeholder="นาย, นาง, นางสาว, ยศ"/>
                                        <select name="select_staff_check" id="select_staff_check" className="form-control bg-blue-lv3">
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
                        {/* /.card */}
                        </div>                                            
                    {/* /.col */}
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
                                        <input type="radio" name="type_check" id="1"/> <label className="mb-0" htmlFor="1">ควันดำ</label> <br/>
                                        <input type="radio" name="type_check" id="2"/> <label className="mb-0" htmlFor="2">เสียงดัง</label> <br/>
                                        <input type="radio" name="type_check" id="3"/> <label className="mb-0" htmlFor="3">ไฮโดรคาร์บอน</label> <br/>
                                        <input type="radio" name="type_check" id="4"/> <label className="mb-0" htmlFor="4">คาร์บอนไดออกไซด์</label>
                                    </div>
                                </div>

                                <div className="row mb-2">
                                    <div className="col-lg-4 border-right">
                                        <label htmlFor="avg_check" className="col-form-label">ค่าที่วัดได้</label>
                                    </div>
                                    <div className="col-lg-8">
                                        <input type="text" className="form-control bg-blue-lv3" name="avg_check" id="avg_check"/>
                                    </div>
                                </div>

                                <div className="row mb-2">
                                    <div className="col-lg-4 border-right">
                                        <label htmlFor="type_check" className="col-form-label">วัน/เวลาที่คำสั่งมีผล</label>
                                    </div>
                                    <div className="col-lg-8">
                                        <input type="date" className="form-control bg-blue-lv3" name="date_check" id="date_check"/>
                                    </div>
                                </div>
                            </div>
                        {/* /.card */}
                        </div>
                    {/* /.col */}
                    </div>
                {/* /.row */}
                </div>
                <hr/>
                <div className="row">
                    <div className="col-lg-12">                                            
                        <CarForm />
                    {/* /.col */}
                    </div>
                </div>
            </div>            
        )
    }
}

export default Corpor6Form;