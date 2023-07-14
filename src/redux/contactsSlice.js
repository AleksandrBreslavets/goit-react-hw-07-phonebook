const { createSlice } = require("@reduxjs/toolkit");
const { nanoid } = require("nanoid");

const contactsSlice = createSlice({
    name: 'contacts', 
    initialState: [],
    reducers: {
        addContact: {
            reducer(state, action) {
                state.push(action.payload);
            },
            prepare({ name, number }) {
                return {
                    payload: {
                        name,
                        number,
                        id: nanoid(),
                    },
                };
            },
        },
        deleteConatct(state, action) {
            return state.filter(contact => contact.id !== action.payload);
        },
    },
});

export const contactsReducer = contactsSlice.reducer;
export const { addContact, deleteConatct } = contactsSlice.actions;