import { useEffect } from "react";
import "./Modal.scss";

export default function Modal({
  currentId,
  handleCloseRemoveModal,
  data,
  setData,
}) {
  useEffect(() => {
    const handleWindowClick = (e) => {
      if (e.target.className === "modal") {
        handleCloseRemoveModal();
        console.log("hello");
      }
    };

    window.addEventListener("click", handleWindowClick);

    return () => {
      window.removeEventListener("click", handleWindowClick);
    };
  }, []);

  const handleRemove = (id) => {
    setData(data.filter((todo) => todo.id !== id));
  };

  return (
    <div className="modal">
      <div className="modal__wrapper">
        <div className="modal__title">Are you sure to remove todo?</div>
        <div className="modal__btns btns-modal">
          <button
            className="btns-modal__cancel"
            onClick={handleCloseRemoveModal}
          >
            cancel
          </button>
          <button
            className="btns-modal__remove"
            onClick={() => {
              handleRemove(currentId);
              handleCloseRemoveModal();
            }}
          >
            remove
          </button>
        </div>
      </div>
    </div>
  );
}
