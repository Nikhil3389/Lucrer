import axios from 'axios';

export const signup = async (formData) => {
  const url = `${process.env.REACT_APP_API_URL}/user/signup`;
  try {
    const { data } = await axios.post(url, formData);
    console.log(data); 
    return data;
  } catch (err) {
    console.log(err);
    throw new err();
  }
};

export const login = async (formData) => { 
  const url = `${process.env.REACT_APP_API_URL}/user/login`;
  try {
    const { data } = await axios.post(url, formData);
    console.log(data);
    return data; 
  } catch (err) {
    console.log(err);
    throw new err();
  }
}

export const getOtp = async (formData) => {
  const url = `${process.env.REACT_APP_API_URL}/user/getOtp`;
  try {
    const { data } = await axios.post(url, formData);
    console.log(data);
    return data;
  } catch (err) {
    console.log(err);
    throw new err();
  }
}

export const verifyOtp = async (formData) => {
  const url = `${process.env.REACT_APP_API_URL}/user/verifyOtp`;
  try {
    const { data } = await axios.post(url, formData);
    console.log(data);
    return data;
  } catch (err) {
    console.log(err);
    throw new err();
  }
}