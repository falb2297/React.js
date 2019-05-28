//imrc
import React, { Component } from 'react';
import Image from './Image';
import Paginacion from './Paginacion';

//cc
class Contenido extends Component {

    showImages = () => {
        const data = this.props.data;

        if(data.length > 0){

           const images = data.map((obj, i) => {
                return(
                    <Image key={i} objImage={obj} />
                );
            });

            return(
                <React.Fragment>
                    <div className="row">
                        {images}
                    </div>
                    <Paginacion 
                    getNextInformation={this.props.getNextInformation} 
                    getPreviousInformation={this.props.getPreviousInformation} />
                </React.Fragment>
            );

        }else{
            return null;
        }
    }
    
    render(){ 
        return (  
            <React.Fragment>
                {this.showImages()}
            </React.Fragment>
        );
    }
}
 
export default Contenido;