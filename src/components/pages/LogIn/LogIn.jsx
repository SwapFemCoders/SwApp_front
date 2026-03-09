import { SquareBackground } from '../../atoms/SquareBackground/SquareBackground';
import { LogInForm } from '../../organisms/LogInForm/LogInForm';

export const LogIn = () => {
    return (
        <div>
            <SquareBackground color="#b55494" content={<LogInForm/>}/>
        </div>
    )
}
