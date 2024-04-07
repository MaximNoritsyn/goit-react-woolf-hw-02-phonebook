import { Component } from 'react';
import { ContactForm } from './contact_form/form.jsx';

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
    this.setState(prevState => {
      return {
        contacts: [...prevState.contacts, contact]
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
      <label>
        Find contacts by name
        <input
          type="text"
          name="filter"
          value={this.state.filter}
          onChange={this.onChange}
        />
      </label>
      <ul>
        {this.state.contacts.map(contact => {
          if (this.state.filter && !contact.name.toLowerCase().includes(this.state.filter.toLowerCase())) {
            return null
          }
          return <li key={contact.id}>{contact.name}: {contact.number}</li>
        })}
      </ul>
    </div>
  };
};
