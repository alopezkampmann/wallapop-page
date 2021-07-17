/**
 * Module dependencies
 */
const React = require('react');
import {render} from '@testing-library/react'
import Filters from '../../../product/components/Filters';

describe('Filters test', () =>  {

    it('renders Filters correctly', () => {
        const component = render(<Filters />)
        expect(component.conteiner).toMatchSnapshot;
    })
});
