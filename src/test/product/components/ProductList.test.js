/**
 * Module dependencies
 */
const React = require('react');
import {render} from '@testing-library/react'
import ProductList from '../../../product/components/ProductList';

test('renders ProductList', () => {
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

    const component = render(<ProductList products={products} />)

    component.getByText('prodA')
})
