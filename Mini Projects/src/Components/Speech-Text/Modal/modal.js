import React from "react";
import "./Modal.css";

function Modal({ setOpenModal }) {
  return (
    <div className="AI-modalBackground">
      <div className="AI-modalContainer">
        <div className="AI-titleCloseBtn">
          <button
            onClick={() => {
              setOpenModal(false);
            }}
          >
            X
          </button>
        </div>
        
        
      </div>
    </div>
  );
}

export default Modal;