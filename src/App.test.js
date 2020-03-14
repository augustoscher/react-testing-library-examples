import React from 'react';
import { render, cleanup, waitForElement, fireEvent } from '@testing-library/react';
import mockedAxios from 'axios';
import App from './App';

const fakeList = [
  { id: 1, title: "Blog post 1" },
  { id: 2, title: "Blog post 2" },
  { id: 3, title: "Blog post 3" },
  { id: 4, title: "Blog post 4" },
  { id: 5, title: "Blog post 5" },
  { id: 6, title: "Blog post 6" },
  { id: 7, title: "Blog post 7" },
  { id: 8, title: "Blog post 8" },
  { id: 9, title: "Blog post 9" },
  { id: 10, title: "Blog post 10" },
  { id: 11, title: "Blog post 11" },
  { id: 12, title: "Blog post 12" },
  { id: 13, title: "Blog post 13" },
  { id: 14, title: "Blog post 14" },
  { id: 15, title: "Blog post 15" },
  { id: 16, title: "Blog post 16" }
];

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

      //Call the waitForElement helper with await. We’re also using the get
      const listNode = await waitForElement(() => getByTestId('list'));

      expect(listNode).toBeInTheDocument();
    })
  })

  describe('when clicked on filter button', () => {
    it('shows only first 10 posts', async () => {
      mockedAxios.get.mockResolvedValueOnce({
        data: fakeList
      })

      const { getByText, getByTestId } = render(<App />);

      const btnFilter = await waitForElement(() => getByText(/filter/i));

      fireEvent.click(btnFilter);

      expect(btnFilter).toBeInTheDocument();
      expect(getByTestId('list').children.length).toEqual(10);
    })
  })
})
