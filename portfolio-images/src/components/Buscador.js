import React, { Component } from 'react';
import { isEmptyStatement } from '@babel/types';

class Buscador extends Component{

    searchRef = React.createRef();

    callHandleSearch = (e) => {
        e.preventDefault();
        
        const key =  this.searchRef.current.value.trim();

        if(key.length !== 0)
            this.props.handleSearch(key);
            
    }

    render() { 
        return (
            <div className="mt-4">
                <form onSubmit={this.callHandleSearch}>
                    <div className="form-row form-group">
                        <div className="col-12 col-sm-8">
                            <input ref={this.searchRef} type="text" className="form-control form-control-lg" placeholder="Busca tu Imagen" />
                        </div>
                        <div className="col-12 col-sm-4 mt-3 mt-sm-0">
                            <input type="submit" className="btn btn-lg btn-success btn-block" value="Buscar" />
                        </div>
                    </div> 
                </form>  
            </div>
        );
    }
}
 
export default Buscador;