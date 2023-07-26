import styled from 'styled-components'
import {COLORS} from '../../static/constants/utilsConstants.tsx'

export const ModatWrapper = styled.div`
    position: absolute;
    width: 100%;
    height: 100vh;
    left: 0;
    top: 0;
    z-index: 10;
    display: flex;
    justify-content: center;
    align-items: center;
    background: ${COLORS.modalBackground};
    opacity: .9;
    overflow-y: scroll;
`