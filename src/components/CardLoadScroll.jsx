import React from 'react';
import './CardLoadScroll.sass';
class CardLoadScroll extends React.Component {

    /**
     * Constructor
     */
    constructor (props) {
        super(props);
    }

    render() {
        return (
            <div id={this.props.cardData.id} className="card card-loadscroll">
                <img className="card-img-top img-loadscroll" src={this.props.cardData.img} />
                <div className="card-body">
                    <h5 className="card-title card-title-card-load-scroll">{this.props.cardData.title}</h5>
                    <a href="#" className="btn btn-primary" onClick={this.props.cardButton.function}>{this.props.cardButton.title}</a>
                </div>
            </div>
        );
    }
}

export default CardLoadScroll;