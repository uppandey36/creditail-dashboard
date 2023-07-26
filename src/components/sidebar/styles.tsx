import styled from 'styled-components'
import {COLORS} from '../../static/constants/utilsConstants.tsx'

export const SiderBarContainer = styled.div`
    width: 280px;
    height: 100vh;
    background: ${COLORS.sidebarBackground};

    .sidebar-logo {
        height: 35px;
        width: 134px;
        padding: 16px 24px;
        margin: 16px 0 24px 0;
    }
`

export const TabsContainer = styled.div`
    padding: 0 16px 16px 16px;
`