import React, {useState} from 'react'
import StartPagePokemons from './StartPagePokemons'
import SelectedPokemon from './SelectedPokemon'

function StartPage({setSelectedPokemon, setStartBtnValue, startBtnValue}) {
    const [showBlastoise, setShowBlastoise] = useState(false)
    const [showVenusaur, setShowVenusaur] = useState(false)
    const [showCharzard, setShowCharzard] = useState(false)

    return (
        <div id="start-menu-outline">
            <header className="start-title"><strong>Choose Your Pokemon!</strong></header>
            <StartPagePokemons 
                showBlastoise={showBlastoise}
                setShowBlastoise={setShowBlastoise}
                showVenusaur={showVenusaur}
                setShowVenusaur={setShowVenusaur}
                showCharzard={showCharzard}
                setShowCharzard={setShowCharzard}
            />
            <SelectedPokemon 
                showBlastoise={showBlastoise}
                showVenusaur={showVenusaur}
                showCharzard={showCharzard}
                setSelectedPokemon={setSelectedPokemon}
            />
            <div id="parent-start-button">
                <button onClick={() => setStartBtnValue(!startBtnValue)} className="button">Start Battle!</button>
            </div>
        </div>
    )
}

export default StartPage