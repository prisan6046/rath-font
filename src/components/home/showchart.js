import React, { Component } from 'react'

import ChartConfig from '../libraries/ChartConfig';
import ReactEcharts from "echarts-for-react";
import { url } from '../../parameter/index';
import { HorizontalBarChart, VerticalBarChart, PieChart } from "../../Charts";
import Chart from 'react-google-charts';

class ShowChart extends Component {


    constructor() {
        super()
        this.state = {
            list_doc: [],
            list_month: [],
            list_year: [],
            year: '',
            statusmonth: false,
            statusyear : false,
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



  
    handleStaffCheckIdChange(e) {
        this.setState({
            year: e.target.value,
        })

    }

    finddata() {
        this.setState({
            statusmonth: 'load',
            statusyear : false
        })
        fetch(url + '/get_sum_month?token=' + this.props.token + '&year=' + this.state.year)
            .then((Response) => Response.json())
            .then((res) => {
                this.setState({
                    list_month : res.data,
                    statusmonth: true
                })
            }).catch(function (error) {

            });
    }

    getYear(){
        this.setState({
            statusmonth: false,
            statusyear : 'load'
        })
        fetch(url + '/get_sum_year?token=' + this.props.token)
            .then((Response) => Response.json())
            .then((res) => {
               
                this.setState({
                    list_year: res.data,
                    statusyear: true
                })
            }).catch(function (error) {

            });
    }


    printChart(){
        window.print();
    }
    // getRandomDatum = () => Math.floor(Math.random() * 100);



    render() {

        let list_year_all = []
        // let data = []
        list_year_all.push(['City', 'ห้ามใช้ชั่วคราว',  'ห้ามใช้เด็ดขาด','ยกเลิกคำสั่งห้ามใช้เด็ดขาด','ยกเลิกคำสั่งห้ามใช้ชั่วคราว'])
        this.state.list_year.map((val, i) => {
            return list_year_all.push([val.year, val.sum, val.sum2, val.close2 , val.close])

        })

        let full_month = ["มกราคม", "กุมภาพันธ์", "มีนาคม", "เมษายน", "พฤษภาคม", "มิถุนายน", "กรกฎาคม", "สิงหาคม", "กันยายน", "ตุลาคม", "พฤศจิกายน", "ธันวาคม"];
        let list = []
        
        if (this.state.statusmonth == true) {
            this.state.list_month.map((val, i) => {

                return list.push(
                    <div className="col-md-12">
                        <center>
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
                                    
                                    chartArea: { width: '30%' },
                                    hAxis: {
                                        title: 'สรุปสถิติของแต่ละเดือน ปี '+this.state.year,
                                        minValue: 0,
                                    },
                                    vAxis: {
                                        title: 'จำนวนคัน',
                                    },
                                }}
                                legendToggle
                            />
                            </center>
                        </div>
                    
                )
            })
        }

        return (
            <div>
                <ul class="nav nav-tabs">
                    <li class="active"><a data-toggle="tab" className="btn btn-primary" href="#home" onClick={() => { this.getYear() }} >รายปี</a></li>
                    <li><a data-toggle="tab" href="#menu1" className="btn btn-primary">รายเดือน</a></li>

                </ul>

                <div class="tab-content">

                
                    <div id="home" class="tab-pane fade in active">

                        { this.state.statusyear == true ? 
                        <div className="row">
                            <div className="col-md-12">
                                    <center>
                                        
                                        <Chart
                                            width={1400}
                                            height={800}
                                            chartType="ColumnChart"
                                            loader={<div>กำลังโหลดผลสถิติ</div>}
                                            data={list_year_all}
                                            options={{
                                            
                                                chartArea: { width: '30%' },
                                                hAxis: {
                                                    title: 'สรุปสถิติของแต่ละปี',
                                                    minValue: 0,
                                                },
                                                vAxis: {
                                                    title: 'จำนวนคัน',
                                                },
                                            }}
                                            legendToggle
                                        />
                                    
                                </center>
                            </div>  
                            <div className="col-md-12">
                                <br />
                                <center><button type="button" class="btn btn-success" onClick={()=>{this.printChart()}}>พิมพ์กราฟ</button></center>
                            </div>
                        </div>
                        
                        

                    
                        : this.state.statusyear == 'load' ?  <div>กำลังโหลดผลสถิติ</div> : ''}
                    </div>
                    <div id="menu1" class="tab-pane fade">
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
                        { this.state.statusmonth == true ? 
                            <div className="row"> 
                                { list }
                                <div className="col-md-12">
                                    <br />
                                    <center><button type="button" class="btn btn-success" onClick={()=>{this.printChart()}}>พิมพ์กราฟ</button></center>
                                </div>
                             
                            </div>
                            
                            : this.state.statusmonth == 'load'? <div>กำลังโหลดผลสถิติ</div>   : '' }
                    </div>
                </div>

            </div>
        )

    }
}


export default ShowChart