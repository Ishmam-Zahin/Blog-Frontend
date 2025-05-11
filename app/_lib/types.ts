export type headers = {
    'Content-Type': string,
    'Authorization'?: string,
}

export type loginFormType = {
    email: string,
    password: string,
}

export type signupFormType = {
    first_name: string,
    last_name: string,
    gender: string,
    age: number,
    user_name: string,
    email: string,
    password: string,
    password2: string,
}

export type action = {
    type: string,
    payload: string,
}

export type userType = {
    id: number,
    first_name: string,
    last_name: string,
    gender: 'M' | 'F' | 'O',
    age: number
    avatar_link: string | null,
    user_name: string,
    email: string,
}