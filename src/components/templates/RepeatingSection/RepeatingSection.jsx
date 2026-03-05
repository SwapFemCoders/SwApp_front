import FlyingSwapp from "../../atoms/FlyingSwapp/FlyingSwapp";
import style from "./RepeatingSection.module.css";

const RepeatingSection = ({ count = 400 }) => {
const getRandomStyle = () => ({
    width: `${Math.floor(Math.random() * 1200) + 80}px`,
    margin: `${Math.random() * 50 +10}px`,
    top: `${Math.random() * 100}%`,
    left: `${Math.random() * 100}%`,
});

const images = Array.from({ length: count }, (_, i) => (
    <FlyingSwapp key={i} randomstyle={getRandomStyle()} />
));

return (
    <div className={style.body}> 
        <div className={style.word}>
            {images}
        </div>
    </div>
)}

export default RepeatingSection;

