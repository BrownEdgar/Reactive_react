import axios from "axios";
import { nanoid } from "nanoid";
import { useState } from "react";
import "./Modal.scss";

export default function Modal({ handleModal, title, getSofas }) {
  const [createdSofaTitle, setCreatedSofaTitle] = useState("");
  const [createdSofaDesc, setCreatedSofaDesc] = useState("");
  const [createdSofaImage, setCreatedSofaImage] = useState("/public/images/");
  
  const [imageIsDownloaded, setImageIsDownloaded] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const handleTitleChange = (e) => {
    setCreatedSofaTitle(e.target.value);
  };

  const handleDescChange = (e) => {
    setCreatedSofaDesc(e.target.value);
  };

  const handleDownloadImage = (e) => {
    setCreatedSofaImage(createdSofaImage + e.target.files[0].name);
  };

  const showDownloadedImage = () => {
    setImageIsDownloaded(!imageIsDownloaded);
  };

  const handleSave = () => {
    if (createdSofaTitle && createdSofaDesc && createdSofaImage) {
      const newSofa = {
        id: nanoid(5),
        name: createdSofaTitle,
        desc: createdSofaDesc,
        image: createdSofaImage,
      };
      axios
        .post("http://localhost:3000/sofas", newSofa)
        .then((res) => {
          getSofas();
          console.log("Sofa is succesfully created!");
          handleModal();
        })
        .catch((err) => console.warn(err));
      } else {
        setErrorMessage("Title and description is required!")
      }
  };

  return (
    <div className="modal">
      <div className="modal__wrapper">
        <div className="modal__title">{title}</div>
        <form className="modal__form form-modal">
          <div className="form-modal__image">
            <input
              type="file"
              onChange={(e) => {
                handleDownloadImage(e);
                showDownloadedImage();
              }}
              className={imageIsDownloaded ? "hidden" : " "}
            />
            <button onClick={(e) => e.preventDefault()}>Download image</button>
          </div>
          {imageIsDownloaded && (
            <img
              src={createdSofaImage}
              alt="downloadedImage"
              className="form-modal__downloadedImage"
            />
          )}
          <input
            type="text"
            placeholder="title"
            name="title"
            onChange={handleTitleChange}
          />
          <textarea
            name="desc"
            cols="30"
            rows="10"
            placeholder="description"
            onChange={handleDescChange}
          ></textarea>
        </form>
        <div className="modal__btns btns-modal">
          <button className="btns-modal__cancel" onClick={handleModal}>
            CANCEL
          </button>
          <button className="btns-modal__save" onClick={handleSave}>
            SAVE
          </button>
        </div>
        <p className={errorMessage ? 'modal__error' : "modal__error-hidden"}>{errorMessage ? errorMessage : null}</p>
      </div>
    </div>
  );
}
