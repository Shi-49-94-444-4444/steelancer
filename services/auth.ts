import axiosInstance from "../connectionConfigs/axiosInstance";
import config from "../connectionConfigs/config.json";
const baseUrl = config.api.base + config.api.auth;

const authenticate = async (loginRequest: Object) => {
   let url = `${baseUrl}/token`;
   const response = await axiosInstance.post(url, loginRequest);
   return response.data;
};

const validateToken = async () => {
   let url = `${baseUrl}/validateToken`;
   const response = await axiosInstance.get(url);
   return response.data;
};

const register = async (registerRequest: Object) => {
   let url = baseUrl;
   const response = await axiosInstance.post(url, registerRequest);
   return response.data;
}

const registerProfile = async (blockId: Number) => {
   let url = `${baseUrl}/registerProfile/${blockId}`;
   console.log("blockid", blockId);
   const response = await axiosInstance.post(url);
   return response.data;
}

const getProfile = async () => {
   let url = `${baseUrl}/profile`;
   const response = await axiosInstance.get(url);
   return response.data;
}

const exportObject = {
   authenticate,
   validateToken,
   register,
   registerProfile,
   getProfile
};

export default exportObject;
