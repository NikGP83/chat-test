import React from 'react'
import SidebarItem from '../sidebar-item/sidebar-item';
import './sidebar.scss';

function Sidebar() {
  return (
    <div className='sidebar'>
        <div className='chat-header'>All chats</div>
        <div>
            <SidebarItem />
        </div>
    </div>
  )
}

export default Sidebar;