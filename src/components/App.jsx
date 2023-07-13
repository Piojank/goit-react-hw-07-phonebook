import s from './App.module.css';

import { Section } from "./Section/Section";
import { ContactForm } from "./ContactForm/ContactForm";
import { ContactList } from "./ContactList/ContactList";

export const App = () => {

    return (
        <div className={s.container}>
            <Section title="Phonebook">
                <ContactForm />
            </Section>
            <Section title="Contacts">
                <ContactList />
            </Section>
        </div>
    );
}; 