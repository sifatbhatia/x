// Imports
import React, {useState, useContext} from "react";
import styled from "styled-components";

import { PostContext } from "../contexts/posts";

import {AiFillLike, AiOutlineEdit, AiFillDelete} from 'react-icons/ai'

// Component Logic
const Post = props => {

    const [feedbackData]=useState(props.data);
    const [feedbackTitle]=useState(props.data.title);
    const [feedbackPost]=useState(props.data.body);

    const [feedbackLikes, setFeedbackLikes]=useState(props.data.likes);
    
    const [likePress, setLikePress]=useState(0);

    //! Rename to isLikePressed !//
    const [likePressed, setLikePressed]=useState(false);
    
    //const [isLiked, setIsLiked] = useState(false);

    const addLike = () => {
        if (likePress===0) {
            const newLikes = feedbackLikes + 1;
            setFeedbackLikes(newLikes);
            setLikePressed(true)
            setLikePress(1)
        } else if (likePress===1) {
            const decreaseLike = feedbackLikes - 1;
            setFeedbackLikes(decreaseLike);
            setLikePressed(false);
            setLikePress(0);
        }
    };

    //! Consider 
    //const incrementLikeCounter = () =>{
    //    if(isLiked){
    //        setIsLiked(false)
    //        setFeedbackLikes(feedbackLikes+1);
    //    }
    //    else{

    //    }
    //};
    return(
        <PostContainer>
            <UpvoteWrapper>
                <Upvote like={likePressed.toString()} onClick={addLike}/>
                <UpvoteCounter key={props.id} data={feedbackData}>{feedbackLikes}</UpvoteCounter>
            </UpvoteWrapper>
            <PostTitle key={props.id} data={feedbackData}>{feedbackTitle}</PostTitle>
            <PostBody key={props.id} data={feedbackData}>{feedbackPost}</PostBody>
        </PostContainer>
    )
}

const MyPost = props => {
    const {editPostStatus} = useContext(PostContext);

    const [feedbackData]=useState(props.data);
    const [feedbackTitle]=useState(props.data.title);
    const [feedbackPost]=useState(props.data.body);
    const [feedbackLikes, setFeedbackLikes]=useState(props.data.likes);
    const [feedbackId]=useState(props.data.id);
    
    const [likePress, setLikePress]=useState(0);
    const [likePressed, setLikePressed]=useState(false);
    const addLike = () => {
        if (likePress===0) {
            const newLikes = feedbackLikes + 1;
            setFeedbackLikes(newLikes);
            setLikePressed(true);
            setLikePress(1);
        } else if (likePress===1) {
            const decreaseLike = feedbackLikes - 1;
            setFeedbackLikes(decreaseLike);
            setLikePressed(false);
            setLikePress(0);
        }
    };

    // styling
    const EditWrapper = styled.div`
    margin:2% 0 -2% 90%;
    `

    const Edit = styled(AiOutlineEdit)`
    &:hover{
        fill:orange;
        cursor:pointer;
    }
    `
    const DeleteWrapper = styled.div`
    margin:2% 0 -2% 3%;
    `
    
    const Delete = styled(AiFillDelete)`
    &:hover{
        fill:orange;
        cursor:pointer;
    }
    `
    return(
        <PostContainer>
        <UpvoteWrapper>
        <Upvote like={likePressed.toString()} onClick={addLike}/>
        <UpvoteCounter key={props.id} data={feedbackData}>{feedbackLikes}</UpvoteCounter>
        </UpvoteWrapper>
        <div style={styles.iconWrapper}>
            <EditWrapper>
                <Edit className="edit" onClick={(e)=>editPostStatus(e, feedbackId)}></Edit>
            </EditWrapper>
            <DeleteWrapper>
                <Delete></Delete>
            </DeleteWrapper>
        </div>
        <PostTitle key={props.id} data={feedbackData}>{feedbackTitle}</PostTitle>
        <PostBody key={props.id} data={feedbackData}>{feedbackPost}</PostBody>
        </PostContainer>
    )
}

// Global Styling
const styles = {
    iconWrapper:{
        "display":"flex"
    }
}

// Posts Styling
const PostContainer=styled.div`
background-color:#F8F7F8;
width:41.90%;
border-radius:.5em;
box-shadow:0 .1em .2em .02em rgba(0, 0, 0, 0.1);
padding:.5em .5em .5em 5em;
margin: .5em 0 1em 33%;
`

const PostTitle=styled.h3`
color:#58130A;
`

const PostBody=styled.p`
font-size:.85em;
`

// Upvote Styling
const UpvoteWrapper=styled.div`
margin:-1.5em 0 0 0;
> * {
    margin 0 0 -4em -3em;
}
`

const Upvote = styled(AiFillLike)`
fill:${props=> props.like===`false` ? `black`:`orange`};
&:hover {
    fill:${props=> props.like===`false` ? `orange`:`black`};
    cursor:pointer;
}
`

const UpvoteCounter=styled.span`
position:relative;
top:4em;
left:.75em;
`

export {Post, MyPost};