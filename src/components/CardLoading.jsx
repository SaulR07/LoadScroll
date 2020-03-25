import React from 'react';
import './CardLoading.sass';

class CardLoading extends React.Component {

    /**
     * Constructor
     */
    constructor (props) {
        super(props);
    }

    render() {
        const ImgLoading = '../images/loader.gif';
        return (
            <div className="card-loading">
                <img className="img-cardloading-loadscroll" src={ImgLoading} />
            </div>
        );
    }
}

export default CardLoading;