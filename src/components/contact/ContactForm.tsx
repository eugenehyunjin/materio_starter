'use client'

import { useState } from 'react'

import { Box, Button, MenuItem, TextField, Snackbar, Alert, Checkbox, FormControlLabel } from '@mui/material'

export default function ContactForm({ inquiryType }: { inquiryType: string }) {
  const [loading, setLoading] = useState(false)
  const [agreeTerms, setAgreeTerms] = useState(false)
  const [name, setName] = useState('')
  const [company, setCompany] = useState('')

  const [phone1, setPhone1] = useState('010')
  const [phone2, setPhone2] = useState('')
  const [phone3, setPhone3] = useState('')

  const [emailId, setEmailId] = useState('')
  const [emailDomain, setEmailDomain] = useState('gmail.com')
  const [customDomain, setCustomDomain] = useState('')

  const [content, setContent] = useState('')

  const phone = `${phone1}-${phone2}-${phone3}`

  // ✅ Snackbar 상태
  const [snack, setSnack] = useState<{
    open: boolean
    message: string
    severity: 'success' | 'error' | 'warning' | 'info'
  }>({
    open: false,
    message: '',
    severity: 'info'
  })

  const showSnack = (message: string, severity: 'success' | 'error' | 'warning' | 'info' = 'info') => {
    setSnack({
      open: true,
      message,
      severity
    })
  }

  const handleSubmit = async () => {
    // 이름
    if (!name.trim()) {
      showSnack('성함을 입력해주세요.', 'error')

      return
    }

    // 연락처
    if (!phone2.trim() || !phone3.trim()) {
      showSnack('연락처를 입력해주세요.', 'error')

      return
    }

    if (!/^\d{3,4}$/.test(phone2) || !/^\d{4}$/.test(phone3)) {
      showSnack('연락처를 정확하게 입력해주세요.', 'error')

      return
    }

    // 이메일
    if (!emailId.trim()) {
      showSnack('이메일을 입력해주세요.', 'error')

      return
    }

    // 약관 동의
    if (!agreeTerms) {
      showSnack('개인정보 수집 및 이용에 동의해 주세요.', 'error')

      return
    }

    if (emailDomain === 'custom' && !customDomain.trim()) {
      showSnack('이메일 도메인을 입력해주세요.', 'error')

      return
    }

    const finalEmail = emailDomain === 'custom' ? `${emailId}@${customDomain}` : `${emailId}@${emailDomain}`

    const emailRegex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/

    if (!emailRegex.test(finalEmail)) {
      showSnack('올바른 이메일 형식을 입력해주세요.', 'error')

      return
    }

    if (/[ㄱ-ㅎ|ㅏ-ㅣ|가-힣]/.test(emailId)) {
      showSnack('이메일에는 한글을 입력할 수 없습니다.', 'error')

      return
    }

    if (emailDomain === 'custom' && /[ㄱ-ㅎ|ㅏ-ㅣ|가-힣]/.test(customDomain)) {
      showSnack('이메일 도메인에는 한글을 입력할 수 없습니다.', 'error')

      return
    }

    // 문의내용
    if (!content.trim()) {
      showSnack('문의 내용을 입력해주세요.', 'error')

      return
    }

    try {
      setLoading(true)

      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          name,
          company,
          phone,
          email: finalEmail,
          inquiryType,
          content
        })
      })

      const result = await response.json()

      if (result.success) {
        showSnack('문의가 접수되었습니다.', 'success')

        setName('')
        setCompany('')
        setPhone1('010')
        setPhone2('')
        setPhone3('')
        setEmailId('')
        setEmailDomain('gmail.com')
        setCustomDomain('')
        setContent('')
      } else {
        showSnack(result.message || '처리 중 문제가 발생했습니다.', 'error')
      }
    } catch (error) {
      console.error(error)
      showSnack('문의 접수 중 오류가 발생했습니다.', 'error')
    } finally {
      setLoading(false)
    }
  }

  const textFieldSx = {
    '& .MuiOutlinedInput-root': {
      '& fieldset': {
        borderColor: '#ddd'
      },
      '&:hover fieldset': {
        borderColor: '#00A887'
      },
      '&.Mui-focused fieldset': {
        borderColor: '#00A887'
      }
    },
    '& label.Mui-focused': {
      color: '#00A887'
    }
  }

  return (
    <Box sx={{ mb: 2, pt: 1, textAlign: 'center' }}>
      <TextField
        fullWidth
        label={
          <span>
            성함을 입력해 주세요.<span style={{ color: 'red' }}>*</span>
          </span>
        }
        value={name}
        onChange={e => setName(e.target.value)}
        sx={{ mb: 3, ...textFieldSx }}
      />

      <TextField
        fullWidth
        label='회사명을 입력해 주세요.'
        value={company}
        onChange={e => setCompany(e.target.value)}
        sx={{ mb: 3, ...textFieldSx }}
      />

      <Box sx={{ display: 'flex', gap: 2, mb: 3 }}>
        <TextField select value={phone1} onChange={e => setPhone1(e.target.value)} sx={{ width: 120, ...textFieldSx }}>
          <MenuItem value='010'>010</MenuItem>
          <MenuItem value='011'>011</MenuItem>
          <MenuItem value='016'>016</MenuItem>
          <MenuItem value='017'>017</MenuItem>
          <MenuItem value='018'>018</MenuItem>
          <MenuItem value='019'>019</MenuItem>
          <MenuItem value='070'>070</MenuItem>
        </TextField>

        <TextField
          value={phone2}
          label={
            <span>
              전화번호 앞자리 <span style={{ color: 'red' }}>*</span>
            </span>
          }
          inputProps={{ maxLength: 4 }}
          onChange={e => setPhone2(e.target.value.replace(/[^0-9]/g, ''))}
          sx={{ flex: 1, ...textFieldSx }}
        />

        <TextField
          value={phone3}
          label={
            <span>
              전화번호 뒷자리<span style={{ color: 'red' }}>*</span>
            </span>
          }
          inputProps={{ maxLength: 4 }}
          onChange={e => setPhone3(e.target.value.replace(/[^0-9]/g, ''))}
          sx={{ flex: 1, ...textFieldSx }}
        />
      </Box>

      <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 3 }}>
        <TextField
          label={
            <span>
              이메일을 입력해 주세요. <span style={{ color: 'red' }}>*</span>
            </span>
          }
          placeholder='example(한글 입력 불가)'
          value={emailId}
          onChange={e => setEmailId(e.target.value.replace(/[^a-zA-Z0-9._%+-]/g, ''))}
          sx={{ flex: 1, ...textFieldSx }}
        />

        <Box sx={{ fontWeight: 500, fontSize: '25px' }}>@</Box>

        <TextField
          select
          value={emailDomain}
          onChange={e => setEmailDomain(e.target.value)}
          sx={{ width: 220, ...textFieldSx }}
        >
          <MenuItem value='gmail.com'>gmail.com</MenuItem>
          <MenuItem value='naver.com'>naver.com</MenuItem>
          <MenuItem value='daum.net'>daum.net</MenuItem>
          <MenuItem value='kakao.com'>kakao.com</MenuItem>
          <MenuItem value='hanmail.net'>hanmail.net</MenuItem>
          <MenuItem value='custom'>직접 입력</MenuItem>
        </TextField>
      </Box>

      {emailDomain === 'custom' && (
        <TextField
          fullWidth
          label={
            <span>
              도메인을 입력해 주세요. <span style={{ color: 'red' }}>*</span>
            </span>
          }
          placeholder='example.com'
          value={customDomain}
          onChange={e => setCustomDomain(e.target.value.replace(/[^a-zA-Z0-9.-]/g, ''))}
          sx={{ mb: 3, ...textFieldSx }}
        />
      )}

      <TextField fullWidth disabled value={inquiryType} sx={{ mb: 3 }} />

      <TextField
        multiline
        rows={6}
        fullWidth
        label={
          <span>
            문의사항을 입력해 주세요. <span style={{ color: 'red' }}>*</span>
          </span>
        }
        value={content}
        onChange={e => setContent(e.target.value)}
        sx={{ mb: 3, ...textFieldSx }}
      />
      <Box sx={{ mb: 3, textAlign: 'left' }}>
        <Box
          sx={{
            fontWeight: 700,
            mb: 1
          }}
        >
          [필수] 개인정보 수집 및 이용 동의 <span style={{ color: 'red' }}>*</span>
        </Box>

        <Box
          sx={{
            fontSize: 13,
            lineHeight: 1.6,
            p: 2,
            border: '1px solid #eee',
            borderRadius: 2,
            backgroundColor: '#fafafa',
            mb: 2
          }}
        >
          고객님의 문의사항 처리를 위해 아래와 같이 개인정보를 수집 및 이용합니다.
          <br />
          수집 항목: 이름, 회사명, 전화번호, 이메일
          <br />
          수집 목적: 문의사항 확인 및 응답 제공
          <br />
          보유 및 이용 기간: 목적 달성 후 즉시 파기
          <br />
          동의 거부 시 문의 접수가 제한될 수 있습니다.
        </Box>

        <FormControlLabel
          control={
            <Checkbox
              checked={agreeTerms}
              onChange={e => setAgreeTerms(e.target.checked)}
              sx={{
                color: '#00A887',
                '&.Mui-checked': {
                  color: '#00A887'
                }
              }}
            />
          }
          label='위 개인정보 수집 및 이용에 동의합니다.'
        />
      </Box>

      <Button
        variant='outlined'
        onClick={handleSubmit}
        disabled={loading || !agreeTerms}
        sx={{
          minWidth: 160,
          height: 52,
          borderRadius: '14px',
          borderColor: '#00A887',
          color: '#00A887',
          fontWeight: 700,
          fontSize: '20px',
          textTransform: 'none',
          '&:hover': {
            borderColor: '#00A887',
            backgroundColor: 'rgba(0,168,135,.05)'
          },
          '&.Mui-disabled': {
            borderColor: 'rgba(0,168,135,.3)',
            color: 'rgba(0,168,135,.3)'
          }
        }}
      >
        {loading ? '전송중...' : '문의하기'}
      </Button>

      {/* ✅ Snackbar UI */}
      <Snackbar
        open={snack.open}
        autoHideDuration={3000}
        onClose={() => setSnack(prev => ({ ...prev, open: false }))}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
      >
        <Alert severity={snack.severity} variant='filled' onClose={() => setSnack(prev => ({ ...prev, open: false }))}>
          {snack.message}
        </Alert>
      </Snackbar>
    </Box>
  )
}
