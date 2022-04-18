/* eslint-disable react/react-in-jsx-scope */
import React from 'react'
import { render } from '@testing-library/react'
import Sign from '../components/Sign/SignIn'

test('로그인 시 입력값을 안 넣었을때 알림 기능 확인', () => {
  const { getByAltText } = render(<Sign />)
})
