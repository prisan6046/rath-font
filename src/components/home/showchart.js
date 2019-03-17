import React, { Component } from 'react'
import { Chart } from "react-charts";
import ChartConfig from '../libraries/ChartConfig';
import ReactEcharts from "echarts-for-react";

class ShowChart extends Component {

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
            {title: 'ห้ามใช้ชั่วคราว', value: 1.00},
            {title: 'ห้ามใช้ชั่วคราวแต่ใกล้ครบกำหนดเวลา', value: 1.00},
            {title: 'ยกเลิกคำสั่งห้ามใช้ชั่วคราว', value:  9.00},
            {title: 'ห้ามใช้ชั่วคราวและเกินกำหนดเวลา 30 วัน', value: 21.00},
            {title: 'ห้ามใช้เด็ดขาด', value: 2.00},
            {title: 'ห้ามใช้ชั่วคราวและกำลังปรับปรุง', value: 2.00},
            {title: 'ยกเลิกคำสั่งห้ามใช้เด็ดขาด', value: 2.00}
        ];

        return (
            <div>
                <div className="col-lg-12" style={{height: '495px'}}>
                    <ReactEcharts option={this.getOption(data_req)} className="h-100" />
                    {/* <ChartConfig dataType="ordinal">
                        {({ data }) => (
                            <Chart
                                data={data}
                                series={{ type: 'bar' }}
                                axes={[
                                    { primary: true, type: 'ordinal', position: 'bottom' },
                                    { position: 'left', type: 'linear', stacked: true },
                                ]}
                                primaryCursor
                                secondaryCursor

                            />
                        )}
                    </ChartConfig> */}

                </div>

            </div>
        )
    }
}


export default ShowChart