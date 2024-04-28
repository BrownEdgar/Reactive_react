import { useState } from "react";
import { Field, Form, Formik } from "formik";
import { addCompany } from "@/companies/companiesSlice";
import { useDispatch } from "react-redux";
import LoaderCode from "../LoaderCode/LoaderCode";

import "./CreateCompanyForm.scss";

export default function CreateCompanyForm() {
  const dispatch = useDispatch();

  const [isLoading, setIsLoading] = useState(false);

  const handleAddCompany = (values, formik) => {
    setIsLoading(true);
    setTimeout(() => {
      dispatch(addCompany(values));
      setIsLoading(false);
    }, 3000);
    formik.resetForm();
  };

  return isLoading ? (
    <LoaderCode />
  ) : (
    <Formik
      initialValues={{
        name: "",
        contact: {
          address: "",
          phone: "",
          email: "",
        },
      }}
      onSubmit={handleAddCompany}
    >
      <Form className="companies__form form-companies">
        <Field
          className="form-companies__input"
          type="text"
          name="name"
          placeholder="name"
          required={true}
          autoComplete="off"
        />
        <Field
          className="form-companies__input"
          type="text"
          name="contact.address"
          placeholder="address"
          required={true}
          autoComplete="off"
        />
        <Field
          className="form-companies__input"
          type="text"
          name="contact.phone"
          placeholder="phone"
          required={true}
          autoComplete="off"
        />
        <Field
          className="form-companies__input"
          type="email"
          name="contact.email"
          placeholder="email"
          required={true}
          autoComplete="off"
        />
        <input
          className="form-companies__btn"
          type="submit"
          value="Create company"
        />
      </Form>
    </Formik>
  );
}
