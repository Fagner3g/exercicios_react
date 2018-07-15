import React from 'react'
import ReactDom from 'react-dom'
// import {Primeiro, Segundo} from './component'
import SilvaFamily, { Segundo} from './silvaFamily'

// Todo componente em react pode ser uma function ou uma class

ReactDom.render(
    <div>
        <SilvaFamily/>
    </div>,
    document.getElementById('root')
)