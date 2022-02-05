import axios from 'axios';

const fetchMockData = async () => {
  const mockData = await axios.get('https://api.imgflip.com/get_memes');
  return mockData.data.data.memes;
}

export default fetchMockData;
