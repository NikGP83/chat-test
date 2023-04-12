import React, { useState } from 'react';
import SidebarItem from '../sidebar-item/sidebar-item';
import './sidebar.scss';
import { useGetSidebarDialogMsgDataQuery } from '../../api/chat/chat-services';
import { appUrls } from '../../const/const';
import MessageDesk from '../message-desk/message-desk';

function Sidebar() {
  const { data } = useGetSidebarDialogMsgDataQuery(appUrls.dialog);
  const [chatId, setChatId] = useState('0');

  const idHandler = (id: string) => {
    setChatId(id);
  };
  if (typeof data === 'undefined') {
    return null;
  }
  return (
    <>
      <div className='sidebar'>
        <div className='chat-header'>All chats</div>
        <div>
          {data.map((dialog) => (
            <SidebarItem key={dialog.id} props={dialog} idHandler={idHandler} />
          ))}
        </div>
      </div>
      <MessageDesk chatId={chatId} />
    </>
  );
}

export default Sidebar;
