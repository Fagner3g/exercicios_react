import React from 'react'
import ReactDom from 'react-dom'
// import {Primeiro, Segundo} from './component'
import Primeiro, { Segundo} from './component'

// Todo componente em react pode ser uma function ou uma class

ReactDom.render(
    <div>
        <Primeiro />
        <Segundo />
    </div>,
    document.getElementById('root')
)