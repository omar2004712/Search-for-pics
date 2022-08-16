import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.unsplash.com',
  headers: {
    Authorization: 'Client-ID F0Z0zpbZHXnAelOekWpXeO31z7K6AilyX2ZBcnb9NzY',
  },
});
