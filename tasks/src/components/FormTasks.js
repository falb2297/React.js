import React, { Component } from 'react';

class Form extends Component {

    constructor() {
      super();
      this.state = {
          title: '',
          responsible: '',
          description: '',
          priority: 'low'

      };

        //this.handleInput = this.handleInput.bind(this);
        //this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleInput = (e) => {
        const {value, name} = e.target;
        this.setState({[name]: value});
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.addTask(this.state);
    }
  
    render() {

      return (
            <div key="a" className="card mt-4 mb-4">
                <form className="card-body" onSubmit={this.handleSubmit}>
                    <div className="form-group">
                        <input type="text" name="title" className="form-control" placeholder="Title" onChange={this.handleInput} />
                    </div>
                    <div className="form-group">
                        <input type="text" name="responsible" className="form-control" placeholder="Responsible" onChange={this.handleInput} />
                    </div>
                    <div className="form-group">
                        <input type="text" name="description" className="form-control" placeholder="Description" onChange={this.handleInput} />
                    </div>
                    <div className="form-group">
                        <select name="priority" className="form-control" onChange={this.handleInput}>
                            <option>Low</option>
                            <option>Medium</option>
                            <option>High</option>
                        </select>
                    </div>

                   <button  type="submit" className="btn btn-primary">Enviar</button>
                </form>
            </div>
      );
    }
  }
  
  export default Form;