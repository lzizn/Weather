import React from 'react';
import { render, screen } from '@testing-library/react';
import SearchCity from '../../../components/SearchCity';

describe('Rendering', () => {
  it('Should render component SearchCity with Success', () => {
    const setValue = (city: string) => {};
    const { container } = render(
      <SearchCity value="" setValue={setValue} onClick={() => {}} />,
    );

    const Input = screen.getByPlaceholderText('Type city and state');
    const SearchIcon = screen.getByTitle('SearchIcon');

    expect(Input).toBeInTheDocument();
    expect(SearchIcon).toBeInTheDocument();
    expect(container).toMatchSnapshot();
  });
});
