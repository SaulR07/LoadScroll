import React from 'react';
import './LoadScroll.sass';

//Components
import CardLoading from './CardLoading';
import CardLoadScroll from './CardLoadScroll';

class LoadScroll extends React.Component {

    constructor (props) {
        super(props);

        this.state = {
            cards: [],
            gettingData: false
        }

        this.handleScroll = this.handleScroll.bind(this);
    }

    componentDidMount() {
        this.getCards();
        document.getElementById('content-LoadScroll').addEventListener('scroll', this.handleScroll);
    }

    componentWillUnmount() {
        document.getElementById('content-LoadScroll').removeEventListener('scroll', this.handleScroll);
    }

    /**
     * Manejador del scroll del contenedor
     * 
     * @author Saul Reyes Medina <saulreyesm@outlook.com>
     */

    /*     handleScroll = e => {
            let element = e.target;
            if (element.scrollHeight - element.scrollTop === element.clientHeight) {
                if (!this.state.gettingData)
                    this.getCards();
            }
        }*/

    handleScroll(e) {
        let element = e.target;
        if (element.scrollHeight - element.scrollTop === element.clientHeight) {
            console.log("entre a handle");
            if (!this.state.gettingData) {
                this.getCards();
            }
        }
    }

    /**
     * Funcion para obtener tarjetas
     *
     * @author Saul Reyes Medina <saulreyesm@outlook.com>
     */
    async getCards() {
        let newCards = this.state.cards;

        newCards.push(<CardLoading />);
        this.setState({ cards: newCards, gettingData: true });

        let dataCards = await this.props.cardData();
        newCards.pop();
        dataCards.map(data => {
            newCards.push(<CardLoadScroll cardData={data} cardButton={this.props.cardButton} />);
        });

        this.setState({ cards: newCards, gettingData: false });
    }

    render() {
        return (
            <div id="content-LoadScroll" className="content-LoadScroll">
                {this.state.cards}
            </div>
        );
    }

}

export default LoadScroll;