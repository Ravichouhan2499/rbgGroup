import React from 'react'
import About from '../../aboutComponent/about'
import RbgMutualFunds from '../../rbgMutualfundsComponent/rbgMutual/rbgMutual'
import RbgHerbs from '../../rbgMutualfundsComponent/rbgHerbs/rgbHerbs'
import RbgMultiPurpose from '../../rbgMutualfundsComponent/rbgMultiplePurpose/rbgMulti'
import RadientHieght from '../../rbgMutualfundsComponent/radient/radient'
import RbgEducation from '../../rbgMutualfundsComponent/rbgEducationHub/rbgEducation'

export default function HomePage() {
  return (
    <div>
       <About />
       <RbgMutualFunds/>
       <RbgHerbs/>
       <RbgMultiPurpose/>
       <RadientHieght/>
       <RbgEducation/>
    </div>
  )
}
