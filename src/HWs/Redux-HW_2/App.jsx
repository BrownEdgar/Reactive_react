import { useSelector } from "react-redux";
import { getCompanies } from "@/companies/companiesSlice";
import { useFormatingData } from "./hooks/useFormatingData";
import CreateCompanyForm from "./components/CreateCompanyForm/CreateCompanyForm";

import "./App.scss";

export default function App() {
  const companies = useSelector(getCompanies);
  const parsedData = useFormatingData(companies);

  return (
    <div className="companies">
      <div className="companies__left">
        <h1 className="companies__title">Companies</h1>
        <CreateCompanyForm />
      </div>
      <div className="companies__output output">
        <pre>
          <h1 className="output__title">OUTPUT: </h1>
          <b>{parsedData}</b>
        </pre>
      </div>
    </div>
  );
}
