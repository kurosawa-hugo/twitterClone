import {useContext, useState} from 'react'
import '../css/Room.css'
import {AuthContext} from '../components/AuthService'
import Sidebar from '../components/Sidebar'
import Feed from '../components/Feed'
import Widgets from '../components/Widgets'

const Room = () => {
    const user = useContext(AuthContext)
    console.log(user)
    return (
          <div className='room'>
            <Sidebar />
            <Feed />
            <Widgets />
          </div>
        
    )
}

export default Room