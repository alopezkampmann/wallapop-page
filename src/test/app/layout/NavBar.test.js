/**
 * Module dependencies
 */
const React = require('react');
import {render} from '@testing-library/react'
import NavBar from '../../../app/layout/Navbar';

describe('NavBar test', () =>  {

    it('renders Home correctly', () => {
        const component = render(<NavBar />)
        expect(component.conteiner).toMatchSnapshot;
    })
})
