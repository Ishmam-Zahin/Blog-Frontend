'use client'

import styles from '@/app/_styles/spotLight.module.css'
import { useEffect, useRef, useState } from 'react'

const data = [
    {
        id: 1,
        title: 'slflsdjflsdf',
        date: '48-75-3838',
        body: 'sfsdfldsflsdfsdlf',
    },
    {
        id: 2,
        title: 'slflsdjflsdf',
        date: '48-75-3838',
        body: 'sfsdfldsflsdfsdlf',
    },
    {
        id: 3,
        title: 'slflsdjflsdf',
        date: '48-75-3838',
        body: 'sfsdfldsflsdfsdlf',
    },
    {
        id: 4,
        title: 'slflsdjflsdf',
        date: '48-75-3838',
        body: 'sfsdfldsflsdfsdlf',
    },
    {
        id: 5,
        title: 'slflsdjflsdf',
        date: '48-75-3838',
        body: 'sfsdfldsflsdfsdlf',
    },
    {
        id: 6,
        title: 'slflsdjflsdf',
        date: '48-75-3838',
        body: 'sfsdfldsflsdfsdlf',
    },
    {
        id: 7,
        title: 'slflsdjflsdf',
        date: '48-75-3838',
        body: 'sfsdfldsflsdfsdlf',
    },
    {
        id: 8,
        title: 'slflsdjflsdf',
        date: '48-75-3838',
        body: 'sfsdfldsflsdfsdlf',
    },
    {
        id: 9,
        title: 'slflsdjflsdf',
        date: '48-75-3838',
        body: 'sfsdfldsflsdfsdlf',
    },
    {
        id: 10,
        title: 'slflsdjflsdf',
        date: '48-75-3838',
        body: 'sfsdfldsflsdfsdlf',
    }
]

export default function SpotLight() {
    const size = data.length
    const [spot, setSpot] = useState(0);
    const [hover, setHover] = useState(false);
    const timer = useRef(null);
    const spotRight1 = (size + (spot + 1)) % size;
    const spotRight2 = (size + (spot + 2)) % size;
    const spotRight3 = (size + (spot + 3)) % size;
    const spotLeft1 = (size + (spot - 1)) % size;
    const spotLeft2 = (size + (spot - 2)) % size;
    const spotLeft3 = (size + (spot - 3)) % size;

    useEffect(() => {
        if(!hover){
            timer.current = setInterval(() => {
                setSpot(prev => (prev + 1) % size);
            }, 5000)
        }

        return () => {
            clearInterval(timer.current);
        }
    }, [hover, timer])
  return (
    <>
        <div
        className={styles.container}
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
        >
            {data.map((value, index) => {
                let type = '';
                if(index === spot) type = styles.blogSpot;
                if(index === spotLeft3) type = styles.blogSpotLeft3;
                if(index === spotLeft2) type = styles.blogSpotLeft2;
                if(index === spotLeft1) type = styles.blogSpotLeft1;

                if(index === spotRight3) type = styles.blogSpotRight3;
                if(index === spotRight2) type = styles.blogSpotRight2;
                if(index === spotRight1) type = styles.blogSpotRight1;

                return <BlogCard spotLeft2={spotLeft2}
                type={type}
                value={value}
                index={index}
                key={value.id}
                />
            }
        )}
        <button
        className={`${styles.btn} ${styles.btnLeft}`}
        onClick={() => setSpot(prev => (size + (prev - 1)) % size)}
        >
            <svg className={styles.icon}>
                <use xlinkHref='/sprite.svg#icon-cheveron-left' />
            </svg>
        </button>
        <button
        className={`${styles.btn} ${styles.btnRight}`}
        onClick={() => setSpot(prev => (prev + 1) % size)}
        >
            <svg className={styles.icon}>
                <use xlinkHref='/sprite.svg#icon-cheveron-right' />
            </svg>
        </button>
        <div className={styles.floatLeft}></div>
        <div className={styles.floatRight}></div>
        </div>
    </>
  )
}

function BlogCard({type, value, index}){
    return (
        <div
        className={`${styles.blogCard} ${type}`}
        >
            <h3>{value.title}</h3>
            <p>id:{value.id}</p>
            <p>{value.date}</p>
            <p>{value.body}</p>
        </div>
    )
}