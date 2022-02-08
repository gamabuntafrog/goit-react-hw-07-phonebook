import {
  configureStore,
  createSlice,
  current,
  getDefaultMiddleware,
} from "@reduxjs/toolkit";
import { fetchContacts, postContact, wipeOffContact } from "./Operations";
import {
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";




const middleware = [
  ...getDefaultMiddleware({
    serializableCheck: {
      ignoreActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
  }),
];


const contacts = createSlice({
  name: "contacts",
  initialState: {
    items: [],
    filter: "",
  },
  reducers: {
    addContact(state, action) {
      state.items = state.items.concat(action.payload);
    },
    deleteContact(state, { payload }) {
      state.items = state.items.filter((el) => el.id !== payload.id);
    },
    filterContacts(state, action) {
      state.filter = action.payload;
    },
  },
  extraReducers: {
    [fetchContacts.fulfilled]: (state, action) => {
      console.log(state);
      console.log(action);
      state.items = action.payload
      // return state
    },
    [postContact.fulfilled]: (state, action) => {
      console.log(action);
    },
    [wipeOffContact.fulfilled]: (state, action) => {
      console.log(action);
      
    }
  }
});

const store = configureStore({
  reducer: {
    contacts: contacts.reducer,
  },
  middleware,
});


export const { addContact, deleteContact, filterContacts } = contacts.actions;

export default { store };
