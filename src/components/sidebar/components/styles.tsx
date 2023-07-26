import styled from 'styled-components'
import {COLORS} from '../../../static/constants/utilsConstants.tsx'

export const IndividualTab = styled.section`
    display: flex;
    padding: 8px 12px;
    align-items: center;
    background-color: ${({selected}) => selected ? COLORS.selectedTabBackground : 'transparent'} ;
    cursor: pointer;

    .tab-icon {
       width: 24px;
       height: 24px;
    }

    .tab-name {
        margin-left: 12px;
        color: ${({selected}) => selected ? COLORS.white : COLORS.nonSelectedTabTextColor};
        font-family: 'Work Sans', sans-serif;
        font-size: 16px;
        font-style: normal;
        font-weight: 600;
        line-height: 24px;
    }
`