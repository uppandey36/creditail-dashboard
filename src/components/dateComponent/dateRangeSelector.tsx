import React from 'react'
import {DateWrapper} from './styles.tsx'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
import {dateRangeProp} from '../../interfaces/calender'

const DateRangeSelector: React.FC<dateRangeProp> = (props:dateRangeProp) =>{
    const onDateChange = (dates) =>{
        const [start,end] = dates
        props.onChange(start,end)
    }
    return(
        <DateWrapper>
            <DatePicker 
                maxDate={props.maxDate}
                minDate = {props.minDate}
                startDate = {props.startDate}
                endDate = {props.endDate}
                onChange={onDateChange}
                selectsStart
                selectsRange
                monthsShown={2}
                inline
            />  
        </DateWrapper>
    )
}
export default DateRangeSelector