/** @format */

import CustomButton from './CustomButton';
import style from './subscribeModal.module.scss'; // Import the CSS for styling
import close from '../../assets/icons/close.svg';
import { useState } from 'react';

const SubscribeModal = ({ isOpen, onClose, onConfirm, title, children }) => {
  const [userData, setUserData] = useState({ name: '', email: '' });
  if (!isOpen) return null; // Do not render if the modal is closed
  const handleinput = (e) => {
    const { name, value } = e.target;
    setUserData((prev) => ({ ...prev, [name]: value }));
  };
  return (
    <div className={style.modalBackdrop}>
      <div className={style.modalContent}>
        <img
          src={close}
          alt="cross-icon"
          className={style.closeIcon}
          onClick={onClose}
        />
        <h6 className={style.title}>Wait! Before You Go...</h6>
        <p className={style.text}>
          We’d hate to see you leave. Before you go, why not take a moment to
          share your thoughts or get something useful?
        </p>
        <input
          type="text"
          placeholder="Enter full name"
          className={style.inputField}
          name="name"
          value={userData.name}
          onChange={handleinput}
        />
        <input
          type="email"
          placeholder="Enter email"
          className={style.inputField}
          name="email"
          value={userData.email}
          onChange={handleinput}
        />
        <div className={style.btnContainer}>
          <CustomButton title={'GET STARTED'} customeStyle={{ width: '90%' }} />
          <button className={style.secondaryBtn}>No Thanks</button>
        </div>
        {/* <div className={style.modalHeader}>
          <h2 className={style.modalTitle}>{title}</h2>
          <button className={style.closeBtn} onClick={onClose}>
            &times;
          </button>
        </div>
        <div className={style.modalBody}>{children}</div>
        <div className={style.modalActions}>
          <button
            className={[style.modalBtn, style.confirmBtn]}
            onClick={onConfirm}
          >
            Confirm
          </button>
          <button
            className={(style.modalBtn, style.cancelBtn)}
            onClick={onClose}
          >
            Cancel
          </button> 
        </div>*/}
      </div>
    </div>
  );
};

export default SubscribeModal;
