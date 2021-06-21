import { configureStore, createSlice } from "@reduxjs/toolkit";
import { createStore } from "redux";

export const toogle = () => {
  return {
    type: "TOOGLE",
  };
};

export const addContact = (contact) => {
  return {
    type: "CREATE_CONTACT",
    payload: contact,
  };
};

export const getContact = (id) => {
  return {
    type: "GET_CONTACT",
    payload: id,
  };
};

export const updateContact = (contact) => {
  return {
    type: "UPDATE_CONTACT",
    payload: contact,
  };
};

export const deleteConatct = (id) => {
  return {
    type: "DELETE_CONTACT",
    payload: id,
  };
};

const initialState = {
  contacts: [
    {
      id: 1,
      name: "Leanne Graham",
      email: "Sincere@april.biz",
      address: "Kulas Light, Gwenborough",
      phone: "9876543210",
      company: "Romaguera-Crona",
    },
    {
      id: 2,
      name: "Ervin Howell",
      email: "Shanna@melissa.tv",
      address: "Victor Plains, Wisokyburgh",
      phone: "9876543210",
      company: "Deckow-Crist",
    },
    {
      id: 3,
      name: "Clementine Bauch",
      email: "Nathan@yesenia.net",
      address: "Douglas Extension, McKenziehaven",
      phone: "9876543210",
      company: "Romaguera-Jacobson",
    },
    {
      id: 4,
      name: "Patricia Lebsack",
      email: "Julianne.OConner@kory.org",
      address: "Hoeger Mall, South Elvis",
      phone: "9876543210",
      company: "Robel-Corkery",
    },
    {
      id: 5,
      name: "Chelsey Dietrich",
      email: "Lucio_Hettinger@annie.ca",
      address: "Skiles Walks, Roscoeview",
      phone: "9876543210",
      company: "Keebler LLC",
    },
    {
      id: 6,
      name: "Leanne Graham",
      email: "Sincere@april.biz",
      address: "Kulas Light, Gwenborough",
      phone: "9876543210",
      company: "Romaguera-Crona",
    },
    {
      id: 7,
      name: "Leanne Graham",
      email: "Sincere@april.biz",
      address: "Kulas Light, Gwenborough",
      phone: "9876543210",
      company: "Romaguera-Crona",
    },
    {
      id: 8,
      name: "Leanne Graham",
      email: "Sincere@april.biz",
      address: "Kulas Light, Gwenborough",
      phone: "9876543210",
      company: "Romaguera-Crona",
    },
    {
      id: 9,
      name: "Leanne Graham",
      email: "Sincere@april.biz",
      address: "Kulas Light, Gwenborough",
      phone: "9876543210",
      company: "Romaguera-Crona",
    },
    {
      id: 10,
      name: "Leanne Graham",
      email: "Sincere@april.biz",
      address: "Kulas Light, Gwenborough",
      phone: "9876543210",
      company: "Romaguera-Crona",
    },
  ],
  contact: null,
  cartIsVisible: false,
};

const contactReducer = (state = initialState, action) => {
  switch (action.type) {
    case "TOOGLE":
      return {
        cartIsVisible: !state.cartIsVisible,
        contacts: state.contacts,
      };
    case "CREATE_CONTACT":
      console.log("added");
      return {
        ...state,
        contacts: [action.payload, ...state.contacts],
      };
    case "GET_CONTACT":
      let arr = state.contacts.filter(
        (contact) => contact.id === action.payload
      );
      arr = arr.values();
      for (let val of arr) {
        arr = val;
      }
      // console.log(arr);
      return {
        ...state,
        contact: arr,
      };
    case "UPDATE_CONTACT":
      return {
        ...state,
        contacts: state.contacts.map((contact) =>
          contact.id === action.payload.id ? action.payload : contact
        ),
      };
    case "DELETE_CONTACT":
      return {
        ...state,
        contacts: state.contacts.filter(
          (contact) => contact.id !== action.payload
        ),
      };
    default:
      return state;
  }
};

const store = createStore(contactReducer);

export default store;

// const contactSlice = createSlice({
//   name: "cotacts",
//   initialState: initialState,
//   reducers: {
//     toogle(state) {
//       state.cartIsVisible = !state.cartIsVisible;
//     },
//     addContact(state, action) {
//       const newContact = action.payload;
//       console.log(newContact);
//       state.contacts.push({
//         name: newContact.name,
//         email: newContact.email,
//         phone: newContact.phone,
//         company: newContact.company,
//         address: newContact.address,
//       });
//     },
//     deleteConatct(state, action) {
//       const contactId = action.payload;
//       console.log(contactId);
//       state.contacts.filter((contact) => contact.id !== contactId);
//     },
//   },
// });

// const store = configureStore({
//   reducer: contactSlice.reducer,
// });

// export const contactActions = contactSlice.actions;
