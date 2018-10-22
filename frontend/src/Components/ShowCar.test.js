import React from 'react';
import { shallow,configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import ReactDOM from 'react-dom';
import IndexCars from './ShowCars';

configure({ adapter: new Adapter() });

describe('<IndexCar />', () => {
    it('renders a not loaded div', () => {
        const map = shallow( <IndexCars/>);
        expect(map.find('div.notLoaded').length).toEqual(1);
    });
    it('renders a loaded div', () => {
        const map = shallow( <IndexCars/>);
        expect(map.find('div.Loaded').length).toEqual(0);
    });
});