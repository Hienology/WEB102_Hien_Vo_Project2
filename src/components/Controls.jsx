import './Controls.css'

export default function Controls({ current, total, onPrev, onNext }) {
  return (
    <div className="controls">
      <button
        className="ctrl-btn"
        onClick={onPrev}
        disabled={current === 0}
        aria-label="Previous card"
      >
        ← Prev
      </button>

      <span className="ctrl-counter" aria-live="polite" aria-atomic="true">
        {current + 1} / {total}
      </span>

      <button
        className="ctrl-btn"
        onClick={onNext}
        disabled={current === total - 1}
        aria-label="Next card"
      >
        Next →
      </button>
    </div>
  )
}
