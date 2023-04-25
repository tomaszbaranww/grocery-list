import styles from 'assets/styles/components/ItemList.module.scss';
import { Item } from 'components/Item';

export const ItemList = ({ items, handleCheck, handleDelete }) => {
  return (
    <ul className={styles.list}>
      {items.map((item) => {
        return <Item key={item.id} item={item} handleCheck={handleCheck} handleDelete={handleDelete} />;
      })}
    </ul>
  );
};
