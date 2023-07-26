import { configureStore } from '@reduxjs/toolkit'
import selectedTab from './reducers/selectedTab.tsx'

export const store = configureStore({
  reducer: {
      selectedTab
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch