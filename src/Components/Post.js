import React from "react";
import "../Stylesheets/Post.css";

import { Avatar } from "@material-ui/core";
import ThumbUpIcon from "@material-ui/icons/ThumbUp";
import ChatBubbleOutlineIcon from "@material-ui/icons/ChatBubbleOutline";
import NearMeIcon from "@material-ui/icons/NearMe";
import ExpandMoreOutlinedIcon from "@material-ui/icons/ExpandMoreOutlined";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";

const Post = () => {
  return (
    <div className='post'>
      <div className='post__top'>
        <Avatar src='' className='post__avatar' />
        <div className='post__topInfo'>
          <h3>username</h3>
          <p>date</p>
        </div>
      </div>
      <div className='post__bottom'>
        <p>message</p>
      </div>
      <div className='post__image'>
        <img
          src='https://images.unsplash.com/photo-1599028004313-2b39b6daba11?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=60'
          alt=''
        />
      </div>

      <div className='post__options'>
        <div className='post__option'>
          <ThumbUpIcon />
          <p>Like</p>
        </div>
        <div className='post__option'>
          <ChatBubbleOutlineIcon />
          <p>Commet</p>
        </div>
        <div className='post__option'>
          <NearMeIcon />
          <p>Share</p>
        </div>
        <div className='post__option'>
          <ExpandMoreOutlinedIcon />
          <AccountCircleIcon />
        </div>
      </div>
    </div>
  );
};

export default Post;