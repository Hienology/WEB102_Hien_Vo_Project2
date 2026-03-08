import { useState } from 'react';

const CATEGORY_COLORS = {
  easy: '#22c55e',
  medium: '#eab308',
  hard: '#ef4444',
};

function CardView({ card }) {
  const [flipped, setFlipped] = useState(false);
  const [imgErrors, setImgErrors] = useState({});

  const accent = CATEGORY_COLORS[card.category] || '#888';

  const handleFlip = () => setFlipped((f) => !f);

  const handleImgError = (key) => {
    setImgErrors((prev) => ({ ...prev, [key]: true }));
  };

  // Reset flip & image errors when card identity changes
  const cardKey = card.frontText + card.backText;

  const showFrontImage = card.frontImage && !imgErrors[card.frontImage];
  const showBackImage = card.backImage && !imgErrors[card.backImage];

  return (
    <div className="card-scene" onClick={handleFlip} key={cardKey}>
      <div className={`card ${flipped ? 'is-flipped' : ''}`}>
        {/* ---- Front ---- */}
        <div
          className={`card-face card-front ${showFrontImage ? 'has-image' : ''}`}
          style={{ borderTopColor: accent }}
        >
          <span className="badge" style={{ backgroundColor: accent }}>
            {card.category}
          </span>
          {showFrontImage && (
            <img
              className="card-img"
              src={card.frontImage}
              alt=""
              onError={() => handleImgError(card.frontImage)}
            />
          )}
          <div className={`card-text ${showFrontImage ? 'with-image' : ''}`}>
            {card.frontText}
          </div>
        </div>

        <div
          className={`card-face card-back ${showBackImage ? 'has-image' : ''}`}
          style={{ borderTopColor: accent }}
        >
          <span className="badge" style={{ backgroundColor: accent }}>
            {card.category}
          </span>
          {showBackImage && (
            <img
              className="card-img"
              src={card.backImage}
              alt=""
              onError={() => handleImgError(card.backImage)}
            />
          )}
          <div className={`card-text ${showBackImage ? 'with-image' : ''}`}>
            {card.backText}
          </div>
        </div>
      </div>
    </div>
  );
}

export default CardView;
