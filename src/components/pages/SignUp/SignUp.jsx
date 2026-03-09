import { RedBackground } from '../../atoms/RedBackground/RedBackground';
import { SignUpForm } from '../../organisms/SignUpForm/SignUpForm';

export const SignUp = () => {
    return (
    <div>
        <RedBackground color="#b55494" content={<SignUpForm/>} />
    </div>
    )
}
