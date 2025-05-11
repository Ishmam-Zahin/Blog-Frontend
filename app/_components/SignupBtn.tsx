import styles from '@/app/_styles/signUpForm.module.css';
import { signupFormType } from '../_lib/types';

export default function SignupBtn({ formState, mutate, isPending }: {
    formState: signupFormType,
    mutate: any,
    isPending: any
}) {
  return (
    <button
    className={styles.btn}
    onClick={() => mutate(formState)}
    disabled = {isPending}
    >{isPending ? 'Loading...' : 'Sign Up'}</button>
  )
}
