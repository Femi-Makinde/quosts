import React from 'react';
import StyledImage from '../styled/StyledImage';

const Image = ({src,height = 50,width = 50})=>{
    return (
        <StyledImage height = {height} width = {width}>
            <img src = {src}/>
        </StyledImage>
    );
}

export default Image;