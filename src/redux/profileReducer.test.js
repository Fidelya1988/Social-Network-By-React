import profileReducer, { addPost, deletePost } from "./profileReducer";
import React from "react";
const state = {
  postData: [
    { id: 1, message: "Hey, how are you?", likeCounts: 20 },
    { id: 2, message: "Tell me about your dream", likeCounts: 50 },
  ],
};
const newState = profileReducer(state, action);
it("new post shoud be incremented", () => {
  const action = addPost("Hello!");

  expect(newState.postData.length).toBe(3);
  expect(newState.postData[2].message).toBe("Hello!");
});

it("if delete post postData length must be decremeneted", () => {
  const action = deletePost(1);

  expect(newState.postData.length).toBe(1);
});

it("PostData length must be not decremeneted, if id incorrect", () => {
  const action = deletePost(1000);

  expect(newState.postData.length).toBe(2);
});
