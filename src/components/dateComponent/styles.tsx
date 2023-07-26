import styled from 'styled-components'
import {COLORS} from '../../static/constants/utilsConstants.tsx'

export const DateWrapper = styled.div`
    border: 1px solid ${COLORS.docBorder};
    display: flex;

    .react-datepicker {
        width: 49%;
        border: 0px;
        display: flex;
        border-right: 1px solid ${COLORS.docBorder};
    }
    .react-datepicker__month-container {
        width: 100%;
    }
    .react-datepicker__day-name {
        color: ${COLORS.calenderDateText};
        text-align: center;
        font-family: 'Work Sans', sans-serif;
        font-size: 14px;
        font-style: normal;
        font-weight: 500;
        line-height: 38px;
        width: 40px;
        height: 40px;
    }
    .react-datepicker__day-names,
    .react-datepicker__header,
    .react-datepicker__day-months {
        background: ${COLORS.white};
    }

    .react-datepicker__day {
        color: ${COLORS.calenderDateText};
        text-align: center;
        font-family: 'Work Sans', sans-serif;
        font-size: 14px;
        font-style: normal;
        font-weight: 400;
        line-height: 38px;
        width: 40px;
        height: 40px;
        border-radius: 20px;
    }

    .react-datepicker__day--in-range {
        background: ${COLORS.rangeDate};
    }

    .react-datepicker__day--outside-month {
        background: transparent;
        color: ${COLORS.white};
    }

    .react-datepicker__current-month {
        color: ${COLORS.calenderDateText};
        text-align: center;
        font-family: 'Work Sans', sans-serif;
        font-size: 16px;
        font-style: normal;
        font-weight: 600;
        line-height: 24px;
        background: transparent;
    }

    .react-datepicker__day--disabled {
        color: ${COLORS.disableDate};
    }

    .react-datepicker__day--keyboard-selected {
        color: ${COLORS.white};
        background: ${COLORS.primaryColor};
    }
`