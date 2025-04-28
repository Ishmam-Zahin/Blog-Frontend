import styles from '@/app/_styles/account.module.css';
import FormContainer from '../_components/FormContainer';

export default function page() {
  return (
    <section className={`${styles.accountContainer}`}>
        <FormContainer />
    </section>
  )
}
