import React from 'react';

import Button from '../Button';

import styles from './ToastPlayground.module.css';
import Toast from '../Toast';
import ToastShelf from '../ToastShelf';

const VARIANT_OPTIONS = ['notice', 'warning', 'success', 'error'];

function ToastPlayground() {
  const [variant, setVariant] = React.useState('notice');
  const [messageText, setMessageText] = React.useState();
  const [toasts, setToasts] = React.useState([]);

  return (
    <div className={styles.wrapper}>
      <header>
        <img alt="Cute toast mascot" src="/toast.png" />
        <h1>Toast Playground</h1>
      </header>

      {/*{showToast && <Toast variant={variant} onClose={() => setShowToast(false)}>{messageText}</Toast>}*/}
      <form onSubmit={e => e.preventDefault()}>
        <ToastShelf toasts={toasts} removeToast={indexToRemove => {
          const newToasts = [...toasts];
          newToasts.splice(indexToRemove, 1);
          setToasts(newToasts);
        }} />

        <div className={styles.controlsWrapper}>
          <div className={styles.row}>
            <label
              htmlFor="message"
              className={styles.label}
              style={{ alignSelf: 'baseline' }}
            >
              Message
            </label>
            <div className={styles.inputWrapper}>
              <textarea id="message" className={styles.messageInput} value={messageText} onChange={e => setMessageText(e.target.value)} />
            </div>
          </div>

          <div className={styles.row}>
            <div className={styles.label}>Variant</div>
            <div
              className={`${styles.inputWrapper} ${styles.radioWrapper}`}
            >
              {VARIANT_OPTIONS.map(option => (
                <label key={option} htmlFor={`variant-${option}`}>
                  <input
                    id={`variant-${option}`}
                    type="radio"
                    name="variant"
                    onClick={() => setVariant(option)}
                    value={option}
                    readOnly={true}
                    checked={variant === option}
                  />
                  {option}
                </label>
              ))
              }
            </div>
          </div>

          <div className={styles.row}>
            <div className={styles.label} />
            <div
              className={`${styles.inputWrapper} ${styles.radioWrapper}`}
            >
              <Button onClick={event => {
                event.preventDefault();

                setToasts([...toasts, {variant, message: messageText}]);
                setMessageText('');
                setVariant('notice');
              }}>Pop Toast!</Button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}

export default ToastPlayground;
