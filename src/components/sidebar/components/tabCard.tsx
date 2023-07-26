import React from 'react'
import {sidebarCardInterface} from '../../../interfaces/cards.tsx'
import {IndividualTab} from './styles.tsx'
import { useSelector } from 'react-redux'

const TabCard: React.FC<sidebarCardInterface> = (props: sidebarCardInterface) => {
    const { selectedTab } = useSelector(state => state)
    const selected = props?.route === selectedTab?.route ? true : false

    const onCardClick = () => {
        props.onClick({
            name: props.name,
            route: props.route,
            onSelectIcon: props.onSelectIcon,
            onNonSelectIcon: props.onNonSelectIcon,
        })
    }
    return(
        <IndividualTab selected = {selected} onClick = {() => selected ? null : onCardClick()}>
            <img src={props.onSelectIcon} alt = {props.name} className = 'tab-icon' />
            <span className='tab-name'>{props.name}</span>
        </IndividualTab>
    )
}

export default TabCard