import React from 'react';
import styles from './Friends.module.css';
import FriendsItem from './FriendsItem/FriendsItem';


 const Friends = (props) => {
 
   let friendsElements = 
   props.data.map(element => <FriendsItem name= {element.name} img={element.img} key= {element.id}/>)
    return (
   <div className={styles.friends}>
        <h1>Friends</h1>
        {friendsElements}
  
      </div>
    
  
  
   )

}
export default Friends;