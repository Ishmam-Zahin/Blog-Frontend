'use server'

export async function uploadImage(formData){
    const response = await fetch('https://api.imgbb.com/1/upload?key=17986a50063ae01bd9933a71234eee07', {
        method: 'POST',
        body: formData,
    })
    const data = await response.json()
    if(response.ok){
        return data.data.url;
    }
    else return null
}