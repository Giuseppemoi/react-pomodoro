import React from 'react'
import {render} from 'react-dom'
import Timer from "./components/timer";

function App() {
    return (
        <div>
            <Timer />
        </div>
    )
}

render(<App />, document.getElementById('app'))