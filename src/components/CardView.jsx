import './CardView.css'

const DIFFICULTY_LABEL = {
  easy: 'Easy',
  medium: 'Medium',
  hard: 'Hard',
}

function CardFace({ text, image, side }) {
  return (
    <div className={`card-face card-${side}`}>
      {image && (
        <img
          src={image}
          alt=""
          className="card-image"
          onError={(e) => { e.currentTarget.style.display = 'none' }}
        />
      )}
      {text && <p className="card-text">{text}</p>}
    </div>
  )
}

export default function CardView({ card, isFlipped, onFlip }) {
  const difficulty = card.category || 'easy'

  return (
    <div
      className={`card-container difficulty-${difficulty}`}
      onClick={onFlip}
      role="button"
      tabIndex={0}
      aria-label={isFlipped ? 'Card answer side. Click to flip back.' : 'Card question side. Click to flip.'}
      onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') onFlip() }}
    >
      <div className={`card-accent difficulty-accent-${difficulty}`} />
      <span className={`difficulty-badge difficulty-badge-${difficulty}`}>
        {DIFFICULTY_LABEL[difficulty] ?? difficulty}
      </span>
      <div className={`card-inner${isFlipped ? ' flipped' : ''}`}>
        <CardFace text={card.frontText} image={card.frontImage} side="front" />
        <CardFace text={card.backText} image={card.backImage} side="back" />
      </div>
    </div>
  )
}
