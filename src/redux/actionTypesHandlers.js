import { fetchContacts, addContact, deleteContact } from "./operations";

const actionTypes = [fetchContacts, addContact, deleteContact];

export const defaultActionStatus = {
    pending: 'pending',
    rejected: 'rejected',
};

export const handleActionTypesChange = type => actionTypes.map(action => action[type]);