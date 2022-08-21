import Image from "next/image";
import styles from "../styles/ProductReviews.module.scss";

const ProductReviews = ({ reviews }) => {
  const loader = ({ src, width, quality }) => {
    return `${src}?w=${width}&q=${quality || 75}`;
  };

  return (
    <div className={styles.reviews}>
      <h3 className={styles.reviews__title}>Reviews</h3>

      {reviews?.records.map((review) => (
        <div className={styles.reviews__list} key={review.id}>
          <div className={styles.subhead}>
            <h5 className={styles.author}>{review.fields.Author}</h5>
            <div className={styles.rating}>
              <Image
                loader={loader}
                src="/star.png"
                alt="logo"
                width={25}
                height={25}
              />
              <p className={styles.rating__value}>{review.fields.Rating}/5</p>
            </div>
          </div>
          <h3>{review.fields.Title}</h3>
          <p>{review.fields.Description}</p>
        </div>
      ))}
    </div>
  );
};

export default ProductReviews;
