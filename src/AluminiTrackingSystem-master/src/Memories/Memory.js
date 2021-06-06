import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';

import './memory.css'
import AddMemory from './AddMemory'

function Memory() {
    return (
        <div>
            <h1>Memories</h1>
            <AddMemory/>
            <br/>
            <AddMemory/>
            <br/>
            <AddMemory/>
        </div>
    )
}

export default Memory
