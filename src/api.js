import axios from 'axios';

axios.defaults.baseURL = 'https://pixabay.com/api/';

export default async function getData({
  searchQuery = '',
  currentPage = 1,
  language = 'en',
} = {}) {
  try {
    const params = new URLSearchParams({
      q: searchQuery,
      page: currentPage,
      per_page: 12,
      lang: language,
    });
    const response = await axios.get(
      `?key=${process.env.REACT_APP_API_KEY}&image_type=photo&orientation=horizontal&safesearch=true&${params}`
    );
    console.log('ApiData: ', response.data);
    return response.data;
  } catch (error) {
    console.error(error);
  }
}
