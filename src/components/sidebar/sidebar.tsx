import React, { useMemo, useState } from 'react';
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


  const filteredDialog = useMemo(() => {
    if (search && typeof data !== 'undefined') {
      return [...data].filter((el) =>
        el.user.name.toLowerCase().includes(search.toLocaleLowerCase())
      );
    } else {
      return data;
    }

  }, [search, data])
  
  if (typeof filteredDialog === 'undefined') {
    return null;
  }

  return (
    <>
      <div className='sidebar'>
        <div className='sidebar-search-block'>
          <Input
            value={search}
            type='text'
            placeholder='search'
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
        <div>
          {filteredDialog.map((dialog) => (
            <SidebarItem key={dialog.id} props={dialog} idHandler={idHandler} />
          ))}
        </div>
      </div>
      <MessageDesk chatId={chatId} />
    </>
  );
}

export default Sidebar;
