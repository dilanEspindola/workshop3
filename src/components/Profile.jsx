import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";


const ProfileSchema = Yup.object().shape({
  email: Yup.string()
    .email("Invalid email address")
    .required("The email is required"),
  password: Yup.string().required("The password is required"),
});

const Profile = () => {
  const { cerrarSesion } = useAuth();
  const navigate = useNavigate()

  const handleLogout = () => {
    cerrarSesion();
    navigate('/login')
  }

  return (
    <div className="relative w-full h-screen p-4">
      <div>
        <h2 className="font-bold">Profile</h2>

        <div className="flex flex-row justify-start items-center mt-6">
          <img
            src="./assets/images/profile.png"
            alt="Profile"
            className="object-cover h-20 w-20 rounded"
          />

          <p className="ml-3 font-bold text-2xl">
            Jacob Jones
          </p>
        </div>

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
            <Form className="w-full flex flex-col mt-8">
              <Field
                type="email"
                name="email"
                placeholder="Email"
                className="w-full text-gray-400 border-solid border-2 border-gray-400 p-2 rounded-lg"
              />
              <ErrorMessage name="email" component="span" className="error" />

              <Field
                type="text"
                name="password"
                placeholder="Password"
                className="w-full my-4 text-gray-400 border-solid border-2 border-gray-400 p-2 rounded-lg"
              />
              <ErrorMessage name="password" component="span" className="error" />

              <Field
                type="number"
                name="age"
                placeholder="Password"
                className="w-full text-gray-400 border-solid border-2 border-gray-400 p-2 rounded-lg"
              />
              <ErrorMessage name="password" component="span" className="error" />


              <button
                type="submit"
                disabled={!isValid}
                className="w-full mt-6 text-slate-50 bg-neutral-800 border-solid border-2 border-neutral-900 p-2 rounded-lg"
              >
                Update
              </button>
            </Form>
          )}
        </Formik>
      </div>

      <button
        onClick={handleLogout}
        className="w-full mt-20 text-slate-50 bg-neutral-800 border-solid border-2 border-neutral-900 p-2 rounded-lg uppercase"
      >
        Sign Out
      </button>
    </div>
  );
};

export default Profile;
