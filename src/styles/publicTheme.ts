import { createTheme } from '@mui/material/styles'

import { pretendard } from '@/styles/fonts'

export const publicTheme = createTheme({
  typography: {
    fontFamily: pretendard.style.fontFamily
  }
})
