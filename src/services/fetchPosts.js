import axios from 'axios';

const BASE_URL = 'https://jsonplaceholder.typicode.com/';

export default async (term = 'posts') => {
  const response = await axios.get(`${BASE_URL}${term}`);
  return response.data;
}
