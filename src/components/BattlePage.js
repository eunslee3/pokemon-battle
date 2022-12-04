import React from 'react'

function BattlePage({startBtnValue, setStartBtnValue}) {
    return (
        <div>
            <div id="parent-start-button">
                <button onClick={() => setStartBtnValue(!startBtnValue)} className="button">Exit Battle</button>
            </div>
        </div>
    )
}

export default BattlePage