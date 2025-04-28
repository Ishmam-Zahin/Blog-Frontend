'use client'

import styles from '@/app/_styles/navbar.module.css';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Navbar() {
  const pathName = usePathname();
  return (
    <nav className={styles.container}>
      <ul className={styles.linkContainer}>
        <Link className={styles.alink} href='/'>
          <li className={`${styles.link} ${pathName === '/' ? styles.active : ''}`}>
            <svg className={styles.icon}>
              <use xlinkHref='/sprite.svg#icon-home' />
            </svg>
            <span className={styles.text}>Home</span>
          </li>
        </Link>
        <Link className={styles.alink} href='/blogs'>
          <li className={`${styles.link} ${pathName === '/blogs' ? styles.active : ''}`}>
            <svg className={styles.icon}>
              <use xlinkHref='/sprite.svg#icon-blogger' />
            </svg>
            <span className={styles.text}>Blogs</span>
          </li>
        </Link>
        <Link className={styles.alink} href='/blog/create'>
          <li className={`${styles.link} ${pathName === '/blog/create' ? styles.active : ''}`}>
            <svg className={styles.icon}>
              <use xlinkHref='/sprite.svg#icon-pen' />
            </svg>
            <span className={styles.text}>Post Blog</span>
          </li>
        </Link>
      </ul>
      <footer className={styles.footer}>© Copyright ©2025 All rights reserved.</footer>
    </nav>
  )
}
