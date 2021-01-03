import axios from 'axios';

const KEY = 'AIzaSyDQP8cBfGuA-RIuVaaark2o8UC2KRcPb-w';

export default axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
  params: {
    part: 'snippet',
    type: 'video',
    maxResults: 5,
    key: KEY,
  },
});
