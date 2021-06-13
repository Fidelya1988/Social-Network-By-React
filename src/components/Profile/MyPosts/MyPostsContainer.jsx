import React from 'react';
import { connect } from 'react-redux';
import { addPost } from './../../../redux/profileReducer'
import MyPosts from './MyPosts';


const mapStateToProps = (state) => {
  return {
    posts: state.profile.postData,
  
  }
}

const MyPostsContainer = connect(mapStateToProps,{addPost})(MyPosts)

export default MyPostsContainer;