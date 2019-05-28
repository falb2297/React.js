//imr
import React from 'react'

const Paginacion = (props) => {

    return (
        <div className="py-3 text-center">
            <button 
            onClick={props.getPreviousInformation} 
            type="button" 
            className="btn btn-info mr-1">&larr; Anterior</button>

            <button 
            onClick={props.getNextInformation} 
            type="button" 
            className="btn btn-info ml-1">Siguiente &rarr;</button>
        </div>
    );
}
  
  export default Paginacion;
  