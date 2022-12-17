import style from './PhonebookList.module.css';
import React from "react";
import PhonebookListItem from 'components/PhonebookListItem/PhonebookListItem';

const ContactList = () => {
    return (
            <ul className={style.PhonebookList__list}>
                <PhonebookListItem />
            </ul>
    );
};

export default ContactList;