import axios from 'axios';

const fetchMockData = async () => {
  const mockData = await axios.get('https://api.imgflip.com/get_memes');
  return mockData.data.data.memes;
}

// const fetchMockData = async (page) => {
//   const mockData = await axios.get(`https://jsonplaceholder.typicode.com/photos?_limit=30&_page=${page}`);
//   console.log(mockData)
//   return mockData.data;
// }

export default fetchMockData;
