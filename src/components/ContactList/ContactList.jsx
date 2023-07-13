import s from './ContactList.module.css';

import { Filter } from 'components/Filter/Filter';
import { Notification } from 'components/Notification/Notification';

import { ContactListItem } from 'components/ContactListItem/ContactListItem';
import { useDispatch, useSelector } from 'react-redux';
import { selectContactsItems, selectFilterValue } from 'redux/selectors';
import { useEffect } from 'react';
import { getContacts } from 'utils/api';

export const ContactList = () => {
    const dispatch = useDispatch();
    const contacts = useSelector(selectContactsItems);
    const filter = useSelector(selectFilterValue);

    useEffect(() => {
        dispatch(getContacts());
    }, [dispatch]);

    const getFilteredContacts = () => {
        return contacts.filter(contact => contact.name.toLowerCase().includes(filter.toLowerCase()));
    };

    const filteredContacts = getFilteredContacts();

    return (
        <>
            {contacts.length > 1 && <Filter /> }
            {filteredContacts.length > 0 && (
                <ul className={s.list}>
                    {filteredContacts.map(({ id, name, number }) => (
                    <ContactListItem
                        key={id}
                        id={id}
                        name={name}
                        number={number}
                        />
                        ))}
                </ul>
            )}
            {contacts.length < 1 && <Notification message="You phonebook is empty! Please add contact."/>}
        </>
    );
};