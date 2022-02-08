import { createAsyncThunk } from "@reduxjs/toolkit";



export const fetchContacts = createAsyncThunk(
    'contacts/get',
    async () => {
        const response = await fetch(`https://6201333efdf50900172498d3.mockapi.io/contacts`)
      .then(res => res.json())
        .then(data => {
        console.log(data);
      return data
            })
        return response
    }
)

export const postContact = createAsyncThunk(
    'contacts/post',
    async (contact) => {
    const response = await fetch(`https://6201333efdf50900172498d3.mockapi.io/contacts`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json;charset=utf-8'
        },
        body: JSON.stringify(contact)
        })
    .then(res => res.json())
    .then(data => {
    console.log(data);
    })
    console.log(contact);
    return contact
    }
)

export const wipeOffContact = createAsyncThunk(
    'contacts/delete',
    async ({id}) => {

    const respone = await fetch(`https://6201333efdf50900172498d3.mockapi.io/contacts/${id}`, {
        method: 'DELETE',
        }).then(res => console.log(res.json()))

    }
)