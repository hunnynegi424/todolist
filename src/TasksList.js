import React from 'react';
import './index.css';

export default class TasksList extends React.Component {
    constructor(props){
        super(props);

        console.log(props);
    }    

    newTask = (task, index) => {
        console.log(this.props.status);
       if( this.props.status == 'all' || task.isComplete == this.props.status)
            return (
                <p className = 'listedTask' key={index} onClick={()=>{this.props.changeStatus(index)}}> 
                        {task.title}
                </p>
            );
    }

    render(){
        var tasks = this.props.taskList.map(this.newTask);
        return (
            <div className = 'tasks'>
                {tasks}
            </div>
        );
    }
}