import { headers } from "../types";
import apiDomain from "./apiDomain"

export default async function logout(token : string | null){
    const finalDomain =  `${apiDomain}user/logout/`;
    const headers: headers = {
        'Content-Type': 'application/json',
    }
    if(token) headers['Authorization'] = `Token ${token}`;
    const response = await fetch(finalDomain, {
        method: 'GET',
        headers,
    })

    const data = await response.json()
    if(!response.ok){
        throw new Error(data.detail);
    }

    return data
}