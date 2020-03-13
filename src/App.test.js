import React from 'react';
import { render, cleanup } from '@testing-library/react';
import App from './App';

describe('React Test Library App', () => {
  describe('when the fetch operation is pending', () => {
    it('shows loading span', () => {
      const { getByText } = render(<App />);

      expect(getByText(/loading/i)).toBeInTheDocument();
      cleanup(); //unomount component
    })
  })
})
