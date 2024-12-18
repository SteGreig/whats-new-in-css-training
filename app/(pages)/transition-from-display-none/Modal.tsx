"use client";

import { useState } from "react";

const Modal = ({classes, btnText} : {classes?: string; btnText?: string;}) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleModal = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <button onClick={toggleModal} className="dark:text-indigo-900 px-4 py-2 rounded-full bg-indigo-200 font-sans inline-block self-start text-lg">{btnText || 'Toggle Modal'}</button>
      <div className={`${classes} modal-ss-demo ${isOpen && 'active'} fixed inset-1/3 rounded-2xl bg-indigo-100 shadow-2xl shadow-indigo-900/30 flex`}>
        <button onClick={toggleModal} className="dark:text-indigo-900 px-4 py-2 rounded-full bg-indigo-200 font-sans inline-block self-start text-lg m-auto">{btnText || 'Toggle Modal'}</button>
      </div>
    </>
  );
};

export default Modal;
