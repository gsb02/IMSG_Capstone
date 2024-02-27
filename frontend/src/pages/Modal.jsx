import React from 'react';
import './Modal.css';

const Modal = ({ isOpen, onClose, onConfirm, children }) => {
    if (!isOpen) return null;
  
    return (
      <div className="modal-overlay">
        <div className="modal-content">
          {children}
          <div className="modal-actions">
            <button onClick={onConfirm}>Confirm</button>
            <button onClick={onClose}>Cancel</button>
          </div>
        </div>
      </div>
    );
  };
  
  export default Modal;