'use client'

import styles from '@/app/_styles/formContainer.module.css';
import { useState } from 'react';
import LoginForm from './LoginForm';
import SignUpForm from './SignUpForm';

const text1: string = 'You do not have an account!';
const text2: string = 'Already have an account!';

export default function FormContainer() {
    const [accountState, setAccountState] = useState<number>(0);
  return (
    <div className={`${styles.formContainer}`}>
        <div className={`${styles.sliderContainer} ${accountState == 0 ? styles.slideRight : styles.slideLeft}`}>
            <p className={`${styles.textContainer}`}>
                {accountState == 0 ? text1 : text2}
            </p>
            <button
            onClick={() => setAccountState(prev => (prev + 1) % 2)}
            className={`${styles.button}`}>{accountState == 0 ? 'SignUp' : 'LogIn'}</button>
        </div>
        <LoginForm accountState={accountState}/>
        <SignUpForm accountState={accountState} />
    </div>
  )
}
