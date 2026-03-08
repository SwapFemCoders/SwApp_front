import style from "./DataProtection.module.css"

export const DataProtection = ({checked, onChange}) => {
    return (
        <div className={style.box}>
            <input type="checkbox" className={style.checkbox} required={true} checked={checked}
            onChange={onChange} />
            <p className={style.text}>Accept Data protection terms and conditions</p>
        </div>
    )
}