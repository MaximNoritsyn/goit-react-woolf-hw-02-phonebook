import css from './item.module.css';

export const ContactItem = ({ contact }) => {
    return <li className={css.item}>
        {contact.name}: {contact.number}
    </li>
}