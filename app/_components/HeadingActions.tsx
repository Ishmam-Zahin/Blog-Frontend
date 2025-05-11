'use client'

import styles from '@/app/_styles/headingActions.module.css';
import ProfileHead from './ProfileHead';

export default function HeadingActions() {
  return (
    <div className={styles.container}>
        <button className={styles.btn}>
            <svg className={styles.icon}>
                <use xlinkHref='/sprite.svg#icon-notification' />
            </svg>
            <span className={styles.number}>12</span>
        </button>
        <button className={styles.btn}>
            <svg className={styles.icon}>
                <use xlinkHref='/sprite.svg#icon-bookmarks' />
            </svg>
            <span className={styles.number}>5</span>
        </button>
        <ProfileHead />
    </div>
  )
}
