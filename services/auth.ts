import axiosInstance from "../connectionConfigs/axiosInstance";
import config from "../connectionConfigs/config.json";
const baseUrl = config.api.base + config.api.auth;

const authenticate = async (loginRequest: Object) => {
   const url = `${baseUrl}/token`;
   const response = await axiosInstance.post(url, loginRequest);
   return response.data;
};

const register = async (registerRequest: Object) => {
   const url = baseUrl;
   const response = await axiosInstance.post(url, registerRequest);
   return response.data;
}

const getUserProfile = async () => {
   const url = `${baseUrl}/user-profile`;
   const response = await axiosInstance.get(url);
   return response.data;
}

const getProfile = async () => {
   const url = `${baseUrl}/profile`;
   const response = await axiosInstance.get(url);
   return response.data;
}

const exportObject = {
   authenticate,
   register,
   getUserProfile
};

export default exportObject;
