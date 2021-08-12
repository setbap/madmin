import axios from "axios";
import { api, history } from "./utils";
import { path as LoginPath } from "../pages/login/login";
import { ACCESS_TOKEN_KEY, REFRESH_TOKEN_KEY } from "./utils";

console.log("api.interceptors");

api.instance.interceptors.request.use(
  async (request) => {
    console.log("interceptors.request");

    let token = null;
    token = localStorage.getItem(ACCESS_TOKEN_KEY);
    if (token) {
      request.headers.Authorization = `Bearer ${token}`;
    }
    return request;
  },
  (error) => {
    Promise.reject(error);
  }
);

api.instance.interceptors.response.use(
  (response) => {
    // const time = parseInt(response.data.time);
    // if (!isNaN(time)) {
    //   store.dispatch(setTime(time));
    // }
    return response;
  },
  async (error) => {
    if (!error.response) {
      return Promise.reject(error);
    }

    const originalRequest = error.config;
    console.log("interceptors.response.error");
    console.log(originalRequest.url);
    const refreshToken = localStorage.getItem(REFRESH_TOKEN_KEY);

    if (
      (error.response.status === 400 ||
        error.response.status === 401 ||
        error.response.status === 403) &&
      originalRequest.url === "/Auth/Refresh"
    ) {
      // store.dispatch(setLogout());
      // TODO:logout
      history.push(LoginPath);
      localStorage.delete(ACCESS_TOKEN_KEY);
      localStorage.delete(REFRESH_TOKEN_KEY);
      return Promise.reject(error);
    }

    if (
      error.response.status === 401 &&
      originalRequest._retry !== true &&
      !!refreshToken
    ) {
      originalRequest._retry = true;
      return api.auth
        .refreshCreate({ refreshToken: refreshToken })
        .then((r) => {
          // store.dispatch(
          //   setLoginAsyncWithTokens({ token: r.data.data.token, refreshToken })
          // );

          localStorage.setItem(
            ACCESS_TOKEN_KEY,
            r.data.value?.accesstoken ?? ""
          );
          localStorage.setItem(
            REFRESH_TOKEN_KEY,
            r.data.value?.refreshToken ?? ""
          );
          return axios(originalRequest);
        })
        .catch((err) => {
          console.log(err.response);
        });
    }
    if (
      error.response.status === 401 &&
      originalRequest._retry !== true &&
      refreshToken === null
    ) {
      history.push(LoginPath);
      localStorage.delete(ACCESS_TOKEN_KEY);
      localStorage.delete(REFRESH_TOKEN_KEY);
      return Promise.reject(error);
    }
    return Promise.reject(error);
  }
);
