import { Fragment, KeyboardEvent, useRef } from 'react';
import ReactDOM from 'react-dom';
import '../Modal.scss';
import { ReactComponent as Close } from '../assets/images/close.svg';

export interface ModalProps {
  show: boolean;
  onClose: any;
  className?: string;
}

const Modal: React.FunctionComponent<ModalProps> = ({
  show,
  onClose,
  className,
  children
}) => {
  const focusAnchor = useRef<HTMLDivElement>(null);
  if (show) {
    setTimeout(() => {
      focusAnchor.current?.focus();
    }, 100);
  }

  const close = () => {
    onClose();
  };

  const handleKeydown = (e: KeyboardEvent<HTMLDivElement>) => {
    if (e.key === 'Escape') {
      close();
    }
  };

  return show
    ? ReactDOM.createPortal(
        <Fragment>
          <div
            className='modal-overlay'
            onClick={close}
            role='presentation'
          ></div>
          <div className='modal-backdrop'>
            <div
              className={`modal${className ? ' ' + className : ''}`}
              role='dialog'
              onKeyDown={handleKeydown}
            >
              <div
                ref={focusAnchor}
                tabIndex={-1}
                className='focus-anchor v-hide'
              ></div>
              <button className='modal-close' onClick={close}>
                <Close />
              </button>
              {children}
            </div>
          </div>
        </Fragment>,
        document.body
      )
    : null;
};

export default Modal;
