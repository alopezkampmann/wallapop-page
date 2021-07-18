/**
 * Module dependencies
 */
const React = require('react');
import {render, fireEvent, screen} from '@testing-library/react'
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
        expect(component.getByTestId("favCard")).toBeInTheDocument;
    })

    it('renders FavCard correctly is selected true', () => {    
        const isSelected = true;
        const mockHandler = jest.fn()
    
        const {getByTestId} = render(<FavCard product={products} isSelected={isSelected} />)
        fireEvent.click(getByTestId("removeFav"));
    
        expect(getByTestId("removeFav")).toBeTruthy;
        expect(mockHandler.mock.calls).not.toHaveLength(1);
        expect(getByTestId("favCardSelected")).toBeInTheDocument;
    })

    it('FavCard have products', () => {  
        const isSelected = true;
        render(<FavCard product={products} isSelected={isSelected} />  );
        expect(screen.getByText("prodA")).toBeInTheDocument;
    })
})
