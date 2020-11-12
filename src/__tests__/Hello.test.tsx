import * as React from 'react';
import { render } from '@testing-library/react';
import Hello from '../components/Hello';
import '@testing-library/jest-dom/extend-expect';

describe('<Hello />', () => {
  it('shows the props correctly', () => {
    const {getByText} = render(<Hello name="hello~~~!" />);
    expect(getByText('Hello~! hello~~~!')).toBeInTheDocument()
  });
});