import React from 'react';
import styles from './MyPosts.module.css';
import Post from './Post/Post';
import { Formik, Form, Field, ErrorMessage } from 'formik';

const PostsForm = (props) => {

  return (
    <Formik
      initialValues={
        { postField: '' }
      }
      validate={values => {
        const errors = {}
        if (!values.postField) errors.postField = 'Type something'

        return errors;
      }


      }
      onSubmit={values => props.addPost(values.postField)}
    >
      <Form>
        <Field as='textarea' name='postField' id='postField' placeholder='Type message...' />
        <div>
          <ErrorMessage name='postField' />
        </div>
        <button type='submit'>Add Post</button>
      </Form>
    </Formik>
  )
}





const MyPosts = (props) => {


  let postsElements =
    props.posts.map(post => <Post message={post.message} likeCounts={post.likeCounts} key={post.id} />);

  return (
    <div className={styles.posts}>

      <div className={styles.textarea}>
        <PostsForm addPost={props.addPost} />
      </div>

      <h3>My Posts</h3>
      <div className={styles.item}>
        {postsElements}
      </div>

    </div>
  )
}
export default MyPosts;