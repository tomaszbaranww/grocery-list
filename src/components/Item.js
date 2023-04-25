import styles from 'assets/styles/components/Item.module.scss';
import { FaTrashAlt } from 'react-icons/fa';

export const Item = ({ item, handleCheck, handleDelete }) => {
  return (
    <li className={styles.item}>
      <input type="checkbox" checked={item.checked} onChange={() => handleCheck(item.id)} />
      <label onDoubleClick={() => handleCheck(item.id)} style={item.checked ? { textDecoration: 'line-through' } : null}>
        {item.itemName}
      </label>
      <FaTrashAlt role="button" tabIndex="0" onClick={() => handleDelete(item.id)} aria-label={`Delete ${item.itemName}`} />
    </li>
  );
};
