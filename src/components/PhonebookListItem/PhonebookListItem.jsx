import React from "react";
import style from './PhonebookListItem.module.css';
import { useSelector } from "react-redux";
import {
    useGetContactsQuery,
    useDeleteContactMutation,
} from "../../utils/api.js";


const showContacts = (data, filter) => {
    const normalizedFilter = filter.toLowerCase().trim();

    return data.filter(
        (contact) =>
        contact.name.toLowerCase().includes(normalizedFilter) ||
        contact.phone.includes(normalizedFilter)
    );
    };

const Contacts = () => {
    const { data, isError, isLoading } = useGetContactsQuery();
    const [deleteContact] = useDeleteContactMutation();

    const filter = useSelector((state) => state.contacts.filter);

    return (
        <>
        {isError ? (
            <>Error...</>
        ) : isLoading ? (
            <>Loading...</>
        ) : data ? (
            <>
            {showContacts(data, filter).map(({ id, name, phone }) => (
                <li className={style.PhonebookList__item} key={id}>
                    <span className={style.PhonebookList__text}>{name}: </span>
                    <span className={style.PhonebookList__text}>{phone}: </span>
                <button
                    type="button"
                    className={style.PhonebookList__button}
                    id={id}
                    onClick={() => {deleteContact(id)}}>
                    Delete
                </button>
                </li>
            ))}
            </>
        ) : null}
        </>
    );
};


export default Contacts;

