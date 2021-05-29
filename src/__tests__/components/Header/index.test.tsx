import React from 'react';
import { render, screen } from '@testing-library/react';
import Header from '../../../components/Header';

describe('Rendering', () => {
  it('Should render component Header with success', () => {
    const { container } = render(<Header />);

    const Input = screen.getByPlaceholderText('Type city and state');

    expect(Input).toBeInTheDocument();
    expect(container).toMatchSnapshot();
  });
});
