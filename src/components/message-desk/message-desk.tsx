import { useGetChatDataQuery } from '../../api/chat/chat-services';
import Header from '../chat-header/chat-header';
import Message from '../message/message';
import PostForm from '../post-form/post-form';
import './message-desk.scss';

interface MessageDeskProps {
  chatId: string;
}

function MessageDesk({ chatId }: MessageDeskProps) {
  const { data } = useGetChatDataQuery(chatId, {
    pollingInterval: 1000000,
  });
  console.log(chatId, data);
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
        <PostForm chatId={chatId} />
      </div>
    </>
  );
}

export default MessageDesk;
