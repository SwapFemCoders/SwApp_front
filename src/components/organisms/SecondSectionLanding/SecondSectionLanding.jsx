import React from 'react'
import { SquareBackground } from '../../atoms/SquareBackground/SquareBackground'
import { PresentationText } from '../../molecules/PresentationText/PresentationText'

export const SecondSectionLanding = () => {
    return (
    <div>
        <SquareBackground content={<PresentationText/>} />
    </div>
    )
}
