import { nanoid } from "nanoid";
import { Notify } from "notiflix";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectContactsItems, selectIsLoading } from "redux/selectors";
import { addContact } from "utils/api";

export const useAddContact = () => {
    const dispatch = useDispatch();

    const contactsItems = useSelector(selectContactsItems);
    const globalLoading = useSelector(selectIsLoading);

    const [localLoading, setLocalLoading] = useState(false);

    const [name, setName] = useState('');
    const [number, setNumber] = useState('');

    const contactsName = contactsItems.map(contact => contact.name);

    useEffect(() => {
    if (!globalLoading) {
        setLocalLoading(false);
    }}, [globalLoading]);

    const handleChangeInput = event => {
    const { name, value } = event.currentTarget;

    switch (name) {
        case 'name':
            setName(value);
            break;

        case 'number':
            setNumber(value);
            break;

        default:
            return;
        }
    };

    const handleSubmit = event => {
        event.preventDefault();

        if (contactsName.some(
            contact => contact.toLowerCase() === name.toLowerCase()
        )) {
            return Notify.failure(`${name} is already in contacts!`);
        }

        const newContact = {
            id: nanoid(),
            name,
            number,
        };
        setLocalLoading(true);
    
        dispatch(addContact(newContact));
        reset();
    };

    const reset = () => {
        setName('');
        setNumber('');
    };

    return { name, number, handleSubmit, handleChangeInput, localLoading };
};