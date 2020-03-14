import React from 'react';
import { render, cleanup, waitForElement } from '@testing-library/react';
import App from './App';

describe('App', () => {
  describe('when the fetch operation is pending', () => {
    it('shows loading span', () => {
      const { getByText } = render(<App />);

      expect(getByText(/loading/i)).toBeInTheDocument();
      cleanup(); //unomount component
    })
  })

  describe('when fetch operation is done', () => {
    it('show a list of posts', async () => { //asynchronous test
      const { getByTestId } = render(<App />);

      const listNode = await waitForElement(() => getByTestId('list'));

      expect(listNode).toBeInTheDocument();
    })
  })
})
