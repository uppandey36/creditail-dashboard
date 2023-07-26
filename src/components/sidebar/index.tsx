import React from 'react'
import {sidebarData} from '../../static/constants/componentsConstants.tsx'
import {SiderBarContainer,TabsContainer} from './styles.tsx'
import Logo from '../../static/images/logoText.png'
import TabCard from './components/tabCard.tsx'
import {sidebarCardInterface} from '../../interfaces/cards.tsx'
import {useNavigate} from 'react-router-dom'
import {useDispatch} from 'react-redux'
import {setTab} from '../../reducers/selectedTab.tsx'

const Sidebar = () =>{
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const navigateTab = (item:sidebarCardInterface ) =>{
        dispatch(setTab(item))
        navigate(`/${item.route}`)
    }
    return(
        <SiderBarContainer>
            <img src={Logo} className = 'sidebar-logo' />
            <TabsContainer>
                {
                    sidebarData?.map((tab: sidebarCardInterface) => <TabCard {...tab} onClick = {navigateTab} />)
                }
            </TabsContainer>
        </SiderBarContainer>
    )
}

export default Sidebar