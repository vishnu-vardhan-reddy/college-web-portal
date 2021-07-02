import axios from 'axios'

const instance = axios.create({
  baseURL: process.env.REACT_APP_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
})

// function token() {
//   return localStorage.getItem('p_teacher_auth_token')
// }

// instance.interceptors.request.use(
//   async (config) => {
//     config.headers.authorization = `Bearer ${token()}`
//     console.log(config)
//     return config
//   },
//   (error) => {
//     return Promise.reject(error)
//   }
// )

//response interceptor to refresh token on receiving token expired error
// instance.interceptors.response.use(
//   (response) => {
//     console.log(response);
//     return response;
//   },
//   async (error) => {
//     const originalRequest = error.config;
//     let refreshToken = localStorage.getItem("refreshToken");
//     console.log(error.response.status);
//     if (
//       error.response.status === 401 ||
//       error.response.status === 403 ||
//       !originalRequest._retry
//     ) {
//       // originalRequest._retry = true;
//       // try {
//       //   let result = await axios.post(`/auth/refresh_token`, {
//       //     refreshToken: refreshToken,
//       //   });
//       //   if (result.status === 200) {
//       //     localStorage.setItem("p_teacher_auth_token", result.data.token);
//       //     console.log("Access token refreshed!");
//       //     return axios(originalRequest);
//       //   }
//       // } catch (error) {
//       //   return Promise.reject(error);
//       // }
//       return error;
//     }
//   }
// );

export default instance

// localHost = http://localhost:5000
