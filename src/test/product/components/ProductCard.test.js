/**
 * Module dependencies
 */
const React = require('react');
import {render, screen} from '@testing-library/react'
import ProductCard from '../../../product/components/ProductCard';

describe('ProductCard test', () =>  {
    const products = {
        title: 'prodA',
        description: 'prod desc A',
        image: 'https://frontend-tech-test-data.s3-eu-west-1.amazonaws.com/img/camera.png',
    }

    it('renders ProductCard correctly', () => {
        const isSelected = false;
        const component = render(<ProductCard product={products} isSelected={isSelected} />)
        expect(component.conteiner).toMatchSnapshot;
    })

    it('renders ProductCard correctly is selected true', () => {
    
        const isSelected = true;
        const mockHandler = jest.fn()
    
        const {getByTestId} = render(<ProductCard product={products} isSelected={isSelected} />)
    
        expect(getByTestId("addFav")).toBeTruthy;
        expect(mockHandler.mock.calls).not.toHaveLength(1);
    })

    it('ProductCard have products', () => {  
        const isSelected = true;
        render(<ProductCard product={products} isSelected={isSelected} />  );
        expect(screen.getByText("prodA")).toBeInTheDocument;
    })
})
