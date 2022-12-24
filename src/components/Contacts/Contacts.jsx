import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { deleteContacts } from 'redux/sliceContacts';
import {
  ContactList,
  ContactListItem,
  ContactName,
  ContactNumber,
  DeleteButton,
} from './Contacts.styled';

const Contacts = () => {
  // if (!data) return;
  // let filterData = data.filter(el => {
  //   return el.name.toLowerCase().includes(filter);
  // });

  const contacts = useSelector(state => state.contacts);
  const dispatch = useDispatch();

  const handleOnClick = evt => {
    console.log(evt.currentTarget.id);
    dispatch(deleteContacts(evt.currentTarget.id));
  };

  // if (filterData.length === 0) return;

  return (
    <ContactList>
      {contacts.map(el => {
        const { name, number, id } = el;
        return (
          <ContactListItem key={id}>
            <ContactName>{name}</ContactName>
            <ContactNumber>{number}</ContactNumber>
            <DeleteButton id={id} type="button" onClick={handleOnClick}>
              Delete
            </DeleteButton>
          </ContactListItem>
        );
      })}
    </ContactList>
  );
};

export default Contacts;

Contacts.propTypes = {
  props: PropTypes.shape({
    onDelete: PropTypes.func.isRequired,
    data: PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    }),
    filter: PropTypes.string.isRequired,
  }),
};
