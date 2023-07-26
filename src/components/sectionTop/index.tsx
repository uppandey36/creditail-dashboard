import React from 'react'
import { useSelector } from 'react-redux'
import {SectionTopWrapper} from './styles.tsx'
import slvName from '../../static/images/slvName.png'
import {strings} from '../../static/constants/strings.tsx'

const SectionTop: React.FC = () => {
    const {selectedTab} = useSelector(state=> state)
    return(
        <SectionTopWrapper>
            <span className='text-style section-name'>{selectedTab.name}</span>
            <section className='flex align-center'>
                <section className='flex user-organization'>
                    <div className='flex justify-center align-center text-style slv-container'>
                        <img src={slvName} alt = 'slv name' className='slv-image'/>
                        {strings.slvDistributors}
                    </div>
                    <div className='flex justify-center align-center text-style firm-container'>
                        {/* <img src={slvName} alt = 'slv name' className='slv-image'/> */}
                        {strings.firmABC}
                    </div>
                </section>
                <section className='text-style flex justify-center align-center user-name' >
                    AM
                </section>
            </section>
        </SectionTopWrapper>
    )
}

export default SectionTop