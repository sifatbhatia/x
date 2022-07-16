import React from "react";

import TitlePiece from "./components/TitlePiece";
import PostsBoardHeader from "./components/PostsBoardHeader";
import {PostsBoard} from "./components/PostsBoard";

import {PostContext} from "./contexts/posts";
import GlobalState from "./globalState";

function App({children}) {
const store = GlobalState();

  return (
    <div className="App">
      <TitlePiece titleText="Product Feedback"></TitlePiece>
      <PostContext.Provider value={store}>
        <PostsBoardHeader></PostsBoardHeader>
        <PostsBoard></PostsBoard>
        {children}
      </PostContext.Provider>
    </div>
  );
}

export default App;