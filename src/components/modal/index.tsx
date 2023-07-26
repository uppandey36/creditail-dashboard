import React from 'react'
import {ModatWrapper} from './styles.tsx'

const Modal = (props) => {
    if(!props.showModal) return null
    return(
        <ModatWrapper>
            {props.children}
        </ModatWrapper>
    )
}

export default Modal