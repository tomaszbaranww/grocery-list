import styles from 'assets/styles/components/Content.module.scss';
import { ItemList } from 'components/ItemList';
export const Content = ({ items, handleCheck, handleDelete }) => {
  return (
    <main className={styles.main}>
      {items.length ? (
        <ItemList items={items} handleCheck={handleCheck} handleDelete={handleDelete} />
      ) : (
        <p style={{ marginTop: '2rem' }}>Your list is empty.</p>
      )}
    </main>
  );
};
