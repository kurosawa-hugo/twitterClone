
import '../css/Widgets.css'
import {TwitterTimelineEmbed, TwitterShareButton, TwitterTweetEmbed} from "react-twitter-embed"
import {Search} from "@material-ui/icons"

const Widgets = () => {
  return (
    <div className='widgets'>
      <div className="widgets__input">
        <Search className="widgets__searchIcon"/>
        <input placeholder="Search Twitter" type="text"/>
      </div>

      <div className="widgets__widgetContainer">
      <h2>What's happning</h2>
      <TwitterTweetEmbed tweetId={"1322774095834968065"}/>

      <TwitterTimelineEmbed 
      sourceType="profile"
      screenName="naoyainoue_410"
      options={{height: 400 }}
      />
      </div>
    </div>
  )
}

export default Widgets