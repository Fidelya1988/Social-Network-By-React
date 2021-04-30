import React from 'react';
import styles from '../Friends.module.css';


 const FriendsItem = (props) => {
  //  let friendsElements = 
  //  state.friendsData.map(friendsElements =() => <FriendItem >)
    return (
  
     <div className={styles.item}>
      <img src={props.img} alt="friend"/>
        <div className={styles.friendName}>{props.name}</div>
     </div>
     
  
    
    
  
  
   )

}
export default FriendsItem;