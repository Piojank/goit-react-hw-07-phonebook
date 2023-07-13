import s from './ContactListItem.module.css';
import { Spinner } from 'components/Spinner/Spinner';
import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectIsLoading } from 'redux/selectors';
import { deleteContact } from 'utils/api';

export const ContactListItem = ({ name, number, id }) => {
    const dispatch = useDispatch();
    const globalLoading = useSelector(selectIsLoading);

    const [localLoading, setLocalLoading] = useState(false);

    useEffect(() => {
        if (!globalLoading) {
            setLocalLoading(false);
        }
    }, [globalLoading]);

    const handleDeleteContact = contactId => {
        setLocalLoading(true);
        dispatch(deleteContact(contactId));
    };

    return (
        <li className={s.list__item} key={id}>
            {`${name}: `}
            <span className={s.list__number}>{number}</span>
            <button 
                type="button"
                className={s.list__btn} 
                onClick={() => handleDeleteContact(id)}
                disabled={localLoading}
            >
                {!localLoading ? 'Delete' : <Spinner size={10} />}
            </button>
        </li>
    );
};

ContactListItem.propTypes = {
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
};