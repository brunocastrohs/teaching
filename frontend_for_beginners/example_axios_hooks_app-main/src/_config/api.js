import axios from "axios";

const api = axios.create({
    baseURL: "https://www.anapioficeandfire.com/api",
    headers: {
      "Content-type": "application/json"
    }
  });

//  export const TOKEN_KEY = "@api_got";
//  export const getToken = () => localStorage.getItem(TOKEN_KEY);

/*api.interceptors.request.use(async config => {
    const token = getToken();
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  });*/
  
export default api;
  