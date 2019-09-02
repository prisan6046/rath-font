import React, { Component, PropTypes } from 'react';
import html2canvas from 'html2canvas'
import jsPDF from 'jspdf'
import { url } from '../../parameter/index';
import { Str_date } from '../libraries/DateThai';



export default class Export extends Component {
  constructor(props) {
    super(props);
    this.state = {
      token : '',
      order : '',
      date : '' , 
      avg_type_car : '',
      avg_car_number : '',
      avg_car_brand : '',
      avg_car_type_engine : '',
      avg_car_type_fuel : '',
      driver_title : '',
      driver_name : '',
      home_code: '',
      home_district: '',
      home_number: '',
      home_province: '',
      home_subdistrict: '',
      home_tel : '',
      type_check : '',
      val_check : '',
      date_not_allow : ''
    }
  }

  componentDidMount(){
    this.state.token = localStorage.getItem('token');
    fetch(url+'/get_doc_id?id=' + this.props.match.params.id + "&token=" + this.state.token)
            .then((Response) => Response.json())
            .then((res) => {
  
            this.setState({
              order : res[0]['order_no'],
              date : res[0]['date_not_allow'],
              avg_type_car : res[0]['avg_type_car'],
              avg_car_number : res[0]['avg_car_number'],
              avg_car_brand : res[0]['avg_car_brand'],
              avg_car_type_engine : res[0]['avg_car_type_engine'],
              avg_car_type_fuel : res[0]['avg_car_type_fuel'],
              driver_title : res[0]['driver_title'],
              driver_name : res[0]['driver_name'],
              home_code:  res[0]['home_code'],
              home_district: res[0]['home_district'],
              home_number:  res[0]['home_number'],
              home_province:  res[0]['home_province'],
              home_subdistrict:  res[0]['home_subdistrict'],
              home_tel : res[0]['home_tel'],
              type_check : res[0]['type_check'],
              val_check : res[0]['val_check'],
              date_not_allow : res[0]['date_not_allow']

            })  
        })
  }

  str_dataaa(e){
    return Str_date(e)
}

  printDocument() {
    const input = document.getElementById('divToPrint');
    html2canvas(input)
      .then((canvas) => {
        const imgData = canvas.toDataURL('image/png');
        const pdf = new jsPDF('p', 'mm', [1250, 2500]);
        pdf.addImage(imgData, 'JPEG', 10, 10);
        pdf.save("เอกสาร_คพ_๓.pdf");
      })
      ;

  }

  render() {
    return (
      <div>

        <div className="col-md-8">
          <center><h1>ตรวจสอบเอกสาร</h1> </center>
          <br />
          <center><button class="btn btn-warning" onClick={this.printDocument}>พิมพ์เอกสาร</button></center>
        </div>
        <br />
        <br />
        <div id="divToPrint">
          <div className="col-md-6">
            <p align="right" className="mt4">แบบ คพ. ๓</p>
            <p align="center" className="mt4"><img src="/assets/img/logo.png" height="150px" /></p>
            <p align="" className="mt4">เล่มที่ {this.state.order}</p>
            <p align="center" className="mt4">คำสั่ง ห้ามใช้ยานพาหนะชั่วคราวหรือ<u>ห้ามใช้ยานพาหนะเด็ดขาด</u> </p>
            <p align="right" className="mt4">วันที่ { this.str_dataaa(this.state.date)} </p>
            <p align="right" className="mt4">สถานที่ตรวจสอบ ....................... </p>
            <div className="col-md-12">
            <div className="row">
              <div className="col-md-3">
                <p align="right">ด้วย</p>
              </div>
              <div className="col-md-3 bu-top">

              </div>
              <div className="col-md-3.1">
                <center>ตำแหน่ง</center>
              </div>
              <div className="col-md-3 bu-top">

              </div>
            </div>
            </div>
           
            <div className="col-md-12">
              <div className="row">
                <div className="col-md-1.1">
                  สังกัด
              </div>
                <div className="col-md-4 bu-top">

                </div>
                <div className="col-md-7.1">
                  <center>พนักงานเจ้าหน้าที่ตามพระราชบัญญัติส่งเสริมและรักษาคุณภาพ</center>
                </div>
              </div>
            </div>
            <p></p>
            <div className="col-md-12">
              <div className="row">
                <div className="col-md-6.1">
                  สิ่งแวดล้อมแห่งชาติ พ.ศ.๒๕๓๕ ตรวจสอบยานพาหนะ ประเภท
              </div>
                <div className="col-md-6 bu-top">
                  <p class="textbu">{ this.state.avg_type_car }</p>
                </div>

              </div>
            </div>
            <p></p>
            <div className="col-md-12">
              <div className="row">
                <div className="col-md-3.1 ">
                  หมายเลขทะเบียนรถ
              </div>
                <div className="col-md-3 bu-top">
                <p class="textbu">{this.state.avg_car_number}</p>
                </div>
                <div className="col-md-3.1">
                  ซึ่งออกให้โดย(ระบุ)
              </div>
                <div className="col-md-4 bu-top">
                <p class="textbu">กรมการขนส่งทางบก</p>
                </div>
              </div>
            </div>

            <p></p>
            <div className="col-md-12">
              <div className="row">
                <div className="col-md-2.1">
                  ยี่ห้อรถ/ชื่อรถ
              </div>
                <div className="col-md-2 bu">
                <p class="textbu">{this.state.avg_car_brand}</p>
                </div>
                <div className="col-md-2.1">
                  สีของรถ/เรือ
              </div>
                <div className="col-md-2 bu">

                </div>
                <div className="col-md-2.1">
                  สีของรถ/เรือ
              </div>
                <div className="col-md-2 bu">

                </div>
              </div>
            </div>

            <p></p>
            <div className="col-md-12">
              <div className="row">
                <div className="col-md-3.1">
                  ประเภทของเครื่องยนต์
              </div>
                <div className="col-md-3 bu">
                <p class="textbu">{this.state.avg_car_type_engine}</p>
                </div>
                <div className="col-md-3.1">
                  ประเภทของเชื้อเพลิง
              </div>
                <div className="col-md-3 bu">
                <p class="textbu">{this.state.avg_car_type_fuel}</p>
                </div>

              </div>
            </div>

            <p></p>
            <div className="col-md-12">
              <div className="row">
                <div className="col-md-3">
                  โดยมี
              </div>
                <div className="col-md-3 bu">
                <p class="textbu"> { this.state.driver_title} {this.state.driver_name}</p>
                </div>
                <div className="col-md-3.1">
                  อยู่บ้านเลขที
              </div>
                <div className="col-md-3 bu ">
                <p class="textbu">{this.state.home_number} </p>
                </div>

              </div>
            </div>

            <p></p>
            <div className="col-md-12">
              <div className="row">
                <div className="col-md-3 bu">
                <p class="textbu">{this.state.home_subdistrict}</p>
                </div>
                <div className="col-md-2.5">
                  อำเภอ/เขต
              </div>
                <div className="col-md-3 bu">
                <p class="textbu">{this.state.home_district}</p>
                </div>
                <div className="col-md-2.5">
                  จังหวัด
              </div>

                <div className="col-md-3 bu">
                <p class="textbu">{this.state.home_province}</p>
                </div>

              </div>
            </div>

            <p></p>
            <div className="col-md-12">
              <div className="row">
                <div className="col-md-7.5">
                  โทรศัพท์หรือโทรสารที่ สามารถติดต่อได้หมายเลข
              </div>
                <div className="col-md-3 bu">
                <p class="textbu">{this.state.home_tel}</p>
                </div>
                <div className="col-md-4">
                  เป็นเจ้าของหรือผู้ครอบครองยานพาหนะ
              </div>
              </div>
            </div>

            <p></p>
            <div className="col-md-12">
              <div className="row">
                <div className="col-md-7.5">
                  ซึ่งพนักงานเจ้าหน้าที่ ได้ตรวจสอบยานพาหนะดังกล่าวแล้ว พบว่ามีค่า
              </div>
                <div className="col-md-5 bu">
                <p class="textbu">{this.state.type_check} เท่ากับ {this.state.val_check}</p>
                </div>

              </div>
            </div>

            <p></p>
            <div className="col-md-12">
              <div className="row">
                <div className="col-md-7.5">
                  ตามประกาศกระทรวงทรัพยากรธรรมชาติและสิ่งแวดล้อม (ระบชุื่อประกาศ)
              </div>
                <div className="col-md-5">

                </div>

              </div>
            </div>

            <p></p>
            <div className="col-md-12">
              <center><font color="red">ประกาศกระทรวงทรัพยากรธรรมชาติและสงิ่แวดล้อม</font> </center>
            </div>
            <p></p>
            <div className="col-md-12">
              <center><font color="red">เรื่อง กำหนดระดับเสียงของรถจักรยานยนต</font> </center>
            </div>
            <p></p>
            <div className="col-md-12">
              <center><font color="red">ระดับเสียงของรถจักรยานยนต์ที่ใช้ในทางขณะที่เดินเครื่องยนต์อยู่กับที</font> </center>
            </div>
            <p></p>
            <div className="col-md-12">
              <center><font color="red">โดยไม่รวมเสียงแตรสัญญาณ ต้องไม่เกิน ๙๕ เดซิเบล เอ</font> </center>
            </div>
            <p></p>
            <div className="col-md-12">
              <center><font color="red">เมื่อตรวจวัดระดับเสียงในระยะห่างจากรถจักรยานยนต์ ๐.๕ เมตร</font> </center>
            </div>

            <p></p>
            <div className="col-md-12">
              <div className="row">
                <div className="col-md-4.5">
                  อาศัยอำนาจตามความในมาตรา
              </div>
                <div className="col-md-2 bu">
                <p class="textbu">๖๕</p>
                </div>
                <div className="col-md-3.5">
                  และมาตรา
              </div>
                <div className="col-md-1 bu">
                <p class="textbu">๖๖</p>
                </div>
                <div className="col-md-4">
                  แห่งพระราชบัญญัติส่งเสริมและรักษา
              </div>
              </div>
            </div>

            <p></p>
            <div className="col-md-12">
              <div className="row">
                <div className="col-md-4.5">
                  คุณภาพสิ่งแวดล้อมแห่งชาติ
              </div>
                <div className="col-md-2 bu">
                <p class="textbu">พ.ศ. ๒๕๓๕</p>
                </div>
                <div className="col-md-3.5">
                  พนักงานเจ้าหน้าที่จึง ออกคำสั่งและทำเครื่องหมายห้ามใช้ยานพาหนะ
              </div>
              </div>
            </div>

            <p></p>
            <div className="col-md-12">
              <div className="row">
                <div className="col-md-4.5">
                  ชั่วคราว/ห้ามใช้ยานพาหนะเด็ดขาด
              </div>
                <div className="col-md-2">
                <center>ตั้งแต่วันที่</center>
                </div>
                <div className="col-md-4 bu">
                <p class="textbu">{ this.str_dataaa(this.state.date_not_allow) }</p>
                </div>
                <div className="col-md-3.5">
                  นาฬิกา เป็นต้นไป
              </div>

              </div>
            </div>

            <p></p>
            <div className="col-md-12">
              <div className="row">
                <div className="col-md-3.5">
                  จนกว่าจะยกเลิกคำสั่ง
              </div>
                <div className="col-md-2">
                  <center>ทั้งน้ี </center>
                </div>
                <div className="col-md-8">
                  ให้เจ้าของหรือผู้ครอบครองยานพาหนะที่ต้องคำสั่งและถูกทำเครื่องหมายห้ามใช้
              </div>
              </div>
            </div>

            <p></p>
            <div className="col-md-12">
              <div className="row">
                <div className="col-md-5.5">
                  ยานพาหนะชั่วคราว/ห้ามใช้ยานพาหนะเด็ดขาด
              </div>

                <div className="col-md-7">
                  นำยานพาหนะที่แก้ไขปรับปรุงแล้วไปให้พนักงานเจ้าหน้าที่
              </div>
              </div>
            </div>


            <p></p>
            <div className="col-md-12">
              <div className="row">
                <div className="col-md-5.5">
                  ตรวจสอบหรือมีคำร้องขอให้พนักงานเจ้าหน้าที่ตรวจสอบ
              </div>
                <div className="col-md-2">
                  <center>ณ</center>
                </div>

                <div className="col-md-5.5">
                  สถานที่พนักงานเจ้าหน้าที่กำหนด หรือสถานที่
              </div>
              </div>
            </div>

            <p></p>
            <div className="col-md-12">
              <div className="row">
                <div className="col-md-5.5">
                  ทำการแห่งใดแห่งหน่งอันเป็นสถานที่ การของพนักงานเจ้าหน้าที่
              </div>
                <div className="col-md-5">
                  ภายในระยะเวลาที่ กำหนดไว้ในคำเตือน
              </div>
              </div>
            </div>

            <p></p>
            <div className="col-md-12">
              <div className="row">
                <div className="col-md-8">
                  เจ้าของหรือผู้ครอบครองยานพาหนะที่ ประสงค์จะอุทธรณ์คำสั่งของพนักงานเจ้าหน้าที่
              </div>
                <div className="col-md-3">
                  ขอให้ยื่น
              </div>
              </div>
            </div>

            <p></p>
            <div className="col-md-12">
              <div className="row">
                <div className="col-md-8.5">
                  อุทธรณ์เป็น หนังสือต่อพนักงานเจ้าหน้าที่ ผู้ออกคำสั่งภายในสิบห้าวัน
              </div>
                <div className="col-md-3.5">
                  นับแต่วันที่ได้รับทราบคำสั่ง
              </div>
                <div className="col-md-3.5">
                  โดยผู้อุทธรณ
              </div>
              </div>
            </div>

            <p></p>
            <div className="col-md-12">
              <div className="row">
                <div className="col-md-8.5">
                จะต้องระบุข้อเท็จจริง
              </div>
                <div className="col-md-6">
                และข้อกฏหมายที่จะใช้โต้แย้งคำสั่งของพนักงานเจ้าหน้าที่ด้วย
              </div>
                <div className="col-md-3">
                และให้ส่งคำอุทธรณ์ไปยัง
              </div>
              </div>
            </div>

            <p></p>
            <div className="col-md-12">
              <div className="row">
                <div className="col-md-8.5">
                (ระบุชื่อหน่วยงานที่พนักงานเจ้าหน้าที่สังกัด)
              </div> 
              </div>
            </div>


            <p></p>
            <div className="col-md-12">
              <center> ----------------------------------------------------------------------------------------------------------------</center>
            </div>



            <p></p>
            <div className="col-md-12">
              <div className="row">
                <div className="col-md-3.5">
                  ตำบล/แขวง 
              </div>
                <div className="col-md-4 bu">
                  
                </div>
                <div className="col-md-4.5">
                  อำเภอ/เขต
                </div>

                <div className="col-md-5 bu">
                  
                </div>
              </div>
            </div>


            <p></p>
            <div className="col-md-12">
              <div className="row">
                <div className="col-md-3.5">
                จังหวัด
              </div>
                <div className="col-md-2 bu">
                  
                </div>
                <div className="col-md-4.5">
                รหัสไปรษณีย์ 
                </div>
                <div className="col-md-2 bu">
                  
                </div>
                <div className="col-md-4.5">
                หมายเลขโทรศัพท์/โทรสาร 
                </div>
                <div className="col-md-2 bu">
                  
                </div>
              </div>
            </div>


            <br />
            <br />
            <div className="col-md-12">
              <div className="row">
                <div className="col-md-3.5">
                
                </div>
                <div className="col-md-4">
                  
                </div>
                <div className="col-md-4.5">
                ลงชื่อ 
                </div>
                <div className="col-md-3">
                  __________________________
                </div>
                <div className="col-md-4.5">
                พนักงานเจ้าหน้าที่ 
                </div>
                <div className="col-md-3.5">
                  
                </div>
              </div>
            </div>

            <br />
            <div className="col-md-12">
              <div className="row">
                <div className="col-md-3.5">
                
                </div>
                <div className="col-md-4">
                  
                </div>
                <div className="col-md-4.5">
                 
                </div>
                <div className="col-md-4">
                  <center> __________________________ </center>
                </div>
                <div className="col-md-4.5">
                 
                </div>
                <div className="col-md-3.5">
                  
                </div>
              </div>
            </div>


            <br />
            <br />
            <br />
            <br />
            <br />

          </div>
        </div>
      </div>
    );
  }
}