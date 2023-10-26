import React, {useContext} from 'react';

import Toast from '../Toast';
import styles from './ToastShelf.module.css';
import {ToastContext} from '../ToastProvider';

function ToastShelf() {
  const toastContext = useContext(ToastContext);

  return (
    <ol className={styles.wrapper}>
      {toastContext.messages.map((toast, index) => (
        <li key={index} className={styles.toastWrapper}>
          <Toast variant={toast.variant} onClose={() => toastContext.removeToast(index)}>{toast.message}</Toast>
        </li>
      ))}
    </ol>
  );
}

export default ToastShelf;
