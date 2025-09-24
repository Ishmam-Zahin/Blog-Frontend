import SpotLight from '@/app/_components/SpotLight'
import styles from '@/app/_styles/home.module.css'

export default function page() {
  return (
    <div className={styles.container}>
      <section className={styles.section}>
        <h2 className={styles.sectionHeading}>Exclusives</h2>
        <SpotLight />
      </section>
    </div>
  )
}
