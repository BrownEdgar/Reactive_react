import { useState, useEffect } from "react";
import axios from "axios";
import Sofa from "./Sofa/Sofa";

import Modal from "../Modal/Modal";

import "./Sofas.scss";

export default function Sofas() {
  const [sofas, setSofas] = useState([]);
  const [creatModalIsOPen, setCreatModalIsOPen] = useState(false);

  const getSofas = () => {
    axios("http://localhost:3000/sofas").then((res) => setSofas(res.data));
  };

  const handleModal = () => {
    setCreatModalIsOPen(!creatModalIsOPen);
  };

  const handleDeleteSofa = (id) => {
    axios
      .delete(`http://localhost:3000/sofas/${id}`)
      .then(getSofas)
      .catch((err) => console.log(err));
  };

  const handleCreatSofa = (id) => {
    handleModal();
  };

  useEffect(() => {
    getSofas();
  }, []);

  useEffect(() => {
    if (creatModalIsOPen) {
      document.body.classList.add("lock");
    } else {
      document.body.classList.remove("lock");
    }
  }, [creatModalIsOPen]);

  return (
    <div className="sofas">
      {creatModalIsOPen && (
        <Modal
          title="Creating New Sofa"
          handleModal={handleModal}
          getSofas={getSofas}
        />
      )}
      <div className="sofas__container">
        <h1 className='sofas__title'>SOFAS</h1>
        <button className="sofas__creat-btn" onClick={handleCreatSofa}>
          Creat Sofa
        </button>
        <div className="sofas__content">
          {sofas.map((sofa) => (
            <Sofa
              key={sofa.id}
              sofa={sofa}
              handleDeleteSofa={handleDeleteSofa}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
