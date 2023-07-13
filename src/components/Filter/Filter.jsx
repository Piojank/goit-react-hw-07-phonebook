import { useDispatch, useSelector } from 'react-redux';
import s from './Filter.module.css';
import { selectFilterValue } from 'redux/selectors';
import { setFilter } from 'redux/contactsSlice';

export const Filter = () => {
    const dispatch = useDispatch();
    const filter = useSelector(selectFilterValue);

    const handleChangeFilter = event => {
        dispatch(
            setFilter(event.currentTarget.value));
    };

    return (
        <div className={s.filter}>
            <label className={s.label}>
                <p>Filter contacts</p>
                <input
                    className={s.input}
                    value={filter}
                    type="text"
                    name="filter"
                    title="Filter contacts"
                    onChange={handleChangeFilter}
                />
            </label>
        </div>
    );
};
