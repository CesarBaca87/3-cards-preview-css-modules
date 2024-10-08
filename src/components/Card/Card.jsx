import styles from './card.module.css';

const Card = ({ image, title, text, color, position }) => {
  const cardColor = 'card-' + color;
  const cardPosition = 'card-' + position;
  const cardStyles = `${styles.card} ${styles[cardColor]} ${styles[cardPosition]}`;
  const cardImageStyles = styles['card-image'];
  const cardTitleStyles = styles['card-title'];
  const cardTextStyles = styles['card-text'];
  const cardButtonStyles = styles['card-button'];
  return (
    <div className={cardStyles}>
      <img className={cardImageStyles} src={image}></img>
      <h2 className={cardTitleStyles}>{title}</h2>
      <p className={cardTextStyles}>{text}</p>
      <button className={cardButtonStyles}>Learn More</button>
    </div>
  );
};

export default Card;
