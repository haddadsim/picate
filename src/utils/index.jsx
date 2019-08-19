import axios from 'axios';

const API_KEY = process.env.REACT_APP_ACCESS_KEY;

const fetchImages = (number, searchText) => {
  const results = axios.get('https://api.unsplash.com/search/photos', {
    params: {
      query: searchText,
      page: number,
      per_page: 24,
      orientation: 'squarish',
    },
    headers: {
      Authorization: API_KEY,
    },
  });
  return results;
};

export default fetchImages;

