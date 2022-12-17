import React from "react";
import ContactForm from "./components/ContactForm/ContactForm";
import PhonebookList from "components/PhonebookList/PhonebookList"
import { Filter } from "components/Filter/Filter";
// import { store } from "./app/store";

const App = () => {
    return (
        <>
        <h1>Phonebook</h1>
        <ContactForm />
        <h2>Contacts</h2>
        <Filter />
        <PhonebookList />
        </>
    );
    };

export default App;