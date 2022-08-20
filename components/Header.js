import Image from "next/image";
import styles from "../styles/Header.module.scss";

const loader = ({ src, width, quality }) => {
  return `${src}?w=${width}&q=${quality || 75}`;
};
const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <div className={styles.image}>
          <Image
            loader={loader}
            src="logo.svg"
            alt="logo"
            width={100}
            height={50}
          />
        </div>
      </div>
    </header>
  );
};

export default Header;
