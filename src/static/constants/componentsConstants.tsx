import {strings} from './strings'
import homeIcon from '../images/homeIcon.png'
import collectionIcon from '../images/collectionIcon.png'
import reportsIcon from '../images/reportsIcon.png'

export const sidebarData = [
    {
        name: strings.home,
        onSelectIcon: homeIcon,
        onNonSelectIcon: homeIcon,
        route: '/home'
    },
    {
        name: strings.collection,
        onSelectIcon: collectionIcon,
        onNonSelectIcon: collectionIcon,
        route: '/collections'
    },
    {
        name: strings.reports,
        onSelectIcon: reportsIcon,
        onNonSelectIcon: reportsIcon,
        route: '/reports'
    }
]