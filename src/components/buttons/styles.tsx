import styled from 'styled-components'
import {COLORS} from '../../static/constants/utilsConstants.tsx'

export const ButtonWraperOutline = styled.button`
    padding: 10px 16px;
    border-radius: 8px;
    background: ${COLORS.white};
    box-shadow: 0px 1px 2px 0px ${COLORS.boxShadowColor};
    font-size: 14px;
    font-style: normal;
    font-weight: 600;
    line-height: 20px;
    border: 1px solid ${COLORS.primaryColor};
    color: ${COLORS.primaryColor};
`

export const ButtonWraperSolid = styled.button`
    padding: 10px 16px;
    border-radius: 8px;
    background: ${COLORS.primaryColor};
    box-shadow: 0px 1px 2px 0px ${COLORS.boxShadowColor};
    font-size: 14px;
    font-style: normal;
    font-weight: 600;
    line-height: 20px;
    border: 0px solid ${COLORS.primaryColor};
    color: ${COLORS.white};
`