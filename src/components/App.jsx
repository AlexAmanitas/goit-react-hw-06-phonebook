// import { useState, useEffect } from 'react';
import Form from 'components/Form';
import Filter from 'components/Filter';
import Contacts from 'components/Contacts';
// import { useSelector } from 'react-redux';

export const App = () => {
  // const [contacts, setContacts] = useState(
  //   () => JSON.parse(window.localStorage.getItem('phoneBook')) ?? []

  // );
  // const [filter, setFilter] = useState('');

  // useEffect(() => {
  //   window.localStorage.setItem('phoneBook', JSON.stringify(contacts));
  // }, [contacts]);

  // const data = useSelector(state => state.contacts);

  // const formSubmitHandler = () => {
  //   if (!contacts) return;
  //   contacts.map(el => {
  //     if (el.name.toLowerCase() === data.name.toLowerCase()) {
  //       alert(`${data.name} is already in contacts.`);
  //     }
  //     return el.name;
  //   });
  //   setContacts([...contacts, data]);
  // };

  // const handleClickDelete = id => {
  //   setContacts(contacts.filter(el => el.id !== id));
  // };

  return (
    <>
      <h2>Phonebook</h2>
      <Form />
      <h2>Contacts</h2>
      <Filter />
      <Contacts />
    </>
  );
};

//
