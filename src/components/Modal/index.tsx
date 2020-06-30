import React, { useState, useEffect } from "react";
import ReactModal from "react-modal";

interface IModalProps {
  isOpen: boolean;
  setIsOpen: () => void;
  image: string | undefined;
}

const Modal: React.FC<IModalProps> = ({ isOpen, setIsOpen, image }) => {
  const [modalStatus, setModalStatus] = useState(isOpen);

  useEffect(() => {
    setModalStatus(isOpen);
  }, [isOpen]);

  return (
    <ReactModal
      shouldCloseOnOverlayClick={!false}
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
          width: "1000px",
          border: "none",
        },
        overlay: {
          backgroundColor: "#121214e6",
        },
      }}
    >
      {image && <img src={image} alt="image" />}
    </ReactModal>
  );
};

export default Modal;