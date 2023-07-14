import toast, { Toaster } from 'react-hot-toast';
import { useState } from "react";
import { Form, Label, Input, Button } from "./ContactForm.styled";
import { useDispatch, useSelector } from 'react-redux';
import { selectContacts } from 'redux/selectors';
import { addContact } from 'redux/operations';

export const ContactForm = () => {
    const contacts = useSelector(selectContacts);
    const dispatch = useDispatch();
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    
    const onInputChange = (e) => {
        const { name, value } = e.target;
        if (name === 'name') {
            setName(value);
            return;
        }
        setPhone(value);
    };

    const resetForm = () => {
        setName('');
        setPhone('');
    };

    const onFormSubmit = (e) => {
        e.preventDefault();
        if (contacts.findIndex(contact => name === contact.name) === -1) {
            dispatch(addContact({ name, phone }));
        }
        else toast.error(`${name} is already in contacts`);
        resetForm();
    };
    
    return (
        <div>
            <Form onSubmit={onFormSubmit}>
                <Label>Name
                    <Input
                        onChange={onInputChange}
                        value={name}
                        type="text"
                        name="name"
                        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                        required
                    />
                </Label>
                <Label>Number
                    <Input
                        onChange={onInputChange}
                        value={phone}
                        type="tel"
                        name="phone"
                        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                        required
                    />
                </Label>
                <Button type="submit">Add contact</Button>
            </Form>
            <Toaster
                position="top-right"
                toastOptions={{ duration: 2000 }} />
        </div>
    );
};