export const handlePending = state => {
    state.isLoading = true;
};

export const handleRejected = (state, action) => {
    state.isLoading = false;
    state.error = action.payload;
};

export const handleFetchContactsFulfilled = (state, action) => {
    state.isLoading = false;
    state.error = null;
    state.items = action.payload;
};

export const handleAddContactFulfilled = (state, action) => {
    state.isLoading = false;
    state.error = null;
    state.items.push(action.payload);
};

export const handleDeleteContactFulFilled = (state, action) => {
    state.isLoading = false;
    state.error = null;
    state.items = state.items.filter(item => item.id !== action.payload.id)
};