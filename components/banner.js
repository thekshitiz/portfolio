import styles from './banner.module.css'
const Banner = (props) => {
    return (
        <div className={styles.container}>
            <h1 className={styles.title}>
                <span>Hi, I'm </span>
                <span>Kshitiz Rai.</span>
            </h1>
            <p className="syles.subtitle">
                I am a code enthusiast.
            </p>
            <button className={styles.button} onClick={props.handleOnClick}>
                {' '}
                {props.buttonText}{' '}
            </button>
        </div>
    )
}

export default Banner
