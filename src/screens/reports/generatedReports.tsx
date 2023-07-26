import React from 'react'
import {generatedReportsInterface} from '../../interfaces/cards'
import {tabelHeader} from '../../static/constants/componentsConstants.tsx'
import {GeneratedReportsWrapper} from '../styles.tsx'
import {strings} from '../../static/constants/strings.tsx'
import moment from 'moment'
import clock from '../../static/images/clock.png'

const GeneratedReports: React.FC<generatedReportsInterface[]> = ({reports}) =>{
    return(
        <GeneratedReportsWrapper>
            <div className='head-name'>
                {strings.latestReports}
            </div>
            <table>
                <tr className='first-row'>
                    {tabelHeader?.map((head:strings) => <th className='text-tabel'>{head}</th>)}
                </tr>
                {
                    reports?.map((report:generatedReportsInterface) => (
                        <tr key={report?.id}>
                            <td className='text-tabel'>
                                {report.name}
                            </td>
                            <td className='text-tabel'>
                                {`${moment(report?.dateRange?.startDate).format('MMMM DD, YYYY')} to ${moment(report?.dateRange?.endDate).format('MMMM DD, YYYY')}`}
                            </td>
                            <td className='text-tabel'>
                                {moment(report?.generatedAt).format('MMMM DD, hh:mm a')}
                            </td>
                            <td className='text-tabel'>{report?.brand}</td>
                            <td className='text-tabel'>
                                <img src={clock} alt = 'download' className='download-icon' />
                            </td>
                        </tr>
                    ))
                }
            </table>
        </GeneratedReportsWrapper>
    )
}

export default GeneratedReports