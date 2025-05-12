import axios from 'axios';

const ACCESS_KEY = import.meta.env.VITE_UNSPLASH_ACCESS_KEY;

axios.defaults.baseURL = 'https://api.unsplash1.com';

export const fetchImageSearchFromQuery = async query => {
  const response = await axios.get('/search/photos', {
    params: {
      query: query,
      client_id: accessKey,
      per_page: 12,
    },
  });
  return response.data.results;
};
