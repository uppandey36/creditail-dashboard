import styled from 'styled-components'
import {COLORS} from '../../static/constants/utilsConstants.tsx'

export const SectionTopWrapper = styled.section`
    padding: 16px 32px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid ${COLORS.topTextColor};
    background: ${COLORS.white};

    .text-style {
        font-family: 'Work Sans', sans-serif;
        font-size: 20px;
        font-style: normal;
        font-weight: 600;
        line-height: 24px;
    }

    .section-name {
        color: ${COLORS.sectionNameColor};
    }

    .flex {
        display: flex;
    }

    .justify-center {
        justify-content: center;
    }

    .align-center {
        align-items: center;
    }

    .user-name {
        width: 40px;
        height: 40px;
        border-radius: 20px;
        background: ${COLORS.primaryColor};
        display: flex;
        justify-content: center;
        align-items: center;
        color: ${COLORS.white};
        font-weight: 500;
    }

    .user-organization {
        height: 36px;
        border: 1px solid ${COLORS.organizationBorder};
        border-radius: 6px;
        margin-right: 24px;
        display: flex;
    }

    .slv-container {
        color: ${COLORS.textBlack};
        padding: 0 12px;
        font-size: 16px;
    }

    .slv-image {
        width: 20px;
        height: 20px;
        margin-right: 8px;
    }

    .firm-container {
        background: ${COLORS.topTextColor};
        border-radius: 0 6px 6px 0;
        padding: 0 12px;
        font-size: 16px;
    }
`