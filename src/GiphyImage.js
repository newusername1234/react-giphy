import React from 'react';

function GiphyImage({
    giphy
}) {
    return (
        <img src={giphy.url}/>
    )
}

export default GiphyImage;