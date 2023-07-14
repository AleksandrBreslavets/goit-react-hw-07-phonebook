import { useSelector } from 'react-redux';
import { getContacts, getFilterValue } from 'redux/selectors';
import { nanoid } from "nanoid";
import { ContactItem } from "components/ContactItem/ContactItem";
import { ContactsList } from "./ContactList.styled";

export const ContactList = () => {
    const contacts = useSelector(getContacts);
    const filter = useSelector(getFilterValue);

    const filterContacts = () => {
        return contacts.filter(({ name }) => name.toLowerCase().includes(filter.trim().toLowerCase()));
    };

    const filteredContacts = filterContacts();
    if (filteredContacts.length) {
        return (
        <ContactsList>
            {filteredContacts.map(({ name, number, id }) => <ContactItem
                key={nanoid()}
                name={name}
                number={number}
                id={id}>
            </ContactItem>)}
        </ContactsList>);
    }
    return null;
};