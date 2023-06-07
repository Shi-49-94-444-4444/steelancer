import { QueryBuilder } from "odata-query-builder";
import axiosInstance from "../connectionConfigs/axiosInstance";
import config from "../connectionConfigs/config.json";
const baseUrl = config.api.base + config.api.job;

const getOpenJob = async (filter: JobFilter) => {

   let url = `${baseUrl}/GetOpenJobs()?`
   if (filter.offerFrom !== 0) {
      url += `&filter=Offer ge ${filter.offerFrom}`
   }

   if (filter.offerTo !== 0) {
      url += `&filter=Offer le ${filter.offerTo}`
   }

   if (filter.categories.length > 0) {
      filter.categories.forEach(c => {
         url += `&$filter=Categories/any(item: item/Id eq ${c}`
      })
   }

   url += `&$skip=${filter.skip}`;
   console.log(url);
   const response = await axiosInstance.get(url);
   return response.data;
};

const getCount = async () => {
   let url = `${baseUrl}/$count`;
   console.log(url);
   const response = await axiosInstance.get(url);
   return response.data;
}

export interface JobFilter {
   skip: number,
   offerFrom?: number,
   offerTo?: number,
   categories: number[]
}

const exportObject = {
   getOpenJob,
   getCount,
};

export default exportObject;