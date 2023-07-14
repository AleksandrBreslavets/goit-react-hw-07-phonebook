import { useSelector } from 'react-redux';
import {selectVisibleContacts } from 'redux/selectors';
import { ContactItem } from "components/ContactItem/ContactItem";
import { ContactsList } from "./ContactList.styled";

export const ContactList = () => {
    const filteredContacts = useSelector(selectVisibleContacts);

    if (filteredContacts.length) {
        return (
        <ContactsList>
            {filteredContacts.map(({ name, phone, id }) => <ContactItem
                key={id}
                name={name}
                phone={phone}
                id={id}>
            </ContactItem>)}
        </ContactsList>);
    }
    return null;
};