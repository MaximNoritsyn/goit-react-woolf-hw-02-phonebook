import css from './list.module.css';
import { ContactItem } from '../contact/item';


export const ContactList = ({ contacts }) => {
    return (
        <ul className={css.list}>
            {contacts.map(contact => (<ContactItem key={contact.id} contact={contact} />))}
        </ul>
    );
}