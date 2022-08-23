import Link from "next/link";
import Image from "next/image";
import styles from "../styles/Header.module.scss";

const Header = () => {
  const loader = ({ src, width, quality }) => {
    return `${src}?w=${width}&q=${quality || 75}`;
  };

  return (
    <header className={styles.header}>
      <Link href="/">
        <div className={styles.logo}>
          <div className={styles.image}>
            <Image
              loader={loader}
              src="/logo.svg"
              alt="logo"
              width={180}
              height={55}
            />
          </div>
        </div>
      </Link>
    </header>
  );
};

export default Header;
