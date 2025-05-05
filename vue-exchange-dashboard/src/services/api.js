import axios from 'axios';

export const getExchangeRates = async (base = 'USD') => {
  const res = await axios.get(`https://api.exchangerate.host/latest?base=${base}`);
  return res.data;
};
