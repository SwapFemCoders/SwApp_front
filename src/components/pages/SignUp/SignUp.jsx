import { SquareBackground } from '../../atoms/SquareBackground/SquareBackground';
import { SignUpForm } from '../../organisms/SignUpForm/SignUpForm';

export const SignUp = () => {
    return (
    <div>
        <SquareBackground color="#b55494" content={<SignUpForm/>} />
    </div>
    )
}
