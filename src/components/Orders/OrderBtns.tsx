import React from 'react'
import * as pdfMake from 'pdfmake/build/pdfmake'
import * as pdfFonts from 'pdfmake/build/vfs_fonts'
import Button from '@mui/material/Button'
import Stack from '@mui/material/Stack'
import OrderFromPdf from './OrderFromPdf'

pdfMake.vfs = pdfFonts.pdfMake.vfs

function OrderBtns(): JSX.Element {
  const form = OrderFromPdf()
  return (
    <Stack direction="row" spacing={2}>
      <Button
        variant="outlined"
        onClick={() => {
          pdfMake.createPdf(form).download()
        }}
      >
        다운로드
      </Button>
      <Button
        variant="outlined"
        onClick={() => {
          pdfMake.createPdf(form).open()
        }}
      >
        오픈
      </Button>
      <Button
        variant="outlined"
        onClick={() => {
          pdfMake.createPdf(form).print()
        }}
      >
        프린트
      </Button>
    </Stack>
  )
}

export default OrderBtns
