import React, { Component } from 'react'
import ReactEcharts from "echarts-for-react";

class Skill extends Component{

    getOption = (skills = []) => {
        const name_skills = skills.map(skill => skill.name);        
        console.log("name_skills", name_skills)
        return{
            tooltip: {
                trigger: 'item',
                formatter: "{a} <br/>{b}: {c} ({d}%)"
            },
            legend: {
                type: 'scroll',
                orient: 'horizontal',
                right: 10,
                top: 20,
                bottom: 20,
                data: name_skills,
                x: 'left'
            },
            // legend: {
            //     orient: 'vertical',
            //     x: 'left',
            //     data:['直接访问','邮件营销','联盟广告','视频广告','搜索引擎']
            // },
            series: [
                {
                    name:'访问来源',
                    type:'pie',
                    radius: ['50%', '70%'],
                    avoidLabelOverlap: false,
                    label: {
                        normal: {
                            show: false,
                            position: 'center'
                        },
                        emphasis: {
                            show: true,
                            textStyle: {
                                fontSize: '30',
                                fontWeight: 'bold'
                            }
                        }
                    },
                    labelLine: {
                        normal: {
                            show: false
                        }
                    },
                    data: skills
                }
            ]
        }
    }

    setSkills = (skill, percent) => {
        const myskill = { name: skill, value: percent };
        
        return myskill;
    }

    render() {
        const programming = [
            this.setSkills('React', 30),
            this.setSkills('NodeJS', 20),
            this.setSkills('CI', 85),
            this.setSkills('Laravel', 60),
            this.setSkills('C#', 15),
            this.setSkills('Java', 15)
        ];
        const database = [
            this.setSkills('Mysql', 70),
            this.setSkills('SQL Server', 30)
        ];
        return(
            <div className="Skill">
                <div className="row mb-2">
                    <div className="col-lg-4 text-center">
                        <h5 className="text-uppercase">Programming</h5>
                        <hr className="mt-1" /> 
                        <ReactEcharts option={this.getOption(programming)} />
                    </div>
                    <div className="col-lg-4 text-center">
                        <h5 className="text-uppercase">Database</h5>
                        <hr className="mt-1" /> 
                        <ReactEcharts option={this.getOption(database)} />
                    </div>
                    <div className="col-lg-4 text-center">
                        <h5 className="text-uppercase">Other</h5>
                        <hr className="mt-1" /> 
                        <ReactEcharts option={this.getOption(programming)} />
                    </div>
                </div>                
            </div>
        )
    }
}

export default Skill;