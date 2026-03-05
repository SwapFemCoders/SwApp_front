import style from "./FlyingSwapp.module.css";

const FlyingSwapp = ({randomstyle}) => (
    <>
        <div style={randomstyle}>
            <img src="../src/assets/images/FlyingSwapp.png" alt="SWAPP word" className={style.swapp}>
            </img>
        </div>
    </>
)

export default FlyingSwapp;