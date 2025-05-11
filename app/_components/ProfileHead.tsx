import { useEffect, useState } from 'react';
import Link from 'next/link';
import styles from '@/app/_styles/headingActions.module.css';
import { useAppSelector } from '../_lib/hooks';
import { useMutation } from '@tanstack/react-query';
import getAuthInfo from '../_lib/apiFunctions/getAuthInfo';
import Image from 'next/image'
import {parse} from 'cookie'
import { useDispatch } from 'react-redux';
import { changeUserToken } from '../_lib/userTokenSlice';
import LogoutBtn from './LogoutBtn';

export default function ProfileHead() {
    const [showAccountPlate, setShowAccountPlate] = useState(false);
    const token = useAppSelector(state => state.userToken.token);
    const {data, mutate} = useMutation({
        mutationFn: getAuthInfo,
    })
    const dispatch = useDispatch();
    useEffect(() => {
        const cook = parse(document.cookie);
        if(cook.token){
            dispatch(changeUserToken(cook.token));
        }
    }, [dispatch]);

    useEffect(() => {
        mutate(token);
    }, [token, mutate]);
  return (
    <div className={styles.accountContainer}>
        <div
        className={styles.accountInfoContainer}
        onClick={() => setShowAccountPlate(prev => !prev)}
        >
            <div className={styles.iconGuest}>
                {data?.avatar_link ?
                <Image src={data.avatar_link} alt='profile' fill = {true} />
                :
                <svg className={styles.icon}>
                    <use xlinkHref='/sprite.svg#icon-user' />
                </svg>}
            </div>
            <p className={styles.userName}>{data?.user_name ? data.user_name : 'Guest'}</p>
        </div>
        <div className={`${styles.accountPlate} ${showAccountPlate ? '' : styles.hide}`}>
            <ul className={styles.listContainer}>
                {
                    !token ?
                    <Link onClick={() => setShowAccountPlate(prev => !prev)} className={styles.link} href='/account'>
                    <li className={styles.listItem}>
                        <span className={styles.text}>Login/SignUp</span>
                    </li>
                    </Link>
                    :
                    null
                }
                {token ?
                <LogoutBtn token={token} setShowAccountPlate = {setShowAccountPlate}/>
                :
                null
                }
            </ul>
        </div>
    </div>
  )
}
