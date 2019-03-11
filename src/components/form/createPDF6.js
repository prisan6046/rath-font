import React, { Component, PropTypes } from 'react';
import html2canvas from 'html2canvas'
import jsPDF from 'jspdf'



export default class Export6 extends Component {
  constructor(props) {
    super(props);
  }

  printDocument() {
    const input = document.getElementById('divToPrint');
    html2canvas(input)
      .then((canvas) => {
        const imgData = canvas.toDataURL('image/png');
        const pdf = new jsPDF('p', 'mm', [1250, 2500]);
        pdf.addImage(imgData, 'JPEG', 10, 10);
        pdf.save("เอกสาร_คพ_๖.pdf");
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
          <div className="col-md-8">
            <p align="right" className="mt4">แบบ คพ. ๖</p>
            <p align="center" className="mt4"><img src="/assets/img/logo.png" height="150px" /></p>
            <p align="" className="mt4">เล่มที่ </p>
            <p align="center" className="mt4">คำสั่งยกเลิก<u>คำสั่งห้ามใช้ยานพาหนะชั่วคราว</u>/คำสั่งห้ามใช้ยานพาหนะเด็ดขาด </p>
            <p align="right" className="mt4">วันที่ ....................... </p>
            <p align="right" className="mt4">สถานที่ตรวจสอบ ....................... </p>

            <div className="row">
              <div className="col-md-3">
                <center>ด้วย</center>
              </div>
              <div className="col-md-5">

              </div>
              <div className="col-md-3.5">
              เจ้าของหรือผู้ครอบครองยานพาหนะ
              </div>
            </div>

            <p></p>
            <div className="col-md-12">
              <div className="row">
                <div className="col-md-3.5">
                ประเภท
                </div>
                <div className="col-md-8">

                </div>
                <div className="col-md-3.5">
                หมายเลขทะเบียนรถ/หมายเลข
                </div>
              </div>
            </div>


            <p></p>
            <div className="col-md-12">
              <div className="row">
                <div className="col-md-3.5">
                ใบอนุญาตใช้รถ/เรือ
                </div>
                <div className="col-md-3">

                </div>
                <div className="col-md-3">
                จังหวัด
                </div>
                <div className="col-md-3.5">
                
                </div>
                <div className="col-md-3">
                ยี่ห้อรถ/ชื่อ เรือ
                </div>
                <div className="col-md-3.5">
                
                </div>
              </div>
            </div>


            <p></p>
            <div className="col-md-12">
              <div className="row">
                <div className="col-md-3.5">
                สีรถ/เรือ
                </div>
                <div className="col-md-3">

                </div>
                <div className="col-md-3">
                ยี่ห้อเครื่องยนต์รถ/เรือ
                </div>
                <div className="col-md-3.5">
                
                </div>
                <div className="col-md-3">
                ประเภทเครื่องยนต์
                </div>
                <div className="col-md-3.5">
                
                </div>
              </div>
            </div>

            <p></p>
            <div className="col-md-12">
              <div className="row">
                <div className="col-md-3.5">
                ประเภทเช้ือเพลิง
                </div>
                <div className="col-md-3">

                </div>
                <div className="col-md-3">
                ซึ่งถูกสั่ง
                </div>
                <div className="col-md-3.5">
                
                </div>
                <div className="col-md-3">
                ตามคำสั่ง
                </div>
                
              </div>
            </div>


            <p></p>
            <div className="col-md-12">
              <div className="row">
                <div className="col-md-3.5">
                เล่มที่
                </div>
                <div className="col-md-2">

                </div>
                <div className="col-md-2.5">
                เลขที่
                </div>
                <div className="col-md-2">
                
                </div>
                <div className="col-md-2.5">
                ลงวันที่ 
                </div>
                <div className="col-md-2">
                 
                </div>
                <div className="col-md-2.5">
                ได้นำยานพาหนะดังกล่าวไปแก้ไขปรับปรง
                </div>
                
                
              </div>
            </div>

            <p></p>
            <div className="col-md-12">
              <div className="row">
              ตามคำสั่งและได้นำมาให้พนักงานเจ้าหน้าที่ตรวจสอบนั้น
              </div>
            </div>






            <p></p>
            <div className="col-md-12">
              <div className="row">
                <div className="col-md-2">
                
                </div>
                <div className="col-md-3.5">
                พนักงานเจ้าหน้าที่ได้ตรวจสอบยานพาหนะดังกล่าวในวันและสถานที่ตรวจสอบข้างต้น เห็นว่าได้มี
                </div>
                
              </div>
            </div>


            <p></p>
            <div className="col-md-12">
              <div className="row">
                <div className="col-md-3.5">
                การแก้ไขปรับปรุง ให้เป็นไปตามมาตรฐานควบคุม มลพิษจากแหล่งกำเนิดตามที่กำหนดไว้แล้ว
                </div>
                <div className="col-md-1">
                
                </div>
                <div className="col-md-2">
                จึงให้ยกเลิก
                </div>
                
              </div>
            </div>


            <p></p>
            <div className="col-md-12">
              <div className="row">
                <div className="col-md-3.5">
                คำสั่ง
                </div>
                <div className="col-md-3">

                </div>
                <div className="col-md-3">
                และเอาเครื่องหมาย
                </div>
                <div className="col-md-3">
                
                </div>
                <div className="col-md-3.5">
                ออกจากยานพาหนะ
                </div>
                
              </div>
            </div>

            <p></p>
            <div className="col-md-12">
              <div className="row">
                <div className="col-md-3.5">
                ตั้งแต่วันที่
                </div>
                <div className="col-md-5">

                </div>
                <div className="col-md-3">
                เป็นต้นไป
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
            <p></p>
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
            <div className="col-md-12">
              <div className="row">
                <div className="col-md-3.5">
                
                </div>
                <div className="col-md-4">
                  
                </div>
                <div className="col-md-4.5">
                ตำแหน่ง 
                </div>
                <div className="col-md-3.5">
                  __________________________
                </div>
                <div className="col-md-4.5">
                 
                </div>
                <div className="col-md-3.5">
                  
                </div>
              </div>
            </div>
            <p></p>
            <div className="col-md-12">
              <div className="row">
                <div className="col-md-3.5">
                
                </div>
                <div className="col-md-4">
                  
                </div>
                <div className="col-md-4.5">
                สังกัด 
                </div>
                <div className="col-md-3">
                  __________________________
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