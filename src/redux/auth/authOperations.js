import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';

axios.defaults.baseURL = 'https://connections-api.herokuapp.com';

const token = {
  set(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset() {
    axios.defaults.headers.common.Authorization = '';
  },
};

///Register User

const register = createAsyncThunk('auth/register', async credentials => {
  try {
    const { data } = await axios.post('/users/signup', credentials);
    token.set(data.token);
    return data;
  } catch (error) {
    const codeError = error.response.status;
    if (codeError === 400) {
      toast.error('You are already registered, please try to login', {
        position: toast.POSITION.TOP_RIGHT,
        theme: 'dark',
      });
    } else if (codeError === 500) {
      toast.error('Oops... Server error! Please try later!', {
        position: toast.POSITION.TOP_RIGHT,
        theme: 'dark',
      });
    } else {
      toast.error('Something went wrong!');
    }
  }
});

//LogIn User

const logIn = createAsyncThunk('auth/login', async credentials => {
  try {
    const { data } = await axios.post('/users/login', credentials);
    token.set(data.token);
    return data;
  } catch (error) {
    const codeError = error.response.status;
    if (codeError === 400) {
      toast.error('Invalid address and/or password specified.', {
        position: toast.POSITION.TOP_RIGHT,
        theme: 'dark',
      });
    }
  }
});

//LogOut User

const logOut = createAsyncThunk('auth/logout', async credentials => {
  try {
    await axios.post('/users/logout', credentials);
    token.unset();
  } catch (error) {
    const codeError = error.response.status;
    if (codeError === 500) {
      toast.error('Oops... something happened to the server', {
        position: toast.POSITION.TOP_RIGHT,
        theme: 'dark',
      });
    } else {
      toast.error('Something went wrong!');
    }
  }
});

//After refresh page

export const fetchCurrentUser = createAsyncThunk(
  'auth/refresh',
  async (_, { rejectWithValue, getState }) => {
    const tokenLS = getState().auth.token;

    if (!tokenLS) {
      return rejectWithValue();
    }
    token.set(tokenLS);
    try {
      const { data } = await axios('/users/current');
      return data;
    } catch (error) {
      rejectWithValue(error);
    }
  }
);

const operations = {
  register,
  logIn,
  logOut,
  fetchCurrentUser,
};

export default operations;
