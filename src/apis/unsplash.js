import axios from 'axios';

const UNSPLASH_KEY = '9c9964cb4647c431bdc07f60676032a13fcbf586b1ab0ef9b8e22450854aa668';

export default axios.create({
    baseURL: 'https://api.unsplash.com/search',
    headers: {
        Authorization:
          `Client-ID ${UNSPLASH_KEY}`
      }
});