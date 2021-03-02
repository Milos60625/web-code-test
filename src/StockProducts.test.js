import { render, screen } from '@testing-library/react';
import StockProducts from './StockProducts';
import React from 'react';
import ReactDOM from 'react-dom';


it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<StockProducts />, div);
});

it('renders products', () => {
  render(<StockProducts />);
  expect(screen.getAllByRole('name')).toBeInTheDocument();
});
