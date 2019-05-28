import React, { Component } from 'react';

import './styles/css/style.css';

import Buscador from './components/Buscador';
import Contenido from './components/Contenido';


class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      keySearch: '',
      pagina: 0,
      images: []
    };
  }

  goUp = () => {
    const element = document.querySelector('.jumbotron');
    element.scrollIntoView('smooth', 'start');
  }

  getNextInformation = () => {
    
    const paginaActual = this.state.pagina + 1;
    this.setState({pagina: paginaActual}, () => {this.getInformationApi(); this.goUp();});
    
  }

  getPreviousInformation = () => {

    if(this.state.pagina > 1){
      const paginaActual = this.state.pagina - 1;
      this.setState({pagina: paginaActual}, () => {this.getInformationApi(); this.goUp();});
    }

  }

  getInformationApi = () => {

    const NUM_DATA = 50;
    const PAGINA = this.state.pagina; 

    const URL_IMAGES = `https://pixabay.com/api/?key=12384279-7f9f078164eeb4e0de9e91a55&q=${this.state.keySearch}&per_page=${NUM_DATA}&orientation=horizontal&page=${PAGINA}`;

    fetch(URL_IMAGES)
    .then(rest => rest.json())
    .then(rest => this.setState({images:rest.hits}))
    .catch(error => console.error(`Error: ${error}`));
  }

  handleSearch = (key) => {
    this.setState({keySearch:key, pagina: 1}, () => {this.getInformationApi();});
  } 

  render() {
    return (
      <div className="mainWrap">
        <div className="app container">

          <header>
            <div className="jumbotron">
              <h1 className="lead text-center">Buscador de Imagenes</h1>
              <Buscador handleSearch={this.handleSearch} />
            </div>
          </header>

          <section className="mainContent">
            <Contenido 
            data={this.state.images} 
            getNextInformation={this.getNextInformation} 
            getPreviousInformation={this.getPreviousInformation} />
          </section>

        </div>
      </div>
    );
  }

}

export default App;
