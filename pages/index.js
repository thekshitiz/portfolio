import Head from 'next/head'
import Image from 'next/image'
import Banner from '../components/banner'
import styles from '../styles/Home.module.css'

export default function Home() {
    const handleOnBannerBtnClick = () => {
        console.log('Hi download button clicked.')
    }

    return (
        <div className={styles.container}>
            <Head>
                <title>Kshitiz Rai</title>
                <meta name="description" content="Kshitiz Rai" />
                <link rel="icon" href="/logo_kshitiz.png" />
            </Head>

            <main className={styles.main}>
                <Banner
                    buttonText="Download CV"
                    handleOnClick={handleOnBannerBtnClick}
                />
            </main>
        </div>
    )
}
