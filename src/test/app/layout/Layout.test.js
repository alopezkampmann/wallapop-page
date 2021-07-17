/**
 * Module dependencies
 */
const React = require('react');
import {render} from '@testing-library/react'
import Layout from '../../../app/layout/Layout';

describe('Layout test', () =>  {

    it('renders Home correctly', () => {
        const component = render(<Layout />)
        expect(component.conteiner).toMatchSnapshot;
    })
})
