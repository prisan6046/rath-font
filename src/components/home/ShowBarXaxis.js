import React, { Component } from 'react'
import ReactGantt, { GanttRow } from 'react-gantt';
import moment from 'moment';
import 'moment/locale/th';
import Gantt from '../../components/gantt/Gantt';

class ShowBarXaxis extends Component {
    
    render() {
        const data = {
            data: [
              {id: 1, text: 'Task #1', start_date: '15-04-2017', duration: 3, progress: 0.6},
              {id: 2, text: 'Task #2', start_date: '18-04-2017', duration: 3, progress: 0.4}
            ],
            links: [
              {id: 1, source: 1, target: 2, type: '0'}
            ]
        };
        return(
            <div className="ShowBarXaxis">
                <div className="gantt-container" style={{ height: '500px' }}>
                    <Gantt tasks={data}/>
                </div>                
            </div>
        )
    }
}

export default ShowBarXaxis;