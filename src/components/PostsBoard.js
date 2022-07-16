import React, {useContext} from "react";
import { PostContext } from "../contexts/posts";

import {Post, MyPost} from "./Post";

function PostsBoard() {
    const {feedbackData} = useContext(PostContext);

    return(
    <div> {
        feedbackData.map(feedback=>{
                if (feedback.likes===0) {
                    return <MyPost key={feedback.id} data={feedback} title={feedback.title} body={feedback.body}></MyPost>
                }
            return(<Post key={feedback.id} data={feedback} title={feedback.title} body={feedback.body}></Post>)
        })
    }
    </div>
    );
}

export {PostsBoard};