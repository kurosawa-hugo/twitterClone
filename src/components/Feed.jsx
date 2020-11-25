import {useState, useEffect} from 'react'
import '../css/Feed.css'
import TweetBox from './TweetBox'
import Post from './Post'
import {db } from '../firebase'
import FlipMove from 'react-flip-move'

const Feed = () => {
  const [posts, setPosts] = useState([])

  useEffect(() => {
   db.collection("posts").orderBy('createdAt', "desc").onSnapshot((querySnapshot) => {
     setPosts(
       querySnapshot.docs.map((doc) => {
         return{...doc.data(), id: doc.id}
       })
     )
   })
  },[])

  return (
    <div className='feed'>
      <div className='feed__header'>
        <h2>Home</h2>
      </div>
      <TweetBox />

      <FlipMove>
      {posts.map((post) => {
        return (
          <Post 
          key={post.id}
          displayName={post.displayName}
          username={post.username}
          verified={post.verified}
          text={post.text}
          avatar={post.avatar}
          image={post.image}
            />
          
        )
      }
      )}
      </FlipMove>
    </div>
  )
}

export default Feed