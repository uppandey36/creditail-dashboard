import styled from 'styled-components'
import {COLORS} from '../../static/constants/utilsConstants.tsx'

export const SectionListWrapper = styled.section`
    margin-top: 24px;
    padding: 0 32px 0 32px;

    .label-block {
        color: ${COLORS.labelBlack};
        font-family: 'Work Sans', sans-serif;
        font-size: 16px;
        font-style: normal;
        font-weight: 600;
        line-height: 38px;
    }
    
    .cards-section {
        margin-top: 12px;
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;
    }
`

export const IndividualCardWrapper = styled.section`
    width: 45%;
    padding: 24px;
    display: flex;
    border: 1px solid ${COLORS.cardBorder};
    border-radius: 8px;
    box-shadow: 0px 1px 2px 0px ${COLORS.boxShadowColor};
    margin-bottom: 16px;

    .head-image {
        width: 20px;
        height: 20px;
        margin-right: 8px;
    }

    .text-style {
        color: ${COLORS.textBlack};
        font-family: 'Work Sans', sans-serif;
        font-size: 16px;
        font-style: normal;
        font-weight: 600;
        line-height: 24px;
    }

    .content-style {
        color: ${COLORS.contentText};
        font-weight: 500;
        line-height: 20px;
        margin: 8px 0 16px 0;
    }
`