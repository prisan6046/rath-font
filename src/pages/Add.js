import React, { Component } from 'react'
import Corpor3Form from '../components/form/Corpor3Form';
import Corpor4Form from '../components/form/Corpor4Form';
import Corpor5Form from '../components/form/Corpor5Form';
import Corpor6Form from '../components/form/Corpor6Form';

class Add extends Component {
    render() {
        return(
            <div className="Add">
                <div className="container-fluid bg-blue-lv2 py-3 border-bottom">
                    <div className="row">
                        <div className="col-lg-6">
                            <h4 className="text-secondary"><a href="#">ยานพาหนะ</a> / ใหม่</h4>
                            <button className="btn btn-primary">บันทึก</button>
                            <button className="btn btn-default ml-2">ยกเลิก</button>
                        </div>

                        <div className="col-lg-6">
                            
                        </div>
                    {/* /.row */}
                    </div>
                {/* /.container */}
                </div>

                <div className="container-fluid border-bottom">
                    <div className="row">
                        <div className="col-lg-12">
                            <nav aria-label="breadcrumb">
                                <ol class="breadcrumb mb-0">
                                    <li class="breadcrumb-item"><a href="#">Home</a></li>
                                    <li class="breadcrumb-item"><a href="#">Library</a></li>
                                    <li class="breadcrumb-item active" aria-current="page">Data</li>
                                </ol>
                            </nav>
                        </div>
                    </div>
                </div>

                <div className="container-fluid py-4">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="card">
                                <div className="card-body">
                                    <div className="row mb-2">
                                        <div className="col-lg-12">
                                            <ul class="nav nav-tabs">
                                                <li class="nav-item">
                                                    <a class="nav-link active" id="corpor3-tab" data-toggle="tab" href="#corpor3" role="tab" aria-controls="corpor3" aria-selected="true">ฟอร์ม คพ.3</a>
                                                </li>
                                                <li class="nav-item">
                                                    <a class="nav-link" id="corpor4-tab" data-toggle="tab" href="#corpor4" role="tab" aria-controls="corpor3" aria-selected="true">ฟอร์ม คพ.4</a>
                                                </li>
                                                <li class="nav-item">
                                                    <a class="nav-link" id="corpor5-tab" data-toggle="tab" href="#corpor5" role="tab" aria-controls="corpor3" aria-selected="true">ฟอร์ม คพ.5</a>
                                                </li>
                                                <li class="nav-item">
                                                    <a class="nav-link" id="corpor6-tab" data-toggle="tab" href="#corpor6" role="tab" aria-controls="corpor3" aria-selected="true">ฟอร์ม คพ.6</a>
                                                </li>
                                            </ul>

                                            <div class="tab-content" id="myTabContent">
                                                <div class="tab-pane fade show active" id="corpor3" role="tabpanel" aria-labelledby="corpor3-tab">
                                                    <Corpor3Form />
                                                </div>
                                                <div class="tab-pane fade" id="corpor4" role="tabpanel" aria-labelledby="corpor4-tab">
                                                    <Corpor4Form />
                                                </div>
                                                <div class="tab-pane fade" id="corpor5" role="tabpanel" aria-labelledby="corpor5-tab">
                                                    <Corpor5Form />
                                                </div>
                                                <div class="tab-pane fade" id="corpor6" role="tabpanel" aria-labelledby="corpor6-tab">
                                                    <Corpor6Form />
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

export default Add;