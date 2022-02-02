import axios from 'axios';

const fetchMockData = async () => {
  const mockData = await axios.get('https://reqres.in/api/users?page=2');
  return mockData.data.data;
}

export default fetchMockData;
