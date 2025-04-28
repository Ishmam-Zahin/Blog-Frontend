import styles from '@/app/_styles/searchBar.module.css';

export default function SearchBar() {
  return (
    <div className={styles.container}>
        <input className={styles.input} type="text" placeholder='search'/>
        <button className={styles.searchIcon}>
            <svg className={styles.icon}>
                <use xlinkHref={'/sprite.svg#icon-search'} />
            </svg>
        </button>
    </div>
  )
}
