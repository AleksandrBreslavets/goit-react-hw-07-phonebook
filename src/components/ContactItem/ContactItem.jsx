import PropTypes from "prop-types";
import { Item, ContactDetails, Button } from "./ContactItem.styled";
import { useDispatch } from "react-redux";
import { deleteContact } from "redux/operations";

export const ContactItem = ({ name, phone, id }) => {
    const dispatch = useDispatch();

    return (
        <Item>
            <ContactDetails>{name}: {phone}</ContactDetails>
            <Button onClick={() => dispatch(deleteContact(id))} type="button">Delete</Button>
        </Item>
    );
};

ContactItem.propTypes = {
    name: PropTypes.string.isRequired,
    phone: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
};