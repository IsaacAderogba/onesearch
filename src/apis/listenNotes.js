import axios from 'axios';

const LISTEN_KEY = '4c1d0fbdbdaf437ba76d2edff23ad344';

export default axios.create({
    baseURL: 'https://listen-api.listennotes.com/api/v2',
    headers: {
        'X-ListenAPI-Key': LISTEN_KEY,
      },
    params: {
        type: 'episode',
        len_min: 5
    }
});