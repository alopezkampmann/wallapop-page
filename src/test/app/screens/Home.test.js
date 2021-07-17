/**
 * Module dependencies
 */
const React = require('react');
import {render} from '@testing-library/react'
import Home from '../../../app/screens/Home';

describe('Home test', () =>  {

    it('renders Home correctly', () => {
        const component = render(<Home />)
        expect(component.conteiner).toMatchSnapshot;
    })
})
