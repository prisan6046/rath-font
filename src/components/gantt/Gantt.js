/*global gantt*/
import React, { Component } from 'react';
import 'dhtmlx-gantt';
import 'dhtmlx-gantt/codebase/dhtmlxgantt.css';
 
export default class Gantt extends Component {
  componentDidMount() {
    // gantt.init(this.ganttContainer);
    // gantt.parse(this.props.tasks);

    // gantt.config.subscales = [
    //     {unit:"week", step:1, date:"Week #%W"}
    // ];
    // gantt.config.scale_height = 54;
    // gantt.init(this.ganttContainer);
    // gantt.parse(this.props.tasks);
    
    var projects_milestones_critical = {
        data: [
            { id: 1, text: "meet deadline 30 days", type: "project", progress: 0.4, open: true, start_date: "02-04-2018 00:00", duration: 17, parent: 0, color: "#FACE73"},
            { id: 2, text: "Office facing", type: "project", start_date: "02-04-2018 00:00", duration: 5, progress: 0.6, parent: 1, open: true},
            { id: 5, text: "Interior office", type: "task", start_date: "02-04-2018 00:00", duration: 3, parent: 2, progress: 0.6, open: true},
            { id: 6, text: "Air conditioners check", type: "task",  start_date: "05-04-2018 00:00", duration: 2, parent: 2, progress: 0.29, open: true},
            { id: 3, text: "Furniture installation", type: "project", start_date: "08-04-2018 00:00", duration: 2, parent: 1, progress: 0.6, open: false},
            { id: 7, text: "Workplaces preparation", type: "task",  start_date: "08-04-2018 00:00", duration: 2, parent: 3, progress: 0.6, open: true},
            { id: 4, text: "The employee relocation", type: "project", start_date: "10-04-2018 00:00", duration: 9, parent: 1, progress: 0.5, open: true},
            { id: 8, text: "Preparing workplaces", type: "task",  start_date: "10-04-2018 00:00", duration: 3, parent: 4, progress: 0.5, open: true},
            { id: 9, text: "Workplaces importation", type: "task",  start_date: "13-04-2018 00:00", duration: 3, parent: 4, progress: 0.5, open: true},
            { id: 10, text: "Workplaces exportation", type: "task",  start_date: "16-04-2018 00:00", duration: 3, parent: 4, progress: 0.5, open: true},
            { id: 11, text: "Product launch", type: "project", progress: 0.6, open: true, start_date: "02-04-2018 00:00", duration: 17, parent: 0 },
            { id: 12, text: "Perform Initial testing", type: "task",  start_date: "02-04-2018 00:00", duration: 5, parent: 11, progress: 1, open: true},
            { id: 13, text: "Development", type: "project", start_date: "03-04-2018 00:00", duration: 16, parent: 11, progress: 0.5, open: true},
            { id: 17, text: "Develop System", type: "task",  start_date: "03-04-2018 00:00", duration: 5, parent: 13, progress: 1, open: true},
            { id: 25, text: "Beta Release", type: "milestone", start_date: "08-04-2018 00:00", duration: 0, parent: 13, progress: 0, open: true},
            { id: 18, text: "Integrate System", type: "task",  start_date: "08-04-2018 00:00", duration: 4, parent: 13, progress: 0.8, open: true},
            { id: 19, text: "Test", type: "task",  start_date: "12-04-2018 00:00", duration: 3, parent: 13, progress: 0.2, open: true},
            { id: 20, text: "Marketing", type: "task",  start_date: "15-04-2018 00:00", duration: 4, parent: 13, progress: 0, open: true},
            { id: 14, text: "Analysis", type: "task",  start_date: "02-04-2018 00:00", duration: 4, parent: 11, progress: 0.8, open: true},
            { id: 15, text: "Design", type: "project", start_date: "06-04-2018 00:00", duration: 6, parent: 11, progress: 0.2, open: true},
            { id: 21, text: "Design database", type: "task",  start_date: "06-04-2018 00:00", duration: 4, parent: 15, progress: 0.5, open: true},
            { id: 22, text: "Software design", type: "task",  start_date: "08-04-2018 00:00", duration: 4, parent: 15, progress: 0.1, open: true},
            { id: 16, text: "Documentation creation", type: "task",  start_date: "11-04-2018 00:00", duration: 5, parent: 11, progress: 0, open: true},
            { id: 24, text: "Release v1.0", type: "milestone",  start_date: "19-04-2018 00:00", duration: 0, parent: 11, progress: 0, open: true}
        ],
        links: [
            { id: 1, source: "2", target: "3", type: "0"},
            { id: 2, source: "3", target: "4", type: "0"},
            { id: 3, source: "17", target: "25", type: "0"},
            { id: 4, source: "18", target: "19", type: "0"},
            { id: 5, source: "19", target: "20", type: "0"},
            { id: 6, source: "13", target: "24", type: "0"},
            { id: 7, source: "25", target: "18", type: "0"},
            { id: 8, source: "5", target: "6", type: "0"},
            { id: 9, source: "8", target: "9", type: "0"},
            { id: 10, source: "9", target: "10", type: "0"},
            { id: 11, source: "16", target: "24", type: "0"},
            { id: 12, source: "14", target: "15", type: "0"}
        ]
    };
    
    function generateData(count, dateFrom, dateTo){
        var tasks =  {
            data:[],
            links:[]
        };
    
        count = parseInt(count, 10) || 100;
    
        var date = new Date(dateFrom.getFullYear(),5,1);
        var project_id = 1;
        tasks.data.push({
            id:  project_id,
            text: "Project1",
            start_date: date,
            type: gantt.config.types.project,
            open:true
        });
        for (var i = 1; i < count; i++) {
            date = gantt.date.add(date, 1, "day");
            var task = {
                id: i + 1,
                start_date: date,
                text: "Task " + (i + 1),
                duration: 8,
                parent: project_id
            };
    
            if(gantt.date.add(date, 8, "day").valueOf() > dateTo.valueOf()){
                date = new Date(dateFrom);
                project_id = i + 1;
                delete task.parent;
                task.open = true;
            }
            tasks.data.push(task);
    
        }
        return tasks;
    }
    gantt.config.scale_unit = "month";
	gantt.config.step = 1;
	gantt.config.date_scale = "%F, %Y";
	gantt.config.min_column_width = 50;

	gantt.config.scale_height = 90;

	var weekScaleTemplate = function (date) {
		var dateToStr = gantt.date.date_to_str("%d %M");
		var endDate = gantt.date.add(gantt.date.add(date, 1, "week"), -1, "day");
		return dateToStr(date) + " - " + dateToStr(endDate);
	};

	var daysStyle = function(date){
		var dateToStr = gantt.date.date_to_str("%D");
		if (dateToStr(date) == "Sun"||dateToStr(date) == "Sat")  return "weekend";
	
		return "";
	};

	gantt.config.subscales = [
        {unit:"week", step:1, date:"Week #%W"},
		{unit:"day", step:1, date:"%D", css:daysStyle }
    ];
    
    gantt.form_blocks["my_editor"] = {
        render:function(sns) {
            return "<div class='dhx_cal_ltext' style='height:60px;'>Text&nbsp;"
            +"<input type='text'><br/>Holders&nbsp;<input type='text'></div>";
        },
        set_value:function(node, value, task,section) {
            node.childNodes[1].value = value || "";
            node.childNodes[4].value = task.users || "";
        },
        get_value:function(node, task,section) {
            task.users = node.childNodes[4].value;
            return node.childNodes[1].value;
        },
        focus:function(node) {
            var a = node.childNodes[1];
            a.select();
            a.focus();
        }
    };
    gantt.config.lightbox.sections = [
        { name:"description", height:200, map_to:"text", type:"my_editor", focus:true},
        // { name:"time", height:72, type:"duration", map_to:"auto"}
    ];
    
    gantt.config.columns = [
        {name:"text", label:" ",  width:"*", tree:true }
    ];
    gantt.hideLightbox();

	gantt.init(this.ganttContainer);
	gantt.parse(projects_milestones_critical);

  }
  
  render() {
    return (
        <div
            ref={(input) => { this.ganttContainer = input }}
            style={{width: '100%', height: '100%'}}
        ></div>
    );
  }
}