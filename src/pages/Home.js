import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

// import Slider from "../components/Slider";
import image from "../assets/undraw_teaching.svg";
// import Counter from "../components/Counter";

import Slider1 from "../components/Slider1";

const gradeOptions = [
  { value: "", label: "Choose Grade" },
  { value: 12, label: "12" },
  { value: 11, label: "11" },
  { value: 10, label: "10" },
  { value: 9, label: "9" },
  { value: 8, label: "8" },
  { value: 7, label: "7" },
  { value: 6, label: "6" },
  { value: 5, label: "5" },
  { value: 4, label: "4" },
  { value: 3, label: "3" },
  { value: 2, label: "2" },
  { value: 1, label: "1" },
  
];

const curriculumOptions = [
  { value: "", label: "Choose Curriculum" },
  { value: 1, label: "CBSE" },
  { value: 2, label: "ICSE" },
  { value: 3, label: "State Board" },
  { value: 4, label: "Others" },
];

const Home = () => {
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 bg-green-100 min-h-screen">
        <div className="bg-green-100 pt-16 pl-6">
          <img src={image} alt="banner" />
        </div>

        <div className="mt-8">
          <Formik
            initialValues={{
              grade: "",
              curriculum: "",
              fullName: "",
              mobileNumber: "",
              email: "",
              message: "",
            }}
            validationSchema={Yup.object({
              grade: Yup.string().required("Please Select a Grade"),
              curriculum: Yup.string().required("Please Select a Curriculum"),
              fullName: Yup.string().required("Please Enter Your Full Name"),
              city: Yup.string().required("Please Enter Your City"),
              mobileNumber: Yup.string()
                .required("Please Enter Your Mobile Number")
                .matches(/^[0-9]{10}$/, "Mobile number must be 10 digits"),
              email: Yup.string()
                .required("Please Enter Your Email")
                .email("Please Enter a valid Email"),
              message: Yup.string().required("Please Enter a Message"),
            })}
            onSubmit={(values, { setSubmitting }) => {
              setTimeout(() => {
                // submit values to server, or do whatever you need to do
                setSubmitting(false);
              }, 400);
            }}
          >
            {({ isSubmitting }) => (
              <div className="bg-white rounded-sm shadow-lg dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700 ml-32">
                <Form className="py-8 max-w-[80%] m-auto ">
                  <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white text-center mb-6">
                    Sign up now for the FREE DISCOVER PROGRAM!
                  </h1>
                  <div className="space-y-4">
                    <Field
                      as="select"
                      name="grade"
                      id="grade"
                      className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    >
                      {gradeOptions.map((option) => (
                        <option key={option.value} value={option.value}>
                          {option.label}
                        </option>
                      ))}
                    </Field>
                    <ErrorMessage
                      name="grade"
                      className="text-red-500 text-xs italic"
                    />

                    <Field
                      as="select"
                      name="curriculum"
                      id="curriculum"
                      className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    >
                      {curriculumOptions.map((option) => (
                        <option key={option.value} value={option.value}>
                          {option.label}
                        </option>
                      ))}
                    </Field>
                    <ErrorMessage
                      name="curriculum"
                      className="text-red-500 text-xs italic"
                    />

                    <Field
                      type="text"
                      name="fullName"
                      id="fullName"
                      placeholder="Full Name"
                      className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    />
                    <ErrorMessage
                      name="fullName"
                      className="text-red-500 text-xs italic"
                    />

                    <Field
                      type="text"
                      name="mobileNumber"
                      id="mobileNumber"
                      placeholder="Mobile Number"
                      className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    />
                    <ErrorMessage
                      name="mobileNumber"
                      className="text-red-500 text-xs italic"
                    />

                    <Field
                      type="email"
                      name="email"
                      id="email"
                      placeholder="Email ID"
                      className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    />
                    <ErrorMessage
                      name="email"
                      className="text-red-500 text-xs italic"
                    />
                    <Field
                      type="text"
                      name="city"
                      id="city"
                      placeholder="City"
                      className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    />
                    <ErrorMessage
                      name="city"
                      className="text-red-500 text-xs italic"
                    />

                    <Field
                      as="textarea"
                      name="message"
                      id="message"
                      placeholder="Remarks"
                      className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    />
                    <ErrorMessage
                      name="message"
                      className="text-red-500 text-xs italic"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="bg-teal-500 hover:bg-teal-700 text-white font-semibold mt-4 py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                  >
                    Submit
                  </button>
                </Form>
              </div>
            )}
          </Formik>
        </div>
      </div>
      <Slider1 />
      {/* <Counter /> */}
      
      {/* <FontAwesomeIcon icon={faWhatsapp} /> */}
    </>
  );
};

export default Home;
