import {useState, useContext} from 'react'
import { Avatar, Button} from '@material-ui/core'
import '../css/TweetBox.css'
import firebase, {db} from '../firebase'
import {AuthContext} from './AuthService'
import { FiberSmartRecordRounded } from '@material-ui/icons'

const TweetBox = () => {
  const [tweetMessage, setTweetMessage] = useState("")
  const [tweetImage, setTweetImage] = useState("")

  const user = useContext(AuthContext)
 
  const sendTweet = e => {
    e.preventDefault()
    if(tweetMessage.trim().length === 0) {
      alert('メッセージを入力してください')
    } else {
      db.collection('posts').add({
        displayName: user.displayName,
        username: user.uid,
        verified: true,
        text: tweetMessage,
        image: tweetImage,
        avatar: "",
        createdAt: new Date()
      })
      setTweetMessage("")
      setTweetImage("")
    }
  }
  return (
    <div className='tweetBox'>
      <form>
        <div className='tweetBox__input'>
          <Avatar />
          <input value={tweetMessage} onChange={e => setTweetMessage(e.target.value)} placeholder="What's happening?" type="text"/>
        </div>
        <input value={tweetImage} onChange={e => setTweetImage(e.target.value)} className="tweetBox__imageInput" placeholder="Optional: Enter img URL" type="text"/>
        <Button type='submit' onClick={sendTweet} className="tweetBox__tweetButton">Tweet</Button>
      </form>
    </div>
  )
}

export default TweetBox