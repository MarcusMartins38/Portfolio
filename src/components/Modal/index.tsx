import React, { useState, useEffect } from "react";
import ReactModal from "react-modal";

import "./styles.css";

interface IModalProps {
  isOpen: boolean;
  setIsOpen: () => void;
  image?: string;
}

const Modal: React.FC<IModalProps> = ({ isOpen, setIsOpen, image }) => {
  const [modalStatus, setModalStatus] = useState(isOpen);

  useEffect(() => {
    setModalStatus(isOpen);
  }, [isOpen]);

  return (
    <ReactModal
      shouldCloseOnOverlayClick={!false}
      shouldCloseOnEsc={true}
      onRequestClose={setIsOpen}
      isOpen={modalStatus}
      ariaHideApp={false}
      className="modal"
      style={{
        overlay: {
          backgroundColor: "#121214e6",
        },
      }}
    >
      {image && <img src={image} alt="certificado" />}
    </ReactModal>
  );
};

export default Modal;
