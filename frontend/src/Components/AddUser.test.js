import React from 'react';
import { shallow,configure, simulate } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import ReactDOM from 'react-dom';
import AddUser from './AddUser';

configure({ adapter: new Adapter() });

describe('<AddUser />', () => {
    it('renders a not loaded div', () => {
        const User = shallow( <AddUser/>);
        expect(User.find('div.add-user').length).toEqual(1);
    });
    it('renders a not loaded div', () => {
        const User = shallow( <AddUser/>);
        expect(User.find('input#user-name').length).toEqual(0);

    });

    it('Checks if state change in case of input in name field', () => {
        const User = shallow( <AddUser/>);
        const Wrapper = User.find('input').at(0);
        var event = {target: {value: 'ASD'}};
        Wrapper.props().onChange(event);
        expect(User.state('name').length).toEqual(3);

    });

    it('Checks if state change in case of input in email field', () => {
        const User = shallow( <AddUser/>);
        const Wrapper = User.find('[name="user-email"]');
        Wrapper.simulate('change', {target: {value: 'ASD'}});
        expect(User.state('email').length).toEqual(3);

    });

    it('Checks if state change in case of input in email field', () => {
        const User = shallow( <AddUser/>);
        const Wrapper = User.find('[name="user-email"]');
        Wrapper.simulate('change', {target: {value: 'ASD@gasd.com'}});
        expect(User.state('email')).toEqual(expect.stringContaining('@'));

    });

    it('Checks if state change in case of input in password field', () => {
        const User = shallow( <AddUser/>);
        const Wrapper = User.find('[name="user-password"]');
        Wrapper.simulate('change', {target: {value: 'ASD'}});
        expect(User.state('password').length).toEqual(3);

    });

    it('Checks if state change in case of input in licence number field', () => {
        const User = shallow( <AddUser/>);
        const Wrapper = User.find('[name="user-licence"]');
        Wrapper.simulate('change', {target: {value: 'ASD'}});
        expect(User.state('licence_number').length).toEqual(3);

    });
});