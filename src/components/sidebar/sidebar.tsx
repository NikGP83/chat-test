import React, { useState } from 'react';
import SidebarItem from '../sidebar-item/sidebar-item';
import './sidebar.scss';
import { useGetSidebarDialogMsgDataQuery } from '../../api/chat/chat-services';
import { appUrls } from '../../const/const';
import MessageDesk from '../message-desk/message-desk';
import Input from '../input/input';

function Sidebar() {
  const [search, setSearch] = useState('');
  const { data } = useGetSidebarDialogMsgDataQuery(appUrls.dialog, {
    pollingInterval: 10000,
  });
  const [chatId, setChatId] = useState('0');
  const idHandler = (id: string) => {
    setChatId(id);
  };

  const searchName = () => {
    return 
  }
  if (typeof data === 'undefined') {
    return null;
  }
  return (
    <>
      <div className='sidebar'>
        <div className='sidebar-search-block'>
          <Input value={search} type='text' placeholder='search' onChange={(e) => setSearch(e.target.value)}/>
        </div>
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
