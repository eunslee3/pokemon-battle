import React, {useState} from 'react'
import './index.css'
import StartPage from './components/StartPage'
import BattlePage from './components/BattlePage'

function App() {
  const [selectedPokemon, setSelectedPokemon] = useState('')
  const [startBtnValue, setStartBtnValue] = useState(false)

  console.log(startBtnValue)

  return (
    <div >
      {startBtnValue ? <BattlePage setStartBtnValue={setStartBtnValue} startBtnValue={startBtnValue} /> : <StartPage startBtnValue={startBtnValue} setStartBtnValue={setStartBtnValue} setSelectedPokemon={setSelectedPokemon}/>}
    </div>
  );
}

export default App;
