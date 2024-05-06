import PropTypes from 'prop-types';
import css from "./Contact.module.css"

const Contact = ({ data: { id, name, number }, onDelete }) => {
    return (
        <div className={css.container}>
            <div className={css.containerForP}>
                <p className={css.text}>{name}</p>
                <p className={css.text}>{number}</p>
            </div>
            <button className={css.btn} onClick={() => onDelete(id)}>
                Delete
            </button>
        </div>
    );
}

Contact.propTypes = {
    data: PropTypes.shape({
        id: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        number: PropTypes.string.isRequired
    }).isRequired,
    onDelete: PropTypes.func.isRequired
};

export default Contact;
