import axios from 'axios';

const YOUTUBE_KEY = 'AIzaSyAv367WnfDPe91OaWGqRT9fwijHHvQ2SOY';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        maxResults: 10,
        key: YOUTUBE_KEY,
    }
});