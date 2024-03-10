import { configureStore } from '@reduxjs/toolkit'
import themeReducer from './components/theme/slice'

export const store = configureStore({
  reducer: {
    theme: themeReducer,
  },
})