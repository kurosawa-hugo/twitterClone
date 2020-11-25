import {forwardRef, useState, useEffect} from 'react'
import "../css/Post.css"
import {Avatar, Button } from "@material-ui/core"
import {VerifiedUser, ChatBubble, Repeat, FavoriteBorder, Publish,} from "@material-ui/icons"


const Post = forwardRef(({
  displayName,
  username,
  verified,
  text, 
  image, 
  avatar,
  },ref) => {
  const [like, setLike] = useState(false)
  return (
    <div className="post" ref={ref}>
      <div className="post__avatar">
        <Avatar src={avatar}/>
      </div>
      <div className="post__body">
        <div className="post__header">
          <div className="post__headerText">
            <h3>
              {displayName}{" "}
              <span className="post__headerSpecial">
              {verified && <VerifiedUser className="post__badge" />} @{username}
              </span>
            </h3>
          </div>
            <div className="post__headerDescription">
              <p>{text}</p>
            </div>
        </div>
          <img src={image} alt=""/>
          <div className="post__footer">
            <ChatBubble fontSize="small"/>
              <Repeat fontSize="small"/>
               <Button startIcon={<FavoriteBorder fontSize="small"/>} type="button" onClick={() => {setLike(!like)}} color={like ? "secondary" : "default"} > 
              </Button>
              <Publish />
          </div>
      </div>
    </div>
  )
})

export default Post