import { render, screen } from '@testing-library/react';
import BuyList from './BuyList';
import React from 'react';
import ReactDOM from 'react-dom';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<BuyList />, div);
});
