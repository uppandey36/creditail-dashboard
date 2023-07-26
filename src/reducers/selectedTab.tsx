import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import {sidebarCardStateInterface} from '../interfaces/cards.tsx'
import {strings} from '../static/constants/strings.tsx'
import reportsIcon from '../static/images/reportsIcon.png'

export const selectedTab = createSlice({
  name: 'selectedTab',
  initialState: {
    id: strings.reports,
    name: strings.reports,
    onSelectIcon: reportsIcon,
    onNonSelectIcon: reportsIcon,
    route: ''
  },
  reducers: {
    setTab: (state, action: PayloadAction<sidebarCardStateInterface>) => {
        return {
            ...action.payload
        }
    },
    resetTab: (state) => {
        return {}
    }
  },
})

// Action creators are generated for each case reducer function
export const { setTab,resetTab } = selectedTab.actions

export default selectedTab.reducer