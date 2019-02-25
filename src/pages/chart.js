import React, { Component } from 'react'
import Showchart from '../components/templates/chart';


class Chart extends Component {
    render() {
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
                        <div className="col-lg-12">
                            <div className="card">
                                <div className="card-body">
                                    <div className="row mb-2">
                                        <div className="col-lg-12">
                                            <div className="tab-content" id="myTabContent">
                                                <div className="tab-pane fade show active" id="corpor3" role="tabpanel" aria-labelledby="corpor3-tab">
                                                    <Showchart />
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

export default Chart;