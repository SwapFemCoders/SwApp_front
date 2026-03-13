import styles from "./avatar-user.module.css";
import avatar from "../../../assets/images/avatar.png";


const AvatarUser=()=>{

  return(
  <img 
    className={styles.avatar}
    src={avatar}
    alt="user avatar"
  />
  )
}

export default AvatarUser;