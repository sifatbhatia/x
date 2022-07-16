// Imports
import React, { useRef, useContext} from "react";
import styled from "styled-components";
import { v4 as uuidv4 } from "uuid";

import {PostButton, EditPostButton} from "../Button";
import { RiCloseFill } from "react-icons/ri";

import { PostContext } from "../../contexts/posts";

// Global Variables
let newPost = null;

// Component Logic
const PostForm = () => {
  const {feedbackData, setFeedbackData, closePostForm, sort} = useContext(PostContext);

  const titleRef = useRef(null);
  const bodyRef=useRef(null);

  const addPost = (e) => {
    // Prevent Unintended Component Default Actions
    e.preventDefault();

    // Set values to user input
    const titleValue = titleRef.current.value;
    console.log(`Title Pre Edit:${titleValue}`);
    const bodyValue = bodyRef.current.value;
    console.log(`Body Pre Edit:${bodyValue}`);

    // Populate New Post with input
    newPost={
      id:uuidv4(),
      title:titleValue,
      body:bodyValue,
      likes:0
    }
    //if (titleValue===null || bodyValue===null) {
    //  
    //}
    if (sort === "Most likes") {
      setFeedbackData([...feedbackData, newPost]);
    } else{setFeedbackData([newPost, ...feedbackData])};

    // Close Out Form
    closePostForm(e);
  }

  return (
    <PostFormBackground>
      <PostFormContainer>
        <Close onClick={closePostForm}/>
        <PostFormTitle>Give Feedback</PostFormTitle>
        <PostFormTitleInput ref={titleRef} placeholder="Title"></PostFormTitleInput>
        <PostFormBody ref={bodyRef} placeholder="Feedback"></PostFormBody>
        <PostButton btnText="Post" addPost={addPost}></PostButton>
      </PostFormContainer>
    </PostFormBackground>
  );
}

const EditPostForm = () => {
  const {feedbackData, setFeedbackData, closePostForm, editPostId} = useContext(PostContext);

  const editTitleRef = useRef(null);
  const editBodyRef=useRef(null);
  const editPost = (e) => {
    // Prevent Unintended Component Default Actions
    e.preventDefault();

    // Set values to user input
    const editTitleValue = editTitleRef.current.value;
    const editBodyValue = editBodyRef.current.value;

    // Populate Existing Post with input
    const newDataMap = feedbackData.map(data=>{
      if (data.id===editPostId) {
        return {
          id:editPostId,
          title:editTitleValue,
          body:editBodyValue,
          likes:data.likes
        }
      }
      return data
    });

    // Log Changes to Post
    console.log(`Title Post Edit:${editTitleValue}`);
    console.log(`Body Post Edit:${editBodyValue}`);

    // Set any changes to individual post feedback
    setFeedbackData([...newDataMap]);
  }

  return (
    <PostFormBackground>
      <PostFormContainer>
        <Close onClick={closePostForm}/>
        <PostFormTitle>Edit Feedback</PostFormTitle>
        <EditPostFormTitleInput ref={editTitleRef} placeholder="Title"></EditPostFormTitleInput>
        <EditPostFormBody ref={editBodyRef} placeholder="Feedback"></EditPostFormBody>
        <EditPostButton btnText="Edit" editPost={editPost}></EditPostButton>
      </PostFormContainer>
    </PostFormBackground>
  );
}


// Styled Components
const PostFormBackground = styled.div`
  background-color: rgba(0,0,0,0.7);
  z-index:9999;
  width:100vw;
  height:750vw;
  position:absolute;
  top:0;
`;

const PostFormContainer = styled.form`
  background-color: #212121;
  width:35%;
  height:30em;
  display:flex;
  flex-direction:column;
  justify-content:center;
  align-items:center;
  border-radius:1em;
  padding:1em;
  box-shadow: 0 .02em .5em 0px #212121;
  margin:10em 0 0 37em;
`;

const PostFormTitle = styled.h1`
color:#EC7D10;
`;

const PostFormTitleInput = styled.input`
  border-radius: 0.5em;
  border:solid;
  border-color:#F5AF19;
  width:72%;
  margin-bottom:1em;
  padding:.5em;
  background-color:#212121;
  color:white;
  font-size:20px;
  font-weight: 700;
  outline:none;
`;

const PostFormBody = styled.textarea`
  border: none;
  border-radius: 0.5em;
  width:90%;
  height:50%;
  margin-bottom:2em;
  padding:1em;
  background-color:#212121;
  color:white;
  resize:none;
  outline:none;
`;

const EditPostFormTitleInput = styled.input`
  border-radius: 0.5em;
  border:solid;
  border-color:#F5AF19;
  width:72%;
  margin-bottom:1em;
  padding:.5em;
  background-color:#212121;
  color:white;
  font-size:20px;
  font-weight: 700;
  outline:none;
`;

const EditPostFormBody = styled.textarea`
  border: none;
  border-radius: 0.5em;
  width:90%;
  height:50%;
  margin-bottom:2em;
  padding:1em;
  background-color:#212121;
  color:white;
  resize:none;
  outline:none;
`;

const Close = styled(RiCloseFill)`
position:relative;
top:1em;
right:17.5em;
transform:scale(2);
fill:white;
&:hover{
  fill:#F5AF19;
  cursor:pointer;
}
`

export { PostForm, EditPostForm };