import React, {useState} from 'react'
import {render} from 'react-dom'
import Timer from "./components/timer";
import Modal from "./components/modal";

function App() {
    const [modal, setModal] = useState(false)

    return (
        <div>
            <Timer setModal={setModal} />
            {modal && <Modal setModal={setModal} />}
        </div>
    )
}

render(<App />, document.getElementById('app'))