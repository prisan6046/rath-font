import React, { Component } from 'react'
import { Chart } from "react-charts";
import ChartConfig from '../libraries/ChartConfig';
import ReactEcharts from "echarts-for-react";
import { url } from '../../parameter/index';

class ShowChart extends Component {


    constructor() {
        super()
        this.state = {
            list_doc: [],
            status: false,
            sum1: '',
            sum2: '',
            sum3: '',
            sum4: '',
            sum5: '',
            sum6: '',
            sum7: '',
        }
    }



    componentDidMount() {

        fetch(url + '/get_sum_order?token=' + this.props.token)
            .then((Response) => Response.json())
            .then((res) => {
                this.setState({
                    sum1: res.sumone,
                    sum2: res.sumtwo,
                    sum3: res.sumthree,
                    sum4: res.sumfour,
                    sum5: res.sumfive,
                    sum6: res.sumsix,
                    sum7: res.sumseven
                })
            }).catch(function () {
                localStorage.removeItem('token');
                window.location.href = '/';
            });

    }




    getOption = (req = []) => {        
        let titles = req.map(val => {
            return [val.title];
        })
        let values = req.map(val => {
            return val.value;
        })
        console.log("values", values);
        return {            
            tooltip : {
                trigger: 'axis',
                axisPointer : {
                    type : 'shadow'
                }
            },
            grid: {
                left: '3%',
                right: '4%',
                bottom: '3%',
                containLabel: true,
                height: '100%'
            },
            xAxis : [
                {
                    type : 'category',
                    data : titles,
                    axisTick: {
                        alignWithLabel: true
                    },
                    axisLabel: {
                        rotate: 30,
                        interval: 0   
                    }                    
                }
            ],
            yAxis : [
                {
                    type : 'value',
                    axisLabel: {
                        formatter: '{value}.00'
                    }
                }
            ],
            tooltip: {
                backgroundColor: '#FFFFFF',
                textStyle : {
                    color: '#000000'
                }                
            },
            series : [
                {
                    name:'Count',
                    type:'bar',
                    barWidth: '60%',
                    data: values,
                    itemStyle: {
                        normal: {
                            color: (params) => {
                                // build a color map as your need.
                                var colorList = [
                                  '#FFFFB3','#FF8CD9','#B3D940','#FFB366','#FF4040','#BCBCBC','#66D966'
                                ];
                                return colorList[params.dataIndex]
                            }
                        }
                    },
                }
            ]

        }   
    }

    render() {

        let data_req = [
            {title: 'ห้ามใช้ชั่วคราว', value: this.state.sum1 != '' ? this.state.sum1 : 0 },
            {title: 'ห้ามใช้ชั่วคราวแต่ใกล้ครบกำหนดเวลา', value: this.state.sum2 != '' ? this.state.sum2 : 0 },
            {title: 'ยกเลิกคำสั่งห้ามใช้ชั่วคราว', value:  this.state.sum3 != '' ? this.state.sum3 : 0 },
            {title: 'ห้ามใช้ชั่วคราวและเกินกำหนดเวลา 30 วัน', value: this.state.sum4 != '' ? this.state.sum4 : 0 },
            {title: 'ห้ามใช้เด็ดขาด', value: this.state.sum5 != '' ? this.state.sum5 : 0 },
            {title: 'ห้ามใช้ชั่วคราวและกำลังปรับปรุง', value: this.state.sum6 != '' ? this.state.sum6 : 0 },
            {title: 'ยกเลิกคำสั่งห้ามใช้เด็ดขาด', value: this.state.sum7 != '' ? this.state.sum7 : 0 }
        ];

        return (
            <div>
                <div className="col-lg-12" style={{height: '495px'}}>
                    <ReactEcharts option={this.getOption(data_req)} className="h-100" />
                </div>

            </div>
        )
    }
}


export default ShowChart