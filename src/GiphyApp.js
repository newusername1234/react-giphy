import React from 'react';
import axios from 'axios';
import GiphyImage from './GiphyImage';

const giphyUrl = 'https://api.giphy.com/v1/gifs/random?api_key=mjeqDFcWKHZZQQNcIB24jCxjHdSDYxfL&tag=cat&rating=G';


class GiphyApp extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            giphies: []
        }
    }

    render() {
        return (
            <div>
                <button onClick={this._getGiphy}>CLICK</button>
                {
                    this.state.giphies.map(giphy => (
                        <GiphyImage giphy={giphy} />
                    ))
                }
            </div>
        )
    }

    _getGiphy = () => {
        axios.get(giphyUrl)
            .then(response => {
                this.setState({
                    giphies: [
                        response.data.data.images.downsized_large,
                        ...this.state.giphies,
                    ]
                });
            })
            .catch(err => {
                console.log(`no giphy`);
            })
    }
}

export default GiphyApp;