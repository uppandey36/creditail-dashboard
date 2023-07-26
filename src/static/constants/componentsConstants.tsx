import {strings} from './strings.tsx'
import homeIcon from '../images/homeIcon.png'
import collectionIcon from '../images/collectionIcon.png'
import reportsIcon from '../images/reportsIcon.png'

export const sidebarData = [
    {
        id: strings.home,
        name: strings.home,
        onSelectIcon: homeIcon,
        onNonSelectIcon: homeIcon,
        route: 'home'
    },
    {
        id: strings.collection,
        name: strings.collection,
        onSelectIcon: collectionIcon,
        onNonSelectIcon: collectionIcon,
        route: 'collections'
    },
    {
        id: strings.reports,
        name: strings.reports,
        onSelectIcon: reportsIcon,
        onNonSelectIcon: reportsIcon,
        route: ''
    }
]

export const collectionReportsList = [
    {
        id: '1',
        label: 'Payments collected',
        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris.'
    },
    {
        id: '2',
        label: 'Pending payments of Creditail- financed invoices',
        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris.'
    }
]

export const creditFinancingReportsList = [
    {
        id: '1',
        label: 'Financing by Creditail',
        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris.'
    },
]

export const tabelHeader = [
    'Report Name',
    'Date Range',
    'Date and Time',
    'Brand',
    'Download'
]