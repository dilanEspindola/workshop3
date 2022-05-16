import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const ProfileSchema = Yup.object().shape({
  email: Yup.string()
    .email("Invalid email address")
    .required("The email is required"),
  phone: Yup.number()
    .required("The phone is required")
    .max(10, "The phone must be 10 digits"),
  birthday: Yup.date().required("The birthday is required"),
});

const Profile = () => {
  return (
    <Formik
      initialValues={{
        email: "",
        phone: "",
        birthday: "",
      }}
      validationSchema={ProfileSchema}
      onSubmit={(values, { setSubmitting }) => {
        console.log(values);
      }}
    >
      {({ isValid }) => (
        <Form>
          <img src="./assets/images/profile.png" alt="Profile" />

          <Field type="email" name="email" placeholder="Email" />
          <ErrorMessage name="email" component="span" className="error" />

          <Field type="number" name="phone" placeholder="Phone" />
          <ErrorMessage name="phone" component="span" className="error" />

          <Field type="birthday" name="birthday" placeholder="Birthday" />
          <ErrorMessage name="birthday" component="span" className="error" />

          <button type="submit" disabled={!isValid}>
            Update
          </button>
        </Form>
      )}
    </Formik>
  );
};

export default Profile;
