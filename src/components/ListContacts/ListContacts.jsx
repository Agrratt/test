import { ItemContacts } from 'components/ItemContacts/ItemContacts';
import { ContactsList } from 'components/ListContacts/ListContacts.styled';
import PropTypes from 'prop-types';

export const ListContacts = ({ item, deleteContact }) => {
  return (
    <>
      <ContactsList>
        {item.map(({ id, name, number }) => (
          <ItemContacts 
            key={id}
            name={name}
            number={number}
            onClick={() => deleteContact(id)}
          />
        )

        )}
      </ContactsList>

    </>
  );
};
  
ListContacts.propTypes = {
  name: PropTypes.string,
  number: PropTypes.number
};