import React , { Component } from 'react'
import EditformThree from '../edit/editform3';
import EditFormFour from '../edit/editform4';
import EditFormFive from '../edit/editform5';
import EditFormSix from '../edit/editform6';
import { url } from '../../parameter/index'


class EditData extends Component{

    constructor(){
        super()
        this.state = {
            token : '',
            id : '',
            load : false
        }

    }

    componentDidMount(){
        this.state.token = localStorage.getItem('token');
        fetch(url+'/get_project_id?id=' + this.props.match.params.id+ "&token=" + this.state.token)
            .then((Response) => Response.json())
            .then((res) => {
                
                this.setState({
                    id: res['0']['id'],

                    load : true
                })
            }).catch(function(){
                
            })

    }


    render(){
        return(
            <div className="Add">
                <div className="container-fluid py-4">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="card">
                                <div className="card-body">
                                    <div className="row mb-2">
                                        <div className="col-lg-12">
                                            <ul className="nav nav-tabs">
                                                <li className="nav-item">
                                                    <a className="nav-link active" id="corpor3-tab" data-toggle="tab" href="#corpor3" role="tab" aria-controls="corpor3" aria-selected="true">ฟอร์ม คพ.3</a>
                                                </li>
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

                                            <div className="tab-content" id="myTabContent">
                                                <div className="tab-pane fade show active" id="corpor3" role="tabpanel" aria-labelledby="corpor3-tab">
                                                    <EditformThree id={this.props.match.params.id} />
                                                </div>
                                                <div className="tab-pane fade" id="corpor4" role="tabpanel" aria-labelledby="corpor4-tab">
                                                   {
                                                       this.state.load == true? <EditFormFour id={ this.state.id } />: <div></div>
                                                   }
                                                </div>
                                                <div className="tab-pane fade" id="corpor5" role="tabpanel" aria-labelledby="corpor5-tab">
                                                   
                                                {
                                                       this.state.load == true? <EditFormFive id={this.state.id } /> : <div></div>
                                                   }
                                                   
                                                </div>
                                                <div className="tab-pane fade" id="corpor6" role="tabpanel" aria-labelledby="corpor6-tab">
                                                
                                                {
                                                       this.state.load == true? <EditFormSix id={this.state.id } /> : <div></div>
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
            </div>

        )
    }

}

export default EditData