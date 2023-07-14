import PropTypes from "prop-types";
import { Item, ContactDetails, Button } from "./ContactItem.styled";
import { useDispatch } from "react-redux";
import { deleteConatct } from "redux/contactsSlice";

export const ContactItem = ({ name, number, id }) => {
    const dispatch = useDispatch();

    return (
        <Item>
            <ContactDetails>{name}: {number}</ContactDetails>
            <Button onClick={() => dispatch(deleteConatct(id))} type="button">Delete</Button>
        </Item>
    );
};

ContactItem.propTypes = {
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
};