import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import Navbar from "./Navbar";

const ProfileSchema = Yup.object().shape({
  email: Yup.string()
    .email("Invalid email address")
    .required("The email is required"),
  password: Yup.string().required("The password is required"),
});

const Profile = () => {
  return (
    <>
      <Formik
        initialValues={{
          email: "",
          password: "",
        }}
        validationSchema={ProfileSchema}
        onSubmit={(values, { setSubmitting }) => {
          console.log(values);
        }}
      >
        {({ isValid }) => (
          <Form className="flex flex-col place-items-center h-screen justify-evenly">
            <h2>Profile</h2>
            <div className="flex flex-row justify-center items-center space-x-4">
              <img
                src="./assets/images/profile.png"
                alt="Profile"
                className="object-contain h-20 w-20 rounded"
              />
            </div>

            <Field
              type="email"
              name="email"
              placeholder="Email"
              className="text-gray-400 border-solid border-2 border-gray-400 p-2 rounded-lg w-64"
            />
            <ErrorMessage name="email" component="span" className="error" />

            <Field
              type="text"
              name="password"
              placeholder="Password"
              className="text-gray-400 border-solid border-2 border-gray-400 p-2 rounded-lg w-64"
            />
            <ErrorMessage name="password" component="span" className="error" />
            <button
              type="submit"
              disabled={!isValid}
              className="text-slate-50 bg-neutral-800 border-solid border-2 border-neutral-900 p-2 rounded-lg w-64"
            >
              Update
            </button>
          </Form>
        )}
      </Formik>
      <Navbar />
    </>
  );
};

export default Profile;
