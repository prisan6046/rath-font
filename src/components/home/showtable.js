import React, { Component } from 'react';
import { url } from '../../parameter/index';

class ShowTable extends Component {


    constructor() {
        super()
        this.state = {
            list_doc: [],
            status: false,
            year : '',
            data : [],
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
        // console.log("token ... >> " , this.props.token)

        fetch(url + '/get_sum_month?token=' + this.props.token)
            .then((Response) => Response.json())
            .then((res) => {
                this.setState({
                    data : res.data,
                    status : true
                })
            }).catch(function (error) {
              
            });

    }
    handleStaffCheckIdChange(e) {
        this.setState({
            year : e.target.value,
        })
    
    }

    finddata(){
        this.setState({
            status : false
        })
        fetch(url + '/get_sum_month?token=' + this.props.token+'&year='+ this.state.year)
            .then((Response) => Response.json())
            .then((res) => {
                this.setState({
                    data : res.data,
                    status : true
                })
            }).catch(function (error) {
              
            });
    }


    render() {

        let full_month = ["มกราคม", "กุมภาพันธ์", "มีนาคม", "เมษายน", "พฤษภาคม", "มิถุนายน", "กรกฎาคม", "สิงหาคม", "กันยายน", "ตุลาคม", "พฤศจิกายน", "ธันวาคม"];
        let list = []
        if (this.state.status == true){
            this.state.data.map((val , i) => {
            
                return list.push(
                    <tr key={i}>
                        <td>{ full_month[i]} </td>
                        <td>{val.sum}</td>
                        <td>{val.close}</td>
                        <td>{val.sum2}</td>
                        <td>{val.close2}</td>
                    </tr>
                )
            })
        }

        return (
            <div className="Add">

                <div className="container-fluid py-4">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="card">
                                <div className="card-body">
                                    <div className="row mb-2">
                                        <div className="col-lg-12">
                                            <div className="tab-content" id="myTabContent">
                                                <div className="tab-pane fade show active" id="corpor3" role="tabpanel" aria-labelledby="corpor3-tab">
                                                    <div className="Corpor3Form">
                                                        <div className="row">
                                                            <div className="col-lg-12">
                                                                <div className="CarForm">
                                                               

                                                                    <div className="card">
                                                                        <div className="card-header bg-primary text-white">ข้อมูลสถิติ</div>
                                                                        <div className="card-body">
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
                                                                                    </select>
                                                                                </div>
                                                                                <div className="col-md-3">
                                                                                    <button type="button" onClick={() => {this.finddata()}} className="btn btn-primary">ค้นหา</button>
                                                                                </div>
                                                                            </div>
                                                                            < br />
                                                                            <table className="table table-bordered">
                                                                                <thead>
                                                                                    <tr>
                                                                                        <th>เดือน</th>
                                                                                        <th>ห้ามใช้ชั่วคราว</th>
                                                                                        <th>ยกเลิกคำสั่งห้ามใช้ชั่วคราว</th>
                                                                                        <th>ห้ามใช้เด็ดขาด</th>
                                                                                        <th>ยกเลิกคำสั่งห้ามใช้เด็ดขาด</th>
                                                                                    </tr>
                                                                                </thead>
                                                                                <tbody>
                                                                                   
                                                                                    {
                                                                                        this.state.status == true?  list : ''
                                                                                    }
                                                                                
                                                                                </tbody>
                                                                            </table>

                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>


                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

}

export default ShowTable