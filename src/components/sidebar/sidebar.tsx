import React from 'react';
import SidebarItem from '../sidebar-item/sidebar-item';
import './sidebar.scss';
import { useGetSidebarDialogMsgDataQuery } from '../../api/chat/chat-services';
import { ChatMessage } from '../../types/types';

function Sidebar() {
  const { data } = useGetSidebarDialogMsgDataQuery('/dialog');
  console.log(data);

  if (typeof data !== 'undefined') {
    return (
      <div className='sidebar'>
        <div className='chat-header'>All chats</div>
        <div>
          {data.map((dialog) => (
            <SidebarItem {...dialog} />
          ))}
        </div>
      </div>
    );
  }
}

export default Sidebar;
