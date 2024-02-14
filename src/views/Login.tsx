'use client'

// React Imports
import { useState } from 'react'

// Next Imports
import { useRouter } from 'next/navigation'

// MUI Imports
import Typography from '@mui/material/Typography'
import TextField from '@mui/material/TextField'
import IconButton from '@mui/material/IconButton'
import InputAdornment from '@mui/material/InputAdornment'
import Checkbox from '@mui/material/Checkbox'
import Button from '@mui/material/Button'
import FormControlLabel from '@mui/material/FormControlLabel'

// import Divider from '@mui/material/Divider'

// Third-party Imports
// import classnames from 'classnames'

// Type Imports
import type { Mode } from '@core/types'

// Component Imports
// import Logo from '@core/svg/Logo'

// import Illustrations from '@components/Illustrations'
import Link from '@components/Link'

// Config Imports
import themeConfig from '@configs/themeConfig'

// Hook Imports
// import { useImageVariant } from '@core/hooks/useImageVariant'
// import { useSettings } from '@core/hooks/useSettings'

const LoginV2 = ({ mode }: { mode: Mode }) => {
  // States
  const [isPasswordShown, setIsPasswordShown] = useState(false)

  // Vars
  // const darkImg = '/images/pages/auth-v2-mask-dark.png'
  // const lightImg = '/images/pages/auth-v2-mask-light.png'
  // const darkIllustration = '/images/illustrations/auth/v2-login-dark.png'
  // const lightIllustration = '/images/illustrations/auth/v2-login-light.png'
  // const borderedDarkIllustration = '/images/illustrations/auth/v2-login-dark-border.png'
  // const borderedLightIllustration = '/images/illustrations/auth/v2-login-light-border.png'

  // Hooks
  const router = useRouter()

  // const { settings } = useSettings()
  // const authBackground = useImageVariant(mode, lightImg, darkImg)

  // const characterIllustration = useImageVariant(
  //   mode,
  //   lightIllustration,
  //   darkIllustration,
  //   borderedLightIllustration,
  //   borderedDarkIllustration
  // )

  const handleClickShowPassword = () => setIsPasswordShown(show => !show)

  return (
    <div className='flex bs-full justify-center'>
      {/* <div
        className={classnames(
          'flex bs-full items-center justify-center flex-1 min-bs-[100dvh] relative p-6 max-md:hidden',
          {
            'border-ie': settings.skin === 'bordered'
          }
        )}
      >
        <div className='plb-12 pis-12'>
          <img
            src={characterIllustration}
            alt='character-illustration'
            className='max-bs-[500px] max-is-full bs-auto'
          />
        </div>
        <Illustrations
          image1={{ src: '/images/illustrations/objects/tree-2.png' }}
          image2={null}
          maskImg={{ src: authBackground }}
        />
      </div> */}
      <div className='flex justify-center items-center bs-full bg-backgroundPaper !min-is-full p-6 md:!min-is-[unset] md:p-12 md:is-[480px]'>
        <div className='absolute block-start-5 sm:block-start-[33px] inline-start-6 sm:inline-start-[38px]'>
          <div className='flex justify-center items-center gap-3 mbe-6'>
            <img
              src='/images/illustrations/auth/logo-no-background.png'
              alt='character-illustration'
              className='max-bs-[40px] max-is-full bs-auto'
            />
          </div>
        </div>
        <div className='flex flex-col gap-5 is-full sm:is-auto md:is-full sm:max-is-[400px] md:max-is-[unset]'>
          <div>
            <Typography variant='h4'>
              <strong>{`${themeConfig.templateName} 방문을 환영합니데이!👋🏻`}</strong>
            </Typography>
            <Typography className='mbs-1'>로그인을 해주세유~!</Typography>
          </div>
          <form
            noValidate
            autoComplete='off'
            onSubmit={e => {
              e.preventDefault()
              router.push('/')
            }}
            className='flex flex-col gap-5'
          >
            <TextField autoFocus fullWidth label='이메일이 필요해유~' />
            <TextField
              fullWidth
              label='비번도 필요하데유~'
              type={isPasswordShown ? 'text' : 'password'}
              InputProps={{
                endAdornment: (
                  <InputAdornment position='end'>
                    <IconButton edge='end' onClick={handleClickShowPassword} onMouseDown={e => e.preventDefault()}>
                      <i className={isPasswordShown ? 'ri-eye-off-line' : 'ri-eye-line'} />
                    </IconButton>
                  </InputAdornment>
                )
              }}
            />
            <div className='flex justify-between items-center flex-wrap gap-x-3 gap-y-1'>
              <FormControlLabel control={<Checkbox />} label='입력한거 기억해줄게유~' />
              <Typography className='text-end' color='primary' component={Link}>
                비밀번호 까먹었슈~?
              </Typography>
            </div>
            <Button fullWidth variant='contained' type='submit'>
              로그인
            </Button>
            <div className='flex justify-center items-center flex-wrap gap-2'>
              <Typography>처음왔슈~?</Typography>
              <Typography component={Link} color='primary'>
                계정 없으면 만들어유~!
              </Typography>
            </div>
            {/* <Divider className='gap-3'>or</Divider>
            <div className='flex justify-center items-center gap-2'>
              <IconButton className='text-facebook'>
                <i className='ri-facebook-fill' />
              </IconButton>
              <IconButton className='text-twitter'>
                <i className='ri-twitter-fill' />
              </IconButton>
              <IconButton className='text-github'>
                <i className='ri-github-fill' />
              </IconButton>
              <IconButton className='text-googlePlus'>
                <i className='ri-google-line' />
              </IconButton>
            </div> */}
          </form>
        </div>
      </div>
    </div>
  )
}

export default LoginV2
