import React from 'react'
import {generteReportsCardPropsTemplate} from '../../interfaces/cards'
import {IndividualCardWrapper} from './styles.tsx'
import {ButtonOutline} from '../buttons/index.tsx'
import headingImage from '../../static/images/headingTop.png'
import {strings} from '../../static/constants/strings.tsx'

const IndividualSectionCard: React.FC<generteReportsCardPropsTemplate> = (props:generteReportsCardPropsTemplate) => {
    const onGenerateClick = () => {
        console.log('checkData+++',props.id)
        props.onClick({
            id: props.id,
            label: props.label,
            content: props.content
        })
    }
    return(
        <IndividualCardWrapper>
            <img src = {headingImage} alt = 'head image' className='head-image' />
            <div>
                <div className='text-style'>
                    {props.label}
                </div>
                <div className='content-style'>
                    {props.content}
                </div>
                <ButtonOutline 
                    lable={strings.generateReports}
                    onClick = {onGenerateClick}
                />
            </div>
        </IndividualCardWrapper>
    )
}

export default IndividualSectionCard