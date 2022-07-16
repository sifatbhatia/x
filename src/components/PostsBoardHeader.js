import React, { useState, useContext } from "react";
import styled from "styled-components";

import {Button} from "./Button";
import {PostForm, EditPostForm} from "./Forms/PostForm";

import { PostContext } from "../contexts/posts";

function PostsBoardHeader() {
  const {setSort, styles} = useContext(PostContext);

  const [sortState, setSortState] = useState("Select sort");

  return (
    <div>
      <div style={styles.postDisplay}>
        <PostForm></PostForm>
      </div>
      <div style={styles.editPostDisplay}>
        <EditPostForm></EditPostForm>
      </div>
      <BoardHeader>
        <BoardHeaderTitle>Feedback Posts</BoardHeaderTitle>
        <PostSortLabel>Sort by:</PostSortLabel>
        <PostSort value={sortState} onChange={(e) => setSort(e.target.value)}>
          <option className="sortOption" onClick={(e) => setSortState(e.target.value)}>
            Select sort
          </option>
          <option className="sortOption" onClick={(e) => setSortState(e.target.value)}>
            Most likes
          </option>
          <option className="sortOption" onClick={(e) => setSortState(e.target.value)}>
            Least likes
          </option>
        </PostSort>
        <Button btnText="Add"></Button>
      </BoardHeader>
    </div>
  );
}

const BoardHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #58130a;
  width: 45%;
  border-radius: 0.5em;
  padding: 0.5em 1em 0.5em 1em;
  margin-left: 33%;
  margin-top: -8.75em;
`;

const BoardHeaderTitle = styled.p`
  color: white;
`;

const PostSortLabel = styled.label`
  color: #e0dfe0;
  margin-right: -12%;
`;

const PostSort = styled.select`
  color: white;
  font-size: 1em;
  font-weight: 700;
  background-color: #58130a;
  border: none;
  margin-right: 22%;
  &:hover {
    cursor: pointer;
  }
`;

export default PostsBoardHeader;