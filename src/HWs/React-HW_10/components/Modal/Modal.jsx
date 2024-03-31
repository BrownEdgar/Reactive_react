import "./Modal.scss";

export default function Modal({ handleCloseModal, title, logined }) {
  return (
    <div className="modal">
      <div className="modal__wrapper">
        <div className="modal__title">{title}</div>
        <div className="modal__btns btns-modal">
          <button
            className={`btns-modal__ok ${
              logined ? "btns-modal__ok-true" : "btns-modal__ok-false"
            }`}
            onClick={handleCloseModal}
          >
            OK
          </button>
        </div>
      </div>
    </div>
  );
}
