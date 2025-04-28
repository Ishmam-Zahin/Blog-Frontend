import styles from '@/app/_styles/loginForm.module.css';

export default function LoginForm(
    {
        accountState,
    }: {
        accountState: number,
    }
) {
  return (
    <div className={`${styles.container} ${accountState == 0 ? '' : styles.hide}`}>
        <h1 className={styles.text}>Welcome Back!</h1>
        <label className={styles.label} htmlFor='emailInput'>Email Address</label><br/>
        <input type='email' id='emailInput' placeholder='email address' className={styles.input} />
        <label className={styles.label} htmlFor='passwordInput'>Password</label><br/>
        <input type='password' id='passwordInput' placeholder='password' className={styles.input} />
        <div className={styles.btnContainer}>
            <button className={styles.btn}>Log In</button>
        </div>
    </div>
  )
}
