import Image from 'next/image'
import styles from './page.module.css'
import Bar from './bar.js'

export default function Home() {
    return (
        <main>
            <div className={styles.screen}>
                <Bar />
            </div>
        </main>
    )
}
