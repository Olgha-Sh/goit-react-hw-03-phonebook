import React, { Component } from 'react';
import generateID from 'uuid/v4';
import styles from './App.module.css';
import ContactForm from '../ContactForm/ContactForm';
import ContactList from '../ContactList/ContactList';
import Filter from '../Filter/Filter';

class App extends Component {
  state = {
    contacts: [],
    filter: '',
  };

  componentDidMount() {
    const notesFromLS = localStorage.getItem('contacts');
    if (notesFromLS) {
      this.setState({ contacts: JSON.parse(notesFromLS) });
    }
  }

  componentDidUpdate(prevProps, prevState) {
    const { contacts } = this.state;
    if (prevState.contacts !== contacts) {
      localStorage.setItem('contacts', JSON.stringify(contacts));
    }
  }

  filterContacts = (contacts, filter) => {
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase()),
    );
  };

  changeFilter = e => {
    this.setState({ filter: e.target.value });
  };

  addContact = ({ name, number }) => {
    const { contacts } = this.state;
    const contactToAdd = { name, number, id: generateID() };
    if (name && number) {
      if (
        contacts.find(
          contact => contact.name.toLowerCase() === name.toLowerCase(),
        )
      ) {
        alert(`${name} is already in your contacts`);
        return;
      }
      this.setState(state => ({
        contacts: [...state.contacts, contactToAdd],
      }));
    } else {
      alert('One of the fields is incorrect!');
    }
  };

  deleteContact = id => {
    this.setState(state => ({
      contacts: state.contacts.filter(contact => contact.id !== id),
    }));
  };

  render() {
    const { contacts, filter } = this.state;
    const filteredContacts = this.filterContacts(contacts, filter);
    return (
      <div>
        <h2 className={styles.title}>Phonebook</h2>
        <ContactForm onAddContact={this.addContact} />
        <Filter value={filter} onChangeFilter={this.changeFilter} />
        <ContactList
          items={filteredContacts}
          onDeleteContact={this.deleteContact}
          id={generateID()}
        />
      </div>
    );
  }
}

export default App;
