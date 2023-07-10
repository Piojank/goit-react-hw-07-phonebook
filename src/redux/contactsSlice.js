import { createSlice } from "@reduxjs/toolkit";
import { getContacts, addContact, deleteContact } from "utils/api";

const contactsSlice = createSlice({
    name: "contacts",
    initialState: {
        items: [],
        filter: "",
        loading: false,
        error: null,
    },

    reducers: {
        filteredContacts: (state, action) => {
            state.filter = action.payload;
        },
    },

    extraReducers: {
        [getContacts.pending]: state => {
            state.loading = true;
        },
        [addContact.pending]: state => {
            state.loading = true;
        },
        [deleteContact.pending]: state => {
            state.loading = true;
        },

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

        [getContacts.rejected]: (state, action) => {
            state.error = action.payload;
            state.loading = false;
        },
        [addContact.rejected]: (state, action) => {
            state.error = action.payload;
            state.loading = false;
        },
        [deleteContact.rejected]: (state, action) => {
            state.error = action.payload;
            state.loading = false;
        },
    },
});

export const contactsSliceReducer = contactsSlice.reducer;

export const { filteredContacts } = contactsSlice.actions;

