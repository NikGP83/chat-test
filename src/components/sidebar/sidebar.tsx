import React from 'react';
import SidebarItem from '../sidebar-item/sidebar-item';
import './sidebar.scss';
import { useGetSidebarDialogMsgDataQuery } from '../../api/chat/chat-services';
import { appUrls } from '../../const/const';

function Sidebar() {
  const { data } = useGetSidebarDialogMsgDataQuery(appUrls.dialog);

  if (typeof data === 'undefined') {
    return null;
  }
    return (
      <div className='sidebar'>
        <div className='chat-header'>All chats</div>
        <div>
          {data.map((dialog) => (
            <SidebarItem key={dialog.id} {...dialog} />
          ))}
        </div>
      </div>
    );
  
}

export default Sidebar;
