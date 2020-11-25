import SidebarOption from './SidebarOption'
import '../css/Sidebar.css'
import {Twitter, Home, Search, NotificationsNone, MailOutline, BookmarkBorder, ListAlt, PermIdentity, MoreHoriz} from '@material-ui/icons'
import {Button, } from '@material-ui/core'

const Sidebar = () => {
  return(
    <div className='sidebar'>
      <Twitter className='sidebar__twitterIcon'/>

      <SidebarOption active Icon={Home} text='Home'/>
      <SidebarOption Icon={Search} text='Explore'/>
      <SidebarOption Icon={NotificationsNone} text='Notifications'/>
      <SidebarOption Icon={MailOutline} text='Messages'/>
      <SidebarOption Icon={BookmarkBorder} text='Bookmarks'/>
      <SidebarOption Icon={ListAlt} text='List'/>
      <SidebarOption Icon={PermIdentity} text='Profile'/>
      <SidebarOption Icon={MoreHoriz} text='More'/>

      <Button variant='outlined' className='sidebar__tweet' fullWidth>Tweet</Button>
    </div>
  )
}

export default Sidebar