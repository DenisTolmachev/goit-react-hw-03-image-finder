import axios from 'axios';
import { BASE_URL, API_KEY } from '../components/constance/apiConst';
import { toast } from 'react-toastify';

export const queryOptions = {
  q: '',
  image_type: 'photo',
  orientation: 'horizontal',
  safesearch: true,
  per_page: 12,
  page: 1,
};

export const fetchGallery = async options => {
  try {
    const result = await axios.get(BASE_URL, {
      params: { ...options, key: API_KEY },
    });
    return result;
  } catch (error) {
    toast.error(`Something went wrong ${error}`);
  }
};
