import { Fragment, useState } from 'react';
import Modal from './Modal';

const About: React.FunctionComponent = () => {
  const [show, setShow] = useState(false);

  const open = () => {
    setShow(!show);
  };

  const close = () => {
    setShow(false);
  };
  return (
    <Fragment>
      <button className='icon-button game-option' onClick={() => open()}>
        i
      </button>
      <Modal show={show} onClose={close} className='about'>
        <h1 className='modal-title'>About</h1>
        <div className='modal-row'>
          Images from{' '}
          <a
            href='https://iconscout.com/icons/star'
            target='_blank'
            rel='noopener noreferrer'
            className='link'
          >
            IconScout
          </a>{' '}
          and{' '}
          <a
            href='https://pngegg.com'
            target='_blank'
            rel='noopener noreferrer'
            className='link'
          >
            PngEgg (Card Foregrounds)
          </a>
        </div>
        <div className='modal-row'>
          Fonts from{' '}
          <a
            href='https://fonts.google.com'
            target='_blank'
            rel='noopener noreferrer'
            className='link'
          >
            Google Fonts
          </a>
        </div>
      </Modal>
    </Fragment>
  );
};

export default About;
