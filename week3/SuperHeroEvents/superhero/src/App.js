import logo from './logo.svg';
import './App.css';

import data from './data.json'
import SuperHero from './SuperHero'

function App() {
  const superHero = data.map(hero => <SuperHero name={hero.name} show={hero.show} imageName={hero.imageName} catchPhrase={hero.catchPhrase}/>)
  return (
    <div className="App">
      {superHero}
    </div>
  );
}

export default App;
