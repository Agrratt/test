import React, { Component } from "react";
import { nanoid } from 'nanoid';
import { Form } from 'components/Form/Form';
import { ListContacts } from 'components/ListContacts/ListContacts';
import { Filter } from 'components/Filter/Filter';
import {Container} from 'components/App.styled';

export class App extends Component {
  state = {
    contacts: [
    {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
    {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
    {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
    {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},
  ],
    filter: ''
  };

  addContacts = ({name, number}) => {
    const contact = {
      id: nanoid(),
      name,
      number,
    };
    this.setState(({contacts}) => ({
      contacts: [contact, ...contacts],
    }))
    
  };

  onChangeFilter = (evt) => {
    // evt.preventDefault();

    this.setState({ filter: evt.currentTarget.value });
  };

  onSearchByName = () => {
    const { filter, contacts } = this.state;
    const normalizedFilter = filter.toLowerCase();
    return contacts.filter(contact =>
        contact.name.toLowerCase().includes(normalizedFilter),
      );
  };

  onDeleteContact = (id) => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== id)
    }));
  }

  render() {
    const { filter } = this.state;
    const visibleContacts = this.onSearchByName();


    return (
      
      <Container>
        <h1>Phonebook</h1>
        <Form onFormSubmit={this.addContacts} />

        <h2>Contacts</h2>
        <Filter
          value={filter} onChange={this.onChangeFilter} />
        <ListContacts
          item={visibleContacts}
          deleteContact={this.onDeleteContact } />
        
        
      </Container>
    
    )
  }
  
};


