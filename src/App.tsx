import './App.scss';
import Game from './views/Game';
import { fruits } from './shared/constants/fruits';
import { Fragment, useState } from 'react';
import Header from './components/Header';

function App() {
  const [size, setSize] = useState(
    parseInt(localStorage.getItem('gameSize') || '18', 10)
  );
  const handleGameSizeSelection = (sz: number) => {
    localStorage.setItem('gameSize', `${sz}`);
    setSize(sz);
  };
  return (
    <Fragment>
      <Header handleGameSizeSelection={handleGameSizeSelection} size={size} />
      <Game cards={fruits} size={size}></Game>
    </Fragment>
  );
}

export default App;
