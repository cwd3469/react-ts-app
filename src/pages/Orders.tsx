import React from 'react'
import DashboardContent from 'components/Layout/DashboadLayout'
import OrderBtns from 'components/Orders/OrderBtns'
import OrderCounter from 'components/Orders/OrderCounter'

function Orders(): JSX.Element {
  return (
    <DashboardContent>
      <div>
        <OrderBtns />
        <OrderCounter />
      </div>
    </DashboardContent>
  )
}

export default Orders
