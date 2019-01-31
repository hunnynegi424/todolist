import React from 'react';
import './index.css';

export default class TasksGrid extends React.Component {
    constructor(props){
        super(props);

        console.log(props);
    }    

    newTask = (task, index) => {
        console.log(this.props.status);
       if( this.props.status == 'all' || task.isComplete == this.props.status)
            return (
                <li className = 'gridTasks' key={index} onClick={()=>{this.props.changeStatus(index)}}> 
                        {task.title}
                </li>
            );
    }

    render(){
        var tasks = this.props.taskList.map(this.newTask);
        return (
            <ul className = 'tasks'>
                {tasks}
            </ul>
        );
    }
}