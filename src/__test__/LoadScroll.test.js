import React from 'react';
import ReactDOM from 'react-dom';
import { mount } from 'enzyme';
import LoadScroll from '../components/LoadScroll';


describe('<LoadScroll />', () => {
    /*
    it('renders without crashing', () => {
        const div = document.createElement('div');

        function buttonFunction() {
            alert('hi');
        }

        async function getData() {

            let data = []
            await new Promise(resolve => {
                setTimeout(resolve, 5000)
            })

            for (let i = 0; i <= 100; i++)
                data.push({ title: `title ${i}`, description: `description ${i}`, img: img, });

            return data;
        }

        ReactDOM.render(<LoadScroll cardData={getData} cardButton={{ title: 'Ver', function: buttonFunction }} />, div);
        ReactDOM.unmountComponentAtNode(div);
    });
    */


    it('knows that 2 and 2 make 4', () => {
        expect(2 + 2).toBe(4);
    });
});