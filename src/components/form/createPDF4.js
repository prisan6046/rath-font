import React, { Component, PropTypes } from 'react';
import html2canvas from 'html2canvas'
import jsPDF from 'jspdf'



export default class Export4 extends Component {
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
        pdf.save("เอกสาร_คพ_๔.pdf");
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
            <p align="right" className="mt4">แบบ คพ. ๔</p>
            <p align="center" className="mt4"><img src="/assets/img/logo.png" height="150px" /></p>
            <p align="" className="mt4">เล่มที่ </p>
            <p align="center" className="mt4">หนังสือรับรองการอนุญาต </p>
            <p align="right" className="mt4">วันที่ ....................... </p>
            <p align="right" className="mt4">สถานที่ตรวจสอบ ....................... </p>

            <div className="row">
              <div className="col-md-3">
                <center>อนุญาตให้</center>
              </div>
              <div className="col-md-3">

              </div>
              <div className="col-md-3">
                
              </div>
            </div>

            <p></p>
            <div className="col-md-12">
              <div className="row">
                <div className="col-md-3.5">
                เจ้าของหรือผู้ครอบครองยานพาหนะ ประเภท
                </div>
                <div className="col-md-3">

                </div>
                <div className="col-md-3">
                  
                </div>
              </div>
            </div>

            <p></p>
            <div className="col-md-12">
              <div className="row">
                <div className="col-md-3.5">
                หมายเลขทะเบียนรถ/หมายเลขใบอนุญาตใช้เรือ
                </div>
                <div className="col-md-3">

                </div>
                <div className="col-md-3">
                จังหวัด
                </div>
                <div className="col-md-3.5">
                
                </div>
              </div>
            </div>


            <p></p>
            <div className="col-md-12">
              <div className="row">
                <div className="col-md-3.5">
                ยี่ห้อรถ/ชื่อ เรือ
                </div>
                <div className="col-md-3">

                </div>
                <div className="col-md-3">
                สีของรถ/เรือ
                </div>
                <div className="col-md-3.5">
                
                </div>
                <div className="col-md-3">
                ยี่ห้อเครื่องยนต์ ของรถ/เรือ
                </div>
                <div className="col-md-3.5">
                
                </div>
              </div>
            </div>


            <p></p>
            <div className="col-md-12">
              <div className="row">
                <div className="col-md-3.5">
                ประเภทของเครื่องยนต์
                </div>
                <div className="col-md-3">

                </div>
                <div className="col-md-3">
                ประเภทของเชื้อเพลิง
                </div>
                <div className="col-md-3.5">
                
                </div>
                <div className="col-md-3">
                ซึ่งถูกสั่งห้าม
                </div>
                
              </div>
            </div>


            <p></p>
            <div className="col-md-12">
              <div className="row">
                <div className="col-md-3.5">
                ยานพาหนะเด็ดขาดตามคำสั่งเล่มที่ 
                </div>
                <div className="col-md-2">

                </div>
                <div className="col-md-3">
                เลขที่
                </div>
                <div className="col-md-3.5">
                
                </div>
                <div className="col-md-3">
                ลงวันที่
                </div>
                <div className="col-md-3.5">
                
                </div>
                
              </div>
            </div>


            <p></p>
            <div className="col-md-12">
              <div className="row">
                <div className="col-md-3.5">
                นำยานพาหนะดังกล่าวไปแก้ไขปรับปรุง ณ
                </div>
                <div className="col-md-2.5">

                </div>
                
              </div>
            </div>

            <p></p>
            <div className="col-md-12">
              <div className="row">
                <div className="col-md-3.5">
                อยู่เลขที่
                </div>
                <div className="col-md-4">

                </div>
                <div className="col-md-3.5">
                ถนน
                </div>
                <div className="col-md-4.5">

                </div>
              </div>
            </div>

            
            <p></p>
            <div className="col-md-12">
              <div className="row">
                <div className="col-md-3.5">
                อำเภอ/เขต 
                </div>
                <div className="col-md-3">

                </div>
                <div className="col-md-3.5">
                จังหวัด
                </div>
                <div className="col-md-3">
                
                </div>
                <div className="col-md-3.5">
                โทรศัพท์
                </div>
                <div className="col-md-3.5">
                
                </div>
                
              </div>
            </div>


            <p></p>
            <div className="col-md-12">
              <div className="row">
                <div className="col-md-3.5">
                ในวันที่ 
                </div>
                <div className="col-md-4">

                </div>
                <div className="col-md-3.5">
                ตั้งแต่เวลา
                </div>
                <div className="col-md-2">
                
                </div>
                <div className="col-md-3.5">
                ถึงเวลา
                </div>
                <div className="col-md-3">
                
                </div>
                
              </div>
            </div>


            <p></p>
            <div className="col-md-12">
            หากพ้นกำหนดเวลาดังกล่าวให้เคลื่อนย้ายยานพาหนะโดยวิธกีารลากจูงหรือโดยวิธกีารอื่นที่ไม่ก่อให้เกิดมลพิษ
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