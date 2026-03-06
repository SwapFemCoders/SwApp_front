import styles from "./avatar-user.module.css";

const AvatarUser=({src})=>{

 return(
  <img 
    className={styles.avatar}
    src={src}
    alt="user avatar"
  />
 )
}

export default AvatarUser;