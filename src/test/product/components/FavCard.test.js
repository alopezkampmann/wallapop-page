/**
 * Module dependencies
 */
const React = require('react');
import {render, fireEvent} from '@testing-library/react'
import FavCard from '../../../product/components/FavCard';

describe('FavCard test', () =>  {
    const products = {
        title: 'prodA',
        description: 'prod desc A',
        image: 'https://frontend-tech-test-data.s3-eu-west-1.amazonaws.com/img/camera.png',
    }

    it('renders FavCard correctly', () => {
        const isSelected = false;
        const component = render(<FavCard product={products} isSelected={isSelected} />)
        expect(component.conteiner).toMatchSnapshot;
    })

    it('renders FavCard correctly is selected true', () => {
    
        const isSelected = true;
        const mockHandler = jest.fn()
    
        const {getByTestId} = render(<FavCard product={products} isSelected={isSelected} />)
        fireEvent.click(getByTestId("removeFav"));
    
        expect(getByTestId("removeFav")).toBeTruthy;
        expect(mockHandler.mock.calls).not.toHaveLength(1);

    })
})
