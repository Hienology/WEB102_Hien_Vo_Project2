import { useState } from 'react'
import CardView from './components/CardView'
import Controls from './components/Controls'
import deck from './data/deck.json'
import './App.css'

export default function App() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isFlipped, setIsFlipped] = useState(false)

  function goTo(index) {
    setCurrentIndex(index)
    setIsFlipped(false)
  }

  function handlePrev() {
    if (currentIndex > 0) goTo(currentIndex - 1)
  }

  function handleNext() {
    if (currentIndex < deck.length - 1) goTo(currentIndex + 1)
  }

  function handleFlip() {
    setIsFlipped((f) => !f)
  }

  const card = deck[currentIndex]

  return (
    <div className="app">
      <header className="app-header">
        <h1 className="app-title">🌍 Geography Flashcards</h1>
        <p className="app-subtitle">Click a card to reveal the answer</p>
      </header>

      <main className="app-main">
        <CardView card={card} isFlipped={isFlipped} onFlip={handleFlip} />
        <Controls
          current={currentIndex}
          total={deck.length}
          onPrev={handlePrev}
          onNext={handleNext}
        />
      </main>
    </div>
  )
}
