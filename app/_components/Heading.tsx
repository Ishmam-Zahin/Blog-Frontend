import styles from '@/app/_styles/heading.module.css';
import Logo from './Logo';
import SearchBar from './SearchBar';
import HeadingActions from './HeadingActions';
import Link from 'next/link';

export default function Heading() {
  return (
    <header className={styles.container}>
        <Link href='/'>
            <Logo />
        </Link>
        <SearchBar />
        <HeadingActions />
    </header>
  )
}
