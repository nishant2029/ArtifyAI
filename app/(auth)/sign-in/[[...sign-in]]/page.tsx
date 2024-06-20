import { SignIn } from '@clerk/nextjs'
import React from 'react'

const SignInPage = () => {
  return (
    <div className='auth'>

      <SignIn  routing="hash" />
    </div>
  )
}

export default SignInPage