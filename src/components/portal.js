import React from 'react'
import ReactDOM from 'react-dom';

const Portal = () => ReactDOM.createPortal(

    <h4>Portal added to outside Reactjs App container</h4>,
    document.getElementById('portal-root')
)

export default Portal;