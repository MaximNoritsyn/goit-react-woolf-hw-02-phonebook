import { Component } from 'react';
import { nanoid } from 'nanoid'

export class App extends Component {

  state = {
    contacts: [],
    name: '',
    number: ''
  }

  onSubmit = (e) => {
    e.preventDefault()
    const { name, number } = this.state
    const contact = {
      id: nanoid(),
      name: name,
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
    this.setState({
      [name]: value
    })
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
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
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
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          value={this.state.number}
          onChange={this.onChange}
          />
      </label>
      <button type="submit">Add contact</button>
      <h2>Contacts</h2>
      <ul>
        {this.state.contacts.map(contact => (
          <li key={contact.id}>{contact.name}: {contact.number}</li>
        ))}
      </ul>
    </form>
  };
};
