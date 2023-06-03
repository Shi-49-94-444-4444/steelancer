import axiosInstance from "../connectionConfigs/axiosInstance";
import config from "../connectionConfigs/config.json";
const baseUrl = config.api.base + config.api.businessProfile;
import { odataQuery } from 'odata-fluent-query'
import BusinessProfile from "./odataModels/businessProfile";

const getAll = async () => {
   let url = baseUrl + odataQuery<BusinessProfile>().toString();
   console.log(url);
   const response = await axiosInstance.post(url);
   return response.data;
};

const exportObject = {
   getAll
};

export default exportObject;