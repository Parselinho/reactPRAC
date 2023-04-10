import axios from 'axios';

const unsplashAPIKey = 'OUd_lQq6ithsvq9mikDzMHpv4Sbs8xoohKCoPWMuLQ4';

export const searchPhotos = async (query, page) => {
    try {
      const response = await axios.get(`https://api.unsplash.com/search/photos?query=${query}&page=${page}&per_page=12&client_id=${unsplashAPIKey}`);
      console.log(response.data)
      return response.data;
    } catch (error) {
      console.error('Error searching photos:', error);
      return null;
    }
  };
