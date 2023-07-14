import { createSlice, isAnyOf } from "@reduxjs/toolkit";
import { fetchContacts, addContact, deleteContact } from "./operations";
import { handleAddContactFulfilled, handleDeleteContactFulFilled, handleFetchContactsFulfilled, handlePending, handleRejected } from "./handlersOfActions";
import { defaultActionStatus, handleActionTypesChange } from "./actionTypesHandlers";

const contactsSlice = createSlice({
    name: 'contacts', 
    initialState: {
        items: [],
        isLoading: false,
        error: null
    },
    extraReducers: builder => {
        builder
            .addCase(fetchContacts.fulfilled, handleFetchContactsFulfilled)
            .addCase(addContact.fulfilled, handleAddContactFulfilled)
            .addCase(deleteContact.fulfilled, handleDeleteContactFulFilled)
            .addMatcher(isAnyOf(...handleActionTypesChange(defaultActionStatus.pending)), handlePending)
            .addMatcher(isAnyOf(...handleActionTypesChange(defaultActionStatus.rejected)), handleRejected)
    }
});

export const contactsReducer = contactsSlice.reducer;