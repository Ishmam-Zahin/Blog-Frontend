import apiDomain from "./apiDomain"
import { headers } from "../types";

export default async function uploadImage({formData, token}){
    const finalDomain = `${apiDomain}upload/image/`;
    const headers: headers = {
        'Authorization': `Token ${token}`,
    }
    const response = await fetch(finalDomain, {
        method: 'POST',
        headers,
        body: formData
    })
    const data = await response.json()

    return data
}