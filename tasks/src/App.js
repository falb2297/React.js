import React, { Component } from 'react';

import './styles/App.css';

import Logo from './components/Logo';
import Navigation from './components/Navigation';
import Form from './components/FormTasks';

import { todo } from './data/listTasks.json';

class App extends Component {

  constructor() {
    super();
    this.state = {
      tasks: todo,
      numTasks: todo.length
    };
    //this.handleAddTask = this.handleAddTask.bind(this);
  }

  addTask = (newTask) => {
    this.setState({tasks: [...this.state.tasks, newTask], numTasks: this.state.numTasks + 1});
  }

  removeTask = (indexRemove) => {
    this.setState({tasks: this.state.tasks.filter((task,index) => {
      return index !== indexRemove
    }), numTasks: this.state.numTasks - 1});
  }

  render() {

    const listTask = this.state.tasks.map((obj, i) => {
      return(
        <div className="col-md-4">
            <div key={i} className="card mt-4">
              <div className="card-header">
                <h5>{obj.title}</h5>
                <span className="badge badge-pill badge-primary ml-2">{obj.priority}</span>
              </div>
              <div className="card-body">
                <p>Departamento: {obj.description}</p>
                <p>Responsable : {obj.responsible}</p>
              </div>
              <div className="card-footer">
                <button className="btn btn-danger" onClick={this.removeTask.bind(this,i)}>Eliminar</button>
              </div>
            </div>
        </div>
      );
    });

    return (
      <div className="App">
        <header className="App-header">
          <Logo />
          <Navigation numTasks={this.state.numTasks} />
        </header>
        <section className="taskSection">
          <div className="container">
            <div className="row">
              {listTask}
            </div>
            <div className="row">
              <div className="col-md-4">
                <Form addTask={this.addTask} />
              </div>
            </div>
          </div>
        </section>    
      </div>
    );
    
  }//render
}//class

export default App;
