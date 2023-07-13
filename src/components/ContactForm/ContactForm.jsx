import s from './ContactForm.module.css';
import { Spinner } from 'components/Spinner/Spinner';
import { useAddContact } from 'hooks/useAddContact';

export const ContactForm = () => {
    const { name, number, handleSubmit, handleChangeInput, localLoading } =
    useAddContact();

    return (
        <form className={s.form} onSubmit={handleSubmit}>
            <label className={s.label}>
                Name
                <input 
                    className={s.input}
                    type="name" 
                    name="name"
                    value={name}
                    onChange={handleChangeInput}
                    title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                    placeholder='Enter name'
                    required
                />
            </label>
            <label className={s.label}> 
                Phone number
                <input 
                    className={s.input}
                    type="phone" 
                    name="number"
                    value={number}
                    onChange={handleChangeInput}
                    title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                    placeholder='Enter phone number'
                    required
                />
            </label>

            <button type="submit" className={s.btn} disabled={!name && !number}>
                Add contact
                {localLoading && <Spinner size={10} />}
            </button>
        </form>
    );
};