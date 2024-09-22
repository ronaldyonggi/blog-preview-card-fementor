import illustrationArticle from '../../assets/images/illustration-article.svg';
import avatarImage from '../../assets/images/image-avatar.webp';
import styles from './Card.module.css';

export default function Card() {
  return (
    <div className={styles.card}>
      <img
        className={styles.cardImage}
        src={illustrationArticle}
        alt='Article illustration'
      />
      <div className={styles.content}>
        <span className={styles.tag}>Learning</span>
        <p className={styles.date}>Published 21 Dec 2023</p>
        <h1 className={styles.title}>HTML & CSS foundations</h1>
        <p className={styles.description}>
          These languages are the backbone of every website, defining structure,
          content, and presentation.
        </p>
        <div className={styles.author}>
          <img
            className={styles.avatar}
            src={avatarImage}
            alt='Avatar image of Greg Hooper'
          />
          <span className={styles.authorName}>Greg Hooper</span>
        </div>
      </div>
    </div>
  );
}
