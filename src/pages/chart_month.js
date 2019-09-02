import React, { Component } from 'react'
import Showchart from '../components/templates/chart';
import Chart from 'react-google-charts';
import { url } from '../parameter/index';

class ChartShowMonth extends Component {

    constructor() {
        super()
        this.state = {
            list_doc: [],
            data: [],
            list_year: [],
            year: '',
            status: false,
            sum1: '',
            sum2: '',
            sum3: '',
            sum4: '',
            sum5: '',
            sum6: '',
            sum7: '',
        }
        this.handleStaffCheckIdChange = this.handleStaffCheckIdChange.bind(this)
    }



    componentDidMount() {

        fetch(url + '/get_sum_month?token=' + this.props.token)
            .then((Response) => Response.json())
            .then((res) => {
                console.log(res)
                this.setState({
                    data: res.data,
                    status: true
                })
            }).catch(function (error) {

            });

        fetch(url + '/get_sum_year?token=' + this.props.token)
            .then((Response) => Response.json())
            .then((res) => {
               
                this.setState({
                    list_year: res.data,
                    status: true
                })
            }).catch(function (error) {

            });
    }

    handleStaffCheckIdChange(e) {
        this.setState({
            year: e.target.value,
        })

    }

    finddata() {
        this.setState({
            status: false
        })
        fetch(url + '/get_sum_month?token=' + this.props.token + '&year=' + this.state.year)
            .then((Response) => Response.json())
            .then((res) => {
                this.setState({
                    data: res.data,
                    status: true
                })
            }).catch(function (error) {

            });
    }




    printChart(){
        window.print();
    }
    render() {


        let full_month = ["มกราคม", "กุมภาพันธ์", "มีนาคม", "เมษายน", "พฤษภาคม", "มิถุนายน", "กรกฎาคม", "สิงหาคม", "กันยายน", "ตุลาคม", "พฤศจิกายน", "ธันวาคม"];
        let list = []
        
        if (this.state.status == true) {
            this.state.data.map((val, i) => {

                return list.push(
                    <div style={{ display: 'flex', maxWidth: 1024 }}>
                            <Chart
                                width={1400}
                                height={800}
                                chartType="ColumnChart"
                                loader={<div>กำลังโหลดผลสถิติ</div>}
                                data={[
                                    ['City', 'ห้ามใช้ชั่วคราว',  'ห้ามใช้เด็ดขาด','ยกเลิกคำสั่งห้ามใช้เด็ดขาด','ยกเลิกคำสั่งห้ามใช้ชั่วคราว'],
                                    [full_month[i], val.sum, val.sum2, val.close2 , val.close]
                                ]
                                }
                                options={{
                                    title: 'กราฟสถิติของแต่ละเดือน',
                                    chartArea: { width: '30%' },
                                    hAxis: {
                                        title: 'สรุปสถิติของแต่ละเดือน',
                                        minValue: 0,
                                    },
                                    vAxis: {
                                        title: 'จำนวนทั้งหมด',
                                    },
                                }}
                                legendToggle
                            />
                        </div>
                    
                )
            })
        }

        return(
            <div className="Add">
                <div className="container-fluid bg-blue-lv2 py-3 border-bottom">
                    <div className="row">
                        <div className="col-lg-6">
                            <h4 className="text-secondary"><a href="#">สรุปสถิติ</a></h4>
                        </div>

                        <div className="col-lg-6">
                            
                        </div>
                    {/* /.row */}
                    </div>
                {/* /.container */}
                </div>

                <div className="container-fluid py-4">
                <div className="row">
                            <div className="col-md-3">
                                <select className="form-control" id="sel1" onChange={this.handleStaffCheckIdChange} >
                                    <option >กรุณาเลือก</option>
                                    <option value="2558">2558</option>
                                    <option value="2559">2559</option>
                                    <option value="2560">2560</option>
                                    <option value="2561">2561</option>
                                    <option value="2562">2562</option>
                                    <option value="2563">2563</option>
                                    <option value="2564">2564</option>
                                    <option value="2565">2565</option>
                                    <option value="2566">2566</option>
                                    <option value="2567">2567</option>
                                    <option value="2568">2568</option>
                                    <option value="2569">2569</option>
                                    <option value="2570">2570</option>
                                    <option value="2571">2571</option>
                                    <option value="2572">2572</option>

                                    <option value="2573">2573</option>
                                    <option value="2574">2574</option>
                                    <option value="2575">2575</option>
                                    <option value="2576">2576</option>
                                    <option value="2577">2577</option>
                                </select>
                            </div>
                            <div className="col-md-3">
                                <button type="button" onClick={() => { this.finddata() }} className="btn btn-primary">ค้นหา</button>
                            </div>
                        </div>  
                        { list  }

               
                <center><button type="button" class="btn btn-success" onClick={()=>{this.printChart()}}>พิมพ์กราฟ</button></center>
            </div>
            </div>
        )
    }
}

export default ChartShowMonth;