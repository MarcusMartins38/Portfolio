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
      className="modal"
      shouldCloseOnOverlayClick={!false}
      shouldCloseOnEsc={true}
      onRequestClose={setIsOpen}
      isOpen={modalStatus}
      ariaHideApp={false}
      style={{
        content: {
          top: "50%",
          left: "50%",
          right: "auto",
          bottom: "auto",
          marginRight: "-50%",
          transform: "translate(-50%, -50%)",
          background: "transparent",
          color: "#000000",
          borderRadius: "8px",
          maxWidth: "1000px",
          border: "none",
        },
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
