/**
 * Module dependencies
 */
const React = require('react');
import {render, screen} from '@testing-library/react'
import Grid from '../../../product/components/Grid';

describe('Grid test', () =>  {
    const products = [
        {
            title: 'prodA',
            description: 'prod desc A',
            image: 'https://frontend-tech-test-data.s3-eu-west-1.amazonaws.com/img/camera.png',
        },
        {
            title: 'prodB',
            description: 'prod desc B',
            image: 'https://frontend-tech-test-data.s3-eu-west-1.amazonaws.com/img/camera.png',
        },
        {
            title: 'prodC',
            description: 'prod desc C',
            image: 'https://frontend-tech-test-data.s3-eu-west-1.amazonaws.com/img/camera.png',
        }
    ]

    it('renders Grid correctly', () => {
        const component = render(<Grid products={products}/>)
        expect(component.conteiner).toMatchSnapshot;
    })

    it('Grid have products', () => {  
        render(<Grid products={products} />  );
        expect(screen.getByText("prodA")).toBeInTheDocument;
    })
});
