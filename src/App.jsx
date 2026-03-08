import { useState } from 'react';
import CardView from './components/CardView';
import Controls from './components/Controls';
import deck from './data/deck';

function App() {
  const [index, setIndex] = useState(0);

  const goPrev = () => setIndex((i) => Math.max(0, i - 1));
  const goNext = () => setIndex((i) => Math.min(deck.length - 1, i + 1));

  return (
    <div className="app">
      <h1 className="title">WORLD QUIZ</h1>
      <p className="subtitle">Click a card to flip it!</p>

      <CardView key={index} card={deck[index]} />

      <Controls
        currentIndex={index}
        total={deck.length}
        onPrev={goPrev}
        onNext={goNext}
      />
    </div>
  );
}

export default App;
