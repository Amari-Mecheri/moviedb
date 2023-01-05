import React from 'react';
import { Link } from 'react-router-dom';
//styles
import { Image } from './Thumbnail.styles';

const Thumbnail=({image, movieId, clickable, onClick}) => {
    return (
        <div>
            {clickable? (
                <Link to={`/${movieId}`}>
                    <Image src={image} alt='movie-thumb'/>
                </Link>
            ):(<Image src={image} alt='movie-thumb' onClick={onClick}/>)}
            
        </div>
    );
}

export default Thumbnail;