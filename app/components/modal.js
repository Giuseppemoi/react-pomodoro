import React from 'react'

export default function Modal(props) {
    return (
        <div className="modal" id="modal">
            <div className="modalContainer">
                <p>Its time to have a break!</p>
                <button onClick={() => props.setModal(false)}>Close</button>
            </div>
        </div>
    )
}
