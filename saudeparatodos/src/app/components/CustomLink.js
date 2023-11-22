// CustomLink.js

import Link from 'next/link';
import styles from './styles.module.css';

const CustomLink = ({ href, children }) => {
  return (
    <Link href={href} passHref>
      <a className={styles.link}>{children}</a>
    </Link>
  );
};

export default CustomLink;
