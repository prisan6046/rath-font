import React, { Component } from 'react'
import moment from 'moment'
import Calendar from 'rc-calendar';
import FullCalendar from 'fullcalendar-reactwrapper';
import 'fullcalendar-reactwrapper/dist/css/fullcalendar.min.css';
import 'moment/locale/th';
 
class ShowCalendar extends Component {
    constructor(props) {
        super(props);
        this.state = {
        events:[
                    {
                        title: 'All Day Event',
                        start: '2017-05-01'
                    },
                    {
                        title: 'Long Event',
                        start: '2017-05-07',
                        end: '2017-05-10'
                    },
                    {
                        id: 999,
                        title: 'Repeating Event',
                        start: '2017-05-09T16:00:00'
                    },
                    {
                        id: 999,
                        title: 'Repeating Event',
                        start: '2017-05-16T16:00:00'
                    },
                    {
                        title: 'Conference',
                        start: '2017-05-11',
                        end: '2017-05-13'
                    },
                    {
                        title: 'Meeting',
                        start: '2017-05-12T10:30:00',
                        end: '2017-05-12T12:30:00'
                    },
                    {
                        title: 'Birthday Party',
                        start: '2017-05-13T07:00:00'
                    },
                    {
                        title: 'Click for Google',
                        url: 'http://google.com/',
                        start: '2017-05-28'
                    }
                ],		
        }
    }
    render() {        
        const now = moment();
        return(
            <div className="ShowCalendar bg-white">
                <div className="p-2">
                    <FullCalendar
                        themeSystem="bootstrap4"
                        id = "your-custom-ID"
                        header = {{
                            left: 'prev,today,next',
                            center: 'title',
                            right: 'month,basicWeek,basicDay'
                        }}                        
                        navLinks= {true} // can click day/week names to navigate views
                        editable= {true}
                        eventLimit= {true} // allow "more" link when too many events
                        events = {this.state.events}	
                        weekNumbers={true}                        
                        locale="th"
                    />
                </div>                
            </div>
        )
    }
}

export default ShowCalendar;