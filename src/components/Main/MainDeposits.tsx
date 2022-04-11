/* eslint-disable jsx-a11y/anchor-is-valid */
import * as React from 'react'
import Link from '@mui/material/Link'
import Typography from '@mui/material/Typography'
import request from 'utils/mock'
import Title from './Title'

function preventDefault(event: React.MouseEvent): void {
  event.preventDefault()
}

async function tsetasiox(): Promise<void> {
  const res = await request.get('/login')
  console.log(res)
}

export default function Deposits(): JSX.Element {
  return (
    <>
      <Title>Recent Deposits</Title>
      <Typography component="p" variant="h4">
        $3,024.00
      </Typography>
      <Typography color="text.secondary" sx={{ flex: 1 }}>
        on 15 March, 2019
      </Typography>
      <div>
        <Link color="primary" href="#" onClick={preventDefault}>
          View balance
        </Link>
        <Link color="primary" href="#" onClick={tsetasiox}>
          axios test
        </Link>
      </div>
    </>
  )
}
