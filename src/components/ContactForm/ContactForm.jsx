import React from "react";
import style from './ContactForm.module.css';
import { addContact } from "../../features/contacts";
import { store } from "../../app/store";

const ContactForm = () => {
    const submitForm = (e) => {
        e.preventDefault();
        const form = e.target;
        const { name, number } = e.target;
        store.dispatch(
            addContact({ name: name.value, number: Number(number.value) })
        );
        form.reset();
    };

    return (
        <form className={style.FormInput} onSubmit={submitForm}>
        <label>Name</label>
        <input
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            className={style.FormInput__input}
        />
        <label>Number</label>
        <input
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
            className={style.FormInput__input}
        />
        <button type="submit" className={style.FormButton}>
            Add Contact
        </button>
        </form>
    )
};

export default ContactForm;