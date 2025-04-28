import styles from '@/app/_styles/logo.module.css';
import {alfaSlabOne} from '@/app/_lib/fonts';

export default function Logo() {
  return (
    <div className={`${styles.logo} ${alfaSlabOne.className}`}>Blogify</div>
  )
}
