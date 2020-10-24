import logo from './logo.svg';
import './App.css';

import Card from './Card';
import vacationSpots from './vacationSpots.js';

function App() {
  const location = vacationSpots.map(function(spot) {
    return (
      <Card place= {spot.place} price = {spot.price} timeToGo = {spot.timeToGo}/>
    )
  })
  return (
    <div className="App">
        {location}
    </div>
  );
}

export default App;
