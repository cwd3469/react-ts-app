import React from 'react'

import Grid from '@mui/material/Grid'
import Paper from '@mui/material/Paper'
import Typography from '@mui/material/Typography'
import { PropsSx } from 'typeings/Main/index'
import Link from '@mui/material/Link'
import Chart from './MainChat'
import Chart2 from './MainChat2'
import Deposits from './MainDeposits'
import Orders from './MainOrders'

function Copyright(props: PropsSx): JSX.Element {
  const { sx } = props
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...sx}>
      {'Copyright © '}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}.
    </Typography>
  )
}

function MainBody(): JSX.Element {
  return (
    <div>
      {/* Container 가 메인 컨텐츠 */}
      <Grid container spacing={3}>
        {/* Chart */}
        <Grid item xs={12} md={8} lg={9}>
          <Paper
            sx={{
              p: 2,
              display: 'flex',
              flexDirection: 'column',
              height: 240,
            }}
          >
            <Chart />
          </Paper>
        </Grid>
        {/* Recent Deposits */}
        <Grid item xs={12} md={4} lg={3}>
          <Paper
            sx={{
              p: 2,
              display: 'flex',
              flexDirection: 'column',
              height: 240,
            }}
          >
            <Deposits />
          </Paper>
        </Grid>

        <Grid item xs={12}>
          <Paper sx={{ p: 2, display: 'flex', flexDirection: 'column' }}>
            <Chart2 />
          </Paper>
        </Grid>
        <Grid item xs={12}>
          <Paper sx={{ p: 2, display: 'flex', flexDirection: 'column' }}>
            <Orders />
          </Paper>
        </Grid>
      </Grid>
      <Copyright sx={{ pt: 4 }} />
    </div>
  )
}

export default MainBody
