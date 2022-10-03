import React from 'react'
import { CustomerReview } from '../CustomerReview/CustomerReview'
import { Updates } from '../Updates/Updates'
import './Right.css'
export const Right = () => {
  return (
    <div className='RightSide'>

    <div>
    <h3>Updates</h3>
    <Updates/>
    </div>
    <div>
    <h3>Customers Reviews</h3>
    <CustomerReview/>
    
    </div>
    </div>
  )
}
