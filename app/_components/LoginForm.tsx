import styles from '@/app/_styles/loginForm.module.css';
import { useReducer } from 'react';
import { loginFormType, action } from '../_lib/types';
import login from '../_lib/apiFunctions/login';
import { useMutation } from '@tanstack/react-query';
import { useAppDispatch } from '../_lib/hooks';
import { changeUserToken } from '../_lib/userTokenSlice';
import { useRouter } from 'next/navigation';

const initialState: loginFormType = {
    email: '',
    password: ''
}

function reducer(prevState: loginFormType, action: action){
    if(action.type === 'change/email'){
        return {...prevState, email: action.payload}
    }
    if(action.type === 'change/password'){
        return {...prevState, password: action.payload}
    }
    if(action.type === 'reset'){
        return {email: action.payload, password: action.payload}
    }

    return prevState;
}

export default function LoginForm(
    {
        accountState,
    }: {
        accountState: number,
    }
) {
    const router = useRouter()
    const dispatchR = useAppDispatch()
    const [formState, dispatch] = useReducer(reducer, initialState);
    const {isPending, isError, error, mutate} = useMutation({
        mutationFn: login,
        onSuccess: (data) => {
            dispatchR(changeUserToken(data.token))
            const expires = new Date(Date.now() + 7 * 24 * 60 * 60 * 1000).toUTCString();
            document.cookie = `token=${data.token}; expires=${expires}; path=/`;
            dispatch({type: 'reset', payload: ''});
            router.push('/');
        },
    })
  return (
    <div className={`${styles.container} ${accountState == 0 ? '' : styles.hide}`}>
        <h1 className={styles.text}>Welcome Back!</h1>
        <p className={`${styles.invalid} ${isError ? '' : styles.hideError}`}>{error?.message}</p>
        <label className={styles.label} htmlFor='login-email-input'>Email Address</label><br/>
        <input
        type='email'
        id='login-email-input'
        placeholder='email address'
        className={styles.input}
        value={formState.email}
        onChange={(e) => dispatch({type: 'change/email', payload: e.target.value})}
        />
        <label className={styles.label} htmlFor='login-password-input'>Password</label><br/>
        <input
        type='password'
        id='login-password-input'
        placeholder='password'
        className={styles.input}
        value={formState.password}
        onChange={(e) => dispatch({type: 'change/password', payload: e.target.value})}
        />
        <div className={styles.btnContainer}>
            <button
            className={styles.btn}
            onClick={() => mutate(formState)}
            disabled = {isPending}
            >{isPending ? 'Loading': 'LogIn'}</button>
        </div>
    </div>
  )
}
