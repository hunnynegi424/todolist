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
      status: false,
      view: 'list'
    }
  }

  setTaskType(status){
    this.setState({status});
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
        return {tasks:[...prevState.tasks, ...[enteredTask]]}
      });
      //Setting the field blank after entering
      this.inputTask.value = '';
    }
  }

  changeStatus(index){
    const tasks = this.state.tasks;
    tasks[index].isComplete = !tasks[index].isComplete;
    this.setState({tasks})
  }

  //this is to clear the tasks in the array
  clearTask = () => {
    this.setState(()=>{
      return {tasks: []};
    })
  }

  listView = () =>{
    this.setState(()=>{
      return {view: 'list'};
    })
  }

  gridView = () =>{
    this.setState(()=>{
      return {view: 'grid'};
    })
  }

  list= ()=> {
    return <div><TasksList status={this.state.status}  changeStatus={((index)=>{this.changeStatus(index)})} taskList={this.state.tasks}/></div>
  }

  grid= ()=> {
    return <div><TasksGrid status={this.state.status}  changeStatus={((index)=>{this.changeStatus(index)})} taskList={this.state.tasks}/></div>
  }


  render() {
    var changeview;
    if(this.state.view === 'list'){
      changeview = this.list()
    }
    else if(this.state.view === 'grid'){
      changeview = this.grid()
    }
    return  <div className='ui'>
              <div className='view-bar'>
                <button className='view' onClick={this.listView}>List</button>
                <button className='view' onClick={this.gridView}>Grid</button>
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
                <button className='btn' onClick={()=>{this.setTaskType(false)}}>Active</button>
                <button className='btn' onClick={()=>{this.setTaskType(true)}}>Completed</button>
                <button className='btn' onClick={()=>{this.setTaskType('all')}}>All</button>
                <button className='btn'onClick={this.clearTask}>Clear</button>
              </div>
              <div className='task-block'>
              {changeview}
              </div>
            </div>
  }
}


export default App;

ReactDOM.render(<App />, document.getElementById('root'));