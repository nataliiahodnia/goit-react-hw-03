import PropTypes from 'prop-types';
import { nanoid } from "nanoid";
import css from "./ContactForm.module.css"
import { Field, Form, Formik, ErrorMessage } from "formik"
import * as Yup from 'yup'

const UserSchema = Yup.object().shape(
    {
        name: Yup.string().min(3, "min 3").max(50, "max 50").required("it is required"),
        number: Yup.number().required("it is required")
    }
)

const ContactForm = ({ onAdd }) => {
    const handleSubmit = (value, actions) => {
        console.log(value)
        onAdd({
            id: nanoid(),
            name: value.name,
            number: value.number
        });
        actions.resetForm();
    }
    
    return (
        <Formik
            initialValues={{
                name: "",
                number: "",
                id: nanoid()
            }}
            validationSchema={UserSchema}
            onSubmit={handleSubmit}
        >
            <Form className={css.form}>
                <p className={css.text}>Name</p>
                <Field name="name" type="text" />
                <ErrorMessage name="name" component="span" />
                <p className={css.text}>Number</p>
                <Field className={css.field} name="number" type="number" />
                <ErrorMessage name="number" component="span" />
                <button className={css.btn} type="submit">Add Contacts</button>
            </Form>
        </Formik>
    );
}

ContactForm.propTypes = {
    onAdd: PropTypes.func.isRequired
};

export default ContactForm;
