import React, {useState} from 'react'
import './index.css'
import ChoosePokemon from './components/ChoosePokemon'

function App() {
  const [selectPokemon, setSelectPokemon] = useState('')

  return (
    <div >
      <ChoosePokemon setSelectPokemon={setSelectPokemon}/>
    </div>
  );
}

export default App;
