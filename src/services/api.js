import axios from "axios";
import AsyncStorage from "@react-native-community/async-storage";

const api = axios.create({
  baseURL: "https://api-nodejs-todolist.herokuapp.com",
});

api.interceptors.request.use(async (config) => {
  try {
    const token = await AsyncStorage.getItem("@DEIXANOAZUL:token");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  } catch (error) {
    alert(error);
    console.log(error);
  }
});

export default api;
