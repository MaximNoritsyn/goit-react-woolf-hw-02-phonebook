import { Component } from 'react';
import { ContactForm } from './contact_form/form.jsx';
import { Filter } from './filter/filter.jsx';
import { ContactList } from './contacts/contact_list/list.jsx';

export class App extends Component {

  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: ''
  }

  fillContacts = (contact) => {
    if (this.state.contacts.find(item => item.name === contact.name)) {
      alert(`${contact.name} is already in contacts`)
      return
    }
    this.setState(prevState => {
      return {
        contacts: [...prevState.contacts, contact]
      }
    })
  }

  onChangeFilter = (e) => {
    this.setState({
      filter: e.target.value
    })
  }

  filteredContacts = () => (this.state.contacts.filter(contact =>
    contact.name.toLowerCase().includes(this.state.filter.toLowerCase()
    ))
  )

  deleteContact = (e) => {
    const contactId = e.target.dataset.id
    this.setState(prevState => {
      return {
        contacts: prevState.contacts.filter(({ id }) => id !== contactId)
      }
    })
  }

  render() {
    return <div
      style={{
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101'
      }}
    >
      <h1>Phonebook</h1>
      <ContactForm fillContacts={this.fillContacts} />
      <h2>Contacts</h2>
      <Filter filter={this.state.filter} onChangeFilter={this.onChangeFilter} />
      <ContactList contacts={this.filteredContacts()} deleteContact={this.deleteContact} />
    </div>
  };
};
