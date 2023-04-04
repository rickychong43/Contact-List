import React from 'react';
import React, {useState} from 'react';
import dummyContacts from '../dummyData'

const Main = () => {
const [contacts, setContacts] = useState(dummyContacts)
const newContact = contacts.map(contact => {
  return contact.name;
})
  // return statement omitted for brevity
  return (
    <div id="main">
      <div id="navbar">
        <div>Contact List</div>
      </div>
      <div id="container">{/* your components here */}</div>
    </div>
  );
}

export default Main;