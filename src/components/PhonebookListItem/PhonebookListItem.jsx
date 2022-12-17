import React from "react";
import { useSelector } from "react-redux";
import { deleteContact } from "../../features/contacts";
import { store } from "../../app/store";
import { saveToLocalStore } from "../../utils/localStorage";
import style from './PhonebookListItem.module.css';

const showContacts = (contacts, filter) => {
    const normalizedFilter = contacts.filter.toLowerCase().trim();

    return contacts.contacts.filter((contact) =>
        contact.name.toLowerCase().includes(normalizedFilter)
    );
    };

    const Contacts = () => {
    const contacts = useSelector(({ contacts, filter }) =>
        showContacts(contacts, filter)
    );
    saveToLocalStore("CONTACTS", contacts);

    return (
        <>
        {contacts.map(({ id, name, number }) => (
            <li className={style.PhonebookList__item} key={id}>
                <span className={style.PhonebookList__text}>{name}: </span>
                <span className={style.PhonebookList__text}>{number}: </span>
            <button
                type="button"
                className={style.PhonebookList__button}
                onClick={() => store.dispatch(deleteContact(id))}>
                Delete
            </button>
            </li>
        ))}
        </>
    );
};


export default Contacts;

