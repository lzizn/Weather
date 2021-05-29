import React from 'react';
import { render, screen } from '@testing-library/react';
import App from '../App';

describe('Rendering', () => {
  it('Shoud render with success', () => {
    const { container } = render(<App />);
    const linkElement = screen.getByText(/Hello world!/i);
    expect(linkElement).toBeInTheDocument();
    expect(container).toMatchSnapshot();
  });
});
