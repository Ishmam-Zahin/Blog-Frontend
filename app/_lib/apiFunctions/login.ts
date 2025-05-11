import { loginFormType } from "../types";
import apiDomain from "./apiDomain"

export default async function login(credentials : loginFormType){
    const finalDomain =  `${apiDomain}user/login/`;
    const headers = {
        'Content-Type': 'application/json',
    }
    const response = await fetch(finalDomain, {
        method: 'POST',
        headers,
        body: JSON.stringify(credentials),
    })

    const data = await response.json()
    if(!response.ok){
        throw new Error(data.detail);
    }

    return data
}