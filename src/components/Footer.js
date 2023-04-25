import styles from 'assets/styles/components/Footer.module.scss';
export const Footer = ({ length }) => {
  return (
    <footer className={styles.footer}>
      <p>
        {length} List {length === 1 ? 'item' : 'items'}
      </p>
    </footer>
  );
};
