import React from 'react'


const Modal = ({ handleClose, show, children }) => {
  const showHideClassName = show ? "modal display-block" : "modal display-none";
  return (
    <div className={showHideClassName}>
    <div className="overlay" onClick={() => {
      handleClose();
    }} />
      <section className="modal-main fade-in">
        {children}
        <button onClick={handleClose}>close</button>
      </section>
    </div>
  );
};

export default Modal;
