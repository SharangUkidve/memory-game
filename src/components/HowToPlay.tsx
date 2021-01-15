import { Fragment, useState } from 'react';
import Modal from './Modal';

const HowToPlay: React.FunctionComponent = () => {
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
        ?
      </button>
      <Modal show={show} onClose={close} className='how-to-play'>
        <h1 className='modal-title'>How To Play?</h1>
        <div className='modal-row'>Choose from 4 to 36 cards to play with!</div>
        <div className='modal-row'>
          Try finding matches by remembering positions of the card.
        </div>
        <div className='modal-row'>Each pair opened adds 1 move.</div>
        <div className='modal-row'>
          Each correct pair opened gives you 10 points!
        </div>
      </Modal>
    </Fragment>
  );
};

export default HowToPlay;
