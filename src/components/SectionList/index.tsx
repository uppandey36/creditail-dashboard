import React from 'react'
import {SectionListWrapper} from './styles.tsx'
import {reportCardsContainerPropInterface, generteReportsCardTemplate} from '../../interfaces/cards'
import IndividualCard from './IndividualCard.tsx'

const SectionList: React.FC<reportCardsContainerPropInterface> = (props:reportCardsContainerPropInterface) => {
    const onGenerate = (item:generteReportsCardTemplate) =>{
        props.onClick(item)
    }
    return(
        <SectionListWrapper>
            <div className='label-block'>
                {props.label}
            </div>
            <div className='cards-section'>
                {
                    props?.values?.map((individual:generteReportsCardTemplate)=> <IndividualCard key={individual?.id} {...individual} onClick = {onGenerate} />)
                }
            </div>
        </SectionListWrapper>
    )
}

export default SectionList