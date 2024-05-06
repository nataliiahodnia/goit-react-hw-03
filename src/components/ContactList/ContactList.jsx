import PropTypes from 'prop-types';
import Contact from "../Contact/Contact";
import css from "./ContactList.module.css";

const ContactList = ({ contacts, onDelete }) => {
    return (
        <ul className={css.list}>
            {contacts.map((contact) => (
                <li className={css.item} key={contact.id}>
                    <Contact data={contact} onDelete={onDelete} />
                </li>
            ))}
        </ul>
    );
}

ContactList.propTypes = {
    contacts: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        number: PropTypes.string.isRequired
    })).isRequired,
    onDelete: PropTypes.func.isRequired
};

export default ContactList;

