import React from 'react'
import IconButton from '@mui/material/IconButton'
import DeleteIcon from '@mui/icons-material/Delete'
import CheckIcon from '@mui/icons-material/Check'

export default function TodoItem2(): JSX.Element {
  return (
    <div className="TodoItem">
      <div>TodoLItem2</div>{' '}
      <div>
        <IconButton color="secondary" aria-label="add an alarm">
          <CheckIcon />
        </IconButton>
        <IconButton aria-label="delete" disabled color="primary">
          <DeleteIcon />
        </IconButton>
      </div>
    </div>
  )
}
