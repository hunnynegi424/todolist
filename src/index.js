import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import TasksList from './TasksList';
import TasksGrid from './TasksGrid';

class App extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      tasks: [],
      status: 'incomplete',
      view: 'list'
    }
  }

  //Adding the entered task into array and setting the default input to blank
  onEnter(e) {
    //Prevents the page from reloading after entering
    e.preventDefault();
    if(this.inputTask.value !== ''){
      var enteredTask = {
        title: this.inputTask.value,
        isComplete: false
      }
      //Adds the task into the array
      this.setState((prevState) => {
        return {tasks: prevState.tasks.concat(enteredTask)};
      });
      //Setting the field blank after entering
      this.inputTask.value = '';
    }
  }

  //this is to clear the tasks in the array
  clearTask = () => {
    this.setState(()=>{
      return {tasks: []};
    })
  }

  render() {
    return  <div className='ui'>
              <div className='view-bar'>
                <button className='view'>List</button>
                <button className='view'>Grid</button>
              </div>
              <div className='header'>
                <p>Daily Todo List</p>
              </div>
              <form onSubmit={(e)=>{this.onEnter(e)}} className='ui_text'>
                <input 
                  type='text' 
                  className='textInput' 
                  placeholder='Enter the task'
                  ref={(todo)=>{this.inputTask = todo}}
                  />
              </form>
              <div className='tab-navigate'>
                <button className='btn'>Active</button>
                <button className='btn'>Completed</button>
                <button className='btn'>All</button>
                <button className='btn'onClick={this.clearTask}>Clear</button>
              </div>
              <div className='task-block'>
              <TasksGrid taskList={this.state.tasks} />
              </div>
            </div>
  }
}


export default App;

ReactDOM.render(<App />, document.getElementById('root'));