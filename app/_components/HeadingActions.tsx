'use client'

import styles from '@/app/_styles/headingActions.module.css';
import Link from 'next/link';
import { useState } from 'react';

export default function HeadingActions() {
    const [showAccountPlate, setShowAccountPlate] = useState(false);
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
        <div className={styles.accountContainer}>
            <div
            className={styles.accountInfoContainer}
            onClick={() => setShowAccountPlate(prev => !prev)}
            >
                <div className={styles.iconGuest}>
                    <svg className={styles.icon}>
                        <use xlinkHref='/sprite.svg#icon-user' />
                    </svg>
                </div>
                <p className={styles.userName}>Guest</p>
            </div>
            <div className={`${styles.accountPlate} ${showAccountPlate ? '' : styles.hide}`}>
                <ul className={styles.listContainer}>
                    <Link onClick={() => setShowAccountPlate(prev => !prev)} className={styles.link} href='/account'>
                        <li className={styles.listItem}>
                            <span className={styles.text}>Login/SignUp</span>
                        </li>
                    </Link>
                </ul>
            </div>
        </div>
    </div>
  )
}
