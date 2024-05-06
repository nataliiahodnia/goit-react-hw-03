import PropTypes from 'prop-types';
import { Formik, Form, Field, ErrorMessage } from "formik";
import css from "./SearchBox.module.css";

const SearchBox = ({ value, onFilter }) => {
    const handleChange = (e) => {
        onFilter(e.target.value);
    };

    return (
        <Formik
            initialValues={{ search: value }}
            onSubmit={(values, actions) => {
                actions.setSubmitting(false);
            }}
        >
            <Form className={css.form}>
                <p className={css.label}>Search by name</p>
                <Field
                    className={css.input}
                    type="text"
                    name="search"
                    value={value}
                    onChange={handleChange}
                />
                <ErrorMessage name="search" component="div" className={css.error} />
            </Form>
        </Formik>
    );
};

SearchBox.propTypes = {
    value: PropTypes.string.isRequired,
    onFilter: PropTypes.func.isRequired
};

export default SearchBox;
