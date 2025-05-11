import { signupFormType } from "../types";
import apiDomain from "./apiDomain"
import ApiError from "../ApiError";

export default async function createUser(formState: signupFormType){
    const finalDomain =  `${apiDomain}user/list/`;
    const headers = {
        'Content-Type': 'application/json',
    }
    const response = await fetch(finalDomain, {
        method: 'POST',
        headers,
        body: JSON.stringify(formState),
    })

    const data = await response.json()
    if(!response.ok){
        throw new ApiError(data);
    }

    return data
}