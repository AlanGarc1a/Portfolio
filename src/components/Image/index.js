import React from 'react'
import styled from 'styled-components';

const StyledImage = styled.img`
    max-width: 100%;
    max-height: 100%;
    object-fit: contain;
    opacity: 0.5;

    &:hover {
        opacity: 1;
    }
`

const Image = ({ src, alt }) => {
    return (
        <StyledImage src={src} alt={alt} />
    )
}

export default Image;