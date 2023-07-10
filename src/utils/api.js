import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

axios.defaults.baseURL = "https://639dbcca1ec9c6657bb1330a.mockapi.io/";

export const getContacts = createAsyncThunk('contacts/fetchContacts', async () => {
    const response = await axios.get('/contacts');
    return response.data;
});

export const addContact = createAsyncThunk('contacts/fetchContacts', async (newContact) => {
    const response = await axios.post('/contacts', newContact);
    return response.data;
});

export const deleteContact = createAsyncThunk('contacts/fetchContacts', async (id) => {
    const response = await axios.delete(`/contacts/${id}`);
    return response.data;
});

