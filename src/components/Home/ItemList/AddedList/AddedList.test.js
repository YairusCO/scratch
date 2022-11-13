import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import AddedList from './AddedList';

describe('<AddedList />', () => {
  test('it should mount', () => {
    render(<AddedList />);
    
    const addedList = screen.getByTestId('AddedList');

    expect(addedList).toBeInTheDocument();
  });
});