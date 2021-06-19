import React from 'react';
import styles from './MyPosts.module.css';
import Post from './Post/Post';
import PostsForm from './MyPostsForm';
import { useSelector, useDispatch } from 'react-redux';
import { addPost } from '../../../redux/profileReducer';

const MyPosts = (props) => {

const posts = useSelector(state=>state.profile.postData)
console.log(posts)
const dispatch = useDispatch()
  let postsElements =
  posts.map(post => <Post message={post.message} likeCounts={post.likeCounts} key={post.id} />);

  return (
    <div className={styles.posts}>

      <div className={styles.textarea}>
        <PostsForm addPost = {value=>  dispatch(addPost(value))}/>
      </div>

      <h3>My Posts</h3>
      <div className={styles.item}>
        {postsElements}
      </div>

    </div>
  )
}
export default MyPosts;