import axios from 'axios';

axios.defaults.baseUrl = 'http://localhost:3000';

const END_POINTS = {
  DailyCalorieIntake: '/api/products',
};

export const apiCalorieIntak = async () => {
  const res = await axios.get(`${END_POINTS.DailyCalorieIntake}`);
  return res.data.results;
};
export const apiCalorieIntake = async body => {
  const res = await axios.post(END_POINTS.DailyCalorieIntake, body);
  console.log('resData', res.data);
  return res.data;
};
