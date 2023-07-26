import React, {useEffect, useState} from 'react'
import {MainSection, ModalChildWrapper} from '../styles.tsx'
import {collectionReportsList, creditFinancingReportsList} from '../../static/constants/componentsConstants.tsx'
import {generteReportsCardTemplate, reportCardsContainerInterface, dateRangeInterface, generatedReportsInterface} from '../../interfaces/cards'
import SectionList from '../../components/SectionList/index.tsx'
import Modal from '../../components/modal/index.tsx'
import {strings} from '../../static/constants/strings.tsx'
import docIcon from '../../static/images/docIcon.png'
import closeButton from '../../static/images/closeButton.png'
import {ButtonOutline,ButtonSolid } from '../../components/buttons/index.tsx'
import DateRangeSelector from '../../components/dateComponent/dateRangeSelector.tsx'
import moment from 'moment'
import GeneratedReports from './generatedReports.tsx'

const Reports:React.FC = () =>{
    const [allAvailableReports,setAllAvailableReports] = useState<reportCardsContainerInterface[]>()
    const [generatedReports,setGeneratedReports] = useState<generatedReportsInterface[]>([])
    const [showModal,setShowModal] = useState<Boolean>(false)
    const [dateRange,setDateRange] = useState<dateRangeInterface>()

    useEffect(()=>{
        const reportsAvailable = [
            {
                id: '1',
                label: 'Collection Reports',
                values: collectionReportsList
            },
            {
                id: '2',
                label: 'Credit Financing Reports',
                values: creditFinancingReportsList
            }
        ]
        setAllAvailableReports(reportsAvailable)
    },[])

    const onGenerateReportClick = (report: generteReportsCardTemplate) => {
        console.log('checkData+++',report)
        setShowModal(true)
    }

    const closeModal = () =>{
        setShowModal(false)
    }

    const onDateChange = (start: Date,end: Date) => {
        console.log('check+++',start,end)
        setDateRange({
            startDate: start,
            endDate: end
        })
    }

    const onGenerateReport = () =>{
        const currentReport = {
            id: generatedReports.length.toString(),
            name: 'Report_lorem_Ipsum',
            dateRange: dateRange,
            generatedAt: new Date(),
            brand: 'Cadbury'
        }
        const reports = [...generatedReports, currentReport]
        setGeneratedReports(reports)
        closeModal()
    }

    return(
        <>
       <MainSection>
            {
                allAvailableReports?.map(section => <SectionList key={section.id} {...section} onClick = {onGenerateReportClick} />)
            }
            {generatedReports.length > 0 && <GeneratedReports reports = {generatedReports} />}
       </MainSection>
       <Modal showModal = {showModal}>
           <ModalChildWrapper>
                <div className='flex align-center pd24'>
                    <img src={docIcon} alt = 'doc' className='doc-icon' />
                    <section className='heder-section'>
                        <div className='flex justify-between align-center'>
                            <span className='doc-header'>{strings.generateReports}</span>
                            <img src={closeButton} alt = 'close' className='close-button' onClick={closeModal} />
                        </div>
                        <span className='doc-description'>{strings.generateReportForPayment}</span>
                    </section>
                </div>
                <div>
                    <DateRangeSelector 
                        onChange={onDateChange}
                        startDate = {dateRange?.startDate}
                        endDate = {dateRange?.endDate}
                    />
                    { dateRange &&
                    <div className='flex justify-center align-center pd16 doc-description'>
                        <div className='flex border pd1014'>
                            <div className='flex align-center border-right ph14'>
                                {moment(dateRange?.startDate).format('MMM DD, YYYY')}
                            </div>
                            <div className='flex align-center ph14'>
                                8:00 AM
                            </div>
                        </div>
                        <span> - </span>
                        <div className='flex border pd1014'>
                            <div className='flex align-center border-right ph14'>
                                {moment(dateRange?.endDate).format('MMM DD, YYYY')}
                            </div>
                            <div className='flex align-center ph14'>
                                10:00 PM
                            </div>
                        </div>
                    </div>}
                </div>
                <div className='flex justify-between align-center pd16'>
                    <ButtonOutline 
                        lable={strings.cancel}
                        onClick = {closeModal}
                    />
                    <ButtonSolid 
                        lable={strings.generateReports}
                        onClick = {onGenerateReport}
                    />
                </div>
           </ModalChildWrapper>
       </Modal>
       </>
    )
}

export default Reports