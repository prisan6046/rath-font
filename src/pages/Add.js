import React, { Component } from 'react'
import Corpor3Form from '../components/form/Corpor3Form';
import Corpor4Form from '../components/form/Corpor4Form';
import Corpor5Form from '../components/form/Corpor5Form';
import Corpor6Form from '../components/form/Corpor6Form';

class Add extends Component {

    constructor() {
        super()
        this.state = {
            project_id: ''
        }

    }

    componentDidMount() {
        this.setState({
            project_id: localStorage.getItem('project_id')
        }
        )
    }



    render() {
        return (
            <div className="Add">

                <div className="container-fluid py-4">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="card">
                                <div className="card-body">
                                    <div className="row mb-2">
                                        <div className="col-lg-12">

                                            {this.state.project_id == null ?
                                                <ul className="nav nav-tabs">
                                                    <li className="nav-item">
                                                        <a className="nav-link active" id="corpor3-tab" data-toggle="tab" href="#corpor3" role="tab" aria-controls="corpor3" aria-selected="true">ฟอร์ม คพ.3</a>
                                                    </li>
                                                </ul> : <div></div>

                                            }
                                            {
                                                this.state.project_id != null ?
                                                    <div>
                                                        <ul className="nav nav-tabs">
                                                            <li className="nav-item">
                                                                <a className="nav-link" id="corpor4-tab" data-toggle="tab" href="#corpor4" role="tab" aria-controls="corpor3" aria-selected="true">ฟอร์ม คพ.4</a>
                                                            </li>
                                                            <li className="nav-item">
                                                                <a className="nav-link" id="corpor5-tab" data-toggle="tab" href="#corpor5" role="tab" aria-controls="corpor3" aria-selected="true">ฟอร์ม คพ.5</a>
                                                            </li>
                                                            <li className="nav-item">
                                                                <a className="nav-link" id="corpor6-tab" data-toggle="tab" href="#corpor6" role="tab" aria-controls="corpor3" aria-selected="true">ฟอร์ม คพ.6</a>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                    :
                                                    <div></div>

                                            }
                                            <div className="tab-content" id="myTabContent">

                                                {
                                                    this.state.project_id == null ?
                                                        <div className="tab-content" id="myTabContent">
                                                            <div className="tab-pane fade show active" id="corpor3" role="tabpanel" aria-labelledby="corpor3-tab">
                                                                <Corpor3Form />
                                                            </div>
                                                        </div>
                                                        : <div></div>
                                                }
                                                {
                                                    this.state.project_id != null ?
                                                        <div className="tab-content" id="myTabContent">
                                                            <div className="tab-pane fade show active" id="corpor4" role="tabpanel" aria-labelledby="corpor4-tab">
                                                                <Corpor4Form />
                                                            </div>
                                                            <div className="tab-pane fade" id="corpor5" role="tabpanel" aria-labelledby="corpor5-tab">
                                                                <Corpor5Form />
                                                            </div>
                                                            <div className="tab-pane fade" id="corpor6" role="tabpanel" aria-labelledby="corpor6-tab">
                                                                <Corpor6Form />
                                                            </div>
                                                        </div>
                                                        :
                                                        <div></div>
                                                }
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