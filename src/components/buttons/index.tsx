import React from 'react'
import {ButtonWraperOutline, ButtonWraperSolid} from './styles.tsx'
import {buttonInterface} from '../../interfaces/buttons'

export const ButtonOutline: React.FC<buttonInterface> = (props: buttonInterface) => {
    return(
        <ButtonWraperOutline onClick = {props.onClick}>
            {props.lable}
        </ButtonWraperOutline>
    )
}

export const ButtonSolid: React.FC<buttonInterface> = (props: buttonInterface) => {
    return(
        <ButtonWraperSolid onClick = {props.onClick}>
            {props.lable}
        </ButtonWraperSolid>
    )
}