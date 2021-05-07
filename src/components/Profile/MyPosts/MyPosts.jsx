import React from 'react';
import styles from './MyPosts.module.css';
import Post from './Post/Post';



 



const MyPosts = (props) => {



  

  let newPost = React.createRef();

  let addPost = () => {
    
    props.addPost();

  }

  let onChangeText = () => {
    let text = newPost.current.value;
    props.onChangeText(text);
  }
  let postsElements =
  props.posts.map(post => <Post message={post.message} likeCounts={post.likeCounts} key={post.id} />);

  return (
    <div className={styles.posts}>


      <div className={styles.textarea}>

        <textarea ref={newPost} name="post" id="1" cols="70" rows="5"
          value={props.newPostText}
          onChange={onChangeText}

        />
        <button onClick={addPost} className={styles.buttons}>Add post</button>
      </div>



      <h3>My Posts</h3>
      <div className={styles.item}>


        {postsElements}
      </div>

    </div>
  )
}
export default MyPosts;