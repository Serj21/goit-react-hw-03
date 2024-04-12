import { nanoid } from "nanoid";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import s from "./ContactFrom.module.css";

const ContactForm = ({ onSubmit }) => {
  const initialValues = { name: "", number: "" };

  const validationSchema = Yup.object().shape({
    name: Yup.string()
      .required(<span style={{ color: "red" }}>Name is required</span>)
      .min(
        3,
        <span style={{ color: "red" }}>Name must be at least 3 characters</span>
      )
      .max(
        50,
        <span style={{ color: "red" }}>Name must be at most 50 characters</span>
      ),
    number: Yup.string()
      .required(<span style={{ color: "red" }}>Number is required</span>)
      .min(
        3,
        <span style={{ color: "red" }}>
          Number must be at least 3 characters
        </span>
      )
      .max(
        50,
        <span style={{ color: "red" }}>
          Number must be at most 50 characters
        </span>
      ),
  });

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={(values, { resetForm }) => {
        onSubmit({ ...values, id: nanoid() });
        resetForm();
      }}
    >
      {({ handleSubmit }) => (
        <Form className={s.formContainer} onSubmit={handleSubmit}>
          <div className={s.inputContainer}>
            <label htmlFor="name">Name</label>
            <Field type="text" id="name" name="name" />
            <ErrorMessage name="name" component="div" />
          </div>
          <div className={s.inputContainer}>
            <label htmlFor="number">Number</label>
            <Field type="text" id="number" name="number" />
            <ErrorMessage name="number" component="div" />
          </div>

          <button className={s.fromButton} type="submit">
            Add Contact
          </button>
        </Form>
      )}
    </Formik>
  );
};

export default ContactForm;
