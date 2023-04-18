import { useState } from 'react';
import { useGetChatDataQuery } from '../../api/chat/chat-services';
import Header from '../chat-header/chat-header';
import Message from '../message/message';
import PostForm from '../post-form/post-form';
import './message-desk.scss';

interface MessageDeskProps {
  chatId: string;
  getUserMessage: (msg: object) => void;
}

function MessageDesk({ chatId }: MessageDeskProps) {

  const [userMessages, setUserMessages] = useState()
  const { data } = useGetChatDataQuery(chatId, {
    pollingInterval: 1000000,
  });
  
  const getUserMessage = (msg: object): void => {
    setUserMessages([{...userMessages, msg}])
  } 

  if (typeof data === 'undefined') {
    return null;
  }
  const [userData] = data;

  return (
    <>
      <div className='message-desk-wrapper'>
        {userData && <Header chatHeaderTitle={userData?.user.name} />}
        <div className='message-desk'>
          {data.map((userMessage) => (
            <div
              key={userMessage.message}
              className={`message-item ${
                !userMessage.user.you && `incoming-message-position`
              }`}
            >
              <Message {...userMessage} />
            </div>
          ))}
        </div>
        {userData && <PostForm chatId={chatId} getUserMessage={getUserMessage}/>}
      </div>
    </>
  );
}

export default MessageDesk;
