import { createSlice } from "@reduxjs/toolkit";
import { getContacts, addContact, deleteContact } from "utils/api";

const handlePending = (state) => {
    state.loading = true;
};

const handleRejected = (state, action) => {
    state.error = action.payload;
    state.loading = false;
};

const contactsSlice = createSlice({
    name: "contacts",
    initialState: {
        items: [],
        filter: "",
        loading: false,
        error: null,
    },

    reducers: {
        setFilter: (state, action) => {
            state.filter = action.payload;
        },
    },

    extraReducers: {
        [getContacts.pending]: handlePending,
        [addContact.pending]: handlePending,
        [deleteContact.pending]: handlePending,

        [getContacts.fulfilled]: (state, action) => {
            state.items = action.payload;
            state.loading = false;
        },
        [addContact.fulfilled]: (state, action) => {
            state.items.push(action.payload);
            state.loading = false;
        },
        [deleteContact.fulfilled]: (state, action) => {
            state.items = state.items.filter(({ id }) => id !== action.payload);
            state.loading = false;
        },

        [getContacts.rejected]: handleRejected,
        [addContact.rejected]: handleRejected,
        [deleteContact.rejected]: handleRejected,
    },
});

export const contactsSliceReducer = contactsSlice.reducer;

export const { setFilter } = contactsSlice.actions;

