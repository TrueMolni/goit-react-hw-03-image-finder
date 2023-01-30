import axios from 'axios';

const PIXABAY_KEY = '31908525-c153f8ff1cbf36c0ec126789f';
const BASE_URL = 'https://pixabay.com/api/';

const instance = axios.create({
  baseURL: BASE_URL,
  params: {
    image_type: 'photo',
    orientation: 'horizontal',
    key: PIXABAY_KEY,
    perPage: 12,
  },
});

axios.defaults.baseURL = BASE_URL;

const getImages = async (q, page) => {
  const { data } = await instance.get(`/`, {
    params: {
      q,
      page,
    },
  });
  const { hits } = await data;
  return hits;
};

export default getImages;
