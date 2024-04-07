import { Component } from 'react';
import { nanoid } from 'nanoid'

export class App extends Component {

  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
    name: '',
    number: ''
  }

  onSubmit = (e) => {
    e.preventDefault()
    const { name, number } = this.state
    const contact = {
      id: nanoid(),
      name: name.trim(),
      number: number
    }
    console.dir(contact)
    this.setState(prevState => {
      return {
        contacts: [...prevState.contacts, contact],
        name: ''
      }
    })
  }

  onChange = (e) => {
    const { name, value } = e.target

    let pattern;
    if (name === 'name' || name === 'filter') {
      console.log('name')
      pattern = new RegExp("^[a-zA-Zа-яА-Я]+([' -][a-zA-Zа-яА-Я ]?[a-zA-Zа-яА-Я]*)*$");
    } else if (name === 'number') {
      console.log('number')
      pattern = "\\+?\\d{1,4}?([-\\.\\s]?\\(?\\d{1,3}\\)?[-\\.\\s]?\\d{1,4}[-\\.\\s]?\\d{1,4}[-\\.\\s]?\\d{1,9})?";
    }

    if (!value || !pattern || value.match(pattern)) {
      this.setState({
        [name]: value
      });
    }
  }

  render() {
    return <form
      style={{
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101'
      }}
      onSubmit={this.onSubmit}
    >
      <h1>Phonebook</h1>
      <label>
        Name
      <input
        type="text"
        name="name"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        required
        value={this.state.name}
        onChange={this.onChange}
        />
      </label>
      <label>
        Number
        <input
          type="tel"
          name="number"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          value={this.state.number}
          onChange={this.onChange}
          />
      </label>
      <button type="submit">Add contact</button>
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
    </form>
  };
};
