import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

axios.defaults.baseURL = "https://639dbcca1ec9c6657bb1330a.mockapi.io/";

export const getContacts = createAsyncThunk(
    'contacts/getContacts', 
    async () => {
        try {
            const response = await axios.get('/contacts');
            return response.data;
        } catch (error) {
            return error;
        }
    }
);

export const addContact = createAsyncThunk(
    'contacts/addContacts', 
    async (newContact) => {
        try {
            const response = await axios.post('/contacts', newContact);
            return response.data;
        } catch (error) {
            return error;
        }
    }
);

export const deleteContact = createAsyncThunk(
    'contacts/deleteContacts', 
    async (id) => {
        try {
            const response = await axios.delete(`/contacts/${id}`);
            return response.data.id;
        } catch (error) {
            return error;
        }
    }
);



