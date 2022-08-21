import Link from "next/link";
import Image from "next/image";
import styles from "../styles/Header.module.scss";

const Header = () => {
  return (
    <header className={styles.header}>
      <Link href="/">
        <div className={styles.logo}>
          <div className={styles.image}>
            <Image
              src="https://cdncontent.decathlon.ph/_next/static/images/logo-93d12d8cff484ab736d2a39f15bf66d8.svg"
              alt="logo"
              width={100}
              height={50}
            />
          </div>
        </div>
      </Link>
    </header>
  );
};

export default Header;
