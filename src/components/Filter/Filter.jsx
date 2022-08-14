import { useSelector, useDispatch } from 'react-redux';
import { getFilter } from '../../redux/contacts/contacts-selectors';
import actions from '../../redux/contacts/contacts-actions';
import styles from './Filter.module.css';

const Filter = () => {
  const value = useSelector(getFilter);
  const dispatch = useDispatch();

  return (
    <label className={styles.lable}>
      Find contacts by name
      <input
        className={styles.input}
        type="text"
        value={value}
        onChange={evt => dispatch(actions.changeFilter(evt.target.value))}
      ></input>
    </label>
  );
};

export default Filter;
