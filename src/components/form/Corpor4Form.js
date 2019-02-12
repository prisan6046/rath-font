import React, { Component } from 'react'
import CarForm from './CarForm';

class Corpor4Form extends Component {
    render() {
        return(
            <div className="Corpor4Form">                                                    
                <div className="row">
                    <div className="col-lg-6">
                        <div className="card">
                            <div className="card-header bg-primary text-white">รายละเอียดคำสั่ง (คพ.๔)</div>
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
                            <div className="card-header bg-primary text-white">รายละเอียดอู่รถ</div>
                            <div className="card-body">
                                <div className="row mb-2">
                                    <div className="col-lg-4 border-right">
                                        <label htmlFor="type_check" className="col-form-label">อู่รถ</label>
                                    </div>
                                    <div className="col-lg-8">
                                    <select name="select_staff_check" id="select_staff_check" className="form-control bg-blue-lv3">
                                            <option value=""></option>                                        
                                        </select>
                                    </div>
                                </div>

                                <div className="row mb-2">
                                    <div className="col-lg-4 border-right">
                                        <label htmlFor="type_check" className="col-form-label">วัน/เวลาที่รถเข้าอู่</label>
                                    </div>
                                    <div className="col-lg-8">
                                    <select name="select_staff_check" id="select_staff_check" className="form-control bg-blue-lv3">
                                            <option value=""></option>                                        
                                        </select>
                                    </div>
                                </div>

                                <div className="row mb-2">
                                    <div className="col-lg-4 border-right">
                                        <label htmlFor="type_check" className="col-form-label">วัน/เวลาที่รถออกจากอู่</label>
                                    </div>
                                    <div className="col-lg-8">
                                    <select name="select_staff_check" id="select_staff_check" className="form-control bg-blue-lv3">
                                            <option value=""></option>                                        
                                        </select>
                                    </div>
                                </div>

                                <div className="row mb-2">
                                    <div className="col-lg-4 border-right">
                                        <label htmlFor="type_check" className="col-form-label">เวลาสิ้นสุดให้เคลื่อนย้าย</label>
                                    </div>
                                    <div className="col-lg-8">
                                    <select name="select_staff_check" id="select_staff_check" className="form-control bg-blue-lv3">
                                            <option value=""></option>                                        
                                        </select>
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

export default Corpor4Form;