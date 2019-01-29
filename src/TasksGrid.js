import React from 'react';
import './index.css';

export default class TasksGrid extends React.Component {
    

    newTask = (task, index) => {
        return (
            <li className = 'gridTasks' key={index}>
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