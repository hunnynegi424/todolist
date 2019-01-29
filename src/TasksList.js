import React from 'react';
import './index.css';

export default class TasksList extends React.Component {
    
    

    newTask = (task, index) => {
        return (
            <p className = 'listedTask' key={index}>
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