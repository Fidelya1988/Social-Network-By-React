import React from 'react';


import styles from './Post.module.css';

const Post = (props) => {
  return (
    <div className={styles.item}>
      <img src="https://i.imgur.com/EfHKEaW.jpg" alt="avatar" />
        {props.message}
        <div>
          <span>like {props.likeCounts}</span>
          </div>
        </div>
    

  )

}
export default Post;