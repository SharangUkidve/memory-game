import About from './About';
import HowToPlay from './HowToPlay';

export interface HeaderProps {
  handleGameSizeSelection: any;
  size: number;
}

const Header: React.FunctionComponent<HeaderProps> = ({
  handleGameSizeSelection,
  size
}) => {
  const gameSizes = [4, 16, 24, 36];
  return (
    <header className='app-header'>
      <h1 className='app-title'>Memory Game</h1>
      <div className='game-options'>
        <About />
        <HowToPlay />
      </div>
      <div className='game-options'>
        {gameSizes.map(sz => (
          <button
            className={`game-option${size === sz / 2 ? ' active' : ''}`}
            key={sz}
            onClick={() => handleGameSizeSelection(sz / 2)}
          >
            {sz}
          </button>
        ))}
      </div>
    </header>
  );
};

export default Header;
