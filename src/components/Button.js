import React, {useContext} from "react";
import styled from "styled-components";

import { PostContext } from "../contexts/posts";

//Initiate Add Post Form from Posts Header
const Button = ({btnText}) => {
    const {postingStatus} = useContext(PostContext);

    return (
        <AddButton onClick={postingStatus}>{btnText}</AddButton>
    )
}

//! Potentially Rename to 'AddPostsButton'? !//
//Adds Post to PostBoard
const PostButton = ({btnText, addPost}) =>{
    return(
        <PostButtonStyles type="submit" onClick={addPost}>{btnText}</PostButtonStyles>
    )
}

//Edits Post from PostsBoard
const EditPostButton = ({btnText, editPost}) =>{
    return(
        <PostButtonStyles type="submit" onClick={editPost}>{btnText}</PostButtonStyles>
    )
}

// Styling
const AddButton = styled.button`
background-color:white;
width:15%;
height:75%;
border:none;
border-radius:.5em;
padding:.5em;
&:hover{
    background-color:grey;
    cursor:pointer;
}
`

const PostButtonStyles = styled.button`
background-color:white;
width:15%;
height:2em;
border:none;
border-radius:.5em;
padding:.5em;
margin-right:-30em;
&:hover{
    background-color:#F5AF19;
    cursor:pointer;
}
`

export {Button, PostButton, EditPostButton};