/**
 * Module dependencies
 */
const React = require('react');
import {render, fireEvent} from '@testing-library/react'
import Filters from '../../../product/components/Filters';

describe('Filters test', () =>  {

    it('renders Filters correctly', () => {
        const component = render(<Filters />)
        expect(component.conteiner).toMatchSnapshot;
    })

    it('renders Filters correctly ', () => {

        const mockHandler = jest.fn()
    
        const {getByTestId} = render(<Filters />)
        fireEvent.click(getByTestId("Fav"));
    
        expect(getByTestId("Fav")).toBeTruthy;
        expect(mockHandler.mock.calls).not.toHaveLength(1);

    })
});
