import React, { Component } from 'react';

class Navigation extends Component{
    render(){
        return(
            <nav className="navbar navbar-dark bg-dark">
                <h4 className="display-5">Número de Tareas: {this.props.numTasks}</h4>
            </nav> 
        );
    }
}

export default Navigation;