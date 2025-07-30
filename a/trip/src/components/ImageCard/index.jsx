import styles from './card.module.css';

const ImageCard = (props) => {
    const { url, height } = props
    return (
        <div style={{height}} className={styles.card}>
            <img className={styles.img} src={url} alt="" />
        </div>
    )
}

export default ImageCard;