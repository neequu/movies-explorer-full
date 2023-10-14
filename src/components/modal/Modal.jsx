import { useEffect } from 'react';
import { createPortal } from 'react-dom';

function Modal({ active, changeActive, children }) {
  useEffect(() => {
    if (!active) return;

    const closeByEscape = (e) => (e.key === 'Escape' ? changeActive() : '');

    document.addEventListener('keydown', closeByEscape);
    return () => document.removeEventListener('keydown', closeByEscape);
  }, [active]);

  const handleOverlayClick = (e) =>
    e.target === e.currentTarget ? changeActive() : '';

  return createPortal(
    <div
      onClick={handleOverlayClick}
      className={`modal ${active ? 'modal_active' : ''}`}>
      {children}
    </div>,
    document.body
  );
}

export default Modal;
