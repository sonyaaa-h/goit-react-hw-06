import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    items: [
        { id: "id-1", name: "Rosie Simpson", phone: "459-12-56" },
        { id: "id-2", name: "Hermione Kline", phone: "443-89-12" },
        { id: "id-3", name: "Eden Clements", phone: "645-17-79" },
        { id: "id-4", name: "Annie Copeland", phone: "227-91-26" },
    ],
};

const contactsSlice = createSlice({
    name: "contacts",
    initialState,
    reducers: {
        addContact(state, action) {
            state.items.push(action.payload);
        },
        deleteContact(state, action) {
            state.items = state.items.filter(
                (contact) => contact.id !== action.payload
            );
        },
        editContact(state, action) {
            const contact = state.items.find(
                (contact) => contact.id === action.payload.id
            );
            contact.name = action.payload.name;
            contact.phone = action.payload.phone;
        },
    },
});

export const { addContact, deleteContact, editContact } = contactsSlice.actions;
export const contactsReducer = contactsSlice.reducer;
