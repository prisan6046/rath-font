import React, { Component } from 'react'
import Showchart from '../components/templates/chart';
import Chart from 'react-google-charts';
import { url } from '../parameter/index';

class ChartShow extends Component {

    constructor(props){
            super(props)
            this.state = {
                data : [],
                token : '' , 
                load : false
            }
    }


    componentDidMount() {
        fetch(url + '/sum_year')
        .then((Response) => Response.json())
        .then((res) => {
       
            this.setState({
                data : res.data,
                load : true
             
            })
        }).catch(function (error) {

        });
    }



    printChart(){
        window.print();
    }
    render() {
        let list_year_all = []
        if(this.state.load == true){
            list_year_all.push(['','ห้ามใช้ชั่วคราว',  'ห้ามใช้เด็ดขาด','ยกเลิกคำสั่งห้ามใช้เด็ดขาด','ยกเลิกคำสั่งห้ามใช้ชั่วคราว'])
            this.state.data.map((val , i)=>{
                return list_year_all.push(
                    [val.year, val.sum, val.sum2, val.close2 , val.close]
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

                {ห
                    this.state.load == true ?
                    <div style={{ display: 'flex', maxWidth: 1024 }}>
                        <Chart
                            width={1400}
                            height={800}
                            chartType="ColumnChart"
                            loader={<div>กำลังโหลดผลสถิติ</div>}
                            data={list_year_all}
                            options={{
                            title: 'กราฟสถิติของแต่ละปี',
                            chartArea: { width: '30%' },
                            hAxis: {
                                title: 'สรุปสถิติของแต่ละปี',
                                minValue: 0,
                            },
                            vAxis: {
                                title: 'จำนวนทั้งหมด',
                            },
                            }}
                            legendToggle
                        />
                        
                
                </div>
                :<div><center>กำลังโหลดผลสถิติ</center></div>
                }
                <center><button type="button" class="btn btn-success" onClick={()=>{this.printChart()}}>พิมพ์กราฟ</button></center>
                
            </div>
            </div>
        )
    }
}

export default ChartShow;