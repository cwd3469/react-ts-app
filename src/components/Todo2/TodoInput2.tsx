import React from 'react'
import TextField from '@mui/material/TextField'

const ariaLabel = { 'aria-label': 'description' }

export default function TodoInput2(): JSX.Element {
  return (
    <div className="Todo">
      {' '}
      <TextField label="Size" id="filled-size-normal" variant="filled" />
    </div>
  )
}
