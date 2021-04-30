import React from 'react';
import { connect } from 'react-redux';
import { addPostActionCreator, wrightPostActionCreator } from './../../../redux/profileReducer'
import MyPosts from './MyPosts';


const mapStateToProps = (state) => {
  return {
    posts: state.profile.postData,
    newPostText: state.profile.newPostText
  }
}

const mapDispatchToProps =(dispatch) => {
 return {
  addPost: () =>  dispatch(addPostActionCreator()),
  onChangeText: (text) => dispatch(wrightPostActionCreator(text))
 }
}

const MyPostsContainer = connect(mapStateToProps,mapDispatchToProps)(MyPosts)

export default MyPostsContainer;