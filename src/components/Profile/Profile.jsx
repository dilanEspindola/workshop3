import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const ProfileSchema = Yup.object().shape({
  name: Yup.string().required("Name is required"),

  email: Yup.string()
    .email("Invalid email address")
    .required("The email is required"),
  phone: Yup.number()
    .required("The phone is required")
    .min(10, "The phone must be 10 digits"),
  birthday: Yup.date().required("The birthday is required"),
});


const Profile = () => {
  return (
    <>
      <Formik
        initialValues={{
          name: "",
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
          <Form className="flex flex-col place-items-center h-screen">
            <h2>Profile</h2>
            <div className="flex flex-row justify-center items-center space-x-4">
              <img
                src="./assets/images/profile.png"
                alt="Profile"
                className="object-contain h-20 w-20 rounded"
              />
              <Field
                type="text"
                name="name"
                placeholder="Name"
                className="text-gray-400 border-solid border-2 border-gray-400 p-2 rounded-lg"
              />
              <ErrorMessage name="name" component="span" className="error" />
            </div>

            <Field
              type="email"
              name="email"
              placeholder="Email"
              className="text-gray-400 border-solid border-2 border-gray-400 p-2 rounded-lg w-64"
            />
            <ErrorMessage name="email" component="span" className="error" />

            <Field
              type="number"
              name="phone"
              placeholder="Phone"
              className="text-gray-400 border-solid border-2 border-gray-400 p-2 rounded-lg w-64"
            />
            <ErrorMessage name="phone" component="span" className="error" />

            <Field
              type="date"
              name="birthday"
              placeholder="Birthday"
              className="text-gray-400 border-solid border-2 border-gray-400 p-2 rounded-lg w-64"
            />
            <ErrorMessage name="birthday" component="span" className="error" />

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
    </>
  );
};

export default Profile;
