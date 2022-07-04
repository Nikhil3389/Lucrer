import { sendRequestWithoutAuth } from '../api';

export const getAllCoinsPrice = async (count) => {
  try {
    const { data } = await sendRequestWithoutAuth(
      `${process.env.REACT_APP_API_URL}/market/getAllCurrencies/${count}`
    );
    return data;
  } catch (err) {
    console.log(err);
    return err;
  }
};

export const getCryptoDetails = async (coinId) => {
  try {
    const { data } = await sendRequestWithoutAuth(
      `${process.env.REACT_APP_API_URL}/market/getCryptoDetails/${coinId}`
    );
    return data;
  } catch (err) {
    console.log(err);
    return err;
  }
};

export const getCryptoHistory = async (coinId) => {
  try {
    const { data } = await sendRequestWithoutAuth(
      `${process.env.REACT_APP_API_URL}/market/getCryptoHistory/${coinId}`
    );
    return data;
  } catch (err) {
    console.log(err);
    return err;
  }
};
