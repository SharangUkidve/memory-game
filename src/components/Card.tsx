import { MemoryCard } from '../shared/models/MemoryCard';

export interface CardProps {
  card: MemoryCard;
  onClick: any;
  open?: boolean;
  found?: boolean;
}

const Card: React.FunctionComponent<CardProps> = ({
  card,
  onClick,
  open,
  found
}) => {
  const klass = `card${open ? ' open' : ''}${found ? ' found open' : ''}`;
  return (
    <button
      className={klass}
      onClick={() => onClick(card)}
      disabled={found}
      aria-label={found || open ? card.title : 'Card'}
    >
      <div className='card-wrap' aria-hidden='true'>
        <div className='card-face front'>
          <img
            src={`${process.env.PUBLIC_URL}/assets/images/card-back-star.svg`}
            alt=''
            width='100%'
            height='100%'
            className='card-image'
          />
        </div>

        <div className='card-face back'>
          <img
            src={`${process.env.PUBLIC_URL}/assets/images/${card.value}.png`}
            alt=''
            width='100%'
            height='100%'
            className='card-image'
          />
          <div className='card-title'>{card.title}</div>
        </div>
      </div>
    </button>
  );
};

export default Card;
