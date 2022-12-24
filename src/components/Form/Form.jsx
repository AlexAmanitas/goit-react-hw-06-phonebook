// import { useState } from 'react';
import PropTypes from 'prop-types';
import uniqid from 'uniqid';
import { TheForm, Label, Input, SubmitBtn } from './Form.styled';
import { useDispatch, useSelector } from 'react-redux';
import { addContacts } from 'redux/sliceContacts';

const Form = () => {
  const dispatch = useDispatch();
  const name = useSelector(state => state.contacts);
  // const [id, setId] = useState(uniqid());
  // const [name, setName] = useState('');
  // const [number, setNumber] = useState('');

  // const handleChange = evt => {
  //   const { name, value } = evt.currentTarget;
  //   console.log(name);
  //   switch (name) {
  //     case 'name':
  //       dispatch(addContacts(name));
  //       break;
  //     case 'number':
  //       dispatch(addContacts(value));
  //       break;
  //     default:
  //       return;
  //   }
  // };

  console.log(name);

  const handleSubmit = evt => {
    evt.preventDefault();
    const form = evt.target;
    console.log(form.elements);
    dispatch(
      addContacts({
        id: uniqid(),
        name: form.elements.name.value,
        number: form.elements.number.value,
      })
    );
    form.reset();
  };

  return (
    <TheForm action="" onSubmit={handleSubmit}>
      <Label htmlFor="name">Name</Label>
      <Input
        id="name"
        type="text"
        name="name"
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        required
        // value={name}
        // onChange={handleChange}
      />

      <Label htmlFor="tel">Number</Label>
      <Input
        id="tel"
        type="tel"
        name="number"
        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
        required
        // value={number}
        // onChange={handleChange}
      />

      <SubmitBtn type="submit">Add contact</SubmitBtn>
    </TheForm>
  );
};

export default Form;

Form.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
