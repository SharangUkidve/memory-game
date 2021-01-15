import { Fragment, useCallback, useEffect, useState } from 'react';
import Card from '../components/Card';
import { MemoryCard, MemoryDeck } from '../shared/models/MemoryCard';
import { shuffle } from '../shared/utils/array.utils';
import '../Card.scss';
import '../Game.scss';
import WinModal from '../components/WinModal';

export interface GameProps {
  cards: MemoryDeck;
  size: number;
}

const Game: React.FunctionComponent<GameProps> = props => {
  const [cards, setCards] = useState<MemoryDeck>([]);
  const [foundCards, setFoundCards] = useState<string[]>([]);
  const [card1, setCard1] = useState<MemoryCard | null>(null);
  const [card2, setCard2] = useState<MemoryCard | null>(null);
  const [score, setScore] = useState(0);
  const [moves, setMoves] = useState(0);
  const [showWinModal, setShowWinModal] = useState(false);

  const resetCards = () => {
    setCard1(null);
    setCard2(null);
  };

  const resetGame = useCallback(() => {
    resetCards();
    setScore(0);
    setMoves(0);
    setFoundCards([]);
    setShowWinModal(false);
    setCards([]);
    setTimeout(() => {
      const shuffledCards = shuffle(props.cards).slice(0, props.size);
      const ogCards = shuffledCards.map(card => ({
        ...card,
        k: card.value
      }));
      const dupeCards = shuffledCards.map(card => ({
        ...card,
        k: card.value + '2'
      }));
      setCards(shuffle([...ogCards, ...dupeCards]));
    }, 500);
  }, [props.cards, props.size]);

  const isCardOpen = (card: MemoryCard) => {
    return card1?.k === card?.k || card2?.k === card.k;
  };

  const isCardFound = (card: MemoryCard) => {
    return foundCards.includes(card.value);
  };

  const handleCardClick = (card: MemoryCard) => {
    if (foundCards.includes(card.value)) {
      return;
    }
    if (card1 === card) {
      setCard1(null);
      return;
    }
    if (card2 === card) {
      setCard2(null);
      return;
    }

    if (!card1) {
      setCard1(card);
    } else if (!card2) {
      setCard2(card);
    }
  };

  useEffect(() => {
    resetGame();
  }, [props.cards, props.size, resetGame]);

  useEffect(() => {
    resetCards();
    if (foundCards.length === props.size) {
      setTimeout(() => {
        setShowWinModal(true);
      }, 1000);
    }
  }, [foundCards, props.size]);

  useEffect(() => {
    if (card1 && card2) {
      setMoves(m => m + 1);
      if (card1.value === card2.value) {
        setFoundCards(fc => [...fc, card1.value]);
        setScore(sc => sc + 10);
      } else {
        setTimeout(() => {
          resetCards();
        }, 1000);
      }
    }
  }, [card1, card2]);

  return (
    <div className='app-game'>
      {cards.length ? (
        <Fragment>
          <div className='stats'>
            <div className='stat'>Score: {score}</div>
            <div className='stat'>Moves: {moves}</div>
          </div>

          <div className={`cards sz-${props.size * 2}`}>
            {cards.map(card => (
              <Card
                card={card}
                key={card.k}
                onClick={handleCardClick}
                open={!!isCardOpen(card)}
                found={isCardFound(card)}
              />
            ))}
          </div>
        </Fragment>
      ) : (
        <div className='loading'>Loading...</div>
      )}
      <WinModal
        show={showWinModal}
        onClose={resetGame}
        playAgain={resetGame}
        score={score}
        moves={moves}
      />
    </div>
  );
};

export default Game;
