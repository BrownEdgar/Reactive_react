import { useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";
import { getCompanies } from "@/companies/companiesSlice";
import { useFormatingData } from "./hooks/useFormatingData";
import CreateCompanyForm from "./components/CreateCompanyForm/CreateCompanyForm";

import "./App.scss";

export default function App() {
  const companies = useSelector(getCompanies);
  const parsedData = useFormatingData(companies);

  const [outputHeight, setOutputHeight] = useState(null);
  const output = useRef(null);

  useEffect(() => {
    const count = Math.floor(output.current.scrollHeight / 24.9);
    setOutputHeight(Array.from({ length: count }));
  }, [companies]);

  return (
    <div className="companies">
      <div className="companies__left">
        <h1 className="companies__title">Companies</h1>
        <CreateCompanyForm />
      </div>
      <div className="companies__output output" ref={output}>
        <div className="output__lines">
          {outputHeight
            ? outputHeight.map((_, index) => <span key={index}>{++index}</span>)
            : null}
        </div>
        <div className="output__top-panel top-panel">
          <h1 className="output__title">OUTPUT:</h1>
          <div className="top-panel__controls">
            <span className="control close"></span>
            <span className="control minimize"></span>
            <span className="control maximize"></span>
          </div>
        </div>
          <pre>
            <b>{parsedData}</b>
          </pre>
      </div>
    </div>
  );
}
