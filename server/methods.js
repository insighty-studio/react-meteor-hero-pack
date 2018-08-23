import axios from 'axios';
import qs from 'qs';
import {API_URL, API_KEY, API_PASSWORD} from 'enums';

Meteor.methods({
  getToken: async () => {
    const data = await axios.post(API_URL,
      qs.stringify({
        Grant_Type: 'password',
        Username: API_KEY,
        Password: API_PASSWORD,
      }),
      {
        headers: {'Content-Type': 'application/x-www-form-urlencoded'},
      });
    return data.data;
  },
});
