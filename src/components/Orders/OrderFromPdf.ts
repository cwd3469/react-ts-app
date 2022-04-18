// playground requires you to assign document definition to a variable called dd
/* eslint-disable*/
// 폼이 정해지면 그때 type 설정 
import React from 'react'

const OrderFromPdf = (contents:undefined):any =>{
  const CalculateForm:any = {
    content:contents,
    styles: {
      header: {
        fontSize: 18,
        bold: true,
      },
      subheader: {
        fontSize: 15,
        bold: true,
      },
      quote: {
        italics: true,
      },
      small: {
        fontSize: 8,
      },
    },
  }

  return CalculateForm
}

export default OrderFromPdf


