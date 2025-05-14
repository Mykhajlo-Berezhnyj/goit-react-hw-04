import css from './ImageCard.module.css';

export default function ImageCard({ img, alt, user, likes, created }) {
  return (
    <div className={css.card}>
      <img className={css.image} src={img} alt={alt} />
      <div className={css.info}>
        <p><strong>Author:</strong>  {user}</p>
      <p><strong>Created:</strong> {created}</p>
      <p><strong>Likes:</strong> {likes}</p>
      </div>
    </div>
  );
}
