//imr
import React from 'react'

const Image = (props) => {

    const {largeImageURL, likes, previewURL, tags, views} = props.objImage;

    return (
    <div  className="col-12 col-sm-6 col-md-4 col-xl-3 mb-3">
        <div className="card text-center">
            <figure className="wrapImage mt-4">
                <img className="imgStyle card-img-top" src={previewURL} alt={`Imagen ilustrativa: ${tags}`} />
            </figure>
            <div className="card-body">
                <p className="card-text">{likes} Likes</p>
                <p className="card-text">{views} Views</p>
                <a href={largeImageURL} target="_blank" className="btn btn-secondary btn-block btn-sm">Ver Imagen</a>
            </div>
        </div>
    </div>
    );
}
  
  export default Image;
  