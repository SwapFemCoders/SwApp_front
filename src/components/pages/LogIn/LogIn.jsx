import React from 'react'
import { RedBackground } from '../../atoms/RedBackground/RedBackground'
import { LogInForm } from '../../organisms/LogInForm/LogInForm'

export const LogIn = () => {
    return (
        <div>
            <RedBackground color="#b55494" content={<LogInForm/>}/>
        </div>
    )
}
