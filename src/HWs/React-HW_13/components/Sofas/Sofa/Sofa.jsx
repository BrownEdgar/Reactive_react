import './Sofa.scss';

export default function Sofa({ sofa, handleDeleteSofa }) {
  return (
    <div className="sofa">
      <div className="sofa__img">
        <img src={sofa.image} alt="sofa" />
      </div>
      <div className="sofa__content">
        <h1 className="sofa__name">{sofa.name}</h1>
        <p className="sofa__desc">{sofa.desc}</p>
      </div>

      <div className="sofa__delete-btn">
        <i className="bi bi-x" onClick={() => handleDeleteSofa(sofa.id)}></i>
      </div>
    </div>
  );
}
