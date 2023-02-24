import axios from 'axios';

export const BASE_URL = 'https://youtube-v31.p.rapidapi.com';

const options = {
 
  url:BASE_URL,
  params: {
    maxResults: '50'
  },
  headers: {
    'X-RapidAPI-Key': '2e6836369cmsh5a02442e1465359p1ac652jsn20ac17202da8',
    'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
  }
};
  

export const fetchFromAPI = async (url) => {
  
  const { data } = await axios.get(`${BASE_URL}/${url}`, options);
  return data

}