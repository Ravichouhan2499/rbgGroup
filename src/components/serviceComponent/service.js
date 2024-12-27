import React from 'react'
import RbgMutualFunds from '../rbgMutualfundsComponent/rbgMutual/rbgMutual'
import RbgMultiPurpose from '../rbgMutualfundsComponent/rbgMultiplePurpose/rbgMulti'
import RbgEducation from '../rbgMutualfundsComponent/rbgEducationHub/rbgEducation'
import RbgHerbs from '../rbgMutualfundsComponent/rbgHerbs/rgbHerbs'

export default function Service() {
  return (
    <div>
      <RbgMutualFunds/>
      <RbgMultiPurpose/>
      <RbgEducation/>
      <RbgHerbs/>
    </div>
  )
}
