import React from 'react'

const CarForm = () => {
    return(
        <div className="CarForm">
            <div className="card">
                <div className="card-header bg-primary text-white">ข้อมูลยานพาหนะ</div>
                    <div className="card-body">
                        <div className="row mb-2">
                            <div className="col-lg-3 border-right">
                                <label htmlFor="type_check" className="col-form-label">ประเภทยานพาหนะ</label>
                            </div>
                            <div className="col-lg-9">
                                <input type="radio" name="type_check" id="1"/> <label className="mb-0" htmlFor="1">รถยนต์</label> <br/>
                                <input type="radio" name="type_check" id="2"/> <label className="mb-0" htmlFor="2">รถยนต์สามล้อใช้งาน</label> <br/>
                                <input type="radio" name="type_check" id="3"/> <label className="mb-0" htmlFor="3">รถจักรยานยนต์</label> <br/>
                                <input type="radio" name="type_check" id="4"/> <label className="mb-0" htmlFor="4">เรือ</label>
                            </div>
                        </div>

                        <div className="row mb-2">
                            <div className="col-lg-3 border-right">
                                <label htmlFor="avg_check" className="col-form-label text-danger">ทะเบียนรถ</label>
                            </div>
                            <div className="col-lg-9">
                                <input type="text" className="form-control bg-blue-lv3 w-50" name="avg_check" id="avg_check" placeholder="กก1234"/>
                            </div>
                        </div>

                        <div className="row mb-2">
                            <div className="col-lg-3 border-right">
                                <label htmlFor="avg_check" className="col-form-label">ทะเบียนรถจังหวัด</label>
                            </div>
                            <div className="col-lg-9">
                                <select className="form-control bg-blue-lv3 w-50" name="avg_check" id="avg_check">
                                    <option value=""></option>
                                </select>                                                            
                            </div>
                        </div>

                        <div className="row mb-2">
                            <div className="col-lg-3 border-right">
                                <label htmlFor="avg_check" className="col-form-label text-danger">ยี่ห้อยานพาหนะ</label>
                            </div>
                            <div className="col-lg-9">
                                <select className="form-control bg-blue-lv3 w-50" name="avg_check" id="avg_check">
                                    <option value=""></option>
                                </select>                                                            
                            </div>
                        </div>

                        <div className="row mb-2">
                            <div className="col-lg-3 border-right">
                                <label htmlFor="avg_check" className="col-form-label">สี</label>
                            </div>
                            <div className="col-lg-9">
                                <input type="text" className="form-control bg-blue-lv3 w-50" name="avg_check" id="avg_check" placeholder="กก1234"/>
                            </div>
                        </div>

                        <div className="row mb-2">
                            <div className="col-lg-3 border-right">
                                <label htmlFor="avg_check" className="col-form-label">ยี่ห้อเครื่องยนต์</label>
                            </div>
                            <div className="col-lg-9">
                                <select className="form-control bg-blue-lv3 w-50" name="avg_check" id="avg_check">
                                    <option value=""></option>
                                </select>                                                            
                            </div>
                        </div>

                        <div className="row mb-2">
                            <div className="col-lg-3 border-right">
                                <label htmlFor="type_check" className="col-form-label">ประเภทเครื่องยนต์</label>
                            </div>
                            <div className="col-lg-9">
                                <input type="radio" name="type_check" id="1"/> <label className="mb-0" htmlFor="1">น้ำมันดีเซล</label> <br/>
                                <input type="radio" name="type_check" id="2"/> <label className="mb-0" htmlFor="2">น้ำมันเบนซิน</label> <br/>
                                <input type="radio" name="type_check" id="3"/> <label className="mb-0" htmlFor="3">ไฟฟ้า</label> <br/>
                                <input type="radio" name="type_check" id="4"/> <label className="mb-0" htmlFor="4">ไฮบริด</label>
                            </div>
                        </div>

                        <div className="row mb-2">
                            <div className="col-lg-3 border-right">
                                <label htmlFor="type_check" className="col-form-label">ประเภทเชื้อเพลิง</label>
                            </div>
                            <div className="col-lg-9">
                                <input type="radio" name="type_check" id="1"/> <label className="mb-0" htmlFor="1">น้ำมันดีเซล</label> <br/>
                                <input type="radio" name="type_check" id="2"/> <label className="mb-0" htmlFor="2">น้ำมันเบนซิน</label> <br/>
                                <input type="radio" name="type_check" id="2"/> <label className="mb-0" htmlFor="2">ก๊าซธรรมชาติ</label> <br/>
                                <input type="radio" name="type_check" id="3"/> <label className="mb-0" htmlFor="3">ไฟฟ้า</label> <br/>
                                <input type="radio" name="type_check" id="4"/> <label className="mb-0" htmlFor="4">ไฮบริด</label>
                            </div>
                        </div>

                        <div className="row mb-2">
                            <div className="col-lg-3 border-right">
                                <label htmlFor="staff_check" className="col-form-label">ผู้ขับ</label>
                            </div>
                            <div className="col-lg-9">
                                <input type="text" className="form-control bg-blue-lv3 mb-1 w-50" name="staff_check" id="staff_check" placeholder="นาย, นาง, นางสาว, ยศ"/>
                                <select name="select_staff_check" id="select_staff_check" className="form-control bg-blue-lv3 w-50">
                                    <option value=""></option>
                                    <option value="">จ.ส.ต.ธนา ขันอุไร</option>
                                </select>
                            </div>
                        </div>                                                    

                        <div className="row mb-2">
                            <div className="col-lg-3 border-right">
                                <label htmlFor="staff_check" className="col-form-label">ที่อยู่</label>
                            </div>
                            <div className="col-lg-9">
                                <input type="text" className="form-control bg-blue-lv3 mb-1 w-50" name="staff_check" id="staff_check" placeholder="บ้านเลขที่/หมู่"/>
                                <input type="text" className="form-control bg-blue-lv3 mb-1 w-50" name="staff_check" id="staff_check" placeholder="แขวง/ตำบล"/>                                                            
                                <input type="text" className="form-control bg-blue-lv3 mb-1 w-50" name="staff_check" id="staff_check" placeholder="เขต/อำเภอ"/>
                                <input type="text" className="form-control bg-blue-lv3 mb-1 w-50" name="staff_check" id="staff_check" placeholder="จังหวัด"/>
                                <input type="text" className="form-control bg-blue-lv3 mb-1 w-50" name="staff_check" id="staff_check" placeholder="รหัสไปรษณีย์"/>
                                <select name="select_staff_check" id="select_staff_check" className="form-control bg-blue-lv3 w-50">
                                    <option value="">จังหวัด</option>
                                </select>
                            </div>
                        </div>

                        <div className="row mb-2">
                            <div className="col-lg-3 border-right">
                                <label htmlFor="staff_check" className="col-form-label">เบอร์ติดต่อ</label>
                            </div>
                            <div className="col-lg-9">
                                <input type="text" className="form-control bg-blue-lv3 mb-1 w-50" name="staff_check" id="staff_check"/>
                            </div>
                        </div>

                    </div>
                {/* /.card */}
                </div>
        </div>
    )
}

export default CarForm;