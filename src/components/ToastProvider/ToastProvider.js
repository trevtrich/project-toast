import React from 'react';

export const ToastContext = React.createContext({messages: [], removeToast: () => {}, addToasts: () => {}});

export function ToastProvider({children}) {
  const [toasts, setToasts] = React.useState([]);

  function addToast(message, variant) {
    const newToasts = [...toasts];
    newToasts.push({message, variant});
    setToasts(newToasts);
  }

  function removeToast(indexToRemove) {
    const newToasts = [...toasts];
    newToasts.splice(indexToRemove, 1);
    setToasts(newToasts);
  }

  return <ToastContext.Provider value={{messages: toasts, addToast, removeToast}}>
    {children}
  </ToastContext.Provider>;
}
