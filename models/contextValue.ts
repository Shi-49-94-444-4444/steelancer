import { UserInfo } from "@/services/auth";
import { Dispatch, SetStateAction } from "react";
import FreelancerResponse from "./freelancerResponse";

export default interface ContextValue {
   currentUser: UserInfo, 
   setCurrentUser: any,
   currentFreelancer: FreelancerResponse,
   setCurrentFreelancer: any
}