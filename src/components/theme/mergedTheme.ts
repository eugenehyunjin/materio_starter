/*
 * We recommend using the merged theme if you want to override our core theme.
 * This means you can use our core theme and override it with your own customizations.
 * Write your overrides in the userTheme object in this file.
 * The userTheme object is merged with the coreTheme object within this file.
 * Export this file and import it in the `@components/theme/index.tsx` file to use the merged theme.
 */

import { Noto_Sans_KR } from 'next/font/google'

// MUI Imports
import { deepmerge } from '@mui/utils'
import type { Theme } from '@mui/material/styles'

// Type Imports
import type { Settings } from '@core/contexts/settingsContext'
import type { SystemMode } from '@core/types'

// Core Theme Imports
import coreTheme from '@core/theme'

const noto = Noto_Sans_KR({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800', '900']
})

const mergedTheme = (settings: Settings, mode: SystemMode, direction: Theme['direction']) => {
  // Vars
  const userTheme = {
    typography: {
      fontFamily: noto.style.fontFamily
    },
    colorSchemes: {
      light: {
        palette: {
          primary: {
            light: '#4caf50',
            main: '#2e7d32',
            dark: '#1b5e20'
          }
        }
      },
      dark: {
        palette: {
          primary: {
            light: '#4caf50',
            main: '#2e7d32',
            dark: '#1b5e20'
          }
        }
      }
    }
  } as Theme

  return deepmerge(coreTheme(settings, mode, direction), userTheme)
}

export default mergedTheme
