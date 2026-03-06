import React from 'react'
import { RedBackground } from '../../atoms/RedBackground.jsx/RedBackground'
import { SignUpForm } from '../../molecules/SignUpForm/SignUpForm'

export const SignUp = () => {
    return (
    <div>
        <RedBackground color="#b55494" content={<SignUpForm/>} />
    </div>
    )
}
