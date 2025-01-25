import { ErrorMessage, Field, Form, Formik } from "formik";
import * as Yup from "yup";
import { useId } from "react";
import s from "./ContactForm.module.css";

const ContactSchema = Yup.object().shape({
  name: Yup.string()
    .min(3, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  number: Yup.string()
    .matches(/^\+?\d+$/, "Invalid format")
    .min(3, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
});

const initialValues = {
  name: "",
  number: "",
};

const ContactForm = () => {
  const nameFieldId = useId();
  const numberFieldId = useId();

  const handleSubmit = (values, actions) => {
    console.log(values.name);
    console.log(values.number);

    actions.resetForm();
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={ContactSchema}
    >
      <Form className={s.form}>
        <div className={s.labelWraper}>
          <label htmlFor={nameFieldId}>Name</label>
          <Field className={s.input} type="text" name="name" id={nameFieldId} />
          <ErrorMessage className={s.span} name="name" component="span" />
        </div>

        <div className={s.labelWraper}>
          <label htmlFor={numberFieldId}>Number</label>
          <Field
            className={s.input}
            type="tel"
            name="number"
            id={numberFieldId}
          />
          <ErrorMessage className={s.span} name="number" component="span" />
        </div>

        <button className={s.button} type="submit">
          Add contact
        </button>
      </Form>
    </Formik>
  );
};

export default ContactForm;
