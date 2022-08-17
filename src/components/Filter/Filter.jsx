import { useSelector, useDispatch } from 'react-redux';
import { getFilter } from 'redux/contacts/contacts-selectors';
import { changeFilter } from 'redux/contacts/contacts-actions';
import styles from './Filter.module.css';

const Filter = () => {
  const value = useSelector(getFilter);
  const dispatch = useDispatch();

  return (
    <label className={styles.lable}>
      Find a contact by name
      <input
        className={styles.input}
        type="text"
        value={value}
        onChange={evt => dispatch(changeFilter(evt.target.value))}
      ></input>
    </label>
  );
};

export default Filter;
