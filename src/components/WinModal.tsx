import Modal from './Modal';

export interface WinModalProps {
  show: boolean;
  onClose: any;
  playAgain: any;
  score: number;
  moves: number;
}

const WinModal: React.FunctionComponent<WinModalProps> = ({
  show,
  onClose,
  playAgain,
  score,
  moves
}) => {
  return (
    <Modal show={show} onClose={onClose} className={'win-modal'}>
      <h1 className='modal-title'>Congratulations!!</h1>
      <div className='modal-row'>
        Moves: <span>{moves}</span>
      </div>
      <div className='modal-row'>
        Score: <span>{score}</span>
      </div>
      <button className='play-again' onClick={() => playAgain()}>
        Play Again
      </button>
    </Modal>
  );
};

export default WinModal;
